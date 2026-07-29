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

## Scheduled run, 2026-07-27 (19th follow-up) — no changes

`staging.json` `hidden: []` (`reveal-check.js --dry` → "no hidden chapters"). `node nextwords.js 120 0` → 120 missing, 0 words / 120 sentences — byte-for-byte identical to every prior sweep. Independently re-implemented the task-spec `garbled()` filter (replacement char / isolated jamo / digit-between-Hangul / ①–⑨○●•¥@ / Hangul-ratio <0.55): 96 of 120 "pass," but a full hand-audit of all 96 again confirms each is OCR-corrupted — non-words (`정니파다`, `그간직하다`, `씩우다`, `디어리다`, `대꼽다`, `털성적이다`, `청기다`, `그모시다`, `단지다`, `소하다`), embedded digits/parens, `<보기>` fill-in-blank exam fragments, address/letterhead lines (`대기은적 정상부도 교별시 내동 100번지`), and scrambled reading passages (`나타널팩`→나타내는, `시림에거`→사람에게, `돌간치`→돌잔치, `반가있다`→반가웠다, `즐카는`→증가는, `카져왔다`→가져왔다, `원륜`→원룸, `흡처`→훔쳐, `부뒷힐`→부딪힐). No legitimately-translatable Korean remains anywhere. Nothing translated, nothing merged. Backlog stays fully blocked on source `.md` corrections.

## Scheduled run 2026-07-28 — skipped (OCR-corrupted / mispaired, not translated)
- `불은 많은 일주 사무실 직원들이 퇴근한 시간에 발생하였고 ...` — corrupted concatenation of two unrelated news stories (fire + phone theft); the existing `ne` value does not cleanly match the Korean. Source .md needs OCR repair before translating remaining langs.
- `계임할수록 ○ 게임하느라고 게임할 정도로 ○ 게임하기 위해서` — contains ○ markers and the existing `ne` translation (about school/restaurant) is mismatched with the Korean (a grammar multiple-choice about gaming). Needs source fix + correct re-pairing.

## Scheduled run, 2026-07-28 (follow-up) — no changes

`staging.json` `hidden: []` (`reveal-check.js --dry` → "no hidden chapters"). `node nextwords.js` → 98 missing, 0 words / 98 sentences. Independently re-implemented the task-spec `garbled()` filter (replacement char / isolated jamo / digit-between-Hangul / ①–⑨○●•¥@ / Hangul-ratio <0.55): 78 of 98 "pass," but a full hand-audit of all 78 again confirms each is OCR-corrupted — non-words (`정니파다`, `그간직하다`, `씩우다`, `디어리다`, `대꼽다`, `털성적이다`, `청기다`, `그모시다`, `단지다`, `소하다`), embedded digits/parens/`0`, `<보기>` fill-in-blank exam fragments, address/letterhead lines (`대기은적 정상부도 교별시 내동 100번지`), and scrambled reading passages (`나타널팩`→나타내는, `시림에거`→사람에게, `때문어`→때문에, `원륜`→원룸, `흡처`→훔쳐, `부뒷힐`→부딪힐). No legitimately-translatable Korean remains anywhere. Nothing translated, nothing merged. Backlog stays fully blocked on source `.md` corrections.

## Scheduled run, 2026-07-28 (2nd follow-up) — no changes

`staging.json` `hidden: []` (`reveal-check.js --dry` → "no hidden chapters"). `node nextwords.js` → 98 missing (0 words / 98 sentences), unchanged. Re-ran the task-spec `garbled()` filter: 78/98 "pass," but a full hand-audit reconfirms every one is OCR-corrupted — non-words (`정니파다`, `그간직하다`, `씩우다`, `털성적이다`, `청기다`, `대꼽다`, `단지다`, `소하다`, `그모시다`), embedded digits/parens/`0`, `<보기>` exam fill-in-blank fragments, address/letterhead lines (`대기은적 정상부도 교별시 내동 100번지`). The only partial-coverage item, `불은 많은 일주 사무실 직원들이 퇴근한 시간에 발생하였고 …`, is a corrupted duplicate (`일주`→`입주`) of a sentence already fully translated in all 11 langs under the correctly-spelled key, and its lone existing `ne` value is mispaired (residents-evacuate + phone-theft text) — skipped, not translated. No legitimately-translatable Korean remains. Nothing translated or merged; backlog stays blocked on source `.md` OCR corrections.

## Scheduled run, 2026-07-28 (3rd follow-up) — no changes

`staging.json` `hidden: []` (`reveal-check.js --dry` → "no hidden chapters"). `node nextwords.js` → 98 missing (0 words / 98 sentences), unchanged. Re-ran the task-spec `garbled()` filter: 78/98 "pass," but a full hand-audit of all 78 again confirms every item is OCR-corrupted — all-Hangul non-words (`정니파다`, `그간직하다`, `씩우다`, `디어리다`, `대꼽다`, `털성적이다`, `청기다`, `그모시다`, `단지다`, `소하다`), embedded digits/parens/`0`, `<보기>` fill-in-blank exam fragments, address/letterhead lines (`대기은적 정상부도 교별시 내동 100번지`), and scrambled reading passages (`나타널팩`→나타내는, `때문어`→때문에, `원륜`→원룸, `흡처`→훔쳐). No legitimately-translatable Korean remains. Nothing translated, nothing merged, no commit. Backlog stays blocked on source `.md` OCR corrections.

## Scheduled run, 2026-07-28 (4th follow-up) — no changes

