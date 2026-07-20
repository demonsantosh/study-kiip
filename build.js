const fs = require('fs');
const lines = fs.readFileSync('_nw.txt','utf8').split('\n').filter(l=>l.includes(' :: '));
const keys = lines.map(l=>l.split(' :: ')[0]);
function find(sub){ const m = keys.filter(k=>k.includes(sub)); if(m.length!==1){ console.error('AMBIG/NONE for',JSON.stringify(sub),m.length); return null;} return m[0]; }
const L = ["bn","ru","he","ms","vi","id","si","pt","fr","ta"];
const items = [
 { sub:"조의금 - [", tr:{
   bn:"শোকানুদান (অন্ত্যেষ্টিতে দেওয়া অর্থ)", ru:"деньги на соболезнование (на похоронах)",
   he:"דמי תנחומים (כסף שנותנים באבל)", ms:"wang takziah", vi:"tiền phúng viếng",
   id:"uang belasungkawa", si:"ශෝක මුදල (අවමගුලට දෙන මුදල)", pt:"dinheiro de condolências",
   fr:"argent de condoléances", ta:"இரங்கல் பணம் (இறுதிச் சடங்கில் தரப்படுவது)" }},
 { sub:"친절하던", tr:{
   bn:"বন্ধুত্বপূর্ণ/সদয় হওয়া; খেলা করা", ru:"быть добрым; играть",
   he:"להיות אדיב; לשחק", ms:"bersikap baik; bermain", vi:"tử tế; chơi",
   id:"ramah; bermain", si:"කරුණාවන්ත වීම; සෙල්ලම් කිරීම", pt:"ser gentil; brincar",
   fr:"être gentil; jouer", ta:"அன்பாக இருத்தல்; விளையாடுதல்" }},
 { sub:"가다 가되", tr:{
   bn:"খাওয়া; যাওয়া", ru:"есть; идти", he:"לאכול; ללכת", ms:"makan; pergi",
   vi:"ăn; đi", id:"makan; pergi", si:"කෑම; යෑම", pt:"comer; ir",
   fr:"manger; aller", ta:"சாப்பிடுதல்; செல்லுதல்" }},
 { sub:"하되 .살다", tr:{
   bn:"করা; বেঁচে থাকা", ru:"делать; жить", he:"לעשות; לחיות", ms:"buat; hidup",
   vi:"làm; sống", id:"melakukan; hidup", si:"කිරීම; ජීවත් වීම", pt:"fazer; viver",
   fr:"faire; vivre", ta:"செய்தல்; வாழ்தல்" }},
 { sub:"봤더니", tr:{
   bn:"পাওয়া/গ্রহণ করা; দেখা", ru:"получать; смотреть", he:"לקבל; לראות",
   ms:"terima; lihat", vi:"nhận; xem", id:"menerima; melihat", si:"ලැබීම; බැලීම",
   pt:"receber; ver", fr:"recevoir; voir", ta:"பெறுதல்; பார்த்தல்" }},
 { sub:"적든지", tr:{
   bn:"অল্প/কম হওয়া", ru:"быть немногочисленным, малым", he:"להיות מועט",
   ms:"sedikit", vi:"ít", id:"sedikit", si:"අඩු වීම", pt:"ser pouco",
   fr:"être peu nombreux", ta:"குறைவாக இருத்தல்" }},
 { sub:"전문 해당되다", tr:{
   bn:"বিশেষজ্ঞতা; প্রযোজ্য হওয়া", ru:"специальность; относиться, соответствовать",
   he:"התמחות; לחול, להיות רלוונטי", ms:"kepakaran; terpakai", vi:"chuyên môn; áp dụng, thuộc về",
   id:"keahlian; berlaku", si:"විශේෂඥතාව; අදාළ වීම", pt:"especialidade; aplicar-se",
   fr:"spécialité; s'appliquer", ta:"நிபுணத்துவம்; பொருந்துதல்" }},
 { sub:"기다린다면서요", tr:{
   bn:"শুনলাম আপনি অপেক্ষা করছেন, তাই না?", ru:"Говорят, вы ждёте?",
   he:"שמעתי שאתה מחכה, נכון?", ms:"Katanya awak sedang menunggu?", vi:"Nghe nói bạn đang chờ à?",
   id:"Katanya kamu sedang menunggu?", si:"ඔබ රැඳී සිටිනවා කියලා ඇහුවා, නේද?",
   pt:"Ouvi dizer que você está esperando, não é?", fr:"Il paraît que tu attends ?",
   ta:"நீங்கள் காத்திருக்கிறீர்கள் என்று கேள்விப்பட்டேன், இல்லையா?" }},
 { sub:"시험 합격", tr:{
   bn:"পরীক্ষায় উত্তীর্ণ; পরিবেশনা দেখা; অতিভোজন", ru:"сдача экзамена; просмотр представления; переедание",
   he:"מעבר מבחן; צפייה בהופעה; אכילת יתר", ms:"lulus peperiksaan; menonton persembahan; makan berlebihan",
   vi:"đỗ kỳ thi; xem buổi biểu diễn; ăn quá nhiều", id:"lulus ujian; menonton pertunjukan; makan berlebihan",
   si:"විභාගය සමත් වීම; සංදර්ශනයක් බැලීම; අධික ලෙස ආහාර ගැනීම", pt:"passar no exame; assistir a um espetáculo; comer em excesso",
   fr:"réussir l'examen; assister à un spectacle; excès de nourriture",
   ta:"தேர்வில் தேர்ச்சி; நிகழ்ச்சி பார்த்தல்; அளவுக்கு அதிகமாக உண்ணுதல்" }},
];
const out = {};
for(const it of items){ const k = find(it.sub); if(!k) continue; out[k] = it.tr; }
fs.writeFileSync('_batch.json', JSON.stringify(out, null, 1));
console.log('items written:', Object.keys(out).length);
