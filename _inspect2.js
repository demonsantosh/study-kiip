const fs=require('fs'),path=require('path'),vm=require('vm');const {JSDOM}=require('jsdom');
const DIR=process.argv[2],LANG=process.argv[3],KEY=process.argv[4];
const files=['js/data.js','js/ui-i18n.js','js/translations.js','js/translations-gen.js','js/lessons-data.js','js/render-lesson.js','js/app.js'];
const html=fs.readFileSync(path.join(DIR,'index.html'),'utf8').replace(/<script src="[^"]*"><\/script>/g,'');
const dom=new JSDOM(html,{runScripts:'outside-only',pretendToBeVisual:true,url:'http://localhost/'});
const {window}=dom;window.scrollTo=()=>{};window.localStorage.setItem('kiip_lang',LANG);
const ctx=dom.getInternalVMContext();
for(const f of files)vm.runInContext(fs.readFileSync(path.join(DIR,f),'utf8'),ctx,{filename:f});
const DATA=window.KIIP_DATA;let hash=null;
for(const l of DATA.levels)for(const c of l.chapters)if(c.id===KEY)hash='#lesson/'+l.id+'/'+c.id+'/lesson';
window.location.hash=hash;window.dispatchEvent(new window.Event('hashchange'));
const doc=window.document.querySelector('#view .lesson-doc');
let n=0;doc.querySelectorAll('p,div,li,h1,h2,h3,h4,h5,span').forEach(e=>{
  if(e.querySelector('*')||n>=12)return;const tx=e.textContent||'';
  if(/[ऀ-ॿ]/.test(tx)){console.log('DEV ['+e.className+']: '+JSON.stringify(tx.slice(0,90)));n++;}
});
