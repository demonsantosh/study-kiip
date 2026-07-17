const fs=require('fs'),path=require('path'),vm=require('vm');const {JSDOM}=require('jsdom');
const DIR=process.argv[2],LANG='vi',KEY='k3-ch1';
const files=['js/data.js','js/ui-i18n.js','js/translations.js','js/lessons-data.js','js/render-lesson.js','js/app.js'];
const html=fs.readFileSync(path.join(DIR,'index.html'),'utf8').replace(/<script src="[^"]*"><\/script>/g,'');
const dom=new JSDOM(html,{runScripts:'outside-only',pretendToBeVisual:true,url:'http://localhost/'});
const {window}=dom;window.scrollTo=()=>{};window.localStorage.setItem('kiip_lang',LANG);
const ctx=dom.getInternalVMContext();
for(const f of files)vm.runInContext(fs.readFileSync(path.join(DIR,f),'utf8'),ctx,{filename:f});
const DATA=window.KIIP_DATA;let hash=null;
for(const l of DATA.levels)for(const c of l.chapters)if(c.id===KEY)hash='#lesson/'+l.id+'/'+c.id+'/lesson';
window.location.hash=hash;window.dispatchEvent(new window.Event('hashchange'));
const doc=window.document.querySelector('#view .lesson-doc');
doc.querySelectorAll('.l-trans').forEach(e=>{
  if((e.textContent||'').trim()==='—'){
    const prev=e.previousElementSibling;
    console.log('DASH l-trans; prev['+(prev&&prev.className)+']='+JSON.stringify(prev&&prev.textContent.slice(0,60)));
  }
});
