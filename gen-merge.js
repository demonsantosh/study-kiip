// Usage:
//   node gen-merge.js <batch.json>   merge a batch {ko:{bn,ru,he,ms,vi,id,si,ne}} into the store
//   node gen-merge.js                just rebuild translations-gen.js from the store
const fs=require("fs");
const STORE="js/translations-gen.json";
const OUT="js/translations-gen.js";
const LANGS=["ne","bn","ru","he","ms","vi","id","si","pt","fr","ta"];
let store=JSON.parse(fs.readFileSync(STORE,"utf8"));
const batchFile=process.argv[2];
if(batchFile){
  const batch=JSON.parse(fs.readFileSync(batchFile,"utf8"));
  let added=0, words=0;
  Object.keys(batch).forEach(ko=>{
    const dst=store[ko]||(store[ko]={}); words++;
    LANGS.forEach(l=>{ const val=batch[ko][l]; if(val && String(val).trim() && !dst[l]){ dst[l]=String(val).trim(); added++; } });
  });
  fs.writeFileSync(STORE, JSON.stringify(store,null,0));
  console.log("merged batch:", words, "words,", added, "new translations");
}
// regenerate JS
const js="/* AUTO-GENERATED offline word translations (by Claude). Do not hand-edit; edit via gen-merge.js. */\n"+
  "window.I18N_GEN = "+JSON.stringify(store)+";\n"+
  "(function(){ if(!window.I18N) return; var D=window.I18N.data=window.I18N.data||{}, G=window.I18N_GEN||{};\n"+
  "  Object.keys(G).forEach(function(ko){ var dst=D[ko]||(D[ko]={}), src=G[ko];\n"+
  "    Object.keys(src).forEach(function(l){ if(src[l] && !dst[l]) dst[l]=src[l]; }); }); })();\n";
fs.writeFileSync(OUT, js);
// coverage report
const langs=["bn","ru","he","ms","vi","id","si","ne","pt","fr","ta"];
const cov={}; langs.forEach(l=>cov[l]=0);
Object.keys(store).forEach(ko=>langs.forEach(l=>{ if(store[ko][l]) cov[l]++; }));
console.log("store words:", Object.keys(store).length, "| coverage:", JSON.stringify(cov));
