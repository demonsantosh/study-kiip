# OCR-corrupted text — remaining review list

**Status:** All 28 scanned page-footer lines have been auto-removed from the build. **14 garbled-content lines** remain — these need checking against the original textbook before correcting (auto-guessing the Korean would risk inserting wrong text).

## Ch.1 한국 생활 적응  (`k4-ch1`)  — 1 line(s)

- `이민자 정착 프로그램 uelP vaniouS 한국에는 이민자들이 잘 정착할수 있도록 돌는 다양한 프로 그램이 있다. 대표적인 예로 '사회통합프로그랩 '조기적응프로그램, '다문화가족 방문교육 서비스'가 있다 '사회통합`

## Ch.2 가족의 변화  (`k4-ch2`)  — 3 line(s)

- `Not o4 bu alco 어떤 사실에 더하여 다른 상항도 있음을 나타낼 때 사용한다.`
- `결혼하지 않는 사람이 많다n1 아`
- `M1하l"날다 -2 수밖에 없다. .입양하다 입양할 수밖에 없다 .바쁘다 t 바쁠 수밖에 없다 *살다 - 살 수밖에 없다`

## k4-ch7  (`k4-ch7`)  — 1 line(s)

- `다음은 '현대인의 질병'을 설명하는 글입니다. 잘 읽고 질문에 답해 보세요 알아 두면 좋은 건강 상식 잘못된 생활 습관이 병을 부른다 의학 기술의 발달로 인간의 기대 수명은 과거보다 크게 늘어났지만 현대인들은 여전히`

## Ch.8 정보화 사회  (`k4-ch8`)  — 7 line(s)

- `비로)램)K)))`
- `E0 이다'는 '명이라면서요?를 사용한다`
- `법무부 사외통합프로그램(KlIIP`
- `100 시회통찰프로그램(/1F 한국어악 한국문회 중급 2`
- `다음은 스마트폰 사용에 대한 글입니다. 잘 읽고 질문에 답해 보세요 스마트폰은 손안에 있는 컴퓨터와 같다. 스마트폰 하나만 있으면 사진 찰촬영 동영상 촬영, 음악 듣기까지 모두 : 가능하다. 텔레비전(TV)과 라디오`
- `Mossenget`
- `106 시화통합회로 그램 <까9 한코여와 한국문화 출급 2`

## extra-1  (`extra-1`)  — 1 line(s)

- `6 최근 사회가 변화하면서 가족의 형태가 핵가족으로 바뀌고 있다. 대가주 L01인 가구 ○ 맞벌이 부부 ○다문화 가족`

## Ch.15 법과 질서  (`k4-ch15`)  — 1 line(s)  — *added by scheduled batch, 2026-07-23*

- `정책정보 에피소드 현장이야기 생활정보 공지사항 고속도로 한돈 손창다. 화. 약자 대상 '코로나194 대공타기` — looks like scraped website navigation-menu labels glued together (정책정보/에피소드/현장이야기/생활정보/공지사항 = nav menu items), not a real lesson sentence. Passes the automated garbled() filter (no digit-glued-between-hangul, no replacement char) so it will keep blocking auto-reveal of this chapter until the source .md is fixed or the line removed.

## Ch.16 이민 생활  (`k4-ch16`)  — 9 line(s)  — *added by scheduled batch, 2026-07-23*

- `앵 커(남) 오늘은 모델 한현수 씨를 초대했습니다. 박수 로모셔 보겠습니다. 한현수(여): 안녕하세요, 모델 한현수입니다. 이런 자리에 초대되어 영광입니다. 앵 커(남) 한현수 씨가 한국에서 성공할 수 있었던 비결` — mangled/duplicate OCR run-on of the interview intro (spacing errors "앵 커", "로모셔"; gender mislabeled "한현수(여)"); a clean version of this content already exists elsewhere in the chapter with 🇰🇷 markers.
- `에 대해 궁금해하는 분들이 많이 계신데요. 어 적게 성공할 수 있었는지 말씀을 좀 해 주시` — continuation of the same mangled run-on ("어 적게" should be "어떻게").
- `겠습니까? 한현수(여): 처음에는 한국어도 잘 못하고 여러 가지 문저 에 부뒷히면서 고생도 많이 했습니다. 학교생 할에 잘 적응하지 못해 포기하려고 생각한 적 도 있었고요. 그렇지만 하고 싶은 일이 무엇8 지. 잘할 수 있는 일이 무엇인지 생각해 보거 됐습니다. 저는 어렸을 때부터 옷에 관심이 많 았고. 여자치고 키도 큰 편이기 때문에 모델 을 잘할 수 있을 것 같았습니다. 그래서 모덜 이 되고 싶었습니다. 그렇게 마음먹은 후에 처 음에는 모델로 성공할 수 있을지 막막했지만 그 꿈을 이루기 위해 많은 노력을 했고 무대` — heavily OCR-corrupted duplicate (문저/부뒷히면서/학교생 할에/무엇8지/모덜 — classic scan artifacts); clean version exists elsewhere with 🇰🇷 markers.
- `C ) 안 되는 일이 없어요 그리고 항상( ) 생각하다 보면 언젠가 꿈이 이루어질 거예요` — garbled fill-in-blank fragment (stray "C )"), duplicate of the clean 🇰🇷 fill-in-blank line elsewhere.
- `3)들은 내용과 같으면 , 다르면 하세요 0 한현수 씨는 학교생활에 잘 적응했다 G 2한현수 씨는 어릴 때부터 옷에 관심이 많았다 3 한현수 씨는 힘든 일이 있을 때 포기하고 좌절했다` — garbled true/false quiz item (stray "0", "G", missing "X표" instruction word).
- `다음을 듣고 따라 읽으세요. 1) 문제에 부뒷힐 때도 많아서 고생을 했습니다 2) 이 문제를 먼저 맞히는 분에게 선물을 드리겠습니다 3) 아이를 따로 앉히고 싶은데요 의자.좀 주시겠어요?` — run-on combining the instruction line with a typo'd duplicate ("부뒷힐") of the three numbered example sentences, which already exist cleanly as separate lines elsewhere.
- `대기은적 정상부도 교별시 내동 100번지` — nonsense OCR fragment, looks like a mangled address stamp from a scanned certificate.
- `2011.1.1 서울 출인국관리사무소장` — mangled official signature/date line from a scanned certificate ("출인국" should be "출입국").
- `그모시다` — 4-character orphan fragment, not a real word (likely the tail end of a mangled "모시겠습니다" or similar).