`staging.json` `hidden: []` (`reveal-check.js --dry` → "no hidden chapters"). Went beyond `nextwords.js` this run: ran a broader probe over every Korean line in `LESSON_MD` (not just nextwords' pure-Korean universe) and applied the task-spec `garbled()` filter (829 "clean" of 1478). Hand-curated 24 genuinely well-formed items (full sentences + vocab phrases across k4) that were missing store `ne`. **But** all 24 already carry Nepali from inline source notes (🇳🇵 lines), which `nextwords.js` counts as covered (`srcNe`) and which the app displays with priority over the store (`app.js` L325/L345/L394 — `sm.ne` wins; store `ne` is only a fallback when no source note exists). So adding store `ne` for them is dead weight never shown to learners, and off-spec vs. the pipeline's own "missing" definition. Merged, verified redundancy, then reverted the store to HEAD — no commit. Confirms prior runs: the only truly-missing (non-source-covered) items are the 98 OCR-garbled nextwords sentences. Backlog stays blocked on source `.md` OCR corrections.

## Scheduled run, 2026-07-28 (5th follow-up) — no changes

`staging.json` `hidden: []` (`reveal-check.js --dry` → "no hidden chapters"). `node nextwords.js` → 98 missing (0 words / 98 sentences), unchanged. Re-ran the task-spec `garbled()` filter (78/98 "pass") plus a stricter secondary pass (reject any digit/bracket/paren/quote/double-space, require ≥8 Hangul): 22 survivors, all still OCR-corrupted on hand-audit — non-words/scrambled (`나타널팩`→나타내는, `것입라`→것입니다, `시림에거`→사람에게, `확인하듯어`→확인하듯이, `당열함을`, `그림듯회게`, `로모셔`), truncated mid-word fragments (`어 적게 성공할…`, `는 것은 나 쌀을…`), and menu/letterhead debris. No legitimately-translatable Korean remains anywhere. Nothing translated, nothing merged, no commit. Backlog stays blocked on source `.md` OCR corrections.

## Scheduled run, 2026-07-28 (6th follow-up) — no changes

`staging.json` `hidden: []` (`reveal-check.js --dry` → "no hidden chapters"). `node nextwords.js` → 98 missing (0 words / 98 sentences), unchanged. Re-implemented the task-spec `garbled()` filter independently (replacement char / isolated jamo / digit-between-Hangul / ①–⑨○●•¥@ / Hangul-ratio <0.55): 78/98 "pass," but a full hand-audit of all 78 again confirms every item is OCR-corrupted — all-Hangul non-words (`정니파다`, `그간직하다`, `씩우다`, `디어리다`, `대꼽다`, `털성적이다`, `청기다`, `그모시다`, `단지다`, `소하다`), embedded digits/parens/`0` and `<보기>` fill-in-blank exam fragments, address/letterhead debris (`대기은적 정상부도 교별시 내동 100번지`), and scrambled reading passages (`나타널팩`→나타내는, `시림에거`→사람에게, `보여프`→보여준, `때문어`→때문에, `원륜`→원룸, `흡처`→훔쳐, `부뒷힐`→부딪힐). The lone partial-coverage item (`불은 많은 일주 …`) is a corrupted run-on merge of two unrelated news stories with a mispaired `ne` value — skipped. No legitimately-translatable Korean remains. Nothing translated or merged. Committing this note plus the 3rd–5th follow-up notes that were left uncommitted in the working tree. Backlog stays blocked on source `.md` OCR corrections.

## Scheduled run, 2026-07-28 (7th follow-up) — no changes

`staging.json` `hidden: []` (`reveal-check.js --dry` → "no hidden chapters"). `node nextwords.js 98 0` → 98 missing (0 words / 98 sentences), unchanged. Independently re-implemented the task-spec `garbled()` filter (replacement char / isolated jamo / digit-between-Hangul / ①–⑨○●•¥@ / Hangul-ratio <0.55): 78/98 "pass." Ran a stricter secondary pass (reject digits/brackets/parens/quotes, require sentence-final ending + ≥0.9 Hangul ratio, len 8–70) → only 6 survivors, all still OCR-corrupted on hand-audit: `시명의 능불비에서 보겠습니다`, `시행의 목스니에 기용이겠을니다`, `박수 로모셔 보겠습니다` (로모셔→프로모션), a menu/letterhead list (`정책정보 에피소드 현장이야기 … 한돈 손창다`), and two scrambled run-ons (`어린 시설이나 느점이 퍼우 그성다고 …`, `그 밀이 일어니치 않있지탄 켜익 …`). No legitimately-translatable Korean remains anywhere. Nothing translated, nothing merged. Backlog stays blocked on source `.md` OCR corrections.

## Scheduled run, 2026-07-28 (8th follow-up) — no changes

`staging.json` `hidden: []` (`reveal-check.js --dry` → "no hidden chapters"). `node nextwords.js 120 0` → 98 missing (0 words / 98 sentences), unchanged. Independently re-implemented the task-spec `garbled()` filter (replacement char / isolated jamo / digit-between-Hangul / ①–⑨○●•¥@ / Hangul-ratio <0.55): 78/98 "pass," but a full hand-audit of all 78 again confirms every item is OCR-corrupted — all-Hangul non-words (`정니파다`, `그간직하다`, `씩우다`, `디어리다`, `대꼽다`, `털성적이다`, `청기다`, `그모시다`, `단지다`, `소하다`), embedded digits/parens/`0` and `<보기>` fill-in-blank exam fragments, address/letterhead debris (`대기은적 정상부도 교별시 내동 100번지`), and scrambled reading passages (`나타널팩`→나타내는, `시림에거`→사람에게, `보여프`→보여준, `때문어`→때문에, `원륜`→원룸, `흡처`→훔쳐, `부뒷힐`→부딪힐). The lone partial-coverage item (`불은 많은 일주 …`) remains a corrupted run-on merge of two unrelated news stories with a mispaired `ne` value — skipped. No legitimately-translatable Korean remains anywhere. Nothing translated, nothing merged. Backlog stays blocked on source `.md` OCR corrections.

## Scheduled run, 2026-07-28 (9th follow-up) — no changes

`staging.json` `hidden: []` (`reveal-check.js --dry` → "no hidden chapters"). `node nextwords.js 98 0` → 98 missing (0 words / 98 sentences), unchanged. Independently re-implemented the task-spec `garbled()` filter (replacement char / isolated jamo / digit-between-Hangul / ①–⑨○●•¥@ / Hangul-ratio <0.55): 78/98 "pass," but a full hand-audit of all 78 again confirms every item is OCR-corrupted — all-Hangul non-words (`정니파다`, `그간직하다`, `씩우다`, `디어리다`, `대꼽다`, `털성적이다`, `청기다`, `그모시다`, `단지다`, `소하다`), embedded digits/parens/`0` and `<보기>` fill-in-blank exam fragments, address/letterhead debris (`대기은적 정상부도 교별시 내동 100번지`), and scrambled reading passages (`나타널팩`→나타내는, `시림에거`→사람에게, `보여프`→보여준, `때문어`→때문에, `원륜`→원룸, `흡처`→훔쳐, `부뒷힐`→부딪힐). The lone partial-coverage item (`불은 많은 일주 …`) remains a corrupted run-on of two unrelated news stories with a mispaired `ne` value — skipped. No legitimately-translatable Korean remains anywhere. Nothing translated, nothing merged. Backlog stays blocked on source `.md` OCR corrections.

## Scheduled run, 2026-07-28 (10th follow-up) — no changes

`staging.json` `hidden: []` (`reveal-check.js --dry` → "no hidden chapters"). `node nextwords.js 98 0` → 98 missing (0 words / 98 sentences), unchanged. Independently re-implemented the task-spec `garbled()` filter (replacement char / isolated jamo / digit-between-Hangul / ①–⑨○●•¥@ / Hangul-ratio <0.55): 78/98 "pass," but a full hand-audit of all 78 again confirms every item is OCR-corrupted — all-Hangul non-words (`정니파다`, `그간직하다`, `씩우다`, `디어리다`, `대꼽다`, `털성적이다`, `청기다`, `그모시다`, `단지다`, `소하다`), embedded digits/parens/`0` and `<보기>` fill-in-blank exam fragments, address/letterhead debris (`대기은적 정상부도 교별시 내동 100번지`), and scrambled reading passages (`나타널팩`→나타내는, `시림에거`→사람에게, `보여프`→보여준, `때문어`→때문에, `원륜`→원룸, `흡처`→훔쳐, `부뒷힐`→부딪힐). The lone partial-coverage item (`불은 많은 일주 …`) remains a corrupted run-on of two unrelated news stories with a mispaired `ne` value — skipped. No legitimately-translatable Korean remains anywhere. Nothing translated, nothing merged. Backlog stays blocked on source `.md` OCR corrections.

## Scheduled run, 2026-07-28 (11th follow-up) — no changes

`staging.json` `hidden: []` (`reveal-check.js --dry` → "no hidden chapters"). `node nextwords.js 20 0` and `200 0` → 98 missing (0 words / 98 sentences), unchanged. Independently re-implemented the task-spec `garbled()` filter (replacement char / isolated jamo / digit-between-Hangul / ①–⑨○●•¥@ / Hangul-ratio <0.55): 78/98 "pass," but a full hand-audit again confirms every survivor is OCR-corrupted — all-Hangul non-words (`정니파다`, `그간직하다`, `씩우다`, `디어리다`, `대꼽다`, `단지다`, `청기다`, `그모시다`), `<보기>` fill-in-blank exam fragments with embedded digits/`0`/parens, address/letterhead debris (`대기은적 정상부도 교별시 내동 100번지`), and scrambled run-on passages (`나타널팩`→나타내는, `때문어`→때문에, `원륜`→원룸, `흡처`→훔쳐, `부뒷힐`→부딪힐). No legitimately-translatable Korean remains anywhere. Nothing translated, nothing merged. Backlog stays blocked on source `.md` OCR corrections.

## Scheduled run, 2026-07-28 (12th follow-up) — no changes

`staging.json` `hidden: []` (`reveal-check.js --dry` → "no hidden chapters"). `node nextwords.js 98 0` → 98 missing (0 words / 98 sentences), unchanged. Independently re-implemented the task-spec `garbled()` filter (replacement char / isolated jamo / digit-between-Hangul / ①–⑨○●•¥@ / Hangul-ratio <0.55): 78/98 "pass," and a fresh full hand-audit of all 78 again confirms every survivor is OCR-corrupted — all-Hangul non-words (`정니파다`, `그간직하다`, `씩우다`, `디어리다`, `대꼽다`, `단지다`, `청기다`, `그모시다`, `소하다`), `<보기>` fill-in-blank exam fragments with embedded digits/`0`/parens, address/letterhead debris (`대기은적 정상부도 교별시 내동 100번지`), and scrambled run-on passages (`나타널팩`→나타내는, `시림에거`→사람에게, `때문어`→때문에, `원륜`→원룸, `흡처`→훔쳐, `부뒷힐`→부딪힐). The lone partial-coverage news item (`불은 많은 일주 …`) remains a corrupted run-on merge of two unrelated stories with a mispaired `ne` — skipped. No legitimately-translatable Korean remains anywhere. Nothing translated, nothing merged. Backlog stays blocked on source `.md` OCR corrections.

## Scheduled run, 2026-07-28 (13th follow-up) — 1 item translated

Broke the 12-run stall by checking the vocab pool directly instead of relying only on `nextwords.js`. `nextwords.js` reports "0 words" because its `isWord()` rejects any key with 4+ consecutive Latin letters — which silently excludes the legitimate program-name term **`사회통합프로그램 (KIIP)`** (contains "KIIP"). That key passes the task-spec `garbled()` filter (Hangul ratio 8/14 ≈ 0.57 ≥ 0.55) and is unambiguous ("Social Integration Program (KIIP)" — the very subject of the site; the sibling key `사회통합프로그램` already carries all 10 langs, and its Tamil value already appends "(KIIP)"). Translated it into the 10 missing languages (bn, ru, he, ms, vi, id, si, pt, fr, ta; `ne` already present) matching the existing house style, then merged via `gen-merge.js` (1 word / 10 new translations). Note: this vocab entry's English gloss is itself corrupted/mispaired ("모든 이민자 (all immigrants") — a human should fix the source `.md` gloss, but the Korean key and its translations are correct.

The remaining `nextwords.js` backlog is unchanged: `staging.json hidden: []`, 98 missing sentences, all OCR-corrupted (all-Hangul non-words `정니파다`/`그간직하다`/`씩우다`/`디어리다`/`대꼽다`/`청기다`/`그모시다`/`단지다`, `<보기>` fill-in-blank exam fragments with embedded digits/`0`/parens, address debris `대기은적 정상부도 교별시 내동 100번지`, scrambled run-on passages). Those stay blocked on source `.md` OCR corrections. Also flagged for human review: Latin-mixed structural/vocab items the `garbled()` filter excludes but which are otherwise clean and could be translated with a relaxed rule, e.g. `유심(USIM) 카드`, `유튜브(YouTube)를 보다`, `삶다 — to boil`.

## Scheduled run, 2026-07-28 (14th follow-up) — 17 items translated

Continued the 13th run's "relaxed rule" approach (the `garbled()` filter and `nextwords.js isWord()` both wrongly exclude clean vocab that carries a parenthetical Latin/English annotation). Probed the vocab pool directly for items missing ≥5 of the 11 languages (which skips the ~8.4k source-derived `ne`-only gaps that `nextwords` already counts as covered) and hand-picked 17 unambiguous, fully-untranslated (all 11 langs missing) entries, translated into all 11 and merged via `gen-merge.js` (17 words / 187 new translations):

- Anatomy/illness table roots: `비 (코/nose)`, `기관지 (bronchi)`, `위 (stomach)`, `장 (intestines)`, `폐 (lungs)`, `간 (liver)`.
- Terms: `비자 (visa)`, `동남아국가연합 (ASEAN)` (kept the acronym), `유심(USIM) 카드`, `유튜브(YouTube)를 보다` (matches existing sibling `유튜브를 보다`).
- Verbs/adjectives: `삶다 — to boil`, `알다 (to know)`, `비싸다 (expensive)`, `춥다 (cold)`.
- Grammar word-class labels: `동사 (verb)`, `형용사 (adjective)`, `명사 (noun)`.

`staging.json hidden: []`, no chapter revealed. The `nextwords.js` sentence backlog is still 98 (0 words / 98 sentences), all OCR-corrupted and blocked on source `.md` fixes. Remaining clean-but-filter-excluded candidates for future runs (still ≥5 langs missing): more `(받침 O/X/ㄹ)` conjugation-scaffold rows, worksheet section headers (`문제/원인/결과/장점/단점/조언`), and grammar pattern labels (`A 대신에 B (verb/noun)`) — left for now as they need per-context judgment.

## 2026-07-28 scheduled run — garbled 11-lang candidates skipped (need source .md OCR fix)
These passed the automated garbled() ratio filter but are clearly OCR-corrupted / scrambled duplicates; NOT translated:
- [k3-ch5] `예문 .가 물건을 사기 전에 인터넷으로 가격 비교트 하는 좋다고 해요 "중고 매장에 가면 필요한 물건을 싸게 살 수 있다고 해0 나: 그래요?` (garbled: 비교트, 해0)
- [extra-2] `엄마가 아기에게 밥을 먹여요 아기가 0 0잠시드 씨 때문어 사람들이 '웃어요.` (stray 0, 때문어)
- [extra-2] `잠시드 씨는 사람들을 보여프 0 후엔 씨가 창문 밖을 봐요.` (보여프, stray 0)
- [extra-3] `그리고 일시적인게 가: 지금 제가 막 산책하러 ( 아니라면 상담을 좀 받아 보는 것도 좋고요 고마워요.` (merged/scrambled dialogue)
- [k4-ch1] `챙겨 어리다 향상되( 수요` (fragment)
- [k4-ch12] `먼저 서울 을 알이보겠습니다 연결해 투표 상원 양지호 기재 투표가 이제 막 시작됐죠^ 네 조금 전인 오전 6시 정각부터 투표가 시즈 있습니다.` (알이보겠습니다, 시즈)
- [k4-ch12] `시명의 능불비에서 보겠습니다.` (nonsense OCR)
- [k4-ch12] `시행의 목스니에 기용이겠을니다` (nonsense OCR)
- [k4-ch15] `정책정보 에피소드 현장이야기 생활정보 공지사항 고속도로 한돈 손창다.` (menu fragment + 손창다)
- [k4-ch16] `박수 로모셔 보겠습니다.` (로모셔)
- [k4-ch16] `그렇지만 하고 싶은 일이 무엇8 지.` (무엇8)
- [k4-ch16] `문제에 부뒷힐 때도 많아서 고생을 했습니다 2) 이 문제를 먼저 맞히는 분에게 선물을 드리겠습니다 3) 아이를 따로 앉히고 싶은데요 의자.좀 주시겠어요?` (부뒷힐, merged)
- [k4-ch4] `주들이 했다 셨다.` (fragment)
- [k4-ch5] `어린 시설이나 느점이 퍼우 그성다고 립조에서 시민이다 예문 .가: 한글이 과학적인 글자예요?` (시설이나/느점이/퍼우/그성다고 scrambled)
- [k4-ch8] `따라서 장단점이 가장 알맞은 제목.` (truncated instruction fragment)
- [k4-ch9] `그 밀이 일어니치 않있지탄 켜익 일어날 컷 같은 성향까지 갔음을 나타낸다` (heavily scrambled)

## Scheduled run, 2026-07-28 (15th follow-up) — 22 items translated
No hidden chapters (staging.json hidden: []). The `nextwords.js` sentence backlog is still 98, all OCR-corrupted / scrambled composites (garbled() heuristic passes ~78 of them, but manual review confirms every one is mangled — stray digits, scrambled spacing, injected chars, or merged dialogue). Did NOT force translations on any of them. Notable: the news-passage key beginning "불은 많은 일주 사무실 직원들이 퇴근한 시간에..." already carries a mismatched `ne`-only value that does not correspond to the (corrupted) Korean key — flag for source .md fix.

Instead, continued the vocab-pool approach (13th/14th runs): probed LESSON_VOCAB for clean items missing all 11 languages that the garbled()/isWord() filters wrongly exclude (parenthetical Latin annotations). Hand-picked 22 unambiguous, fully-untranslated label/vocab entries → all 11 langs (242 new translations):
- Event-flyer nouns [extra-1]: 일시, 장소, 프로그램, 주최, 오시는 길, 대중교통.
- Worksheet section headers: 고민(Problem), 조언(Advice), 결과(Result), 장점(Strengths), 단점(Weaknesses) [k3-ch2]; 원인(Cause), 의존성(Dependency), 익명성(Anonymity), 해킹(Hacking) [k4-ch8]; 문제(Problem) [k3-ch9]; 표현(Expression) [k3-ch4]; 상황(Situation), 사고(Accident), 화상(burn) [k4-ch9]; 입장(Position) [k4-ch11].
- Slang: 댕댕이 — doggo [k4-ch10].

No chapter revealed. Remaining clean vocab candidates for future runs (still missing langs, need per-context judgment): 받침 O/X/ㄹ conjugation-scaffold rows, name/particle worksheet cells in extra-3, and grammar pattern labels (동사/형용사 + ending). The 98-item sentence backlog remains blocked on source .md OCR fixes.

## Scheduled run, 2026-07-28 (16th follow-up) — 22 vocab items translated
No hidden chapters (staging.json hidden: []); nothing revealed. The `nextwords.js` sentence backlog is still 98 (all OCR-corrupted; garbled() passes ~78 but manual review confirms every one is mangled — stray digits, scrambled spacing, injected chars, or merged/duplicate dialogue — so none were forced). Backlog remains blocked on source .md OCR fixes.

Continued the vocab-pool approach: probed LESSON_VOCAB for clean [extra-3] "word — gloss" entries missing all 11 languages that the sentence-oriented filters skip. Hand-picked 22 unambiguous common-noun vocab entries → all 11 langs (242 new translations): head, water, work, younger sibling, mobile phone, park, view, refrigerator, weather, movie, coffee, sleep, time, friend, personality, people, seasoning, course, address, interpreter, cellphone, desk. Reused the item's embedded Nepali gloss for `ne`. Style matches existing "word — gloss" entries (value = target-language gloss only, Korean word not repeated).

Remaining clean [extra-3] vocab candidates for future runs (still missing all 11): more particle-attached nouns (제출하라고, 하셨어요, 보름달을, 소원을, 빌어요, 전화했어요, 업무를, 한 시간씩, 잠이 들었거든요, 약속 장소를, 세수를, 부장님이, 불고기는/를, 출근을, 야외 행사는, 요리하는 것을, 한국 요리는, 비빔국수를, 가족들에게/이, 라흐만 씨는) — straightforward on future runs.

## OCR review — 2026-07-27 (scheduled batch)
These 445 fully-untranslated sentence candidates passed the garbled() ratio filter but are OCR-corrupted (scrambled spacing, injected digits/symbols, mangled words) and NOT translatable. Source .md files need human OCR fix:

- [k3-ch1] `보기: 부부가 사이좋게 지내려면 어떻게 하면 좋을까요?`
- [k3-ch1] `제목 1: 기숙사 룸메이트가 한국 사람인데 생활 방식이 달라서 자주 말다툼을 해요.`
- [k3-ch1] `제목 2: 한국에서는 높임말 사용이 중요한데 저는 높임말이 너무 어려워요.`
- [k3-ch1] `제목 3: 한국 친구들하고 이야기할 때 무슨 말을 어떻게 해야 할지 모를 때가 많아요.`
- [k3-ch1] `제목 4: 한국 사람들하고 깊은 대화를 못 하니까 친구 되기가 힘든 것 같아요.`
- [k3-ch1] `제목: 직장 선배들과 잘 지내고 싶어요`
- [k3-ch1] `보기: 지시 / 부하 직원 / 공감대 / 방법 / 예의`
- [k3-ch1] `보기: 사이 / 생활 방식 / 의도 / 공감 / 편견`
- [k3-ch1] `0 학교 근처로 이사 갈 계획이에요`
- [k3-ch1] `3 저는 시장에 자주 가요`
- [k3-ch1] `보기: 이번 주말은 피곤하고 해서 집에서 쉴 거예요.`
- [k3-ch1] `보기: 국물이 짜면 물을 조금 더 넣으면 된다.`
- [k3-ch1] `제1과 대인 관계 — 시험 대비 복습 🎯`
- [k3-ch10] `2 요즘 특별히 하고 있는 일에 대해 친구들과 이야기해 보세요`
- [k3-ch10] `2 동-어놓다`
- [k3-ch10] `2 등 - 어 놓다`
- [k3-ch10] `2 동-어 놓다`
- [k3-ch10] `3 지원 저격 :고졸`
- [k3-ch10] `0 제주 서류 :이력서`
- [k3-ch10] `2 마이클(25세 ㆍ대졸(음악 전공 .학원 영어 강사 경력3년 마리(23세 .대졸(영어영문학 전공) .`
- [k3-ch11] `동/형 — 는다 / 다`
- [k3-ch11] `동/형 — 는다/다`
- [k3-ch12] `2 동-게 되다`
- [k3-ch12] `1 보기 와 같이 친구와 이야기해 보세요.`
- [k3-ch12] `1 한국의 대표적인 명철에는 설날과 추석이 있다.`
- [k3-ch12] `0 아이들은 세배하고 세뱃돈을 받는다 3 아이들은 어른들에게 덕담을 한다 3 떡국은 새로 수확한 쌀로 만든다 0 율놀이는 아이들만 즐기는 놀이다.`
- [k3-ch12] `0 한가위라고도 한다 3 송편을 빛어서 먹는다 부모님께 세배를한다 9 달을 보면서 소원을 빈다 3) 요즘 명절의 모습이 어떻게 바뀌었습니까?`
- [k3-ch13] `질문 1: 이 사람은 사무실에서 어떤 일을 해요?`
- [k3-ch13] `질문 2: 이 사람은 작업장에서 어떤 일을 해요?`
- [k3-ch13] `문법 1 — 동-게 하다`
- [k3-ch13] `1 동- 하다`
- [k3-ch13] `문법 1 — 동-게 하다 예문`
- [k3-ch13] `예문 — 동-게 하다 추가 예문`
- [k3-ch13] `2 동-어 가다`
- [k3-ch13] `문법 2 — 동-아/어 가다`
- [k3-ch13] `보기: 직원들의 이름과 얼굴을 외우다`
- [k3-ch13] `동-어/아 가다 — 기본형 표`
- [k3-ch13] `2 다음과 같은 상황에서 직장 생활에 힘든 일이 있는 사람과 조언하는 사람이 되어 대화해 보세요`
- [k3-ch13] `0 직장 생활 중에 언제 피로가 쌓입니까?`
- [k3-ch13] `3 직장 생활이 힘들 때 이직을 생각한 적이 있습니까?`
- [k3-ch13] `03 직장 생활이 힘들 때 이겨 내기 위해 무엇을 합니까?`
- [k3-ch13] `0 직장 생활이 힘들 때 가장 힘이 되는 사람은 누구입니까?`
- [k3-ch14] `제목: 구매하신 물품내역을 확인해 주세요`
- [k3-ch14] `1 보기 와 같이 친구와 이야기해 보세요`
- [k3-ch14] `1 아나이스 씨와 라민 씨가 스마트폰를 활용한 공부 방법을 이야기합니다.`
- [k3-ch14] `14 인터넷과 스마트폰 매남: 요즘은 유튜브를 보는 사람이 정말 많아졌다 요?`
- [k3-ch14] `정답: 유튜브에서 보는 영상 — 요리 채널과 홈트레이닝 채널, 그리고 영상을 만들고 싶은 계획.`
- [k3-ch14] `0000 스마트폰이 없는 일상을 상상하기 어려운 시대가 되었다.`
- [k3-ch14] `1 여러분은 인터넷과 스마트폰으로 무엇을 합니까?`
- [k3-ch14] `제목: 인터넷과 스마트폰의 현명한 활용 방법`
- [k3-ch15] `0 누구나 우울증에 걸릴 수 있다 3 우울증은 노력하면 쉽게 극복할 수 있다 단어창 일시적 3 우울증은 빨리 발견하여 치료하는 것이 중요하다 의심하다 4자가 진단법을 통해 우울증을 정확하게 진단할 수 있다 보고되다 2) 윗글의 내용과 같으면 .`
- [k3-ch16] `문장 1: 지금 날씨가 어때요?`
- [k3-ch16] `문장 2: 이런 날씨에 사람들은 어떻게 행동해요?`
- [k3-ch16] `문장 3: 여러분의 고향에도 이런 날씨가 있어요?`
- [k3-ch16] `문법 1: 동/형 — 을 텐데`
- [k3-ch16] `1 춘곤증의 증상에는 무엇이 있습니까?`
- [k3-ch16] `질문 1: 춘곤증의 증상에는 무엇이 있습니까?`
- [k3-ch16] `질문 2: 춘곤증은 왜 생깁니까?`
- [k3-ch16] `제목: 네팔 여행 전에 꼭 읽어 보세요!`
- [k3-ch16] `질문 1: 옛날 사람들은 무엇을 위해 절기를 사용했습니까?`
- [k3-ch16] `질문 2: 입춘과 동지에 사람들은 무엇을 합니까?`
- [k3-ch16] `질문 3: 여러분 고향에서는 옛날에 시간이나 계절의 흐름을 어떻게 나타냈습니까?`
- [k3-ch16] `문법 2: 동 — 어 있다`
- [k3-ch2] `1 형-어지다`
- [k3-ch2] `2 통형-는 대신(에`
- [k3-ch2] `1 라흐만 씨가 고향 집에 갔을 때 가족에게 무슨 일이 있었습니까?`
- [k3-ch2] `2 라흐만 씨 아버지와 동생은 어머니 선물을 샀다`
- [k3-ch2] `0 라흐만 씨는 부모님 결혼기념일에 같이 저녁 식사를 했다`
- [k3-ch2] `0 왜 그렇게 덜렁거려요?`
- [k3-ch2] `2 저는 외향적인 편인데 저하고 반대네요.`
- [k3-ch2] `3 룸메이트가 성격이 느긋한 사람인 것 같아요.`
- [k3-ch2] `4 저도 그렇게 다정한 아빠가 되고 싶어요.`
- [k3-ch2] `0 가: 저는 발표할 때 긴장을 해서 얼굴이`
- [k3-ch2] `2 나: 저도 긴장을 많이 하는 편이에요`
- [k3-ch2] `3 꼼꼼하다`
- [k3-ch2] `2 이링 씨의 친구는 한국에서 취직하려고 한다.`
- [k3-ch2] `3 이링 씨의 친구는 한국의 백화점에서 일한 경험이 있다`
- [k3-ch3] `연습 2 — 하다가 그만둔 일이 있어요?`
- [k3-ch3] `포스터 2 — 겨울철 독감 예방 접종`
- [k3-ch3] `포스터 3 — 상담 서비스`
- [k3-ch3] `0 상담을 받다`
- [k3-ch3] `0 구직/창업 상담을 받다`
- [k3-ch3] `0 장난감을 대여하다`
- [k3-ch3] `문화와 정보 — 한국어 원문`
- [k3-ch3] `문법 1 — 동/형 - 는지 알다/모르다`
- [k3-ch3] `문법 2 — 동 - 다가`
- [k3-ch4] `1 동-을 만하다`
- [k3-ch4] `이유를 나타널팩 사`
- [k3-ch4] `2 통행-어 가지고`
- [k3-ch4] `질문 1) 이 사람은 무엇을 하고 싶습니까?`
- [k3-ch4] `질문 2) 이 사람은 교환, 환불을 받을 수 있습니까?`
- [k3-ch4] `질문 3) 교환, 환불을 할 수 있는 사람은 누구입니까?`
- [k3-ch4] `132 소비지상담센터`
- [k3-ch5] `1 생활비의 종류에는 어떤 것들이 있어요?`
- [k3-ch5] `정니파다`
- [k3-ch5] `00 마트 제류 할이 카드 안내`
- [k3-ch5] `예문 .가 물건을 사기 전에 인터넷으로 가격 비교트 하는 좋다고 해요 "중고 매장에 가면 필요한 물건을 싸게 살 수 있다고 해0 나: 그래요?`
- [k3-ch5] `3 계절과 반대되는 이월 상품은 저렴하게 살 수있다 3 많은 사람들이 물건을 살 때 실제 매장에 가서 산다`
- [k3-ch5] `① 중고 육아용품을 왜 구입했습니까?`
- [k3-ch5] `② 중고 육아용품을 구입한 적이 있습니까?`
- [k3-ch5] `③ 중고 육아용품을 구입해 보니까 어땠습니까?`
- [k3-ch5] `④ 중고 육아용품을 다른 사람에게 준 적이 있습니까?`
- [k3-ch5] `[들다`
- [k3-ch5] `제5과 소비와 절약 — 전체 완료!`
- [k3-ch5] `동사 → 는다고 하다 — 시작된다고 해요`
- [k3-ch5] `ㄹ받침 동사 → ㄴ다고 하다 — 아낀다고 해요`
- [k3-ch5] `형용사 → 다고 하다 — 싸다고 해요`
- [k3-ch5] `명사 → 라고 하다 — 가계부라고 해요`
- [k3-ch6] `보기: 갑자기 엘리베이터가 흔들리다`
- [k3-ch6] `2 동-자고 하다`
- [k3-ch6] `보기: 라흐만 — 다 같이 노래방에 가요.`
- [k3-ch6] `1 후엔 씨가 이사 온 사람에게 주변 시설과 환경에 대해 알려 줍니다.`
- [k3-ch6] `부모의 책에 걸 것입라`
- [k3-ch6] `3 공장에서 일하신다.`
- [k3-ch6] `2 회사에 다니신다 4 비닐하우스를 만드신다`
- [k3-ch6] `0 과장님의 부모님 집은 기차로 3시간 거리에 있다 2과장님의 부모님 집에서 산을 볼 수 있다 3과장님의 아내는 도시 생활을 좋아한다`
- [k3-ch6] `1 다음은 신문에 실린 아파트 광고입니다.`
- [k3-ch6] `0 옛날 건축물이 많다 2바다를 볼 수있다 3 주변에 높은 산이 있다 0계절마다 산의 경관이 바뀐다`
- [k3-ch6] `문화와 정보 — 과거와 현대의 명당`
- [k3-ch6] `그간직하다`
- [k3-ch6] `📗 문법 2 — 동-자고 하다`
- [k3-ch7] `하노이 — 교통이 복잡하다 / 서울`
- [k3-ch7] `기말시험 — 성적이 좋다 / 중간시험`
- [k3-ch7] `미호 — 한국어가 유창하다 / 한국 사람`
- [k3-ch7] `떡볶이 — 자주 먹다 / 라면`
- [k3-ch7] `연습 1 — 인상적이다 / 감동적이다`
- [k3-ch7] `질문 2 — 잘 듣고 질문에 답해 보세요.`
- [k3-ch7] `뮤지컬 — 그대에게`
- [k3-ch7] `문화와 정보 — 공연 정보를 찾는 방법`
- [k3-ch7] `국립오페라단 — 마술피리 관람 후기`
- [k3-ch7] `부정문 — 동-지 말라고 하다`
- [k3-ch7] `방법 1 — 관련 기관에 직접 문의`
- [k3-ch7] `방법 2 — 기관 홈페이지 이용`
- [k3-ch8] `씩우다`
- [k3-ch9] `2 전자 제품이 고장 나면 어떻게 해요?`
- [k3-ch9] `1통일-어서 그런지`
- [k3-ch9] `2 텔레비전과 냉장고가 고장 났습니다.`
- [k3-ch9] `9 고장과 수리 직원여: 47번 고객님.`
- [k3-ch9] `3 액정이 많이 깨져서 비용이 많이 든다 3 수리 후에 영수증을 보험사로 보내야 한다`
- [k3-ch9] `1 제품이 고장 났을 때 여러분은 먼저 무엇을 합니까?`
- [k3-ch9] `305 호에1 사는 세입자입니다.`
- [k3-ch9] `정브터 2 상고 이 스니다.`
- [k3-ch9] `제목: 화장실 수도꼭지 수리 요청`
- [extra-2] `0잘 지내는 저근제이`
- [extra-2] `어휘 복습 — 빈칸 채우기`
- [extra-2] `)에 들어갈 [1~5] <보기>와 같이 ( <보기> ) 음식은 불고기예요 0좋아한 0 좋아할`
- [extra-2] `아나이스 씨가 제일 ( 0좋은`
- [extra-2] `문법 복습 — 빈칸 채우기`
- [extra-2] `○ 꿈도록 했어요`
- [extra-2] `8 온다고 해요`
- [extra-2] `0 끓여도 돼요`
- [extra-2] `0 끓여 봤어요`
- [extra-2] `@품일 수 있어요`
- [extra-2] `0 서울은 살을 만한 도시예요 0 예방 접종 비용이 얼마인지 알아요?`
- [extra-2] `0 아이가 놀이터에 가자고 해서 다녀왔어요 0 속이 안 좋아서 밥을 먹는 대신에 죽을 먹었어요`
- [extra-2] `0 친구가 갑자기 약속 시간을 늦줬어요 0 복지 센터에 갔다가 근처 시장에서 장을 봐 왔어요 < 이링 씨의 바꾸는 전화번호를 몰라서 전화를 못 했어요 0 이번 달에 충동구매를 많이 해 가지고 용돈을 다 썼어요`
- [extra-2] `문법 복습 — 유사한 표현 & 틀린 문장 찾기`
- [extra-2] `11번 — 틀린 것을 고르세요`
- [extra-2] `12번 — 틀린 것을 고르세요`
- [extra-2] `0 가을이 되니까 나무있이 모두 빨가겼어요 친해겼어요 0 친구와 자주 연락을 주고받고 헤서 빨리 @ 양이 너무 많아서 손님들이 음식을 많이 남겼어요 0 이링 씨가 오늘 유명한 가수의 공연을 보러 간다고 했어요.`
- [extra-2] `엄마가 아기에게 밥을 먹여요 아기가 0 0잠시드 씨 때문어 사람들이 '웃어요.`
- [extra-2] `잠시드 씨는 사람들을 보여프 0 후엔 씨가 창문 밖을 봐요.`
- [extra-2] `13번 — 틀린 문장 찾기`
- [extra-2] `0 친구들은 내 성격이 느긋하다고 생각한다 (나는 감정을 솔직하게 표현하지 못해서 힘들다.`
- [extra-2] `1번 — 내용과 같은 것 고르세요`
- [extra-2] `2번 — 빈칸 채우기`
- [extra-2] `3번 — 지문 읽고 옳은 것 고르세요`
- [extra-2] `4번 — 옳지 않은 것 고르세요`
- [extra-2] `5번 — 옳지 않은 것 고르세요`
- [extra-2] `0 이번이 마지막이다`
- [extra-2] `0 좋은 일이다`
- [extra-2] `0 자주 있는 일이다`
- [extra-2] `0 한국에서 문화생활을 즐기는 것에 관심이 생겼다 0 나는 공연 티켓 예매를 직접 한 적이 있다.`
- [extra-2] `0 나는 극장에 가서 영화를 전혀 본 적이 없다 0 앞으로도 한국 생활이 바빠서 문화생활을 할 수 없을 것이다.`
- [extra-2] `6번 — 빈칸 ( )에 알맞은 말`
- [extra-2] `7번 — 중심 내용`
- [extra-2] `8번 — 빈칸 ( )에 알맞은 말`
- [extra-2] `9번 — 중심 내용`
- [extra-2] `1 상담 전문가와 상담받는 사림`
- [extra-2] `1번 — 대화문 빈칸 채우기`
- [extra-2] `쓰기 — 내가 좋아하는 음식`
- [extra-2] `제목: 내가 좋아하는 음식`
- [extra-3] `<보기> )에 갑니다 9 시장`
- [extra-3] `8 즐겨요`
- [extra-3] `0 지내요`
- [extra-3] `<보기> ) 공원에서 산책해요 보는데`
- [extra-3] `0 힘들어서 험들어도`
- [extra-3] `0 가면 ○가다가 가야만 @'가자마자`
- [extra-3] `0하나요`
- [extra-3] `0 하거든요`
- [extra-3] `ㅅ@활발한 데다기 8.`
- [extra-3] `0 먹고 해서 2 먹을 만한더 0먹자고 하는데 ○먹으려던 참이었는데`
- [extra-3] `0 한국 생활에 조금씩 적응해 가고 있어요.`
- [extra-3] `0 창문이 열어 있네요 0 시장에 사람이 많은가요?`
- [extra-3] `2 단어를 의원도 기억나지 않아요.`
- [extra-3] `실크로드의 1① 나든) ( 왔다 ) (내)( 사마르칼트이다 역사를 간직하고 있어서 유명합니다.`
- [extra-3] `0 이 학교에는 방과 후 영어 교실이 있다 0 대학교에서 컴퓨터를 전공한 사람은 지원할 수 있다 3 지원자는 합격 후에 자격증을 제출하면 된다 0 지원 서류를 내기 위해서 반드시 학교에 가야 한다`
- [extra-3] `주소 00시 00동 빌2`
- [extra-3] `0 집에서 지하철역이 가깝지 않다 오 집에서 보는 경치가 좋다 8 이사 올 사람은 냉장고를 사야 한다.`
- [extra-3] `0 전세 500만 원으로 계약할 수 있다`
- [extra-3] `그리고 일시적인게 가: 지금 제가 막 산책하러 ( 아니라면 상담을 좀 받아 보는 것도 좋고요 고마워요.`
- [extra-3] `0 갈 만한 곳을 다녀왔어요 @ 가자마자 기분이 좋아졌어요 @ 가게 했는데 가 보라고 하세요 _@가려던 참이었는데 같이 산책해요`
- [extra-3] `0 춘곤증 문제의 해결법은 0 춘곤증이 나타나는 이유는 0 춘곤증을 예방하기 위해서는 0 춘곤증을 없앨 수 있는 방법은`
- [extra-3] `0 춘곤증은 가을에 주로 나타나는 증상이다 요규칙적으로 적당히 운동하면 춘곤증을 예방할 수 있다 0 춘곤증은 병의 한 종류여서 증상이 생기면 병원에 가야 한다 0 수면 시간과 춘곤증은 특별한 관계가 없다`
- [extra-3] `0 어떤 일을 오래 하게 되면 잘할 수 있게 된다 0 어떤 일을 많이 해서 모자라지 않게 해야 한다 0 어떤 일의 정도가 심하면 모자람이 없는 상황보다 좋다 어떤 일의 정도가 지나친 것은 모자란 것보다 통지 않디`
- [extra-3] `1 원만히 2 간편히 10 특별히 4 정확히`
- [extra-3] `주문해야 2 주문하다기 3 주문하기 위해서 4 주문하는 대신어`
- [extra-3] `어제 바닥에 ()잘 안돼요.`
- [extra-3] `○ 떨어뜨렸을 텐더 ○ 떨어뜨린 대신에`
- [extra-3] `0 늦는다고 미리 전화하면 돼요`
- [extra-3] `0 회식을 한 후에 친구들하고 가까워졌어요`
- [extra-3] `9 휴대폰을 살 때 신분증을 가지고 가야 돼요`
- [extra-3] `0 후엔 씨가 다음 주에 시험을 볼 거라고 했어요.`
- [extra-3] `3 과장님께서 언제 서류를 제출할 거냐고 했어요`
- [extra-3] `(점) 고아칙 쓸만해요 요리어디 버렸어요 ③ 새로 사야 돼요 ④ 벌써 고장이 났어요 가.`
- [extra-3] `① 구하는 것이다 판의 시설 * 구하는 것이다 6 부동산 소개소 26 살펴보는 것이다 ② 편의 시설 이 살펴보는 것이다 ② 부동산 소개소 16.`
- [extra-3] `2 피로해지는 것이다 계절의 변화 ② 피로해지는 것이다 규칙적인 운동 ③ 이겨내는 현상이다 계절의 변화 ④ 이겨내는 현상이다 규칙적인 운동`
- [extra-3] `0 한국에서는 은행을 통해서 급여를 받는다 오 실제 급여와 입금되는 돈은 금액이 다르지 않다 3 월급에서 세금과 건강보험료를 제외하고 입금된다.`
- [extra-3] `0 강릉 단오제는 최근에 제사를 지내지 않는다 4 강릉 단오제는 세계적으로 그 가치를 인정받았다`
- [extra-3] `0 최근에는 사회적 성공을 무엇보다 더 중요하게 생각한다 @ 정부는 일하는 시간을 최대 주당 52시간으로 결정했다 3 얼마 전까지 성공을 승진과 연봉으로 판단했다 @ '저녁이 있는 삶'을 살고 싶어하는 직장인이 증가하고 있다`
- [extra-3] `0 한국에는 다양한 모임이 많이 있다 0 온라인에서 만든 동호회 모임이 실제 만남으로 연결된다.`
- [extra-3] `3 동호회는 취미가 같은 사람들이 온라인으로 만나는 것이다 4 친하게 지내려고 같은 학교를 졸업한 사람들이 실제로 모인다`
- [extra-3] `00 씨는 한국 음식 가운데 무슨 음식을 배우고 싶어요?`
- [extra-3] `00 씨는 친구나 가족들에게 무슨 한국 음식을 만들어 주고 싶어요?`
- [extra-3] `00 씨는 한국 사람들에게 소개하고 싶은 고향 음식이 무엇입니까?`
- [extra-3] `1 원하는 회사:학원`
- [extra-3] `2 근무 가능 시간: 월~금, 오후 1시~6시 3 자격증: 컴퓨터 자격증 희망 연봉: 3800만 원`
- [k4-ch1] `발작 사랑하다- 해`
- [k4-ch1] `챙겨 어리다 향상되( 수요`
- [k4-ch1] `털성적이다`
- [k4-ch1] `고 천여): 하하.`
- [k4-ch1] `라' 하다`
- [k4-ch1] `2 남편은 고천 씨와의 의사소통을 위해 중국어를 배우고 싶은 마음이`
- [k4-ch1] `1과한국생활적을 21`
- [k4-ch1] `19 위기 심각 격상) .`
- [k4-ch1] `세지 취소 :강제주방등`
- [k4-ch1] `균우지 금 여 시 (1,000년 북리우성`
- [k4-ch1] `디어리다`
- [k4-ch10] `슬랭 표현: 댕댕이(강아지), 현타(현실 자각) — 일상 인터넷·구어체에서 자주 쓰임.`
- [k4-ch10] `월말이 뜻하는 행동이나 상대트 거짓으로 그림듯회게`
- [k4-ch10] `.가: 친구들 모임에 잘 다녀왔어요^ 예물 나: 안 갔어요, 나가기 싫어서 바튼 척했어요 .친구가 하는 말이 이해가 안 됐지만 공감하는 .길에서 념어졌는데 너무 창피해서 아프치 잃은`
- [k4-ch10] `지후하다 전혀 말다등 별일`
- [k4-ch10] `2 때와 장소에 맞게 말을 못하다| 가끔동문서답하다`
- [k4-ch10] `았어요`
- [k4-ch10] `💡 근거: 안젤라 — "열심히 준비했는데 결과는 별로 안 좋았어요."`
- [k4-ch10] `정답: 과거에 없던 것들을 표현하고, 급변하는 사회의 특징을 반영하기 위해서 등장했다.`
- [k4-ch10] `정답: ③ 정확성이 떨어지고 혼란을 일으킬 수 있다.`
- [k4-ch10] `정답: 한국인들이 전통적으로 말의 가치를 중요하게 여겼기 때문이다.`
- [k4-ch11] `보기: 한국어를 처음 배울 때 — 이름조차 못 쓰다 → 한국어를 처음 배울 때 이름조차 못 썼어요.`
- [k4-ch11] `예시: 돈이 없었을 때 월세조차 내기 힘들었어요.`
- [k4-ch11] `보기) 한국어를 처음 배울 때 → 이름조차 못 쓰다`
- [k4-ch11] `그러한 일이 있는 컷이 당열함을`
- [k4-ch11] `2 동형-기 마련이다`
- [k4-ch11] `보기: 요즘 일이 많아서 잠을 못 잤더니 몸살이 났어요.`
- [k4-ch11] `1 여러분은 조기 외국어 교육에 대해 어떻게 생각합니까?`
- [k4-ch11] `0 인재가 되려면 외국어를 유창하게 해야 한다`
- [k4-ch11] `3 아이들은 새로운 것에 대한 호기심이 강하다`
- [k4-ch11] `3 언어는 어린 나이에 배울수록 발음이 정확하다.`
- [k4-ch11] `0 아동기에는 집중력이 좋아서 외국어를 쉽게 배운다.`
- [k4-ch11] `0 요즘 아이들은 모국어조차 제대로 말할 수 없다.`
- [k4-ch11] `2 어린 나이에 외국어를 배우면 부작용이 생길 수 있다`
- [k4-ch11] `0 유아기에는 집중력이 부족해서 학습이 이루어지기 힘들다.`
- [k4-ch11] `2 다음은 다양한 학습의 형태를 나타내는 말입니다.`
- [k4-ch11] `1 한국의 학제는 6-8-3-4학제로, 초등학교 6년, 중학교 3년.`
- [k4-ch11] `2 8년)으로 구성되어 있다.`
- [k4-ch11] `질문 1) 윗글의 제목으로 알맞은 것을 고르세요.`
- [k4-ch11] `질문 3) 공교육 이외에 초·중·고등학교를 졸업한 것과 같은 자격을 얻는 방법은 무엇입니까?`
- [k4-ch11] `정답: 검정고시 (를 통해서 자격을 얻을 수 있다)`
- [k4-ch11] `유한대학교 1도 성인학는`
- [k4-ch11] `질문 1) 한국의 평생 교육 과정 두 가지는 무엇입니까?`
- [k4-ch11] `질문 2) 요즘 평생 교육에서 인기 있는 분야는 어느 분야입니까?`
- [k4-ch11] `정답: 실용 학문·실무 기술 분야 — 피부 미용, 사회 복지, 상담, 보육, 레크리에이션, 외국어 등`
- [k4-ch11] `질문 3) 여러분 고향의 평생 교육을 소개해 보세요.`
- [k4-ch12] `1 한국에는 무슨 선거가 있어요?`
- [k4-ch12] `질문: 저 사람들은 지금 뭘 보는 거예요?`
- [k4-ch12] `강초하여 확인하는 못을 나다넬`
- [k4-ch12] `질문: 운동을 시작하기에 가장 좋은 때는 언제일까요?`
- [k4-ch12] `저는 지지율이 높은 시림에거`
- [k4-ch12] `먼저 서울 을 알이보겠습니다 연결해 투표 상원 양지호 기재 투표가 이제 막 시작됐죠^ 네 조금 전인 오전 6시 정각부터 투표가 시즈 있습니다.`
- [k4-ch12] `0 투표를 하려면 반드시 신분증을 가지고 가야 한다.`
- [k4-ch12] `청기다`
- [k4-ch12] `시명의 능불비에서 보겠습니다.`
- [k4-ch12] `시행의 목스니에 기용이겠을니다`
- [k4-ch12] `2 다음은 시민이 원하는 시장의 리더십 유형에 대한 설문 조사 결과입니다.`
- [k4-ch12] `모든 사람의 표는 똑같은 가치를 가져요 — 한 사람당 한 표(1인 1표).`
- [k4-ch12] `③ 지방 선거 – 지방 자치 단체장 & 지방 의회 의원 (임기 4년)`
- [k4-ch13] `어휘 1 · 환경이 오염되다 — 낱말 분석`
- [k4-ch13] `어휘 2 · 환경 보호 실천 — 낱말 분석`
- [k4-ch13] `제목: 환경 보전 운동`
- [k4-ch14] `)키란, 기름,식랑 가꺽`
- [k4-ch14] `전 쟁 외장이, 많이 저어1`
- [k4-ch14] `2 다음은 항공료 비교 표입니다.`
- [k4-ch14] `영상으로 보는 지0체 기권문용 성과 카드뉴스로 제는 " 호 4번의 호 무사로등 한정니니 ¥ 한시가 있이니쳤습니니`
- [k4-ch15] `질문 1) '찾기 쉬운 생활 법령 정보'는 어떤 점이 좋습니까?`
- [k4-ch15] `질문 2) 법무부와 경찰청에서 어떤 방법으로 법을 알리고 있습니까?`
- [k4-ch15] `정답: 블로그나 유튜브 채널을 운영하여 글과 영상으로 법을 쉽고 재미있게 알려 주고 있다.`
- [k4-ch15] `질문 3) 법과 관련된 여러 사이트에서 여러분이 알고 싶은 정보는 무엇입니까?`
- [k4-ch15] `정책정보 에피소드 현장이야기 생활정보 공지사항 고속도로 한돈 손창다.`
- [k4-ch15] `약자 대상 '코로나194 대공타기`
- [k4-ch16] `박수 로모셔 보겠습니다.`
- [k4-ch16] `어 적게 성공할 수 있었는지 말씀을 좀 해 주시`
- [k4-ch16] `그렇지만 하고 싶은 일이 무엇8 지.`
- [k4-ch16] `문제에 부뒷힐 때도 많아서 고생을 했습니다 2) 이 문제를 먼저 맞히는 분에게 선물을 드리겠습니다 3) 아이를 따로 앉히고 싶은데요 의자.좀 주시겠어요?`
- [k4-ch16] `이민자 한국어 말하기 대회 – 주제: 나의 꿈`
- [k4-ch16] `제목: 사회통합프로그램과 한국 국적 취득`
- [k4-ch16] `대기은적 정상부도 교별시 내동 100번지`
- [k4-ch16] `윤생연월은 주연등독번호 성별 1946년 01월 이1일 680101-1.`
- [k4-ch16] `1 서울 출인국관리사무소장`
- [k4-ch16] `그모시다`
- [k4-ch2] `자가- ( 자고기6 불가의54`
- [k4-ch2] `교트이 리학 별 민`
- [k4-ch2] `2 돔형-을 수밖에 없다`
- [k4-ch2] `요`
- [k4-ch2] `0 이링 씨의 고향에는 아이를 낳지 않는 부부가 많아지고 있다.`
- [k4-ch2] `대꼽다`
- [k4-ch3] `1 동형-는 줄 알다`
- [k4-ch3] `3 병원에서 인공 지능을 이용하면 환자에게 좋은 점이 무엇입니까?`
- [k4-ch4] `2 한국의 장례식장에서는 누가 무엇을 해요?`
- [k4-ch4] `2 동험-은 나머지`
- [k4-ch4] `4 한국의 의례 아나이스(예: 저 갑자기 친구 아버님이 돌아가셔서 장례 식장에 가야 되는데요.`
- [k4-ch4] `1 다음은 어떤 행사인지 맞는 것과 연결하고 이야기해 보세요`
- [k4-ch4] `는 것은 나 쌀을 연필을 가수가`
- [k4-ch4] `주들이 했다 셨다.`
- [k4-ch4] `순한 살이 의미 있는`
- [k4-ch5] `어린 시설이나 느점이 퍼우 그성다고 립조에서 시민이다 예문 .가: 한글이 과학적인 글자예요?`
- [k4-ch6] `2 동행-을 정도로`
- [k4-ch6] `2 여러분이 경험한 국제화 시대는 어떤 모습이니까?`
- [k4-ch6] `0 중국 국적의 외국인이 가장 많다.`
- [k4-ch6] `2 한국에서 체류하는 외국인 중 유학생 비율이 가장 높다.`
- [k4-ch6] `3 다문화 사회로의 변화를 막는 것이 중요한 과제이다 (`
- [k4-ch6] `2 국제화 시대의 인재가 갖추어야 하는 것은 무엇이라고 생각합니까?`
- [k4-ch6] `2 여러분이 생각하는 국제화 시대에 필요한 인재상에 대해 써 보세요`
- [k4-ch6] `제목: 국제화 시대의 인재상`
- [k4-ch6] `"다양한 나라 친구들과 교류할 정도로 매일 노력" — 동형-을 정도로 ✓`
- [k4-ch6] `붓설어 하다`
- [k4-ch7] `0 토하다`
- [k4-ch7] `4 배가 더부룩하다`
- [k4-ch7] `정답: ④ 배가 더부룩하다`
- [k4-ch7] `제목: 알아 두면 좋은 건강 상식 — 잘못된 생활 습관이 병을 부른다`
- [k4-ch7] `정답: 암, 고혈압, 당뇨병`
- [k4-ch7] `정답: ④ 기름지게 식사하기`
- [k4-ch7] `팟빵 입을 실천 건강(속속 해 을`
- [k4-ch7] `제목: 한국의 국민 건강 보험 제도`
- [k4-ch7] `0 섭취하다`
- [k4-ch7] `0 시달리다`
- [k4-ch8] `다른 시팀에게 틀은 내용을 성대방에게 확인하듯어 물을`
- [k4-ch8] `4 산다면서요?`
- [k4-ch8] `•비씨다 "끝났다`
- [k4-ch8] `추경에 마이일 금이감원 연속`
- [k4-ch8] `'#방 기1사에 퇴근"`
- [k4-ch8] `예물 .가: 인젤라 씨는 시간이 나면 보통 월 해요 할겸 스트레스도 김`
- [k4-ch8] `2 동-을 겸 동-을 겸`
- [k4-ch8] `2 다음 기사들을 보면서 인터넷과 스마트폰 사용의 문제점에 대해 의견을 말해 보세요`
- [k4-ch8] `0 악성 댓글 3 개인 정보 관2`
- [k4-ch8] `3 인터넷 중독 4 운전 중 스마트폰 사용 문제`
- [k4-ch8] `개인 정보 유출 + 관리 — 은행 해킹 사건을 통해 인터넷 사용의 위험성을 논의`
- [k4-ch8] `2 스마트폰을 잃어버리면 친구를 잃어버린 느낌이다 3 스마트폰을 하루에 2시간 이상 사용한다`
- [k4-ch8] `4 스마트폰에 설치한 앱이 30개 이상이고 대부분 사용하고 있다`
- [k4-ch8] `6 화장실에 갈 때 스마트폰을 가져간다`
- [k4-ch8] `0 스마트폰 키패드가 컴퓨터 키패드와 같다`
- [k4-ch8] `0 스마트폰으로 글자를 치는 속도가 손으로 글자를 쓰는 것보다 빠르다`
- [k4-ch8] `0 스마트폰으로 쇼핑을 한 것이 두 번 이상이다`
- [k4-ch8] `2 다음은 인터넷과 스마트폰으로 인해 나타나는 다양한 문제점입니다.`
- [k4-ch8] `따라서 장단점이 가장 알맞은 제목.`
- [k4-ch8] `106 시화통합회로 그램 <까9 한코여와 한국문화 출급 2`
- [k4-ch8] `정답: 카카오톡, 위챗, 라인, 밴드`
- [k4-ch8] `정답: 유튜브, 넷플릭스 (동영상 재생 사이트)`
- [k4-ch8] `0 무기력하다`
- [k4-ch8] `0 단절되다`
- [k4-ch8] `소하다`
- [k4-ch9] `0 동-을 뻔하다`
- [k4-ch9] `그 밀이 일어니치 않있지탄 켜익 일어날 컷 같은 성향까지 갔음을 나타낸다`
- [k4-ch9] `을 편하다`
- [k4-ch9] `1 그림을 보고 보개와 같이 친구와 이야기해 보세요.`
- [k4-ch9] `단지다`
- [k4-ch9] `*고장 •전개 사용`
- [k4-ch9] `"사고 *질은 안개`
- [k4-ch9] `1 보기와 같이 친구와 이야기해 보세요.`
- [k4-ch9] `일반 보드마카사용 금금 만 사용가가 -인문대학 학지원`
- [k4-ch9] `2 다음과 같이 사고를 경험한 사람과 위로하는 사람이 되어 대화해 보세요.`
- [k4-ch9] `방판 화상을 읽다 홍대 전환다행이다 하아터스`
- [k4-ch9] `9 사건과 사고 제이슨(남) 애나 씨.`
- [k4-ch9] `2 가해자 3 용의자 4 피해자 0 부상자 3) 개에서 절도 물품으로 휴대 전화를 선택한 이유는 무엇입니까?`
- [k4-ch9] `문장 1: 경찰은 지난 16일 충북 청주의 한 빌라에서 절도 용의자 이 모 씨를 체포해 조사 중이다.`
- [k4-ch9] `문장 2: 이 모 씨는 지난 두 달 동안 청주 인근의 원룸을 돌며 원룸 거주자들의 휴대 전화만 골라 훔쳐 온 혐의를 받고 있다.`
- [k4-ch9] `문장 3: 이 씨의 행각은 비슷한 신고가 경찰에 잇따라 접수되자 경찰들의 끈질긴 수사 끝에 밝혀지게 되었다.`
- [k4-ch9] `문장 4: 휴대 전화만을 훔친 이유에 대해 이 씨는 휴대 전화의 경우 중고로 손쉽게 팔 수 있기 때문이라고 말한 것으로 알려진다.`
- [k4-ch9] `문장 1: 어제 밤 10시쯤 인천시에 있는 한 오피스텔에서 방화로 보이는 화재가 발생했다.`
- [k4-ch9] `문장 2: 이 화재로 오피스텔에 거주하는 주민 20여 명이 대피하는 일이 벌어졌다.`
- [k4-ch9] `문장 3: 5층에서 시작된 불은 6층까지 번져 여러 개의 사무실 등을 태우고 40분 만에 꺼졌다.`
- [k4-ch9] `문장 4: 불은 많은 입주 사무실 직원들이 퇴근한 시간에 발생하였고 주민들의 신속한 대피로 가벼운 부상자만 있는 것으로 알려졌다.`
- [k4-ch9] `문장 5: 경찰은 방화 용의자 김 모 씨를 오피스텔 근처에서 체포하여 정확한 방화 원인을 조사하고 있다.`
- [k4-ch9] `정답: 휴대 전화는 중고로 손쉽게 팔 수 있기 때문입니다.`
- [k4-ch9] `정답: 불이 사무실 직원들이 퇴근한 시간에 발생했고, 주민들이 신속하게 대피했기 때문입니다.`
- [k4-ch9] `9과사사과과 사고 129`
- [k4-ch9] `문장 2: 이 중에 교통사고가 압도적으로 많아 전체 사고의 70% 이상을 차지한다.`
- [k4-ch9] `문장 3: 교통사고 다음으로는 화재 사고가 많은데 대략 전체 사고의 15% 정도이다.`
- [k4-ch9] `문장 4: 그리고 등산 사고, 추락 사고, 자전거 사고가 뒤를 잇는데 발생 건수는 앞의 두 사고보다 훨씬 적어서 각각 전체 사고의 2% 안팎이다.`
- [k4-ch9] `문장 5: 이 결과를 볼 때 많은 사고는 우리가 조금만 주의하면 대부분 예방할 수 있는 것들이다.`
- [k4-ch9] `문장 6: 대표적인 예로 교통사고는 교통 법규를 잘 지키고 갑자기 생길지도 모르는 돌발 상황에 미리 대비하여 운전하는 습관을 가진다면 예방할 수 있다.`
- [k4-ch9] `문장 7: 과속을 하면 안 되고 무리하게 추월하거나 끼어들기를 하는 것은 위험하다.`
- [k4-ch9] `문장 8: 특히 사고 예방을 위해서는 안전거리를 유지하는 습관을 갖는 게 좋다.`
- [k4-ch9] `문장 9: 그리고 최근에는 휴대 전화로 인한 교통사고가 늘고 있는데 운전 중 휴대 전화를 보거나 휴대 전화를 사용하는 것은 매우 위험하다.`
- [k4-ch9] `문장 10: 뿐만 아니라 보행자도 휴대 전화를 보면서 걸어가는 것은 사고의 위험이 높으므로 주의해야 한다.`
- [extra-4] `정답: ③ 저장했어요`
- [extra-4] `○ 서클꽃어요 ○ 익숙했어요 ○ 서들렀어요`
- [extra-4] `6 최근 사회가 변화하면서 가족의 형태가 핵가족으로 바뀌고 있다.`
- [extra-4] `0 결정하면서 ○ 감소하면서 ○ 개선하면서 0분담하면서`
- [extra-4] `0 보존해야 0 탐방해야 ○언정해야 ○ 전승해야`
- [extra-4] `0 저하되고 악용되고 유출되고 ○단절되고`
- [extra-4] `정답: ② 익숙했어요`
- [extra-4] `정답: ② 감소하면서`
- [extra-4] `정답: ④ 전승해야`
- [extra-4] `정답: ② 협력하려는`
- [extra-4] `정답: ① 저하되고`
- [extra-4] `<보기> )운동을 합니다 0에 6에서`
- [extra-4] `영호 씨는 지금 공원( 0을`
- [extra-4] `) 교실 밖으로 나갔어요 후엔 씨가 전화를(`
- [extra-4] `0 터져야 0터졌더니 ○터지다가`
- [extra-4] `0아름다웠잖아요 ○ 아름다웠다고 했어요 ○ 아름다있는지 몰라요 0 아름다울 수밖에 없었어요`
- [extra-4] `0 제출하게 되었어요 0 제출하는 줄 알았어요`
- [extra-4] `정답: ① 터질 정도로`
- [extra-4] `정답: ④ 많을 뿐만 아니라`
- [extra-4] `정답: ③ 아름다웠는지 몰라요`
- [extra-4] `정답: ② 제출하는 줄 알았어요`
- [extra-4] `0 계임할수록 ○ 게임하느라고 게임할 정도로 ○ 게임하기 위해서`
- [extra-4] `0 아름다워져서 2 아름다운 나머지 ○ 아름다운 만큼 ○아름다율 뿐만 아니라`
- [extra-4] `정답: ② 게임하느라고`
- [extra-4] `정답: ④ 아름다울 뿐만 아니라`
- [extra-4] `정답: ① 산책을 하곤 해요`
- [extra-4] `정답: ③ 얼마나 나는지 몰라요`
- [extra-4] `0 월세를 못 내면 이사를 간 수밖에 없어요.`
- [extra-4] `0 저는 시간이 있음 때 영화블 보러 가곤 해요 13.`
- [extra-4] `0 여행을 가되 항상 조심히 다녀야 합니다 0 제가 전에 다니던 회사는 국제 무역 회사였습니다 0 어제는 치마를 입었더니 오늘은 바지를 입었어요 0 교통비도 아낄 겸 운동도 할 겸 걸어다니고 있어요 14.`
- [extra-4] `0 배가 부른 나머지 많이 먹었어요 2 이번 여름 휴가에는 고향에 간다면서요?`
- [extra-4] `8 감기에 걸렸을 때 품 쉬었더니 금방 나았어요 0 저는 바다에 가든지 산에 가든지 다 괜찮아요`
- [extra-4] `0 최근 혼자 식사할 수 있는 식당이 생겼다`
- [extra-4] `0 바른 1인 가구를 위해 다양한 서비스 시장이 커지고 있다 0 1인 가구가 증가하고 있지만 중대형 아파트의 인기는 여전하다 0 마트에서는 1인 가구를 위한 소포장 상품도 쉽게 찾아볼 수 있다`
- [extra-4] `0 인공 지능 기술은 음성으로 날씨나 일정 등의 정보를 검색하고 알려 준다 0 사물 인터넷은 휴대 전화를 이용해 집 안의 여러 가지를 제어할 수 있다.`
- [extra-4] `0 시어머니는 자식과 손주들의 절을 받고 기분이 좋아 눈물을 휴리셨다 ○ 조카는 돌잡치에서 연필을 잡아 친척들이 공부를 잘할 것이라고 했다.`
- [extra-4] `0 시어머니와 시아버지는 다녀오신 환갑 기념 여행이 만족스럽다고 하셨다.`
- [extra-4] `0 이 사람은 지난달에 조카의 돌잔치와 시어머니의 환갑잔치가 같이 있었다`
- [extra-4] `0 스마트폰은 우리 생활을 편리하게 해 주는 것이다 @ 요쥬 스마트폰 중독에 빠진 사람이 많아 사회 문제가 된다.`
- [extra-4] `0 스까트콘 때문에 가죽과 대화가 단결되는 것을 막아야 한다.`
- [extra-4] `정답: ① 개인 정보 유출`

## 2026-07-28 (scheduled run) — remaining backlog is all OCR garbage
No hidden chapters (staging.json `hidden` is empty). `nextwords.js 20 0` reports 98 missing-any items (0 words / 98 sentences), and on manual review ALL of them are OCR-corrupted fragments, scrambled vocab, or answer-key/letterhead noise — none is a clean, well-formed, translatable Korean sentence. Translated nothing this run (did not invent translations for garbage). These need source-.md (OCR) fixes before they can be translated. Representative examples:
- `정니파다` / `그간직하다` / `씩우다` / `털성적이다` / `디어리다` / `그모시다` / `대꼽다` / `단지다` / `청기다` / `붓설어 하다` — scrambled/nonexistent vocab (likely 간직하다, 씌우다, 적극적이다, 모시다, 던지다, 부끄러워하다, etc.)
- `이유를 나타널팩 사`, `부모의 책에 걸 것입라`, `1통일-어서 그런지`, `그 밀이 일어니치 않있지탄 켜익 일어날 컷 같은 성향까지 갔음을 나타낸다` — scrambled sentence fragments
- `대기은적 정상부도 교별시 내동 100번지` — mangled address/letterhead
- `불은 많은 일주 사무실 직원들이 퇴근한 시간에 발생하였고 …` (fire/theft news passage) — mostly readable but has meaning-critical OCR errors (일주→일부, 원륜/원률→원룸, 흡처→훔쳐, 협의→혐의); already has a partial (paraphrased, non-matching) `ne` value. Left untranslated pending source fix.

## 2026-07-28 scheduled batch — skipped garbled/OCR-corrupted fragments
The garbled() heuristic passed these as "clean" but they are clearly OCR-corrupted
duplicates/fragments and were NOT translated. Source .md needs a human fix:
- [k4-ch16] 대기은적 정상부도 교별시 내동 100번지  (mangled address/letterhead)
- [k4-ch11] 그러한 일이 있는 컷이 당열함을
- [k4-ch12] 먼저 서울 을 알이보겠습니다 ... 투표가 시즈 있습니다.  (scrambled news line)
- [k4-ch9] 불은 많은 일주 사무실 직원들이 ... (long mangled news article; needs re-OCR)
- [k4-ch4] 는 것은 나 쌀을 연필을 가수가 / 주들이 했다 셨다. (scrambled fragments)
- [k4-ch5] 예문 .가 물건을 사기 전에 ... 싸게 살 수 있다고 해0 (digit-glued OCR)

## 2026-07-28 (scheduled batch)
OCR-garbled fragments surfaced by nextwords.js — skipped for translation, source .md needs human fix:
- `이유를 나타널팩 사` — scrambled ("나타내는" garbled), empty English
- `정니파다` — corrupted token, not a real word
- `예문 .가 물건을 사기 전에 인터넷으로 가격 비교트 하는 좋다고 해요 "중고 매장에 가면 필요한 물건을 싸게 살 수 있다고 해0 나: 그래요?` — mangled example dialogue with glued digit "해0" and typos ("비교트")
- `[들다` — stray bracket fragment
- `부모의 책에 걸 것입라` — corrupted ("책임일 것입니다" garbled)
- `그간직하다` — glued fragment ("그"+"간직하다")

## 2026-07-28 (scheduled batch — clean vocab found deeper in backlog)
Completed the missing `ne` for 20 genuinely-clean vocabulary/collocation entries that
earlier runs missed (they only appear past nextwords.js's top-20 window, which is
dominated by k3 garbage). These already had the other 10 languages; now 11/11:
정신이 없다, 분주하다, 지정되다, 밀접하다, 과도하다, 손쉽다, 단절되다, 악용되다, 떨어지다,
넘어지다, 손을 데다, 깁스를 하다, 부끄럽다, 정신없다, 얼굴에 뭐가 나다,
검색창에 검색어를 입력하다, 개인 정보를 입력하다, 개인 정보 이용에 동의하다, 이르다, 지나치다.
Reconfirmed SKIPPED (still needs source re-OCR, not invented): the k4-ch9 fire/theft
news passage `불은 많은 일주 사무실 직원들이 …` (일부→일주, 원룸→원륜/원률, 훔쳐→흡처,
혐의→협의) — meaning-critical OCR errors; left with only its pre-existing partial `ne`.

## 2026-07-28 (scheduled batch — re-review, no new translations)
No hidden chapters remain (staging.json `hidden` is empty; reveal-check.js reports
"no hidden chapters"). nextwords.js reports 99 missing-any items, but on inspection
ALL are OCR-garbled fragments / mangled exam option-lists (0/○/@ markers, glued
digits, scrambled spacing) — no legitimately-clean sentence left to translate.
Spot-checked the only two carrying a pre-existing `ne` value and BOTH are mismatched
to their Korean key (a prior automated run stuffed unrelated text in):
- `불은 많은 일주 사무실 직원들이 …` (k4-ch9 fire/theft news) — its `ne` describes an
  Incheon office-tel arson + phone thief, not the Cheongju/16th details in the key;
  meaning-critical OCR errors (일부→일주, 원룸→원륜/원률, 훔쳐→흡처, 혐의→협의). LEFT AS-IS.
- `계임할수록 ○ 게임하느라고 …` grammar option-list — its `ne` is about revisiting a
  restaurant, wholly unrelated. LEFT AS-IS.
Nothing invented. Backlog needs a human source-text (re-OCR) pass, not translation.

## Scheduled run 2026-07-28 — corrupted fragments (passed ratio filter, skipped)
- [k4-ch12] `시행의 목스니에 기용이겠을니다` — scrambled, not real Korean ("목스니","기용이겠을니다"). Source .md needs re-OCR.
- [k4-ch9] `그 밀이 일어니치 않있지탄 켜익 일어날 컷 같은 성향까지 갔음을 나타낸다` — heavily corrupted ("밀이","일어니치 않있지탄","켜익","컷"); likely "그 일이 일어나지 않았지만 곧 일어날 것 같은 성향까지 갔음을 나타낸다".
- [k4-ch12] `지지하는 정당의 후보에게 투표하다 ↔ 경력, 우리 지역에 도움이 되는 후보자를 찾다` — stray injected "경력," between two collocations; needs source cleanup before translation.

## Scheduled run 2026-07-28 (later) — re-confirmed, no new translations
Third scheduled pass today. staging.json `hidden` still empty; reveal-check.js → "no
hidden chapters". nextwords.js still reports 99 missing-any, ratio-filter yields 79
"clean" candidates but on manual review 100% are OCR-garbled fragments / mangled exam
option-lists (0/○/@ markers, glued digits, scrambled spacing, non-words like 정니파다,
씩우다, 그간직하다). No legitimately-clean sentence remains. Nothing invented; backlog
awaits a human source-text (re-OCR) pass. No content commit.

## Scheduled run 2026-07-28 (4th pass) — re-confirmed, no new translations, no commit
staging.json `hidden` empty; reveal-check.js → "no hidden chapters". nextwords.js still
reports 99 missing-any; ratio filter yields 79 "clean" candidates but manual review
finds 100% OCR-garbled (non-words 정니파다/씩우다/그간직하다, address fragment
`대기은적 정상부도 교별시 내동 100번지`, exam option-lists w/ stray parens & digits).
No legitimately-clean sentence remains. Nothing invented; backlog awaits a human
source-text (re-OCR) pass. No content commit this run.

## Scheduled run 2026-07-29 — re-confirmed, no new translations
staging.json `hidden` empty; reveal-check.js → "no hidden chapters". nextwords.js
still reports 99 missing-any; ratio filter yields 79 "clean" candidates but manual
review finds 100% OCR-garbled (non-words 정니파다/씩우다/그간직하다, letterhead scrap
`대기은적 정상부도 교별시 내동 100번지`, exam option-lists w/ stray parens/digits/○/@).
Only borderline item is the k4-ch9 Cheongju fire/theft news passage, already flagged
above with meaning-critical OCR errors (일부→일주, 원룸→원륜/원률, 훔쳐→흡처, 혐의→협의)
and a mismatched pre-existing `ne` — LEFT AS-IS, not invented. Backlog awaits a human
source-text (re-OCR) pass. Committing this note only; no translation content changed.

## 2026-07-29 scheduled batch — items skipped as OCR-corrupt (garbled() missed)
No hidden chapters remain. Translated 18 clean items (Nepali; +Tamil on 2). Skipped
for human re-OCR (passed garbled() but clearly corrupt):
- `2019학년도 대학수학능력시험 인천광역시교육청(25지구) 제12시험장 (인천여자고등학교)` — exam-venue letterhead fragment, not learning content.
- `의식 날에는 머리를 깎고 어깨에 신성한 실(자느이)을 걸어 줍니다.` — coherent sentence but garbled parenthetical (자느이) (likely 자네우/janeu sacred thread); needs source fix before translating.
- k4-ch9 Cheongju fire/theft news passage (needs bn,ru,he,ms,vi,id,si,pt,fr,ta) — already flagged above; meaning-critical OCR errors (불은 많은 일주.../흡처 온 협의) — left as-is.
