const fs=require("fs");
const sel=JSON.parse(fs.readFileSync("_sel.json","utf8"));
const keys=fs.readFileSync("_keys_dump.txt","utf8").split(/\r?\n/).filter(Boolean);
const batch={}; let ok=0, bad=0;
Object.keys(sel).forEach(sub=>{
  const hits=keys.filter(k=>k.indexOf(sub)!==-1);
  if(hits.length===1){ batch[hits[0]]=sel[sub]; ok++; }
  else { bad++; console.log("["+(hits.length)+" hits] sub="+JSON.stringify(sub)+(hits.length>1?" -> "+JSON.stringify(hits.slice(0,3)):"")); }
});
fs.writeFileSync("_batch.json",JSON.stringify(batch,null,1));
console.log("resolved:",ok,"| problems:",bad,"| batch keys:",Object.keys(batch).length);