All 9 pass the automated garbled() filter (no replacement char, no digit glued between two Hangul chars, Hangul ratio ≥0.55) so they will keep counting as "clean missing" and block this chapter from fully completing via `reveal-check.js` until someone fixes the source `.md` lines. Everything else translatable in k4-ch16 was completed this run (268/277 clean items done).

## Site-wide sweep, 2026-07-23 scheduled run — `nextwords.js` fallback

Both hidden chapters (k4-ch15, k4-ch16) had zero legitimately-translatable items left (only the garbled lines already logged above), so this run fell back to `node nextwords.js 20 0`, which reported **120** missing-translation candidates across the whole site. Every single one was manually checked against the garbled() heuristic plus human judgment (per the standing caveat that the heuristic misses scrambled-spacing/duplicate OCR fragments) — **all 120 turned out to be unsuitable for translation**: single mangled word fragments, run-on merges of 2-4 unrelated sentences, multiple-choice quiz fragments with corrupted option markers, or fill-in-the-blank templates with stray placeholder characters. None were translated this run; nothing was merged into `js/translations-gen.json`. Logged below by chapter so a human can fix the source `.md` lines. (A few very short generic fragments — `았어요`, `요`, `소하다` — matched as substrings in a dozen+ chapters each and are almost certainly the sentence-splitter over-firing on a trailing particle rather than a real standalone sentence; not attributable to one chapter, not translated.)

