global.window={};
require("./js/data.js"); require("./js/translations.js"); require("./js/translations-gen.js"); require("./js/lessons-data.js");
const LANGS=["ne","bn","ru","he","ms","vi","id","si","pt","fr","ta"];
const data=window.I18N.data||{};
const srcNe=new Set();
const hasNe=(k)=>!!(data[k]&&data[k].ne)||srcNe.has(k);
const missAny=(k)=>{const d=data[k]||{};return LANGS.some(l=> l==="ne" ? !hasNe(k) : !d[l]);};
const bareKo=(s)=>String(s)
  .replace(/\*\*/g,"")
  .replace(/^\s*(?:✅|🔹|🔵|🔴|🟦|🟢|🟡|🟠|📌|▶|→|←|⇒|»|·|-)\s*/,"")
  .replace(/^\s*(?:Sentence|문장|Question|질문|Sample|예시|보기|Title|제목|Dialogue|대화|Excerpt|Answer|정답|Task|Korean|한국어|KO|Q)\s*\d*\s*[:.)]\s*/i,"")
  .replace(/^\s*\d+\s*[).]\s*/,"").replace(/^\s*\d+\s+(?=[가-힣(])/,"").trim();
const hangulHeavy=(s)=>{const h=(s.match(/[가-힣]/g)||[]).length;return h>s.replace(/\s/g,"").length*0.3;};
const MD=window.LESSON_MD||{}; const sseen=new Set(); const sents=[];
Object.keys(MD).forEach((id)=>{ if(id.indexOf("@")!==-1) return;
  const ls=MD[id].split(/\r?\n/);
  for(let i=0;i<ls.length;i++){
    const line=ls[i]||""; if(line.indexOf("\t")!==-1) continue;
    const t=line.trim();
    if(!/[가-힣]/.test(t)) continue;
    if(/^(?:EN|NE|NP|English|Nepali)\s*[:：]/i.test(t)||/^[🇬🇧🇳🇵]/.test(t)) continue;
    if(/^(?:Page|Chapter)\b/i.test(t)) continue;
    if(/^[^\t—]{1,30}\s[—–]\s/.test(t)&&/[가-힣]/.test(t.split(/[—–]/)[0])) continue;
    if(!hangulHeavy(t)) continue;
    const parts=bareKo(t).split(/(?<=[.?!。！？…])\s+/).map(x=>bareKo(x.trim())).filter(x=>/[가-힣]/.test(x));
    parts.forEach((s)=>{
      const isSent = s.length>=10 || /[?!]$|다$|요$|까$|죠$/.test(s);
      if(!isSent) return;
      if(/[A-Za-zЀ-ӿ֐-׿؀-ۿ]/.test(s)) return;
      const kr=(s.match(/[가-힣]/g)||[]).length; if(kr/s.replace(/\s/g,"").length < 0.5) return;
      if(sseen.has(s)) return; sseen.add(s);
      sents.push(s);
    });
  }
});
const miss=sents.filter(s=>missAny(s));
miss.forEach(k=>console.log(JSON.stringify(k)));
