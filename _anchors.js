const fs=require('fs'),path=require('path'),vm=require('vm');const {JSDOM}=require('jsdom');
const DIR=process.argv[2],KEY=process.argv[3],LANG=process.argv[4]||'ne';
const files=['js/data.js','js/ui-i18n.js','js/translations.js','js/translations-gen.js','js/lessons-data.js','js/render-lesson.js','js/app.js'];
const html=fs.readFileSync(path.join(DIR,'index.html'),'utf8').replace(/<script src="[^"]*"><\/script>/g,'');
const dom=new JSDOM(html,{runScripts:'outside-only',pretendToBeVisual:true,url:'http://localhost/'});
const {window}=dom;window.scrollTo=()=>{};window.localStorage.setItem('kiip_lang',LANG);
const ctx=dom.getInternalVMContext();
for(const f of files)vm.runInContext(fs.readFileSync(path.join(DIR,f),'utf8'),ctx,{filename:f});
const DATA=window.KIIP_DATA;let hash=null;
for(const l of DATA.levels)for(const c of l.chapters)if(c.id===KEY)hash='#lesson/'+l.id+'/'+c.id+'/lesson';
window.location.hash=hash;window.dispatchEvent(new window.Event('hashchange'));
const wrap=window.document.querySelector('#view .lesson-doc');
const SECT=/^(?:[^\p{L}\d]*\s*)(어휘|문법|활동|문화와\s*정보|문화|읽기|쓰기|말하기|듣기|발음|복습|배운 어휘)/u;
const kids=[...wrap.children];let anchors=[];
kids.forEach(k=>{
  const cls=k.className||'';const tx=(k.textContent||'').replace(/\s+/g,' ').trim();
  const isH=/\blh\b/.test(cls)||/^H[1-6]$/.test(k.tagName);
  const isPage=/lh-page/.test(cls)||/^(?:📖\s*)?Page\s*\d/i.test(tx);
  if(isPage){anchors.push('📖 '+tx.replace(/^📖\s*/,''));return;}
  if(isH&&SECT.test(tx)){anchors.push(tx.slice(0,42));}
});
console.log(KEY,'anchors('+anchors.length+'):');
anchors.forEach(a=>console.log('   '+a));
