const fs=require("fs");
const lines=fs.readFileSync("_list_full.txt","utf8").split(/\r?\n/);
const tr=JSON.parse(fs.readFileSync("_tr_by_anchor.json","utf8"));
const LANGS=["ne","bn","ru","he","ms","vi","id","si","pt","fr","ta"];
// build [{ko,miss}] from list (skip header)
const items=[];
for(const ln of lines){
  if(!ln || ln.startsWith("missing-any:")) continue;
  const m=ln.match(/ :: NEED\[([^\]]*)\]\s*$/);
  if(!m) continue;
  const ko=ln.split(" :: ")[0];
  const miss=m[1].split(",").map(s=>s.trim()).filter(Boolean);
  items.push({ko,miss});
}
const batch={};
let ok=0, warn=0;
for(const anchor of Object.keys(tr)){
  const hit=items.find(it=>it.ko.indexOf(anchor)!==-1);
  if(!hit){ console.error("NO MATCH:",anchor); warn++; continue; }
  const obj={};
  for(const l of hit.miss){ if(tr[anchor][l]) obj[l]=tr[anchor][l]; }
  if(Object.keys(obj).length===0){ console.error("no needed langs left for:",anchor); warn++; continue; }
  batch[hit.ko]=obj; ok++;
}
fs.writeFileSync("_batch.json", JSON.stringify(batch,null,1));
console.log("built batch items:",ok,"warnings:",warn);
