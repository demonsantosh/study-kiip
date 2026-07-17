const fs=require('fs');
const keys=fs.readFileSync('_keys_all.txt','utf8').split(/\r?\n/).filter(Boolean);
const sel=JSON.parse(fs.readFileSync('_sel.json','utf8'));
const out={}; let matched=0; const missed=[];
Object.keys(sel).forEach(sub=>{
  let k=keys.find(x=>x===sub) || keys.find(x=>x.includes(sub));
  if(!k){ missed.push(sub); return; }
  if(out[k]){ return; }
  out[k]=sel[sub]; matched++;
});
fs.writeFileSync('_batch.json', JSON.stringify(out,null,1));
console.log('matched', matched, 'of', Object.keys(sel).length);
if(missed.length) console.log('MISSED:', JSON.stringify(missed));
