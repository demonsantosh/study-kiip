const fs=require('fs'),path=require('path'),vm=require('vm');const {JSDOM}=require('jsdom');
const DIR=process.argv[2],LANG=process.argv[3]||'ne';
const files=['js/data.js','js/ui-i18n.js','js/translations.js','js/translations-gen.js','js/lessons-data.js','js/render-lesson.js','js/app.js'];
function run(key){
  const html=fs.readFileSync(path.join(DIR,'index.html'),'utf8').replace(/<script src="[^"]*"><\/script>/g,'');
  const dom=new JSDOM(html,{runScripts:'outside-only',pretendToBeVisual:true,url:'http://localhost/'});
  const {window}=dom;window.scrollTo=()=>{};window.localStorage.setItem('kiip_lang',LANG);
  const ctx=dom.getInternalVMContext();
  for(const f of files)vm.runInContext(fs.readFileSync(path.join(DIR,f),'utf8'),ctx,{filename:f});
  const DATA=window.KIIP_DATA;let hash=null;
  for(const l of DATA.levels)for(const c of l.chapters)if(c.id===key)hash='#lesson/'+l.id+'/'+c.id+'/lesson';
  if(!hash){window.close();return{skip:1};}
  window.location.hash=hash;window.dispatchEvent(new window.Event('hashchange'));
  const wrap=window.document.querySelector('#view .lesson-doc');
  if(!wrap){window.close();return{err:'no wrap'};}
  const bar=wrap.querySelector('.lesson-filter');
  const content=[...wrap.children].filter(k=>!k.classList.contains('lesson-filter')&&!k.classList.contains('click-tip'));
  const vis=()=>content.filter(k=>k.style.display!=='none').length;
  if(!bar){window.close();return{bar:0,blocks:content.length};}
  const sel=bar.querySelector('.lf-select'),clear=bar.querySelector('.lf-clear');
  const initAll=vis()===content.length, clearHidden=clear.style.display==='none';
  const sectOpts=[...sel.options].filter(o=>o.value.startsWith('sect:'));
  const pageOpts=[...sel.options].filter(o=>o.value.startsWith('page:'));
  let bad=0,sumSect=0;
  for(const o of sectOpts){sel.value=o.value;sel.dispatchEvent(new window.Event('change'));const v=vis();if(v===0||v>=content.length)bad++;}
  // clear
  clear.dispatchEvent(new window.Event('click'));
  const restored=vis()===content.length && sel.value==='';
  window.close();
  return{opts:sel.options.length,sect:sectOpts.length,page:pageOpts.length,initAll,clearHidden,badSelections:bad,restored,blocks:content.length};
}
const keys=(()=>{global.window={};require(path.join(DIR,'js/lessons-data.js'));const k=Object.keys(window.LESSON_META);delete global.window;return k;})();
let fails=0;
for(const key of keys){const r=run(key);if(r.skip)continue;
  const problem = r.err || (r.bar===0?null:(!r.initAll||!r.restored||r.badSelections>0||!r.clearHidden));
  if(r.err){console.log('ERR',key,r.err);fails++;continue;}
  if(r.bar===0){console.log('noBar',key,'(blocks '+r.blocks+')');continue;}
  if(problem){console.log('FAIL',key,JSON.stringify(r));fails++;}
  else console.log('ok  ',key,'opts='+r.opts,'sect='+r.sect,'page='+r.page);
}
console.log(LANG+': fails='+fails);
