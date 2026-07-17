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

const SECTMAP=[['문화와 정보','문화와 정보 · Culture'],['문화','문화와 정보 · Culture'],['어휘','어휘 · Vocabulary'],['문법','문법 · Grammar'],['활동','활동 · Activities'],['읽기','읽기 · Reading'],['쓰기','쓰기 · Writing'],['말하기','말하기 · Speaking'],['듣기','듣기 · Listening'],['발음','발음 · Pronunciation'],['복습','복습 · Review'],['배운 어휘','복습 · Review']];
function canonSect(tx){for(const [k,label] of SECTMAP){if(new RegExp('^(?:[^\\p{L}\\d]*\\s*)'+k,'u').test(tx))return label;}return null;}
function pageNo(tx){const m=tx.match(/^(?:📖\s*)?(?:Page|Chapter)\s*(\d+)/i);return m?m[1]:null;}

const kids=[...wrap.children];
let curSect=null,curPage=null;const sects=[],pages=[];
kids.forEach(k=>{
  const cls=k.className||'';const tx=(k.textContent||'').replace(/\s+/g,' ').trim();
  const isHeading=/\blh\b/.test(cls); // render-lesson headings only
  if(!isHeading)return;
  const pg=/lh-page/.test(cls)?pageNo(tx):null;
  if(pg){curPage=pg;if(!pages.includes(pg))pages.push(pg);return;}
  const cs=canonSect(tx);
  if(cs){curSect=cs;if(!sects.includes(cs))sects.push(cs);}
});
console.log(KEY,LANG,'| sections('+sects.length+'):',sects.join('  |  '));
console.log('   pages('+pages.length+'):',pages.join(', '));
