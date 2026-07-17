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
const bar=wrap.querySelector('.lesson-filter');
if(!bar){console.log(KEY,LANG,'NO FILTER BAR');process.exit(0);}
const sel=bar.querySelector('.lf-select');const clear=bar.querySelector('.lf-clear');
const opts=[...sel.options].map(o=>({v:o.value,t:o.textContent}));
const content=[...wrap.children].filter(k=>!k.classList.contains('lesson-filter')&&!k.classList.contains('click-tip'));
const visible=()=>content.filter(k=>k.style.display!=='none').length;
console.log('== '+KEY+' ['+LANG+'] options='+opts.length+' totalBlocks='+content.length+' clearHiddenInitially='+(clear.style.display==='none'));
// pick a section option and a page option
const sectOpt=opts.find(o=>o.v.startsWith('sect:'));
const pageOpt=opts.find(o=>o.v.startsWith('page:'));
function choose(v){sel.value=v;sel.dispatchEvent(new window.Event('change'));}
if(sectOpt){choose(sectOpt.v);console.log('  after section "'+sectOpt.t+'": visible='+visible()+' clearShown='+(clear.style.display!=='none'));}
if(pageOpt){choose(pageOpt.v);console.log('  after page   "'+pageOpt.t+'": visible='+visible());}
// clear
clear.dispatchEvent(new window.Event('click'));
console.log('  after clear: visible='+visible()+'/'+content.length+' (all shown='+(visible()===content.length)+') selReset='+(sel.value===''));
