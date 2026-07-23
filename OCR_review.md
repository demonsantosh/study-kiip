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
