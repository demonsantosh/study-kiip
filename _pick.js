global.window={};
require("./js/data.js"); require("./js/translations.js"); require("./js/translations-gen.js"); require("./js/lessons-data.js");
const LANGS=["ne","bn","ru","he","ms","vi","id","si","pt","fr","ta"];
const data=window.I18N.data||{};
const missAny=(k)=>{const d=data[k]||{};return LANGS.some(l=> !d[l]);};
// reuse extraction like nextwords but simplified: read all sentence keys already computed by requiring nextwords logic
const cp=require('child_process');
const out=cp.execSync('node nextwords.js 5000 0',{maxBuffer:1e8}).toString().split(/\r?\n/);
let i=0;
for(const line of out){
  const m=line.match(/^(.*?) :: (.*?) :: NEED\[/);
  if(!m) continue;
  const ko=m[1];
  // clean filter: no latin/cyrillic/hebrew, no stray ascii digits adjacent to hangul, no replacement chars, balanced-ish
  if(/[A-Za-zЀ-ӿ֐-׿]/.test(ko)) continue;
  if(/[0-9]/.test(ko)) continue;              // drop any with digits (page nums, OCR strays)
  if(/[|\[\]<>]/.test(ko)) continue;
  if(/[�]/.test(ko)) continue;
  if(/[①-⑳✕○✓]/.test(ko)) continue;
  const kr=(ko.match(/[가-힣]/g)||[]).length;
  if(kr < 6) continue;                         // skip tiny fragments
  if(kr/ko.replace(/\s/g,'').length < 0.7) continue;
  console.log((i++)+"\t"+ko);
}
