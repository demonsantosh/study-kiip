const fs=require('fs'),path=require('path'),vm=require('vm');const {JSDOM}=require('jsdom');
const DIR=process.argv[2];const LANG=process.argv[3]||'vi';
const files=['js/data.js','js/ui-i18n.js','js/translations.js','js/lessons-data.js','js/render-lesson.js','js/app.js'];
function run(lang,key){
  const html=fs.readFileSync(path.join(DIR,'index.html'),'utf8').replace(/<script src="[^"]*"><\/script>/g,'');
  const dom=new JSDOM(html,{runScripts:'outside-only',pretendToBeVisual:true,url:'http://localhost/'});
  const {window}=dom;window.scrollTo=()=>{};window.localStorage.setItem('kiip_lang',lang);
  const ctx=dom.getInternalVMContext();
  for(const f of files){try{vm.runInContext(fs.readFileSync(path.join(DIR,f),'utf8'),ctx,{filename:f});}catch(e){window.close();return{err:'load '+f+': '+e.message};}}
  const DATA=window.KIIP_DATA;let hash=null;
  for(const l of DATA.levels)for(const c of l.chapters)if(c.id===key)hash='#lesson/'+l.id+'/'+c.id+'/lesson';
  if(!hash){window.close();return{skip:1};}
  window.location.hash=hash;window.dispatchEvent(new window.Event('hashchange'));
  const doc=window.document.querySelector('#view .lesson-doc');
  if(!doc){window.close();return{nodoc:1};}
  const NEP=/[ऀ-ॿ]/,NP=/🇳🇵/;let f=0,d=0,em=0;
  doc.querySelectorAll('p,div,li,h1,h2,h3,h4,h5,span').forEach(e=>{
    if(e.querySelector('*'))return;const tx=e.textContent||'';
    if(NP.test(tx))f++;if(NEP.test(tx))d++;
    const st=tx.replace(/[\u{1F1E6}-\u{1F1FF}️‍\s]/gu,'').replace(/^[\s?!:.,;·°%\-–—()]+$/u,'');
    if(st===''&&tx.trim()!=='')em++;
  });
  const hasKo=/[가-힣]/.test(doc.textContent||'');const chars=(doc.textContent||'').length;
  window.close();return{f,d,em,chars,hasKo};
}
const keys=(()=>{global.window={};require(path.join(DIR,'js/lessons-data.js'));const k=Object.keys(window.LESSON_META);delete global.window;return k;})();
let fails=0,tested=0;
for(const key of keys){const r=run(LANG,key);if(r.skip)continue;tested++;
  if(r.err){console.log('ERR',LANG,key,r.err);fails++;continue;}
  if(r.nodoc){console.log('NODOC',LANG,key);fails++;continue;}
  if(r.f||r.d||r.em||!r.hasKo){console.log('FAIL',LANG,key,JSON.stringify(r));fails++;}
}
console.log(LANG+': tested='+tested+' fails='+fails);
