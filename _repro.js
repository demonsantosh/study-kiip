const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');
const DIR = process.argv[2];
const LANG = process.argv[3] || 'vi';
const LESSONKEY = process.argv[4] || 'k4-ch1'; // meta key
const files = ['js/data.js','js/ui-i18n.js','js/translations.js','js/lessons-data.js','js/render-lesson.js','js/app.js'];

const html = fs.readFileSync(path.join(DIR,'index.html'),'utf8')
  .replace(/<script src="[^"]*"><\/script>/g,''); // strip script tags; we inject manually

const dom = new JSDOM(html, { runScripts: 'outside-only', pretendToBeVisual: true, url: 'http://localhost/' });
const { window } = dom;
// minimal localStorage
try{window.localStorage.setItem("x","1")}catch(e){}
window.localStorage.setItem("kiip_lang", LANG);
window.scrollTo = ()=>{};
window.matchMedia = window.matchMedia || (()=>({matches:false,addListener(){},removeListener(){},addEventListener(){},removeEventListener(){}}));

// eval each script in window context
const vm = require('vm');
const ctx = dom.getInternalVMContext();
for (const f of files){
  const code = fs.readFileSync(path.join(DIR,f),'utf8');
  try { vm.runInContext(code, ctx, {filename:f}); }
  catch(e){ console.error('ERR loading',f, e.message); }
}

// map meta key -> hash. levels have chapters with c.id === meta key
const DATA = window.KIIP_DATA;
let hash=null;
for(const l of DATA.levels){ for(const c of l.chapters){ if(c.id===LESSONKEY){ hash='#lesson/'+l.id+'/'+c.id+'/lesson'; } } }
if(!hash){ console.error('no chapter for',LESSONKEY); process.exit(2); }
window.location.hash = hash;
window.dispatchEvent(new window.Event('hashchange'));

// inspect the lesson doc
const view = window.document.getElementById('view');
const doc = view.querySelector('.lesson-doc');
if(!doc){ console.log('NO .lesson-doc rendered; view text len=',(view.textContent||'').trim().length); process.exit(0);}
const NEP = /[ऀ-ॿ]/;
const NPFLAG = /🇳🇵/; // 🇳🇵
let leftoverFlags=0, nepRuns=0, emptyLeaf=0;
doc.querySelectorAll('p,div,li,h1,h2,h3,h4,h5,span').forEach(e=>{
  if(e.querySelector('*')) return;
  const tx=(e.textContent||'');
  if(NPFLAG.test(tx)) leftoverFlags++;
  if(NEP.test(tx)) nepRuns++;
  const stripped = tx.replace(/[\u{1F1E6}-\u{1F1FF}️‍\s]/gu,'');
  if(stripped==='' && tx.trim()!=='' ) { emptyLeaf++; }
});
// also flag-only leaves (bare flag, no text)
console.log(JSON.stringify({lang:LANG, key:LESSONKEY, docChars:(doc.textContent||'').length, leftoverNepaliFlagLines:leftoverFlags, leftoverNepaliDevanagariLines:nepRuns, bareFlagOrEmptyLeaves:emptyLeaf},null,0));
// print samples of offending lines
let shown=0;
doc.querySelectorAll('p,div,li,h1,h2,h3,h4,h5,span').forEach(e=>{
  if(e.querySelector('*')||shown>=8) return;
  const tx=(e.textContent||'');
  const stripped = tx.replace(/[\u{1F1E6}-\u{1F1FF}️‍\s]/gu,'');
  if(NPFLAG.test(tx) || NEP.test(tx) || (stripped==='' && tx.trim()!=='')){
    console.log('  OFFENDER ['+e.className+']: '+JSON.stringify(tx.slice(0,80)));
    shown++;
  }
});