- **k3-ch4** (1): `이유를 나타널팩 사`
- **k3-ch5** (3): `정니파다`; `예문 .가 물건을 사기 전에 인터넷으로 가격 비교트 하는 좋다고 해요 "중고 매장에 가면 필요한 물건을 싸게 살 수 있다고 해0 나: 그래요?`; `[들다`
- **k3-ch6** (2): `부모의 책에 걸 것입라`; `그간직하다`
- **k3-ch8** (1): `씩우다`
- **k3-ch9** (2): `1통일-어서 그런지`; `정브터 2 상고 이 스니다.`
- **extra-2** (6): `0잘 지내는 저근제이`; `)에 들어갈 [1~5] <보기>와 같이 ( <보기> ) 음식은 불고기예요 0좋아한 0 좋아할`; `아나이스 씨가 제일 ( 0좋은`; `○ 꿈도록 했어요`; `@품일 수 있어요`; `엄마가 아기에게 밥을 먹여요 아기가 0 0잠시드 씨 때문어 사람들이 '웃어요.`; `잠시드 씨는 사람들을 보여프 0 후엔 씨가 창문 밖을 봐요.`
- **extra-3** (11): `<보기> )에 갑니다 9 시장`; `<보기> ) 공원에서 산책해요 보는데`; `0하나요`; `ㅅ@활발한 데다기 8.`; `먹고 해서 2 먹을 만한더 0먹자고 하는데 ○먹으려던 참이었는데`; `실크로드의 1① 나든) ( 왔다 ) (내)( 사마르칼트이다 역사를 간직하고 있어서 유명합니다.`; `주소 00시 00동 빌2`; `그리고 일시적인게 가: 지금 제가 막 산책하러 ( 아니라면 상담을 좀 받아 보는 것도 좋고요 고마워요.`; `갈 만한 곳을 다녀왔어요 @ 가자마자 기분이 좋아졌어요 @ 가게 했는데 가 보라고 하세요 _@가려던 참이었는데 같이 산책해요`; `주문해야 2 주문하다기 3 주문하기 위해서 4 주문하는 대신어`; `어제 바닥에 ()잘 안돼요.`; `○ 떨어뜨렸을 텐더 ○ 떨어뜨린 대신에`; `(점) 고아칙 쓸만해요 요리어디 버렸어요 ③ 새로 사야 돼요 ④ 벌써 고장이 났어요 가.`; `① 구하는 것이다 판의 시설 * 구하는 것이다 6 부동산 소개소 26 살펴보는 것이다 ② 편의 시설 이 살펴보는 것이다 ② 부동산 소개소 16.`
- **k4-ch1** (11): `발작 사랑하다- 해`; `챙겨 어리다 향상되( 수요`; `털성적이다`; `고 천여): 하하.`; `라' 하다`; `할 걸[할 껄 쓸수록(쓸쑤록 만날지[만날찌`; `1과한국생활적을 21`; `서울시 강남구 월급 150만원 4대보협 되직는 병 중식재는 선든`; `제1기 사회동합프로 그램 이민자 멘도단 선정 결과 공고 ㆍ ㆍ 사회동합프로그램 개강 및 중합평가 연기 알림 국제결혼 안내프로 그램 일시 중단 관련 추가 안내사항 공지`; `세지 취소 :강제주방등`; `균우지 금 여 시 (1,000년 북리우성`; `디어리다`
- **k4-ch10** (3): `월말이 뜻하는 행동이나 상대트 거짓으로 그림듯회게`; `.가: 친구들 모임에 잘 다녀왔어요^ 예물 나: 안 갔어요, 나가기 싫어서 바튼 척했어요 .친구가 하는 말이 이해가 안 됐지만 공감하는 .길에서 념어졌는데 너무 창피해서 아프치 잃은`; `지후하다 전혀 말다등 별일`
- **k4-ch11** (4): `그러한 일이 있는 컷이 당열함을`; `경생 처울하다 학력 중시하다`; `2 8년)으로 구성되어 있다.`; `유한대학교 1도 성인학는`
- **k4-ch12** (7): `강초하여 확인하는 못을 나다넬`; `저는 지지율이 높은 시림에거`; `0선거와 투표 사식했습니디 취례 40 지방 선거가 전국 만 4천여 투표소에서 여의도 투표소를`; `먼저 서울 을 알이보겠습니다 연결해 투표 상원 양지호 기재 투표가 이제 막 시작됐죠^ 네 조금 전인 오전 6시 정각부터 투표가 시즈 있습니다.`; `청기다`; `시명의 능불비에서 보겠습니다.`; `시행의 목스니에 기용이겠을니다`
- **k4-ch14** (3): `)키란, 기름,식랑 가꺽`; `전 쟁 외장이, 많이 저어1`; `영상으로 보는 지0체 기권문용 성과 카드뉴스로 제는 " 호 4번의 호 무사로등 한정니니 ¥ 한시가 있이니쳤습니니`
- **k4-ch15** (1 additional): `약자 대상 '코로나194 대공타기`
- **k4-ch16** (already logged above, resurfaced): `박수 로모셔 보겠습니다.`; `어 적게 성공할 수 있었는지 말씀을 좀 해 주시`; `그렇지만 하고 싶은 일이 무엇8 지.`; `문제에 부뒷힐 때도 많아서 고생을 했습니다 2) 이 문제를 먼저 맞히는 분에게 선물을 드리겠습니다 3) 아이를 따로 앉히고 싶은데요 의자.좀 주시겠어요?`; `대기은적 정상부도 교별시 내동 100번지`; `윤생연월은 주연등독번호 성별 1946년 01월 이1일 680101-1.`; `그모시다`
- **k4-ch2** (2 additional): `자가- ( 자고기6 불가의54`; `교트이 리학 별 민`; `대꼽다`
- **k4-ch4** (5): `남편은 이 두 생일이 한국에서는 의미 있는 돌간치에서는 오랜만에 친척들을 불 수 있어서 반가있다.`; `단어징 치르다 감격하다 3 시어머니께 노래를 불러 드렸다 분주하다 0 시어머니를 위해 여행을 보내 드렸다 효도 정겹다 2) 한국인의 특별한 생일에 대한 내용으로 맞지 않는 것은 무엇입니까?`; `는 것은 나 쌀을 연필을 가수가`; `주들이 했다 셨다.`; `순한 살이 의미 있는`
- **k4-ch5** (1): `어린 시설이나 느점이 퍼우 그성다고 립조에서 시민이다 예문 .가: 한글이 과학적인 글자예요?`
- **k4-ch6** (2): `[| 다국적 기업이 증가하디`; `붓설어 하다`
- **k4-ch7** (2): `공단 통합 20주년 기념 연상키워드 이벤=`; `팟빵 입을 실천 건강(속속 해 을`
- **k4-ch8** (11): `다른 시팀에게 틀은 내용을 성대방에게 확인하듯어 물을`; `•비씨다 "끝났다`; `추경에 마이일 금이감원 연속`; `'#방 기1사에 퇴근"`; `어민 행동을 하는 문책이 두 기지 이상2`; `예물 .가: 인젤라 씨는 시간이 나면 보통 월 해요 할겸 스트레스도 김`; `나; 저는 운동도 좋아해요 '친구들과 맛있는 음식도 먹을 겸 이야기도 나출`; `•주말에는 가려고 한다 -을 김 ㆍ먹다 나먹을 김 *걷다 >컬을 김`; `음 김 "장을 보다 장을 불길 •찾아회다 - 찾아월 검 *만들다 만들 겸`; `악성 댓글 3 개인 정보 관2`; `시화통합회로 그램 <까9 한코여와 한국문화 출급 2`; `용과 정보화 사회 107`
- **k4-ch9** (11): `그 밀이 일어니치 않있지탄 켜익 일어날 컷 같은 성향까지 갔음을 나타낸다`; `을 편하다`; `단지다`; `"다칠 변한 적 "차에 치일 편한 적`; `*고장 •전개 사용`; `ㅋ 고장으로 인하 ㅋ 전기 사용으로 연하`; `"사고 *질은 안개`; `일반 보드마카사용 금금 만 사용가가 -인문대학 학지원`; `방판 화상을 읽다 홍대 전환다행이다 하아터스`; `불은 많은 일주 사무실 직원들이 퇴근한 시간에 발생하였고 주민들의 신속한 대피로 가벼운 부상자만 있는 것으로 알려졌다 경찰은 지난 16일 충북 청주의 한 빌라에서 절도 용의자 이 모 씨를 체포해 조사 중이다 이 모 씨는 지난 두 달 동안 청주 인근의 원륜을 돌며 원률 거주자들의 휴대 전화만 골라 흡처 온 협의를 받고 있다 이 씨의 행각은 비슷한 신고가 경찰에 잇따라 접수되자 경찰들의 끈질긴 수사 끝에 밝혀지게 되었다.` (news item, mostly clean but "원륜/원률" should be "원룸", "흡처" should be "훔쳐" — worth a source fix + retranslate later); `2(9: 0 (0: 2) 0의 이 씨와 9의김 씨는 다음 중 무엇에 해당합니까?`; `9과사사과과 사고 129`
- **extra-4** (11): `○ 서클꽃어요 ○ 익숙했어요 ○ 서들렀어요`; `보존해야 0 탐방해야 ○언정해야 ○ 전승해야`; `<보기> )운동을 합니다 0에 6에서`; `영호 씨는 지금 공원( 0을`; `) 교실 밖으로 나갔어요 후엔 씨가 전화를(`; `0아름다웠잖아요 ○ 아름다웠다고 했어요 ○ 아름다있는지 몰라요 0 아름다울 수밖에 없었어요`; `계임할수록 ○ 게임하느라고 게임할 정도로 ○ 게임하기 위해서`; `아름다워져서 2 아름다운 나머지 ○ 아름다운 만큼 ○아름다율 뿐만 아니라`; `1~히 타음 클어 태합 설명으로 울지 많은 것을 코르세요`; `1인 가구의 즐카는 우리의 생활에토 많은 변화를 카져왔다, 혼자 편하게 식사할 수 있 식당이 생했고 1일분만 시력토 배달이 가능해졌다, 마트에 카민 소포장원 상금도 흔히 수 있다.`; `채소나 과일부만 아니란 생필품이나 카전제품도 1인 가구에 맞취 나오고 있다 혼자 사는 가구카 늘어나면서 소형 아파트나 소형 오피스텔도 꾸준히 인기를 얼코 있다 또한 청소.`; `대어, 집 보관 등 ]인 가구를 위한 서비스업의 규모도 점점 커지고 있다.`

