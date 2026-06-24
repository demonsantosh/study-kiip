global.window={};
require("./js/data.js"); require("./js/translations.js"); require("./js/translations-gen.js"); require("./js/lessons-data.js");
const N=parseInt(process.argv[2]||"50",10);
const START=parseInt(process.argv[3]||"0",10);
const LANGS=["bn","ru","he","ms","vi","id","si","pt","fr"];
const data=window.I18N.data||{};
const isWord=(k)=>{k=String(k||'').trim();return k&&/[가-힣]/.test(k)&&k.length<=28&&!/[A-Za-z]{4,}/.test(k);};
const missAny=(k)=>{const d=data[k]||{};return LANGS.some(l=>!d[l]);};

/* ---- 1) vocabulary words ---- */
function cleanWord(v){ if(!v||!v.en||!/[ऀ-ॿ]/.test(v.en)) return; const parts=v.en.split("/").map(s=>s.trim()).filter(Boolean); const en=[],ne=[]; parts.forEach(p=>{(/[ऀ-ॿ]/.test(p)?ne:en).push(p);}); v.en=en.join(" / "); if(!v.ne&&ne.length) v.ne=ne.join(" / "); }
const D=window.KIIP_DATA; const seen=new Set(); const words=[];
function add(v){ if(!v||!v.ko||seen.has(v.ko)) return; seen.add(v.ko); cleanWord(v); words.push({ko:v.ko,en:v.en||""}); }
(D.levels||[]).forEach(l=>l.chapters.forEach(c=>{ (c.vocab||[]).forEach(add); const lv=window.LESSON_VOCAB&&window.LESSON_VOCAB[c.id]; if(lv) lv.forEach(add); }));
Object.keys(window.LESSON_VOCAB||{}).forEach(id=>window.LESSON_VOCAB[id].forEach(add));
const missWords=words.filter(w=>isWord(w.ko) && missAny(w.ko));

/* ---- 2) full sentences from the lesson notes (Korean line + following EN: line) ---- */
const bareKo=(s)=>String(s)
  .replace(/\*\*/g,"")
  .replace(/^\s*(?:✅|🔹|🔵|🔴|🟦|🟢|🟡|🟠|📌|▶|·|-)\s*/,"")
  .replace(/^\s*(?:Sentence|문장|Question|질문|Sample|예시|보기|Title|제목|Dialogue|대화|Excerpt|Answer|정답|Task)\s*\d*\s*[:.)]\s*/i,"")
  .replace(/^\s*\d+\s*[).]\s*/,"").trim();
const MD=window.LESSON_MD||{}; const sseen=new Set(); const sents=[];
Object.keys(MD).forEach((id)=>{ if(id.indexOf("@")!==-1) return;
  const ls=MD[id].split(/\r?\n/);
  for(let i=0;i<ls.length-1;i++){
    const ko=bareKo(ls[i]); if(!/[가-힣]/.test(ko)||ko.length<4) continue;
    // next non-blank line (gloss): "EN: ..." or "🇬🇧 ..." (section headings / activity prompts)
    let j=i+1; while(j<ls.length && !ls[j].trim()) j++;
    const nx=(ls[j]||"").trim();
    const em=nx.match(/^EN\s*:\s*(.*)$/i) || nx.match(/^🇬🇧\s*(.*)$/);
    if(!em) continue;
    let en=em[1]; const ni=en.search(/\bNE\s*:/i); if(ni>=0) en=en.slice(0,ni).trim();
    if(seen.has(ko)||sseen.has(ko)) continue; sseen.add(ko);
    sents.push({ko:ko,en:en});
  }
});
const missSents=sents.filter(s=>missAny(s.ko));

/* ---- report: words first, then sentences ---- */
const all=missWords.concat(missSents);
console.log("missing-any:",all.length," (words:",missWords.length,", sentences:",missSents.length,")");
all.slice(START,START+N).forEach((w)=>{ const d=data[w.ko]||{}; const miss=LANGS.filter(l=>!d[l]); console.log(w.ko+" :: "+w.en+" :: NEED["+miss.join(",")+"]"); });
