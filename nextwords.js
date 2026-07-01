global.window={};
require("./js/data.js"); require("./js/translations.js"); require("./js/translations-gen.js"); require("./js/lessons-data.js");
const N=parseInt(process.argv[2]||"50",10);
const START=parseInt(process.argv[3]||"0",10);
const LANGS=["ne","bn","ru","he","ms","vi","id","si","pt","fr","ta"];
const data=window.I18N.data||{};
const srcNe=new Set();   // ko's that already have Nepali from the source notes (no need to generate)
const hasNe=(k)=>!!(data[k]&&data[k].ne)||srcNe.has(k);
const isWord=(k)=>{k=String(k||'').trim();return k&&/[가-힣]/.test(k)&&k.length<=28&&!/[A-Za-z]{4,}/.test(k);};
const missAny=(k)=>{const d=data[k]||{};return LANGS.some(l=> l==="ne" ? !hasNe(k) : !d[l]);};

/* ---- 1) vocabulary words ---- */
function cleanWord(v){ if(!v||!v.en||!/[ऀ-ॿ]/.test(v.en)) return; const parts=v.en.split("/").map(s=>s.trim()).filter(Boolean); const en=[],ne=[]; parts.forEach(p=>{(/[ऀ-ॿ]/.test(p)?ne:en).push(p);}); v.en=en.join(" / "); if(!v.ne&&ne.length) v.ne=ne.join(" / "); }
const D=window.KIIP_DATA; const seen=new Set(); const words=[];
function add(v){ if(!v||!v.ko||seen.has(v.ko)) return; seen.add(v.ko); cleanWord(v); if(v.ne&&/[ऀ-ॿ]/.test(v.ne)) srcNe.add(v.ko); words.push({ko:v.ko,en:v.en||""}); }
(D.levels||[]).forEach(l=>l.chapters.forEach(c=>{ (c.vocab||[]).forEach(add); const lv=window.LESSON_VOCAB&&window.LESSON_VOCAB[c.id]; if(lv) lv.forEach(add); }));
Object.keys(window.LESSON_VOCAB||{}).forEach(id=>window.LESSON_VOCAB[id].forEach(add));
const missWords=words.filter(w=>isWord(w.ko) && missAny(w.ko));

/* ---- 2) EVERY displayed Korean sentence (matches what the app makes clickable) ---- */
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
    if(/^(?:EN|NE|NP|English|Nepali)\s*[:：]/i.test(t)||/^[🇬🇧🇳🇵]/.test(t)) continue;   // translation lines
    if(/^(?:Page|Chapter)\b/i.test(t)) continue;
    if(/^[^\t—]{1,30}\s[—–]\s/.test(t)&&/[가-힣]/.test(t.split(/[—–]/)[0])) continue;     // "단어 — meaning" word def
    if(!hangulHeavy(t)) continue;                                                          // only Korean-heavy content
    // source translation on the next non-blank line (only attached to single-sentence lines)
    let j=i+1; while(j<ls.length && !ls[j].trim()) j++;
    const nx=(ls[j]||"").trim();
    const em=nx.match(/^(?:EN|English)\s*[:：]\s*(.*)$/i) || nx.match(/^🇬🇧\s*(.*)$/);
    let srcEn="", sne="";
    if(em){ srcEn=em[1]; const ni=srcEn.search(/\b(?:NE|NP|Nepali)\s*[:：]/i); if(ni>=0){ sne=srcEn.slice(ni).replace(/^.*?(?:NE|NP|Nepali)\s*[:：]\s*/i,"").trim(); srcEn=srcEn.slice(0,ni).trim(); }
      if(!sne){ let k2=j+1; while(k2<ls.length && !ls[k2].trim()) k2++; const mn=(ls[k2]||"").trim().match(/^🇳🇵\s*(.*)$/); if(mn) sne=mn[1].trim(); } }
    const parts=bareKo(t).split(/(?<=[.?!。！？…])\s+/).map(x=>bareKo(x.trim())).filter(x=>/[가-힣]/.test(x));
    parts.forEach((s)=>{
      const isSent = s.length>=10 || /[?!]$|다$|요$|까$|죠$/.test(s);
      if(!isSent) return;
      // skip OCR-garbled / contaminated lines: a clean Korean sentence has no Latin,
      // Cyrillic, Hebrew or Arabic letters mixed in.
      if(/[A-Za-zЀ-ӿ֐-׿؀-ۿ]/.test(s)) return;
      const kr=(s.match(/[가-힣]/g)||[]).length; if(kr/s.replace(/\s/g,"").length < 0.5) return; // mostly-symbol junk
      if(seen.has(s)||sseen.has(s)) return; sseen.add(s);
      const en = parts.length===1 ? srcEn : "";
      if(parts.length===1 && sne && /[ऀ-ॿ]/.test(sne)) srcNe.add(s);   // has source Nepali → don't regenerate ne
      sents.push({ko:s,en:en});
    });
  }
});
const missSents=sents.filter(s=>missAny(s.ko));

/* ---- report: words first, then sentences ---- */
const all=missWords.concat(missSents);
console.log("missing-any:",all.length," (words:",missWords.length,", sentences:",missSents.length,")");
all.slice(START,START+N).forEach((w)=>{ const d=data[w.ko]||{}; const miss=LANGS.filter(l=> l==="ne" ? !hasNe(w.ko) : !d[l]); console.log(w.ko+" :: "+w.en+" :: NEED["+miss.join(",")+"]"); });