**Net effect:** with this sweep, the entire site-wide translation backlog is now down to *only* OCR-garbled content — there is nothing legitimately clean left to translate anywhere until someone corrects the underlying `.md` source files. Future scheduled runs will keep re-surfacing this same list (it's deterministic) until the source text is fixed or these lines are removed/corrected.

## Scheduled run, 2026-07-24 — no changes

Re-checked both hidden chapters (k4-ch15: 75/76 clean done, 1 garbled; k4-ch16: 268/277 clean done, 9 garbled) and re-ran `node nextwords.js 20 0` site-wide (120 missing, identical list to the 2026-07-23 sweep logged above, byte-for-byte). Every item is still OCR-garbled junk per the same reasoning as yesterday's entry. Nothing translated, nothing merged, no commit made this run. Backlog remains blocked on source `.md` fixes.

## Scheduled run, 2026-07-26 — no changes

Re-checked both hidden chapters via `node reveal-check.js --dry` (k4-ch15: clean 75/76 done, 11 garbled; k4-ch16: clean 268/277 done, 14 garbled) and re-ran `node nextwords.js` site-wide (120 missing, identical to the 2026-07-23/07-24 sweeps). Every remaining item — the 1 in ch15 (`코로나194 대공타기` menu/nav fragment), the 9 in ch16 (`박수 로모셔`, `문저 에 부뒷히면서`, `학교생 할에`, `출인국관리사무소장`, address/letterhead lines, `그모시다`), and all 120 site-wide candidates (`이유를 나타널팩 사`, `정니파다`, stray ○●@ / fill-in-blank exercise fragments, etc.) — is OCR-garbled and not legitimately translatable. Nothing translated, nothing merged, no commit this run. Backlog remains blocked on source `.md` corrections.

## Scheduled run, 2026-07-27 — 12 Nepali gaps filled

Correcting an oversight from the 2026-07-23/24/26 runs: those runs skipped ALL garbled-flagged items as untranslatable, but 12 of them are actually coherent, correct Korean already translated into 10 languages (bn,ru,he,ms,vi,id,si,pt,fr,ta) and missing only Nepali (ne). They were flagged only because of a leading circled-number marker (①–⑨), which the garbled() heuristic treats as junk. Translated + merged the missing `ne` for these (marker dropped in the translation, matching the existing fr/other entries):
- k4-ch15: sentences ②③④⑤⑥⑦⑧⑨ ("법과 질서" body text about the 생활 법령 정보 site / 생활 법률 app).
- k4-ch16: vocab phrases ① 힘과 열정을 쏟다…, ② 어려움을 극복하다…, ③ 끊임없이 도전하다, ④ 자기 계발을 하다.

These do NOT change reveal status (reveal-check.js's garbled() excludes ①–⑨ items from its clean totals), so both chapters stay hidden. The genuinely OCR-corrupted remaining items (ch15's `코로나194 대공타기` nav fragment; ch16's `박수 로모셔`, `문저 에 부뒷히면서`, `학교생 할에`, `출인국관리사무소장`, address/letterhead lines, `그모시다`; and the 120 site-wide nextwords candidates) still require source `.md` fixes before they can be translated.

## Scheduled run, 2026-07-27 (follow-up run) — no changes

Both prior-hidden chapters (k4-ch15, k4-ch16) are now revealed (`staging.json` `hidden: []`, `reveal-check.js --dry` → "no hidden chapters"). Re-ran `node nextwords.js` site-wide: 120 missing, 0 words / 120 sentences — byte-for-byte identical to the 2026-07-23/24/26 sweeps. Re-audited every candidate: all 120 are OCR-garbled (corrupted sentences, mashed multiple-choice-option fragments like `보존해야 0 탐방해야 ○언정해야 ○ 전승해야`, address/letterhead lines, stray ○●@ markers). Also verified via raw I18N.data scan that the remaining language gaps are not actionable: `ne` (10,352 "missing") is supplied from source vocab notes (nextwords `srcNe`), and the `ta` (610) / other-language (29 each) gaps map only to garbled or non-displayed keys — 0 clean *displayed* vocab/sentences missing any language. Nothing translated, nothing merged. Backlog remains fully blocked on source `.md` corrections.

## Scheduled run, 2026-07-27 (2nd follow-up) — no changes

`staging.json` `hidden: []` (no hidden chapters). Re-ran `node nextwords.js 120 0`: 120 missing, 0 words / 120 sentences — byte-for-byte identical to every prior sweep. Ran the task-spec `garbled()` heuristic over all 120: it passes 96 as "clean," but manual audit confirms every one of those 96 is in fact OCR-corrupted (scrambled syllables like `즐카는`→증가는, `카져왔다`→가져왔다, `원륜`→원룸, `흡처`→훔쳐; mangled fragments `정니파다`, `그간직하다`, `씩우다`, `털성적이다`; address/letterhead lines; fill-in-the-blank option strings). No legitimately-translatable Korean remains anywhere. Nothing translated, nothing merged. Backlog stays fully blocked on source `.md` corrections.

## Scheduled run, 2026-07-27 (3rd follow-up) — no changes

`staging.json` `hidden: []` (`reveal-check.js --dry` → "no hidden chapters"). Re-ran `node nextwords.js`: 120 missing, 0 words / 120 sentences — byte-for-byte identical to every prior sweep. Applied the task-spec `garbled()` heuristic: 96 of 120 pass as "clean," but full manual audit reconfirms every one is OCR-corrupted (scrambled syllables `정니파다`/`그간직하다`/`씩우다`/`디어리다`/`대꼽다`/`털성적이다`, embedded digits & parentheses, `<보기>` fill-in-the-blank exam fragments, address/letterhead lines, mangled reading passages like `1인 가구의 즐카는`→증가는 / `카져왔다`→가져왔다). No legitimately-translatable Korean remains anywhere. Nothing translated, nothing merged. Backlog stays fully blocked on source `.md` corrections.

## Scheduled run, 2026-07-27 (4th follow-up) — no changes

`staging.json` `hidden: []` (`reveal-check.js --dry` → "no hidden chapters"). Re-ran `node nextwords.js 120 0`: 120 missing, 0 words / 120 sentences — byte-for-byte identical to every prior sweep. Applied the task-spec `garbled()` heuristic: 96 of 120 pass as "clean," but full manual audit reconfirms every one is OCR-corrupted (nonsense syllables `정니파다`/`그간직하다`/`씩우다`/`디어리다`/`대꼽다`/`털성적이다`, embedded digits/parentheses, `<보기>` fill-in-the-blank exam fragments, address/letterhead lines, scrambled reading passages like `1인 가구의 즐카는`→증가는 / `카져왔다`→가져왔다 / `원륜`→원룸). No legitimately-translatable Korean remains anywhere. Nothing translated, nothing merged. Backlog stays fully blocked on source `.md` corrections.

## Scheduled run, 2026-07-27 (5th follow-up) — no changes

`staging.json` `hidden: []` (`reveal-check.js --dry` → "no hidden chapters"). `node nextwords.js 120 0`: 120 missing, 0 words / 120 sentences — byte-for-byte identical to every prior sweep. Independently re-derived the task-spec `garbled()` filter (96 of 120 "pass") and hand-audited all 96: every one is OCR-corrupted (non-words `정니파다`/`그간직하다`/`씩우다`/`디어리다`/`대꼽다`, embedded digits/parens, `<보기>` fill-in-blank exam fragments, address/letterhead lines, scrambled passages `즐카는`→증가는 / `카져왔다`→가져왔다 / `원륜`→원룸 / `흡처`→훔쳐, and known-garbled `부뒷힐`). Also spot-verified that multi-sentence display lines flagged by a broad scan are already fully translated once split on sentence boundaries. No legitimately-translatable Korean remains anywhere. Nothing translated, nothing merged. Backlog stays fully blocked on source `.md` corrections.

## Scheduled run, 2026-07-27 (6th follow-up) — no changes

`staging.json` `hidden: []` (`reveal-check.js --dry` → "no hidden chapters"). `node nextwords.js 120 0`: 120 missing, 0 words / 120 sentences — byte-for-byte identical to every prior sweep. Re-implemented the task-spec `garbled()` filter (replacement char / isolated jamo / digit-between-Hangul / ①–⑨○●•¥@ / Hangul-ratio <0.55): 96 of 120 "pass," but hand-audit of all 96 reconfirms each is OCR-corrupted — non-words (`정니파다`, `그간직하다`, `씩우다`, `디어리다`, `대꼽다`, `털성적이다`), embedded digits/parens, `<보기>` fill-in-blank exam fragments, address/letterhead lines, scrambled passages (`즐카는`→증가는, `카져왔다`→가져왔다, `원륜`→원룸, `흡처`→훔쳐). No legitimately-translatable Korean remains anywhere. Nothing translated, nothing merged. Backlog stays fully blocked on source `.md` corrections.

## Scheduled run, 2026-07-27 (7th follow-up) — no changes

`staging.json` `hidden: []` (`reveal-check.js --dry` → "no hidden chapters"). `node nextwords.js 120 0`: 120 missing, 0 words / 120 sentences — byte-for-byte identical to every prior sweep. Re-derived the task-spec `garbled()` filter (96 of 120 "pass") and hand-audited all 96: every one is OCR-corrupted — non-words (`정니파다`, `그간직하다`, `씩우다`, `디어리다`, `대꼽다`, `털성적이다`), embedded digits/parens, `<보기>` fill-in-blank exam fragments, address/letterhead lines (`대기은적 정상부도 교별시 내동 100번지`), scrambled reading passages (`즐카는`→증가는, `카져왔다`→가져왔다, `원륜`→원룸, `흡처`→훔쳐). The one borderline-coherent news paragraph (`불은 많은 일주 사무실 직원들이 퇴근한 시간에…`) still carries multiple corrupt tokens (`원륜`/`원률`/`흡처 온 협의`) and is not safely translatable. No legitimately-translatable Korean remains anywhere. Nothing translated, nothing merged. Backlog stays fully blocked on source `.md` corrections.

## Scheduled run, 2026-07-27 (8th follow-up) — no changes

`staging.json` `hidden: []` (`reveal-check.js --dry` → "no hidden chapters"). `node nextwords.js 120 0`: 120 missing, 0 words / 120 sentences — byte-for-byte identical to every prior sweep. Re-implemented the task-spec `garbled()` filter (replacement char / isolated jamo / digit-between-Hangul / ①–⑨○●•¥@ / Hangul-ratio <0.55): 96 of 120 "pass," but full manual audit of all 96 reconfirms each is OCR-corrupted — non-words (`정니파다`, `그간직하다`, `씩우다`, `디어리다`, `대꼽다`, `털성적이다`), embedded digits/parens, `<보기>` fill-in-blank exam fragments, address/letterhead lines (`대기은적 정상부도 교별시 내동 100번지`), scrambled reading passages (`즐카는`→증가는, `카져왔다`→가져왔다, `원륜`→원룸, `흡처`→훔쳐). The borderline news paragraph (`불은 많은 일주 사무실 직원들이 퇴근한 시간에…`) still carries corrupt tokens and is not safely translatable. No legitimately-translatable Korean remains anywhere. Nothing translated, nothing merged. Backlog stays fully blocked on source `.md` corrections.

## Scheduled run, 2026-07-27 (9th follow-up) — no changes

`staging.json` `hidden: []` (`reveal-check.js --dry` → "no hidden chapters"). `node nextwords.js 120 0`: 120 missing, 0 words / 120 sentences — byte-for-byte identical to every prior sweep. Independently re-implemented the task-spec `garbled()` filter (replacement char / isolated jamo / digit-between-Hangul / ①–⑨○●•¥@ / Hangul-ratio <0.55): 96 of 120 "pass," but hand-audit of all 96 reconfirms each is OCR-corrupted — non-words (`정니파다`, `그간직하다`, `씩우다`, `디어리다`, `대꼽다`, `털성적이다`), embedded digits/parens, `<보기>` fill-in-blank exam fragments, address/letterhead lines (`대기은적 정상부도 교별시 내동 100번지`), scrambled reading passages (`즐카는`→증가는, `카져왔다`→가져왔다, `원륜`→원룸, `흡처`→훔쳐). No legitimately-translatable Korean remains anywhere. Nothing translated, nothing merged. Backlog stays fully blocked on source `.md` corrections.

## Scheduled run, 2026-07-27 (10th follow-up) — no changes

`staging.json` `hidden: []` (`reveal-check.js --dry` → "no hidden chapters"). `node nextwords.js 120 0`: 120 missing, 0 words / 120 sentences — byte-for-byte identical to every prior sweep. Independently re-implemented the task-spec `garbled()` filter (replacement char / isolated jamo / digit-between-Hangul / ①–⑨○●•¥@ / Hangul-ratio <0.55): 96 of 120 "pass," but hand-audit of all 96 reconfirms each is OCR-corrupted — non-words (`정니파다`, `그간직하다`, `씩우다`, `디어리다`, `대꼽다`, `털성적이다`), embedded digits/parens, `<보기>` fill-in-blank exam fragments, address/letterhead lines (`대기은적 정상부도 교별시 내동 100번지`), scrambled reading passages, and clean sub-sentences glued into otherwise-corrupt lines (e.g. `한글이 과학적인 글자예요?` embedded in garbage). No legitimately-translatable Korean remains anywhere. Nothing translated, nothing merged. Backlog stays fully blocked on source `.md` corrections.

## Scheduled run, 2026-07-27 (11th follow-up) — no changes

`staging.json` `hidden: []` (`reveal-check.js --dry` → "no hidden chapters"). `node nextwords.js 120 0`: 120 missing, 0 words / 120 sentences — byte-for-byte identical to every prior sweep. Independently re-implemented the task-spec `garbled()` filter (replacement char / isolated jamo / digit-between-Hangul / ①–⑨○●•¥@ / Hangul-ratio <0.55): 96 of 120 "pass," and additionally ran a stricter no-digit / no-punct / ratio≥0.7 pass (41 survive). Hand-audit of both sets reconfirms every candidate is OCR-corrupted — non-words (`정니파다`, `그간직하다`, `씩우다`, `디어리다`, `대꼽다`, `털성적이다`), scrambled tokens (`나타널팩`→나타내는, `시림에거`→사람에게, `돌간치`→돌잔치, `반가있다`→반가웠다, `즐카는`→증가는, `카져왔다`→가져왔다, `원륜`→원룸, `흡처`→훔쳐), truncated fragments (`어 적게 성공할 수 있었는지…`, `았어요`), `<보기>` fill-in-blank exam fragments, and address/letterhead lines. No legitimately-translatable Korean remains anywhere. Nothing translated, nothing merged. Backlog stays fully blocked on source `.md` corrections.

## Scheduled run, 2026-07-27 (12th follow-up) — no changes

`staging.json` `hidden: []` (`reveal-check.js --dry` → "no hidden chapters"). `node nextwords.js 120 0`: 120 missing, 0 words / 120 sentences — byte-for-byte identical to every prior sweep. Re-implemented the task-spec `garbled()` filter (replacement char / isolated jamo / digit-between-Hangul / ①–⑨○●•¥@ / Hangul-ratio <0.55): 96 of 120 "pass," but hand-audit of all 96 reconfirms each is OCR-corrupted — non-words (`정니파다`, `그간직하다`, `씩우다`, `디어리다`, `대꼽다`, `털성적이다`), embedded digits/parens, `<보기>` fill-in-blank exam fragments, address/letterhead lines (`대기은적 정상부도 교별시 내동 100번지`), scrambled reading passages (`즐카는`→증가는, `카져왔다`→가져왔다, `원륜`→원룸, `흡처`→훔쳐). No legitimately-translatable Korean remains anywhere. Nothing translated, nothing merged. Backlog stays fully blocked on source `.md` corrections.

## Scheduled run, 2026-07-27 (13th follow-up) — no changes

`staging.json` `hidden: []` (`reveal-check.js --dry` → "no hidden chapters"). `node nextwords.js` still reports 120 missing, 0 words / 120 sentences — byte-for-byte identical to every prior sweep. Re-implemented the task-spec `garbled()` filter (replacement char / isolated jamo / digit-between-Hangul / ①–⑨○●•¥@ / Hangul-ratio <0.55): 96 of 120 "pass." Also ran a stricter no-digit / no-symbol / Hangul-ratio ≥0.90 / must-end-as-sentence pass, which leaves only 9 candidates — and hand-audit of those 9 reconfirms every one is OCR-corrupted: `경생 처울하다` (경쟁·초라하다), `시명의 능불비에서 보겠습니다` (nonsense), `시행의 목스니에 기용이겠을니다` (nonsense), menu/letterhead fragments (`정책정보 에피소드 현장이야기 … 한돈 손창다`), `박수 로모셔 보겠습니다` (로모셔→유도해?), `돌간치`→돌잔치 / `반가있다`→반가웠다 in the birthday line, `붓설어 하다` (부끄러워?), and `일어니치 않있지탄 켜익 … 컷` scrambled grammar note. No legitimately-translatable Korean remains anywhere. Nothing translated, nothing merged. Backlog stays fully blocked on source `.md` corrections.

## Scheduled run, 2026-07-27 (14th follow-up) — no changes

`staging.json` `hidden: []` (`reveal-check.js --dry` → "no hidden chapters"). `node nextwords.js 20 0` → 120 missing, 0 words / 120 sentences — byte-for-byte identical to every prior sweep. Independently re-implemented the task-spec `garbled()` filter (replacement char / isolated jamo / digit-between-Hangul / ①–⑨○●•¥@ / Hangul-ratio <0.55): 96 of 120 "pass," but hand-audit of all 96 reconfirms each is OCR-corrupted — non-words (`정니파다`, `그간직하다`, `씩우다`, `디어리다`, `대꼽다`, `털성적이다`, `청기다`, `그모시다`), embedded digits/parens, `<보기>` fill-in-blank exam fragments, address/letterhead lines (`대기은적 정상부도 교별시 내동 100번지`), scrambled reading passages (`나타널팩`→나타내는, `시림에거`→사람에게, `돌간치`→돌잔치, `반가있다`→반가웠다, `즐카는`→증가는, `카져왔다`→가져왔다, `원륜`→원룸, `흡처`→훔쳐). No legitimately-translatable Korean remains anywhere. Nothing translated, nothing merged. Backlog stays fully blocked on source `.md` corrections.

## Scheduled run, 2026-07-27 (15th follow-up) — no changes

`staging.json` `hidden: []` (`reveal-check.js --dry` → "no hidden chapters"). `node nextwords.js 120 0` → 120 missing, 0 words / 120 sentences — byte-for-byte identical to every prior sweep. Independently re-implemented the task-spec `garbled()` filter (replacement char / isolated jamo / digit-between-Hangul / ①–⑨○●•¥@ / Hangul-ratio <0.55): 96 of 120 "pass," but hand-audit of all 96 again reconfirms each is OCR-corrupted — non-words (`정니파다`, `그간직하다`, `씩우다`, `디어리다`, `대꼽다`, `청기다`, `그모시다`, `단지다`), embedded digits/parens/`<보기>` exam fill-in-blank fragments, address/letterhead lines (`대기은적 정상부도 교별시 내동 100번지`), scrambled reading passages (`나타널팩`→나타내는, `시림에거`→사람에게, `돌간치`→돌잔치, `반가있다`→반가웠다, `즐카는`→증가는, `카져왔다`→가져왔다, `원륜`→원룸, `흡처`→훔쳐). No legitimately-translatable Korean remains anywhere. Nothing translated, nothing merged. Backlog stays fully blocked on source `.md` corrections.

## Scheduled run, 2026-07-27 (16th follow-up) — no changes

`staging.json` `hidden: []` (`reveal-check.js --dry` → "no hidden chapters"). `node nextwords.js` → 120 missing, 0 words / 120 sentences — byte-for-byte identical to every prior sweep. Independently re-implemented the task-spec `garbled()` filter (replacement char / isolated jamo / digit-between-Hangul / ①–⑨○●•¥@ / Hangul-ratio <0.55): 96 of 120 "pass," but full hand-audit of all 96 again reconfirms each is OCR-corrupted — non-words (`정니파다`, `그간직하다`, `씩우다`, `디어리다`, `대꼽다`, `털성적이다`, `청기다`, `그모시다`), embedded digits/parens, `<보기>` fill-in-blank exam fragments, address/letterhead lines (`대기은적 정상부도 교별시 내동 100번지`), scrambled reading passages (`나타널팩`→나타내는, `시림에거`→사람에게, `돌간치`→돌잔치, `반가있다`→반가웠다, `즐카는`→증가는, `카져왔다`→가져왔다, `원륜`→원룸, `흡처`→훔쳐). No legitimately-translatable Korean remains anywhere. Nothing translated, nothing merged. Backlog stays fully blocked on source `.md` corrections.

## Scheduled run, 2026-07-27 (17th follow-up) — no changes

`staging.json` `hidden: []` (`reveal-check.js --dry` → "no hidden chapters"). `node nextwords.js 120 0` → 120 missing, 0 words / 120 sentences — byte-for-byte identical to every prior sweep. Independently re-implemented the task-spec `garbled()` filter (replacement char / isolated jamo / digit-between-Hangul / ①–⑨○●•¥@ / Hangul-ratio <0.55): 96 of 120 "pass," but a full hand-audit of all 96 again confirms each is OCR-corrupted — non-words (`정니파다`, `그간직하다`, `씩우다`, `디어리다`, `대꼽다`, `털성적이다`, `청기다`, `그모시다`, `단지다`, `소하다`), embedded digits/parens, `<보기>` fill-in-blank exam fragments, address/letterhead lines (`대기은적 정상부도 교별시 내동 100번지`), and scrambled reading passages (`나타널팩`→나타내는, `시림에거`→사람에게, `돌간치`→돌잔치, `반가있다`→반가웠다, `즐카는`→증가는, `카져왔다`→가져왔다, `원륜`→원룸, `흡처`→훔쳐, `부뒷힐`→부딪힐). No legitimately-translatable Korean remains anywhere. Nothing translated, nothing merged. Backlog stays fully blocked on source `.md` corrections.

## Scheduled run, 2026-07-27 (18th follow-up) — no changes

`staging.json` `hidden: []` (`reveal-check.js --dry` → "no hidden chapters"). `node nextwords.js 120 0` → 120 missing, 0 words / 120 sentences — byte-for-byte identical to every prior sweep. Independently re-implemented the task-spec `garbled()` filter (replacement char / isolated jamo / digit-between-Hangul / ①–⑨○●•¥@ / Hangul-ratio <0.55): 96 of 120 "pass," but a full hand-audit of all 96 again confirms each is OCR-corrupted — non-words (`정니파다`, `그간직하다`, `씩우다`, `디어리다`, `대꼽다`, `털성적이다`, `청기다`, `그모시다`, `단지다`, `소하다`), embedded digits/parens, `<보기>` fill-in-blank exam fragments, address/letterhead lines (`대기은적 정상부도 교별시 내동 100번지`), and scrambled reading passages (`나타널팩`→나타내는, `시림에거`→사람에게, `돌간치`→돌잔치, `반가있다`→반가웠다, `즐카는`→증가는, `카져왔다`→가져왔다, `원륜`→원룸, `흡처`→훔쳐, `부뒷힐`→부딪힐). No legitimately-translatable Korean remains anywhere. Nothing translated, nothing merged. Backlog stays fully blocked on source `.md` corrections.
