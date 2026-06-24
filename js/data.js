/* ============================================================
   Study KIIP — Content Data
   ------------------------------------------------------------
   Structure:  LEVELS -> CHAPTERS -> { vocab, grammar,
               dialogues, activities, culture, quiz }
   Organized to match the user's own projects:
     KIIP 3 (중급 1) = the "Kiiip 3" project (Chapters 1–16)
     KIIP 4 (중급 2) = the "KIIP 4" project (Chapters 1–8 so far)
   Flashcards build from each chapter's vocab; quizzes use the
   chapter's quiz array or auto-generate from vocab.
   To add content, copy a chapter object and edit the fields.
   ============================================================ */

window.KIIP_DATA = {
  "levels": [
    {
      "id": "kiip3",
      "name": "KIIP 3",
      "subtitle": "사회통합프로그램 · 중급 1 (Intermediate 1)",
      "chapters": [
        {
          "id": "k3-ch1",
          "number": 1,
          "ko": "한국 생활 적응과 친구 사귀기",
          "en": "Adapting to Korean Life & Making Friends",
          "ne": "कोरियाली जीवनमा अनुकूलन र साथी बनाउने",
          "summary": "Talking and writing about adapting to life in Korea and making friends (clubs, hobbies), using grammar for 'just have to' and 'tend to'.",
          "vocab": [
            {
              "ko": "적응이 되다",
              "en": "to become adapted",
              "ne": "अभ्यस्त हुनु"
            },
            {
              "ko": "잘 적응하다",
              "en": "to adapt well",
              "ne": "राम्ररी अभ्यस्त हुनु"
            },
            {
              "ko": "사귀다",
              "en": "to make (friends)",
              "ne": "साथी बनाउनु"
            },
            {
              "ko": "동호회",
              "en": "club, society (hobby group)",
              "ne": "क्लब, समूह"
            },
            {
              "ko": "가입하다",
              "en": "to join",
              "ne": "सामेल हुनु"
            },
            {
              "ko": "참석하다",
              "en": "to attend",
              "ne": "भाग लिनु"
            },
            {
              "ko": "어울리다",
              "en": "to mingle, get along",
              "ne": "मिल्नु, घुलमिल हुनु"
            },
            {
              "ko": "이야기를 나누다",
              "en": "to have a conversation",
              "ne": "कुराकानी गर्नु"
            },
            {
              "ko": "연락을 주고받다",
              "en": "to keep in contact",
              "ne": "सम्पर्कमा रहनु"
            },
            {
              "ko": "볼링을 치다",
              "en": "to play bowling",
              "ne": "बलिङ खेल्नु"
            },
            {
              "ko": "스포츠를 좋아하다",
              "en": "to like sports",
              "ne": "खेलकुद मन पराउनु"
            },
            {
              "ko": "외국인",
              "en": "foreigner",
              "ne": "विदेशी"
            },
            {
              "ko": "누구나",
              "en": "anyone",
              "ne": "जोसुकै"
            },
            {
              "ko": "환영하다",
              "en": "to welcome",
              "ne": "स्वागत गर्नु"
            },
            {
              "ko": "외롭다",
              "en": "to be lonely",
              "ne": "एक्लो महसुस हुनु"
            },
            {
              "ko": "노력을 많이 하다",
              "en": "to make a lot of effort",
              "ne": "धेरै प्रयास गर्नु"
            },
            {
              "ko": "운동을 시작하다",
              "en": "to start exercising",
              "ne": "व्यायाम सुरु गर्नु"
            },
            {
              "ko": "건강이 안 좋다",
              "en": "health is not good",
              "ne": "स्वास्थ्य राम्रो नहुनु"
            },
            {
              "ko": "살이 찌다",
              "en": "to gain weight",
              "ne": "तौल बढ्नु"
            },
            {
              "ko": "지난달",
              "en": "last month",
              "ne": "गत महिना"
            },
            {
              "ko": "열심히 하다",
              "en": "to work hard",
              "ne": "मेहनत गर्नु"
            },
            {
              "ko": "그만두다",
              "en": "to quit",
              "ne": "छोड्नु"
            },
            {
              "ko": "대인 관계",
              "en": "interpersonal relationships",
              "ne": "व्यक्तिगत सम्बन्ध"
            },
            {
              "ko": "관계",
              "en": "relationship",
              "ne": "सम्बन्ध"
            },
            {
              "ko": "행복",
              "en": "happiness",
              "ne": "खुशी"
            },
            {
              "ko": "스트레스",
              "en": "stress",
              "ne": "तनाव"
            }
          ],
          "grammar": [
            {
              "pattern": "동형-(으)면 되다",
              "en": "just have to ~ / it's fine if ~",
              "ne": "~ गरे पुग्छ / ~ गरे भयो",
              "note": "Indicates that doing something is sufficient — 'you only need to ~'.",
              "examples": [
                {
                  "ko": "동호회에 가입하면 돼요.",
                  "en": "You just have to join a club.",
                  "ne": "क्लबमा सामेल भए पुग्छ।"
                }
              ]
            },
            {
              "pattern": "동형-는 편이다",
              "en": "tend to ~ / be rather ~",
              "ne": "~ गर्ने खालको हो / बरु ~ छ",
              "note": "Describes a general tendency rather than an absolute fact.",
              "examples": [
                {
                  "ko": "저는 운동을 좋아하는 편이에요.",
                  "en": "I tend to like exercising.",
                  "ne": "म व्यायाम मन पराउने खालको हुँ।"
                }
              ]
            }
          ],
          "dialogues": [],
          "activities": [
            {
              "ko": "한국 생활에 적응한 경험 쓰기",
              "en": "Writing about your experience adapting to Korean life",
              "ne": "कोरियाली जीवनमा अनुकूलनको अनुभव लेख्ने"
            },
            {
              "ko": "친구를 사귀는 좋은 방법 이야기하기",
              "en": "Talking about good ways to make friends",
              "ne": "साथी बनाउने राम्रो तरिकाबारे कुरा गर्ने"
            }
          ],
          "culture": null,
          "quiz": []
        },
        {
          "id": "k3-ch2",
          "number": 2,
          "ko": "성격",
          "en": "Personality",
          "ne": "स्वभाव / व्यक्तित्व",
          "summary": "Vocabulary for describing personality and how it changes, talking about becoming more active after life in Korea; grammar for 'instead of' and 'to become'.",
          "vocab": [
            {
              "ko": "성격",
              "en": "personality, character",
              "ne": "स्वभाव"
            },
            {
              "ko": "소극적이다",
              "en": "to be passive",
              "ne": "निष्क्रिय हुनु"
            },
            {
              "ko": "적극적이다",
              "en": "to be active, proactive",
              "ne": "सक्रिय हुनु"
            },
            {
              "ko": "활발하다",
              "en": "to be lively, outgoing",
              "ne": "जीवन्त हुनु"
            },
            {
              "ko": "활발해지다",
              "en": "to become lively",
              "ne": "जीवन्त हुँदै जानु"
            },
            {
              "ko": "무뚝뚝하다",
              "en": "to be blunt, cold",
              "ne": "रुखो हुनु"
            },
            {
              "ko": "느긋하다",
              "en": "to be relaxed, easygoing",
              "ne": "शान्त, ढुक्क हुनु"
            },
            {
              "ko": "급하다",
              "en": "to be hasty, impatient",
              "ne": "उतावलो हुनु"
            },
            {
              "ko": "개방적이다",
              "en": "to be open-minded",
              "ne": "खुलामनसाय हुनु"
            },
            {
              "ko": "보수적이다",
              "en": "to be conservative",
              "ne": "रूढिवादी हुनु"
            },
            {
              "ko": "신중하다",
              "en": "to be careful, cautious",
              "ne": "सतर्क हुनु"
            },
            {
              "ko": "낯설다",
              "en": "to be unfamiliar",
              "ne": "अपरिचित हुनु"
            },
            {
              "ko": "낯선 생활",
              "en": "unfamiliar life / new surroundings",
              "ne": "अपरिचित जीवन"
            },
            {
              "ko": "앞에 나서다",
              "en": "to step forward, stand out",
              "ne": "अगाडि निस्कनु"
            },
            {
              "ko": "장기 자랑",
              "en": "talent show",
              "ne": "प्रतिभा प्रदर्शन"
            },
            {
              "ko": "동아리",
              "en": "club, group activity",
              "ne": "क्लब, समूह गतिविधि"
            },
            {
              "ko": "취미 모임",
              "en": "hobby group",
              "ne": "रुचि समूह"
            },
            {
              "ko": "봉사",
              "en": "volunteering, service",
              "ne": "स्वयंसेवी, सेवा"
            },
            {
              "ko": "습관",
              "en": "habit",
              "ne": "बानी, आदत"
            },
            {
              "ko": "계획을 세우다",
              "en": "to make a plan",
              "ne": "योजना बनाउनु"
            },
            {
              "ko": "노력하다",
              "en": "to make an effort",
              "ne": "प्रयास गर्नु"
            },
            {
              "ko": "적응하다",
              "en": "to adapt",
              "ne": "अनुकूल हुनु"
            }
          ],
          "grammar": [
            {
              "pattern": "동형-는 대신에",
              "en": "instead of ~",
              "ne": "~ को सट्टा",
              "note": "Used to replace one action/state with another. (Adjectives: -은/ㄴ 대신에.)",
              "examples": [
                {
                  "ko": "택시를 타는 대신에 걸어갔어요.",
                  "en": "Instead of taking a taxi, I walked.",
                  "ne": "ट्याक्सी चढ्नुको सट्टा हिँडें।"
                }
              ]
            },
            {
              "pattern": "형-아/어지다",
              "en": "to become ~ / to get ~ (change of state)",
              "ne": "~ हुँदै जानु",
              "note": "Shows that a state gradually changes.",
              "examples": [
                {
                  "ko": "한국에 와서 성격이 활발해졌어요.",
                  "en": "After coming to Korea, my personality became more lively.",
                  "ne": "कोरिया आएपछि स्वभाव जीवन्त भयो।"
                }
              ]
            }
          ],
          "dialogues": [
            {
              "title": "성격 — 동아리 활동",
              "en": "Personality and club activities",
              "ne": "स्वभाव र क्लब गतिविधि",
              "lines": [
                {
                  "ko": "우리 아이가 성격이 소극적이에요. 어떻게 하면 좋을까요?",
                  "en": "My child is passive. What should I do?",
                  "ne": "मेरो बच्चाको स्वभाव निष्क्रिय छ। के गर्दा राम्रो होला?"
                },
                {
                  "ko": "동아리 활동을 시키면 어떨까요? 활동을 한 후부터 성격이 적극적이고 밝아질 거예요.",
                  "en": "How about having them join a club? After the activity, their personality will become more active and bright.",
                  "ne": "क्लब गतिविधिमा लगाउँदा कस्तो होला? गतिविधि गरेपछि स्वभाव सक्रिय र उज्यालो हुनेछ।"
                }
              ]
            }
          ],
          "activities": [
            {
              "ko": "사람의 성격을 추측하고 이야기하기",
              "en": "Guessing and talking about people's personalities",
              "ne": "मानिसको स्वभाव अनुमान गरी कुरा गर्ने"
            },
            {
              "ko": "한국에 와서 달라진 성격에 대해 쓰기",
              "en": "Writing about how your personality changed after coming to Korea",
              "ne": "कोरिया आएपछि बदलिएको स्वभावबारे लेख्ने"
            }
          ],
          "culture": null,
          "quiz": []
        },
        {
          "id": "k3-ch3",
          "number": 3,
          "ko": "지역 복지 서비스",
          "en": "Local Welfare Services",
          "ne": "स्थानीय कल्याण सेवा",
          "summary": "Vocabulary for community welfare centers, the services they offer (counseling, childcare, elderly care, interpretation), and how immigrants and multicultural families use them.",
          "vocab": [
            {
              "ko": "지역 복지 서비스",
              "en": "local welfare service",
              "ne": "स्थानीय कल्याण सेवा"
            },
            {
              "ko": "종합 복지 센터",
              "en": "comprehensive welfare center",
              "ne": "समग्र कल्याण केन्द्र"
            },
            {
              "ko": "이민자",
              "en": "immigrant",
              "ne": "आप्रवासी"
            },
            {
              "ko": "다문화 가족",
              "en": "multicultural family",
              "ne": "बहुसांस्कृतिक परिवार"
            },
            {
              "ko": "결혼 이민자",
              "en": "marriage immigrant",
              "ne": "विवाह आप्रवासी"
            },
            {
              "ko": "사회 통합",
              "en": "social integration",
              "ne": "सामाजिक एकीकरण"
            },
            {
              "ko": "상담실",
              "en": "counseling room",
              "ne": "परामर्श कक्ष"
            },
            {
              "ko": "개인 상담",
              "en": "personal counseling",
              "ne": "व्यक्तिगत परामर्श"
            },
            {
              "ko": "가족 상담",
              "en": "family counseling",
              "ne": "पारिवारिक परामर्श"
            },
            {
              "ko": "교육실",
              "en": "education room",
              "ne": "शिक्षा कक्ष"
            },
            {
              "ko": "공동체 모임방",
              "en": "community meeting room",
              "ne": "सामुदायिक बैठक कक्ष"
            },
            {
              "ko": "강당",
              "en": "auditorium, hall",
              "ne": "सभाहल"
            },
            {
              "ko": "갖추고 있다",
              "en": "to be equipped with",
              "ne": "सुसज्जित हुनु"
            },
            {
              "ko": "영화 상영",
              "en": "film screening",
              "ne": "फिल्म प्रदर्शन"
            },
            {
              "ko": "전시",
              "en": "exhibition",
              "ne": "प्रदर्शनी"
            },
            {
              "ko": "지역 주민",
              "en": "local residents",
              "ne": "स्थानीय बासिन्दा"
            },
            {
              "ko": "소개하다",
              "en": "to introduce",
              "ne": "परिचय गराउनु"
            },
            {
              "ko": "방문 서비스",
              "en": "home-visit service",
              "ne": "भ्रमण सेवा"
            },
            {
              "ko": "취업 교육",
              "en": "employment training",
              "ne": "रोजगार शिक्षा"
            },
            {
              "ko": "통번역 서비스",
              "en": "interpretation / translation service",
              "ne": "दोभाषे/अनुवाद सेवा"
            },
            {
              "ko": "육아",
              "en": "childcare",
              "ne": "बालपालन"
            },
            {
              "ko": "정보를 얻다",
              "en": "to get information",
              "ne": "जानकारी प्राप्त गर्नु"
            },
            {
              "ko": "노인",
              "en": "elderly person",
              "ne": "वृद्ध"
            },
            {
              "ko": "돌보다",
              "en": "to take care of",
              "ne": "हेरचाह गर्नु"
            },
            {
              "ko": "장난감",
              "en": "toy",
              "ne": "खेलौना"
            },
            {
              "ko": "대여하다",
              "en": "to rent, borrow",
              "ne": "भाडामा लिनु"
            },
            {
              "ko": "운영되다",
              "en": "to be operated, run",
              "ne": "सञ्चालित हुनु"
            },
            {
              "ko": "활용되다",
              "en": "to be utilized",
              "ne": "उपयोग गरिनु"
            },
            {
              "ko": "겪다",
              "en": "to experience, face",
              "ne": "भोग्नु"
            },
            {
              "ko": "고충",
              "en": "difficulty, hardship",
              "ne": "कठिनाइ"
            }
          ],
          "grammar": [
            {
              "pattern": "동형-는지 알다/모르다",
              "en": "to know / not know whether (how, what) ~",
              "ne": "~ हो कि भन्ने थाहा हुनु / नहुनु",
              "note": "Used to express knowing or not knowing about an embedded question.",
              "examples": [
                {
                  "ko": "복지 센터를 어떻게 이용하는지 알아요?",
                  "en": "Do you know how to use the welfare center?",
                  "ne": "कल्याण केन्द्र कसरी प्रयोग गर्ने थाहा छ?"
                }
              ]
            },
            {
              "pattern": "동-다가",
              "en": "while doing ~ (then something else happens)",
              "ne": "~ गर्दागर्दै (अनि अर्को)",
              "note": "Shows one action is interrupted by or transitions into another.",
              "examples": [
                {
                  "ko": "센터에서 상담을 받다가 좋은 정보를 알게 됐어요.",
                  "en": "While getting counseling at the center, I came to learn useful information.",
                  "ne": "केन्द्रमा परामर्श लिँदालिँदै राम्रो जानकारी थाहा पाएँ।"
                }
              ]
            }
          ],
          "dialogues": [],
          "activities": [
            {
              "ko": "복지 시설 이용 방법 말하기",
              "en": "Talking about how to use welfare facilities",
              "ne": "कल्याण सुविधा प्रयोग गर्ने तरिका बताउने"
            },
            {
              "ko": "우리 지역의 복지 서비스 소개하기",
              "en": "Introducing the welfare services in your area",
              "ne": "आफ्नो क्षेत्रको कल्याण सेवा परिचय गराउने"
            }
          ],
          "culture": {
            "ko": "다문화이주민플러스센터",
            "en": "Multicultural Migrant Plus Center",
            "ne": "बहुसांस्कृतिक आप्रवासी प्लस केन्द्र",
            "text": "Korea runs welfare centers for immigrants and multicultural families that bring services together in one place — counseling, employment training, childcare, interpretation, and Korean classes — to support newcomers' daily life and social integration."
          },
          "quiz": []
        },
        {
          "id": "k3-ch4",
          "number": 4,
          "ko": "교환과 환불",
          "en": "Exchange & Refund",
          "ne": "साटफेर र फिर्ता",
          "summary": "Vocabulary for shopping, exchanging and refunding goods, problems with purchased items, and dealing with sellers and consumer services.",
          "vocab": [
            {
              "ko": "교환",
              "en": "exchange",
              "ne": "साटफेर"
            },
            {
              "ko": "환불",
              "en": "refund",
              "ne": "फिर्ता"
            },
            {
              "ko": "환불 불가",
              "en": "refund not possible",
              "ne": "फिर्ता सम्भव छैन"
            },
            {
              "ko": "환불 요청",
              "en": "refund request",
              "ne": "फिर्ताको अनुरोध"
            },
            {
              "ko": "백화점",
              "en": "department store",
              "ne": "डिपार्टमेन्ट स्टोर"
            },
            {
              "ko": "매장",
              "en": "store, shop floor",
              "ne": "पसल"
            },
            {
              "ko": "세일 기간",
              "en": "sale period",
              "ne": "सेल अवधि"
            },
            {
              "ko": "세일 상품",
              "en": "sale item",
              "ne": "सेल सामान"
            },
            {
              "ko": "청바지",
              "en": "jeans",
              "ne": "जिन्स"
            },
            {
              "ko": "구입하다",
              "en": "to purchase",
              "ne": "किन्नु"
            },
            {
              "ko": "바지가 끼다",
              "en": "the pants are tight",
              "ne": "पाइन्ट टाइट हुनु"
            },
            {
              "ko": "바지가 헐렁하다",
              "en": "the pants are loose",
              "ne": "पाइन्ट ढिलो हुनु"
            },
            {
              "ko": "색상이 다르다",
              "en": "the color is different",
              "ne": "रङ फरक हुनु"
            },
            {
              "ko": "물건",
              "en": "item, thing",
              "ne": "सामान"
            },
            {
              "ko": "문제",
              "en": "problem",
              "ne": "समस्या"
            },
            {
              "ko": "영수증",
              "en": "receipt",
              "ne": "रसिद"
            },
            {
              "ko": "판매자",
              "en": "seller",
              "ne": "विक्रेता"
            },
            {
              "ko": "소비자",
              "en": "consumer",
              "ne": "उपभोक्ता"
            },
            {
              "ko": "한 달 이내",
              "en": "within one month",
              "ne": "एक महिनाभित्र"
            },
            {
              "ko": "3일 이내",
              "en": "within 3 days",
              "ne": "३ दिनभित्र"
            },
            {
              "ko": "안내",
              "en": "notice, guidance",
              "ne": "सूचना"
            },
            {
              "ko": "따라야 하다",
              "en": "must follow (the rule)",
              "ne": "अनुसार गर्नुपर्छ"
            },
            {
              "ko": "특별한",
              "en": "special, particular",
              "ne": "विशेष"
            }
          ],
          "grammar": [
            {
              "pattern": "동-만 하다",
              "en": "only do ~ / just ~",
              "ne": "~ मात्र गर्नु",
              "note": "Indicates doing only one action and nothing else.",
              "examples": [
                {
                  "ko": "교환만 하고 환불은 안 했어요.",
                  "en": "I only exchanged it and didn't get a refund.",
                  "ne": "साटफेर मात्र गरेँ, फिर्ता गरिनँ।"
                }
              ]
            },
            {
              "pattern": "동형-아/어 가지고",
              "en": "because of ~ / and so ~ (casual)",
              "ne": "~ गरेर, ~ भएकाले",
              "note": "A colloquial way to show reason or sequence (similar to -아/어서).",
              "examples": [
                {
                  "ko": "바지가 너무 껴 가지고 교환하러 왔어요.",
                  "en": "The pants were too tight, so I came to exchange them.",
                  "ne": "पाइन्ट धेरै टाइट भएकाले साट्न आएँ।"
                }
              ]
            }
          ],
          "dialogues": [],
          "activities": [
            {
              "ko": "교환·환불하기",
              "en": "Doing exchanges and refunds",
              "ne": "साटफेर र फिर्ता गर्ने"
            },
            {
              "ko": "교환·환불에 대한 주의 사항 읽기",
              "en": "Reading precautions about exchanges and refunds",
              "ne": "साटफेर र फिर्तासम्बन्धी सावधानी पढ्ने"
            }
          ],
          "culture": {
            "ko": "소비자 상담 센터",
            "en": "Consumer Counseling Center",
            "ne": "उपभोक्ता परामर्श केन्द्र",
            "text": "When there is a problem with a purchase and the seller won't help, consumers in Korea can turn to a Consumer Counseling Center for advice on exchanges, refunds, and their rights."
          },
          "quiz": []
        },
        {
          "id": "k3-ch5",
          "number": 5,
          "ko": "생활비와 절약",
          "en": "Living Expenses & Saving",
          "ne": "जीवनयापन खर्च र बचत",
          "summary": "Vocabulary for household spending, ways to save money, and bank savings plans; grammar for reported speech and expressing uncertainty about what to do.",
          "vocab": [
            {
              "ko": "생활비",
              "en": "living expenses",
              "ne": "जीवनयापन खर्च"
            },
            {
              "ko": "식비",
              "en": "food expenses",
              "ne": "खाना खर्च"
            },
            {
              "ko": "교통비",
              "en": "transportation cost",
              "ne": "यातायात खर्च"
            },
            {
              "ko": "난방비",
              "en": "heating bill",
              "ne": "तताउने खर्च"
            },
            {
              "ko": "지출",
              "en": "spending, expenditure",
              "ne": "खर्च"
            },
            {
              "ko": "절약하다",
              "en": "to save, economize",
              "ne": "बचत गर्नु"
            },
            {
              "ko": "아끼다",
              "en": "to save, use sparingly",
              "ne": "बचाउनु"
            },
            {
              "ko": "줄이다",
              "en": "to reduce",
              "ne": "घटाउनु"
            },
            {
              "ko": "외식",
              "en": "eating out",
              "ne": "बाहिर खाना"
            },
            {
              "ko": "외식을 줄이다",
              "en": "to reduce eating out",
              "ne": "बाहिर खाना घटाउनु"
            },
            {
              "ko": "장을 보다",
              "en": "to go grocery shopping",
              "ne": "किनमेल गर्नु"
            },
            {
              "ko": "할인 쿠폰",
              "en": "discount coupon",
              "ne": "छुट कुपन"
            },
            {
              "ko": "요금제",
              "en": "(phone) rate plan",
              "ne": "शुल्क योजना"
            },
            {
              "ko": "변경하다",
              "en": "to change",
              "ne": "परिवर्तन गर्नु"
            },
            {
              "ko": "불필요한",
              "en": "unnecessary",
              "ne": "अनावश्यक"
            },
            {
              "ko": "필요한 것",
              "en": "necessary things",
              "ne": "चाहिने कुरा"
            },
            {
              "ko": "메모하다",
              "en": "to make a note",
              "ne": "टिपोट गर्नु"
            },
            {
              "ko": "대중교통",
              "en": "public transportation",
              "ne": "सार्वजनिक यातायात"
            },
            {
              "ko": "온라인 강의",
              "en": "online lecture",
              "ne": "अनलाइन कक्षा"
            },
            {
              "ko": "건강 관리",
              "en": "health management",
              "ne": "स्वास्थ्य हेरचाह"
            },
            {
              "ko": "적금",
              "en": "installment savings",
              "ne": "किस्ता बचत"
            },
            {
              "ko": "정기 적금",
              "en": "fixed-period savings",
              "ne": "निश्चित अवधि बचत"
            },
            {
              "ko": "자유 적금",
              "en": "flexible savings",
              "ne": "स्वतन्त्र बचत"
            },
            {
              "ko": "가입하다",
              "en": "to join, sign up",
              "ne": "भर्ना हुनु"
            },
            {
              "ko": "이율",
              "en": "interest rate",
              "ne": "ब्याजदर"
            },
            {
              "ko": "은행",
              "en": "bank",
              "ne": "बैंक"
            },
            {
              "ko": "고민",
              "en": "concern, worry",
              "ne": "चिन्ता"
            },
            {
              "ko": "전시 상품",
              "en": "display item",
              "ne": "प्रदर्शनी सामान"
            },
            {
              "ko": "중고",
              "en": "secondhand, used",
              "ne": "पुरानो, सेकेन्ड-ह्यान्ड"
            },
            {
              "ko": "물려받다",
              "en": "to receive as a hand-me-down",
              "ne": "पाउनु (पुरानो)"
            }
          ],
          "grammar": [
            {
              "pattern": "동형-(으)ㄹ지 모르겠다",
              "en": "I don't know what / whether / how to ~",
              "ne": "के / कसरी गर्ने थाहा छैन",
              "note": "Expresses uncertainty about an embedded question.",
              "examples": [
                {
                  "ko": "난방비가 너무 많이 나와서 어떻게 해야 할지 모르겠어요.",
                  "en": "The heating bill came out so high that I don't know what to do.",
                  "ne": "तताउने खर्च धेरै आएकोले के गर्ने थाहा छैन।"
                }
              ]
            },
            {
              "pattern": "동형-다고 하다",
              "en": "someone says / said that ~ (reported speech)",
              "ne": "~ भन्छ / भने (अप्रत्यक्ष कथन)",
              "note": "Reports what another person said.",
              "examples": [
                {
                  "ko": "전시한 가구여서 저렴하게 샀다고 합니다.",
                  "en": "She says she bought it cheaply because it was display furniture.",
                  "ne": "प्रदर्शनीमा राखिएको फर्निचर भएकोले सस्तोमा किनिन् रे।"
                }
              ]
            }
          ],
          "dialogues": [],
          "activities": [
            {
              "ko": "생활비 사용과 절약 방법 정리하기",
              "en": "Summarizing your spending and ways to save",
              "ne": "जीवनयापन खर्च र बचत तरिका मिलाउने"
            },
            {
              "ko": "어떤 적금에 가입하고 싶은지 이야기하기",
              "en": "Talking about which savings plan you'd like to join",
              "ne": "कुन बचत योजनामा भर्ना हुने भनी कुरा गर्ने"
            }
          ],
          "culture": {
            "ko": "적금 가입하기",
            "en": "Opening a Savings Account",
            "ne": "बचत खाता खोल्ने",
            "text": "To save a fixed amount each month, a fixed-period installment savings (정기 적금) is good; if income varies, a flexible savings (자유 적금) works better. Compare banks' interest rates first, and bring your residence card or passport when visiting the bank."
          },
          "quiz": []
        },
        {
          "id": "k3-ch6",
          "number": 6,
          "ko": "지역과 고향",
          "en": "Region & Hometown",
          "ne": "क्षेत्र र गृहनगर",
          "summary": "Vocabulary for describing neighborhoods and regions, comparing where you live now with your hometown, and reading a travel advertisement; grammar for stating reasons.",
          "vocab": [
            {
              "ko": "지역",
              "en": "region, area",
              "ne": "क्षेत्र"
            },
            {
              "ko": "고향",
              "en": "hometown",
              "ne": "गृहनगर, गाउँ"
            },
            {
              "ko": "동네",
              "en": "neighborhood",
              "ne": "टोल"
            },
            {
              "ko": "환경",
              "en": "environment",
              "ne": "वातावरण"
            },
            {
              "ko": "주변 환경",
              "en": "surrounding environment",
              "ne": "वरपरको वातावरण"
            },
            {
              "ko": "위치",
              "en": "location",
              "ne": "स्थान"
            },
            {
              "ko": "방향",
              "en": "direction",
              "ne": "दिशा"
            },
            {
              "ko": "사계절",
              "en": "four seasons",
              "ne": "चारै ऋतु"
            },
            {
              "ko": "단풍",
              "en": "autumn leaves",
              "ne": "शरद पात"
            },
            {
              "ko": "풍경",
              "en": "scenery, landscape",
              "ne": "दृश्य"
            },
            {
              "ko": "경관",
              "en": "view, scenery",
              "ne": "दृश्यावलोकन"
            },
            {
              "ko": "산",
              "en": "mountain",
              "ne": "पहाड"
            },
            {
              "ko": "자연환경",
              "en": "natural environment",
              "ne": "प्राकृतिक वातावरण"
            },
            {
              "ko": "학군",
              "en": "school district",
              "ne": "विद्यालय क्षेत्र"
            },
            {
              "ko": "교통",
              "en": "transportation",
              "ne": "यातायात"
            },
            {
              "ko": "빌딩",
              "en": "building",
              "ne": "भवन"
            },
            {
              "ko": "인기가 높다",
              "en": "to be very popular",
              "ne": "माग धेरै हुनु"
            },
            {
              "ko": "구경하다",
              "en": "to sightsee, look around",
              "ne": "घुम्नु, हेर्नु"
            },
            {
              "ko": "명당",
              "en": "auspicious location (good site)",
              "ne": "शुभ स्थान"
            },
            {
              "ko": "전통",
              "en": "tradition",
              "ne": "परम्परा"
            },
            {
              "ko": "현대",
              "en": "modern times",
              "ne": "आधुनिक काल"
            },
            {
              "ko": "내려오다",
              "en": "to be handed down",
              "ne": "चलिआउनु"
            },
            {
              "ko": "여행 상품",
              "en": "travel package",
              "ne": "यात्रा प्याकेज"
            },
            {
              "ko": "일정",
              "en": "itinerary, schedule",
              "ne": "कार्यतालिका"
            },
            {
              "ko": "실크 로드",
              "en": "the Silk Road",
              "ne": "सिल्क रोड"
            },
            {
              "ko": "시간 여행",
              "en": "time journey",
              "ne": "समय यात्रा"
            },
            {
              "ko": "역사의 현장",
              "en": "a historic site",
              "ne": "ऐतिहासिक स्थल"
            },
            {
              "ko": "간직하다",
              "en": "to keep, preserve",
              "ne": "जोगाएर राख्नु"
            },
            {
              "ko": "복잡하다",
              "en": "to be crowded, complicated",
              "ne": "भीडभाड हुनु"
            }
          ],
          "grammar": [
            {
              "pattern": "동형-기 때문이다",
              "en": "it is because ~",
              "ne": "~ भएकाले हो",
              "note": "States the reason or cause for something. (Mid-sentence form: -기 때문에.)",
              "examples": [
                {
                  "ko": "집의 위치가 그 집에 사는 사람의 행복을 결정한다고 믿었기 때문이다.",
                  "en": "It is because they believed the location of a house determines the happiness of those living in it.",
                  "ne": "घरको स्थानले त्यहाँ बस्ने मानिसको खुशी निर्धारण गर्छ भनेर विश्वास गर्थे, त्यसैले हो।"
                }
              ]
            }
          ],
          "dialogues": [],
          "activities": [
            {
              "ko": "지금 사는 동네와 고향 동네 비교해서 쓰기",
              "en": "Writing a comparison between your current neighborhood and your hometown",
              "ne": "अहिले बस्ने टोल र गृहनगरको टोल तुलना गरी लेख्ने"
            }
          ],
          "culture": {
            "ko": "과거와 현대의 명당",
            "en": "Auspicious Locations, Past & Present",
            "ne": "विगत र वर्तमानको शुभ स्थान",
            "text": "Koreans long valued the environment around a home — a mountain behind and water flowing in front was considered a 명당 (auspicious site). The tradition continues today, though modern 'good locations' are judged more by school district and transportation."
          },
          "quiz": []
        },
        {
          "id": "k3-ch7",
          "number": 7,
          "ko": "문화생활",
          "en": "Cultural Life",
          "ne": "सांस्कृतिक जीवन",
          "summary": "Vocabulary for enjoying culture — exhibitions, performances, and museums — and talking and writing about your impressions; grammar for reported requests and comparisons.",
          "vocab": [
            {
              "ko": "문화생활",
              "en": "cultural life",
              "ne": "सांस्कृतिक जीवन"
            },
            {
              "ko": "전시회",
              "en": "exhibition",
              "ne": "प्रदर्शनी"
            },
            {
              "ko": "그림 전시회",
              "en": "art exhibition",
              "ne": "चित्र प्रदर्शनी"
            },
            {
              "ko": "공연",
              "en": "performance, show",
              "ne": "प्रदर्शन"
            },
            {
              "ko": "감상",
              "en": "appreciation (of art/show)",
              "ne": "रसास्वादन"
            },
            {
              "ko": "박물관",
              "en": "museum",
              "ne": "संग्रहालय"
            },
            {
              "ko": "미술관",
              "en": "art gallery",
              "ne": "कला ग्यालरी"
            },
            {
              "ko": "그림",
              "en": "drawing, painting",
              "ne": "चित्र"
            },
            {
              "ko": "전시하다",
              "en": "to display, exhibit",
              "ne": "प्रदर्शन गर्नु"
            },
            {
              "ko": "예매하다",
              "en": "to book (tickets) in advance",
              "ne": "अग्रिम बुक गर्नु"
            },
            {
              "ko": "무료",
              "en": "free of charge",
              "ne": "निःशुल्क"
            },
            {
              "ko": "부담 없이",
              "en": "without burden, comfortably",
              "ne": "बिना बोझ"
            },
            {
              "ko": "기회",
              "en": "opportunity, chance",
              "ne": "अवसर"
            },
            {
              "ko": "기분이 좋아지다",
              "en": "one's mood improves",
              "ne": "मन राम्रो हुनु"
            },
            {
              "ko": "문화가 있는 날",
              "en": "Culture Day",
              "ne": "संस्कृति दिवस"
            },
            {
              "ko": "매월",
              "en": "every month",
              "ne": "हरेक महिना"
            },
            {
              "ko": "마지막 주",
              "en": "the last week",
              "ne": "अन्तिम हप्ता"
            },
            {
              "ko": "싼 가격",
              "en": "a cheap price",
              "ne": "सस्तो मूल्य"
            },
            {
              "ko": "점점",
              "en": "gradually, more and more",
              "ne": "बिस्तारै"
            },
            {
              "ko": "관람하다",
              "en": "to view, watch (a show)",
              "ne": "अवलोकन गर्नु"
            },
            {
              "ko": "보러 가다",
              "en": "to go to see",
              "ne": "हेर्न जानु"
            }
          ],
          "grammar": [
            {
              "pattern": "동-(으)라고 하다",
              "en": "tell someone to ~ (reported request/command)",
              "ne": "~ गर्नु भन्नु (अप्रत्यक्ष आदेश)",
              "note": "Reports a request or command someone made.",
              "examples": [
                {
                  "ko": "친구들에게도 예매하라고 했어요.",
                  "en": "I told my friends to book in advance too.",
                  "ne": "साथीहरूलाई पनि अग्रिम बुक गर्नू भनेँ।"
                }
              ]
            },
            {
              "pattern": "명-만큼",
              "en": "as much as ~ / to the degree of ~",
              "ne": "~ जति",
              "note": "Compares one thing to the degree/amount of another.",
              "examples": [
                {
                  "ko": "기대한 것만큼 공연이 좋았어요.",
                  "en": "The performance was as good as I had expected.",
                  "ne": "आशा गरेजति नै प्रदर्शन राम्रो थियो।"
                }
              ]
            }
          ],
          "dialogues": [],
          "activities": [
            {
              "ko": "공연 감상 소감 말하기",
              "en": "Talking about your impressions of a performance",
              "ne": "प्रदर्शन हेरेको सोचबारे बताउने"
            },
            {
              "ko": "공연 감상평 쓰기",
              "en": "Writing a review of a performance",
              "ne": "प्रदर्शनको समीक्षा लेख्ने"
            }
          ],
          "culture": {
            "ko": "문화가 있는 날",
            "en": "Culture Day",
            "ne": "संस्कृति दिवस",
            "text": "On the last Wednesday of every month — Korea's 'Culture Day' — museums, exhibitions, performances, and movies are offered free or at a discount, so people can enjoy culture without a financial burden."
          },
          "quiz": []
        },
        {
          "id": "k3-ch8",
          "number": 8,
          "ko": "음식과 요리",
          "en": "Food & Cooking",
          "ne": "खाना र पकाउने",
          "summary": "Vocabulary for ingredients, seasonings, and cooking actions, with a kimchi-fried-rice recipe; grammar for sequencing actions and giving permission.",
          "vocab": [
            {
              "ko": "요리",
              "en": "cooking, dish",
              "ne": "खाना पकाउने"
            },
            {
              "ko": "조리법",
              "en": "recipe, cooking method",
              "ne": "पकाउने विधि"
            },
            {
              "ko": "재료",
              "en": "ingredient",
              "ne": "सामग्री"
            },
            {
              "ko": "김치볶음밥",
              "en": "kimchi fried rice",
              "ne": "किम्ची भुटेको भात"
            },
            {
              "ko": "김치",
              "en": "kimchi",
              "ne": "किम्ची"
            },
            {
              "ko": "밥",
              "en": "cooked rice",
              "ne": "भात"
            },
            {
              "ko": "계란",
              "en": "egg",
              "ne": "अण्डा"
            },
            {
              "ko": "양파",
              "en": "onion",
              "ne": "प्याज"
            },
            {
              "ko": "당근",
              "en": "carrot",
              "ne": "गाजर"
            },
            {
              "ko": "돼지고기",
              "en": "pork",
              "ne": "सुँगुरको मासु"
            },
            {
              "ko": "식용유",
              "en": "cooking oil",
              "ne": "खाना पकाउने तेल"
            },
            {
              "ko": "설탕",
              "en": "sugar",
              "ne": "चिनी"
            },
            {
              "ko": "간장",
              "en": "soy sauce",
              "ne": "सोया सस"
            },
            {
              "ko": "된장",
              "en": "soybean paste",
              "ne": "सोयाबिन पेस्ट"
            },
            {
              "ko": "고추장",
              "en": "red pepper paste",
              "ne": "खुर्सानी पेस्ट"
            },
            {
              "ko": "고춧가루",
              "en": "red pepper powder",
              "ne": "खुर्सानी धुलो"
            },
            {
              "ko": "참기름",
              "en": "sesame oil",
              "ne": "तिलको तेल"
            },
            {
              "ko": "깨",
              "en": "sesame seeds",
              "ne": "तिल"
            },
            {
              "ko": "후추",
              "en": "black pepper",
              "ne": "कालो मरिच"
            },
            {
              "ko": "식초",
              "en": "vinegar",
              "ne": "सिरका"
            },
            {
              "ko": "양념",
              "en": "seasoning",
              "ne": "मसला"
            },
            {
              "ko": "씻다",
              "en": "to wash",
              "ne": "धुनु"
            },
            {
              "ko": "껍질을 벗기다",
              "en": "to peel",
              "ne": "बोक्रा काढ्नु"
            },
            {
              "ko": "썰다",
              "en": "to cut, slice",
              "ne": "काट्नु"
            },
            {
              "ko": "깍둑썰기를 하다",
              "en": "to dice into cubes",
              "ne": "चोक्टामा काट्नु"
            },
            {
              "ko": "볶다",
              "en": "to stir-fry",
              "ne": "भुट्नु"
            },
            {
              "ko": "넣다",
              "en": "to put in, add",
              "ne": "हाल्नु"
            },
            {
              "ko": "간을 맞추다",
              "en": "to adjust the seasoning/taste",
              "ne": "स्वाद मिलाउनु"
            },
            {
              "ko": "뿌리다",
              "en": "to sprinkle",
              "ne": "छर्नु"
            },
            {
              "ko": "프라이팬",
              "en": "frying pan",
              "ne": "फ्राइप्यान"
            }
          ],
          "grammar": [
            {
              "pattern": "동-다가",
              "en": "while doing ~ (then move to the next action)",
              "ne": "~ गर्दागर्दै (अनि)",
              "note": "Connects one action transitioning into another — common in recipes.",
              "examples": [
                {
                  "ko": "돼지고기를 볶다가 김치를 넣어요.",
                  "en": "While stir-frying the pork, add the kimchi.",
                  "ne": "सुँगुरको मासु भुट्दै किम्ची हाल्नुस्।"
                }
              ]
            },
            {
              "pattern": "동-아/어도 되다",
              "en": "it's okay to ~ / you may ~",
              "ne": "~ गरे पनि हुन्छ",
              "note": "Gives or asks permission.",
              "examples": [
                {
                  "ko": "집에 있는 재료만 넣어도 됩니다.",
                  "en": "You can just add whatever ingredients you have at home.",
                  "ne": "घरमा भएको सामग्री मात्र हाले पनि हुन्छ।"
                }
              ]
            }
          ],
          "dialogues": [],
          "activities": [
            {
              "ko": "무슨 요리를 어떻게 만드는지 이야기하기",
              "en": "Talking about what dish you make and how",
              "ne": "कुन खाना कसरी बनाउने भनी कुरा गर्ने"
            },
            {
              "ko": "좋아하는 요리의 조리법 쓰기",
              "en": "Writing the recipe of a dish you like",
              "ne": "मनपर्ने खानाको पकाउने विधि लेख्ने"
            }
          ],
          "culture": {
            "ko": "김치볶음밥",
            "en": "Kimchi Fried Rice",
            "ne": "किम्ची भुटेको भात",
            "text": "Kimchi fried rice is a beloved, easy Korean home dish — so tasty that a saying goes 'two could eat it and not notice if one dropped dead.' You can make it with whatever ingredients you have at home."
          },
          "quiz": []
        },
        {
          "id": "k3-ch9",
          "number": 9,
          "ko": "고장과 수리",
          "en": "Breakdowns & Repairs",
          "ne": "बिग्रनु र मर्मत",
          "summary": "Vocabulary for things breaking down and getting repaired, product warranties, and dealing with consumers/sellers; grammar for guessing a reason and asking soft questions.",
          "vocab": [
            {
              "ko": "고장이 나다",
              "en": "to break down",
              "ne": "बिग्रिनु"
            },
            {
              "ko": "수리하다",
              "en": "to repair",
              "ne": "मर्मत गर्नु"
            },
            {
              "ko": "변기가 막히다",
              "en": "the toilet gets clogged",
              "ne": "टोइलेट थुनिनु"
            },
            {
              "ko": "물이 새다",
              "en": "water leaks",
              "ne": "पानी चुहिनु"
            },
            {
              "ko": "전등이 나가다",
              "en": "the light goes out",
              "ne": "बत्ती जानु"
            },
            {
              "ko": "문이 잠기다",
              "en": "the door gets locked",
              "ne": "ढोका बन्द हुनु"
            },
            {
              "ko": "액정이 깨지다",
              "en": "the screen cracks",
              "ne": "स्क्रिन फुट्नु"
            },
            {
              "ko": "떨어뜨리다",
              "en": "to drop (something)",
              "ne": "खसाल्नु"
            },
            {
              "ko": "수도꼭지",
              "en": "faucet, tap",
              "ne": "धारो"
            },
            {
              "ko": "화장실",
              "en": "bathroom",
              "ne": "बाथरुम"
            },
            {
              "ko": "조금씩",
              "en": "little by little",
              "ne": "बिस्तारै"
            },
            {
              "ko": "보증서",
              "en": "warranty certificate",
              "ne": "वारेन्टी कार्ड"
            },
            {
              "ko": "보증 기간",
              "en": "warranty period",
              "ne": "वारेन्टी अवधि"
            },
            {
              "ko": "보증 내용",
              "en": "warranty details",
              "ne": "वारेन्टीको विवरण"
            },
            {
              "ko": "모델명",
              "en": "model name",
              "ne": "मोडल नाम"
            },
            {
              "ko": "구입 일자",
              "en": "purchase date",
              "ne": "किनेको मिति"
            },
            {
              "ko": "제조사",
              "en": "manufacturer",
              "ne": "निर्माता"
            },
            {
              "ko": "판매자",
              "en": "seller",
              "ne": "विक्रेता"
            },
            {
              "ko": "소비자",
              "en": "consumer",
              "ne": "उपभोक्ता"
            },
            {
              "ko": "무료 수리",
              "en": "free repair",
              "ne": "निःशुल्क मर्मत"
            },
            {
              "ko": "영수증",
              "en": "receipt",
              "ne": "रसिद"
            },
            {
              "ko": "약속하다",
              "en": "to promise",
              "ne": "वाचा गर्नु"
            },
            {
              "ko": "기준으로 하다",
              "en": "to be based on",
              "ne": "आधार मान्नु"
            },
            {
              "ko": "확인하다",
              "en": "to confirm, check",
              "ne": "पुष्टि गर्नु"
            },
            {
              "ko": "정상적인 상태",
              "en": "normal condition",
              "ne": "सामान्य अवस्था"
            },
            {
              "ko": "발생하다",
              "en": "to occur, happen",
              "ne": "हुनु, उत्पन्न हुनु"
            },
            {
              "ko": "사용 설명서",
              "en": "instruction manual",
              "ne": "प्रयोग निर्देशिका"
            },
            {
              "ko": "주의 사항",
              "en": "precautions",
              "ne": "सावधानी"
            },
            {
              "ko": "지키다",
              "en": "to follow, observe",
              "ne": "पालना गर्नु"
            },
            {
              "ko": "실수",
              "en": "mistake",
              "ne": "गल्ती"
            },
            {
              "ko": "지불하다",
              "en": "to pay",
              "ne": "तिर्नु"
            },
            {
              "ko": "고객 부담금",
              "en": "customer copay / charge",
              "ne": "ग्राहकको हिस्सा"
            },
            {
              "ko": "제외하다",
              "en": "to exclude",
              "ne": "बाहेक गर्नु"
            },
            {
              "ko": "점검하다",
              "en": "to inspect",
              "ne": "जाँच गर्नु"
            },
            {
              "ko": "조절하다",
              "en": "to adjust",
              "ne": "मिलाउनु"
            },
            {
              "ko": "속도",
              "en": "speed",
              "ne": "गति"
            }
          ],
          "grammar": [
            {
              "pattern": "동형-아/어서 그런지",
              "en": "probably because ~ (guessing a reason)",
              "ne": "~ भएकोले होला (कारण अनुमान)",
              "note": "Used when guessing the likely reason for something.",
              "examples": [
                {
                  "ko": "오래 써서 그런지 컴퓨터가 자꾸 느려져요.",
                  "en": "Probably because I've used it a long time, the computer keeps slowing down.",
                  "ne": "धेरै प्रयोग गरेकोले होला, कम्प्युटर बारम्बार ढिलो हुन्छ।"
                }
              ]
            },
            {
              "pattern": "동-나요? / 형-은가요?",
              "en": "soft / gentle question ending",
              "ne": "नरम प्रश्न गर्ने अन्त्य",
              "note": "A softer, more polite way to ask a question. -나요? attaches to verbs; -은가요? to adjectives.",
              "examples": [
                {
                  "ko": "이거 무료로 수리되나요?",
                  "en": "Will this be repaired for free?",
                  "ne": "यो निःशुल्क मर्मत हुन्छ?"
                }
              ]
            }
          ],
          "dialogues": [],
          "activities": [
            {
              "ko": "고장 난 물건의 수리를 요청하기",
              "en": "Requesting a repair for a broken item",
              "ne": "बिग्रेको सामानको मर्मत अनुरोध गर्ने"
            },
            {
              "ko": "제품 보증과 수리 경험에 대해 쓰기",
              "en": "Writing about a product warranty / repair experience",
              "ne": "उत्पादन वारेन्टी र मर्मत अनुभवबारे लेख्ने"
            }
          ],
          "culture": {
            "ko": "제품 보증 제도",
            "en": "Product Warranty System",
            "ne": "उत्पादन वारेन्टी प्रणाली",
            "text": "A product warranty period is the time during which the manufacturer or seller promises free repair to the consumer. The warranty period is based on the purchase date, confirmed by the warranty certificate or receipt."
          },
          "quiz": []
        },
        {
          "id": "k3-ch10",
          "number": 10,
          "ko": "직업과 취업",
          "en": "Jobs & Employment",
          "ne": "पेसा र रोजगारी",
          "summary": "Vocabulary for jobs, the job-search process (ads, résumés, written exams, interviews), writing a résumé, and understanding salary and deductions.",
          "vocab": [
            {
              "ko": "직업",
              "en": "job, occupation",
              "ne": "पेसा"
            },
            {
              "ko": "취업",
              "en": "getting a job, employment",
              "ne": "रोजगारी"
            },
            {
              "ko": "구인광고",
              "en": "job advertisement",
              "ne": "जागिरको विज्ञापन"
            },
            {
              "ko": "이력서",
              "en": "résumé, CV",
              "ne": "बायोडाटा"
            },
            {
              "ko": "지원서",
              "en": "application form",
              "ne": "आवेदन फारम"
            },
            {
              "ko": "서류를 제출하다",
              "en": "to submit documents",
              "ne": "कागजपत्र पेश गर्नु"
            },
            {
              "ko": "서류 심사",
              "en": "document screening",
              "ne": "कागजपत्र छनोट"
            },
            {
              "ko": "필기시험을 보다",
              "en": "to take a written exam",
              "ne": "लिखित परीक्षा दिनु"
            },
            {
              "ko": "면접을 보다",
              "en": "to have an interview",
              "ne": "अन्तर्वार्ता दिनु"
            },
            {
              "ko": "자격증",
              "en": "license, qualification certificate",
              "ne": "प्रमाणपत्र, लाइसेन्स"
            },
            {
              "ko": "증명서",
              "en": "certificate",
              "ne": "प्रमाणपत्र"
            },
            {
              "ko": "사본",
              "en": "a copy",
              "ne": "प्रतिलिपि"
            },
            {
              "ko": "문의",
              "en": "inquiry",
              "ne": "सोधपुछ"
            },
            {
              "ko": "인원",
              "en": "number of people (positions)",
              "ne": "जना, संख्या"
            },
            {
              "ko": "분야",
              "en": "field, area",
              "ne": "क्षेत्र"
            },
            {
              "ko": "학원 강사",
              "en": "academy instructor",
              "ne": "ट्युटोरियल केन्द्रको प्रशिक्षक"
            },
            {
              "ko": "다문화 언어 강사",
              "en": "multicultural language instructor",
              "ne": "बहुसांस्कृतिक भाषा प्रशिक्षक"
            },
            {
              "ko": "편의점 아르바이트",
              "en": "convenience store part-time job",
              "ne": "सुविधा पसलमा अंशकालीन काम"
            },
            {
              "ko": "시간제",
              "en": "part-time",
              "ne": "अंशकालीन"
            },
            {
              "ko": "사업하다",
              "en": "to do business",
              "ne": "व्यवसाय गर्नु"
            },
            {
              "ko": "가게를 차리다",
              "en": "to open a shop",
              "ne": "पसल खोल्नु"
            },
            {
              "ko": "통역",
              "en": "interpretation",
              "ne": "दोभाषे"
            },
            {
              "ko": "전문성",
              "en": "expertise, specialization",
              "ne": "विशेषज्ञता"
            },
            {
              "ko": "안정적이다",
              "en": "to be stable",
              "ne": "स्थिर हुनु"
            },
            {
              "ko": "근무환경",
              "en": "working environment",
              "ne": "कार्य वातावरण"
            },
            {
              "ko": "월급",
              "en": "monthly salary",
              "ne": "मासिक तलब"
            },
            {
              "ko": "발전 가능성",
              "en": "growth potential",
              "ne": "विकासको सम्भावना"
            },
            {
              "ko": "자기계발",
              "en": "self-development",
              "ne": "आत्म-विकास"
            },
            {
              "ko": "보람을 느끼다",
              "en": "to feel fulfillment",
              "ne": "सन्तुष्टि अनुभव गर्नु"
            },
            {
              "ko": "사회에 기여하다",
              "en": "to contribute to society",
              "ne": "समाजमा योगदान दिनु"
            },
            {
              "ko": "이름",
              "en": "name",
              "ne": "नाम"
            },
            {
              "ko": "전화번호",
              "en": "phone number",
              "ne": "फोन नम्बर"
            },
            {
              "ko": "휴대 전화",
              "en": "mobile phone",
              "ne": "मोबाइल फोन"
            },
            {
              "ko": "국적",
              "en": "nationality",
              "ne": "राष्ट्रियता"
            },
            {
              "ko": "여권 번호",
              "en": "passport number",
              "ne": "राहदानी नम्बर"
            },
            {
              "ko": "주소",
              "en": "address",
              "ne": "ठेगाना"
            },
            {
              "ko": "학력",
              "en": "educational background",
              "ne": "शैक्षिक योग्यता"
            },
            {
              "ko": "경력",
              "en": "work experience, career",
              "ne": "कार्य अनुभव"
            },
            {
              "ko": "정기 적금",
              "en": "regular savings (deposit)",
              "ne": "नियमित बचत"
            },
            {
              "ko": "공제하다",
              "en": "to deduct",
              "ne": "कटौती गर्नु"
            }
          ],
          "grammar": [],
          "dialogues": [
            {
              "title": "라흐만 & 수진 — 서류 제출",
              "en": "Submitting application documents",
              "ne": "आवेदन कागजपत्र पेश गर्ने",
              "lines": [
                {
                  "ko": "서류는 어떻게 제출해야 해요?",
                  "en": "How should I submit the documents?",
                  "ne": "कागजपत्र कसरी पेश गर्नुपर्छ?"
                },
                {
                  "ko": "구인 광고를 잘 보고 이력서를 제출하면 돼요. 서류 심사에 합격하면 필기시험을 보고 그 다음에 면접을 봐요.",
                  "en": "Look carefully at the job advertisement and submit your resume. If you pass the document screening, you take a written exam and then have an interview.",
                  "ne": "जागिरको विज्ञापन राम्रोसँग हेरेर बायोडाटा पेश गर्नुस्। कागजपत्र छनोटमा पास भएपछि लिखित परीक्षा दिनु र त्यसपछि अन्तर्वार्ता दिनु हुन्छ।"
                }
              ]
            }
          ],
          "activities": [
            {
              "ko": "여러분의 이력서를 써 보기",
              "en": "Writing your own résumé",
              "ne": "आफ्नो बायोडाटा लेख्ने"
            },
            {
              "ko": "직업을 선택할 때 중요한 점에 대해 이야기하기",
              "en": "Talking about what matters when choosing a job",
              "ne": "पेसा छनोट गर्दा महत्त्वपूर्ण कुराबारे कुरा गर्ने"
            }
          ],
          "culture": {
            "ko": "월급과 공제",
            "en": "Salary and Deductions",
            "ne": "तलब र कटौती",
            "text": "The money deposited in your account often differs from the stated monthly salary, because taxes, health insurance premiums, and regular savings are deducted from the salary."
          },
          "quiz": []
        },
        {
          "id": "k3-ch11",
          "number": 11,
          "ko": "주거 생활",
          "en": "Housing & Living",
          "ne": "आवास र बसोबास",
          "summary": "Vocabulary for types of housing, describing a home, share houses, rent, and the steps of moving; grammar for adding reasons ('in addition to') and contrast ('even though').",
          "vocab": [
            {
              "ko": "주택",
              "en": "house (standalone)",
              "ne": "स्वतन्त्र घर"
            },
            {
              "ko": "아파트",
              "en": "apartment",
              "ne": "अपार्टमेन्ट"
            },
            {
              "ko": "오피스텔",
              "en": "officetel (studio office-apt)",
              "ne": "अफिसटेल"
            },
            {
              "ko": "빌라",
              "en": "villa (low-rise flat)",
              "ne": "भिल्ला"
            },
            {
              "ko": "원룸",
              "en": "one-room (studio)",
              "ne": "एक कोठे फ्ल्याट"
            },
            {
              "ko": "층간소음",
              "en": "inter-floor noise",
              "ne": "तला बीचको आवाज"
            },
            {
              "ko": "공유 주택",
              "en": "shared housing, share house",
              "ne": "साझा आवास"
            },
            {
              "ko": "공유하다",
              "en": "to share",
              "ne": "साझा गर्नु"
            },
            {
              "ko": "임대 주택",
              "en": "rental housing",
              "ne": "भाडाको घर"
            },
            {
              "ko": "월세",
              "en": "monthly rent",
              "ne": "मासिक भाडा"
            },
            {
              "ko": "집세",
              "en": "house rent",
              "ne": "घरको भाडा"
            },
            {
              "ko": "계약 기간",
              "en": "contract period",
              "ne": "सम्झौता अवधि"
            },
            {
              "ko": "부담하다",
              "en": "to bear (a cost), pay",
              "ne": "बहन गर्नु"
            },
            {
              "ko": "거주하다",
              "en": "to reside",
              "ne": "बस्नु"
            },
            {
              "ko": "주방",
              "en": "kitchen",
              "ne": "भान्सा"
            },
            {
              "ko": "거실",
              "en": "living room",
              "ne": "बैठक कोठा"
            },
            {
              "ko": "세탁실",
              "en": "laundry room",
              "ne": "धुने कोठा"
            },
            {
              "ko": "운동실",
              "en": "exercise room",
              "ne": "व्यायाम कोठा"
            },
            {
              "ko": "공부방",
              "en": "study room",
              "ne": "पढ्ने कोठा"
            },
            {
              "ko": "편의 공간",
              "en": "convenience space, amenities",
              "ne": "सुविधाको ठाउँ"
            },
            {
              "ko": "독립된 공간",
              "en": "independent space",
              "ne": "स्वतन्त्र ठाउँ"
            },
            {
              "ko": "각자",
              "en": "each person",
              "ne": "प्रत्येक व्यक्ति"
            },
            {
              "ko": "남향",
              "en": "south-facing",
              "ne": "दक्षिणमुखी"
            },
            {
              "ko": "창문이 크다",
              "en": "the window is large",
              "ne": "झ्याल ठूलो हुनु"
            },
            {
              "ko": "햇빛이 잘 들어오다",
              "en": "sunlight comes in well",
              "ne": "घाम राम्रोसँग आउनु"
            },
            {
              "ko": "교통이 편리하다",
              "en": "transportation is convenient",
              "ne": "यातायात सुविधाजनक हुनु"
            },
            {
              "ko": "젊은 세대",
              "en": "younger generation",
              "ne": "युवा पुस्ता"
            },
            {
              "ko": "사회 초년생",
              "en": "person new to society/work",
              "ne": "समाजमा नयाँ आएको व्यक्ति"
            },
            {
              "ko": "급속히",
              "en": "rapidly",
              "ne": "द्रुत गतिमा"
            },
            {
              "ko": "퍼져 나가다",
              "en": "to spread",
              "ne": "फैलिनु"
            },
            {
              "ko": "인기가 있다",
              "en": "to be popular",
              "ne": "लोकप्रिय हुनु"
            },
            {
              "ko": "이사하다",
              "en": "to move (house)",
              "ne": "सर्नु"
            },
            {
              "ko": "잔금을 지불하다",
              "en": "to pay the remaining balance",
              "ne": "बाँकी रकम तिर्नु"
            },
            {
              "ko": "집 열쇠를 받다",
              "en": "to receive the house key",
              "ne": "घरको साँचो लिनु"
            },
            {
              "ko": "이삿짐을 옮기다",
              "en": "to move belongings",
              "ne": "सामान सार्नु"
            },
            {
              "ko": "전입 신고",
              "en": "move-in registration",
              "ne": "बसाइँसराइ दर्ता"
            },
            {
              "ko": "주민 센터",
              "en": "community (residents') center",
              "ne": "समुदाय केन्द्र"
            },
            {
              "ko": "도보",
              "en": "on foot, walking distance",
              "ne": "पैदल"
            }
          ],
          "grammar": [
            {
              "pattern": "동형-는 데다가",
              "en": "in addition to ~ / on top of ~",
              "ne": "~ का साथै, ~ माथि अझ",
              "note": "Adds a further point on top of the first one.",
              "examples": [
                {
                  "ko": "이 아파트는 교통이 편리한 데다가 주변에 마트와 병원도 많아요.",
                  "en": "This apartment has convenient transportation, and on top of that there are many marts and hospitals nearby.",
                  "ne": "यो अपार्टमेन्ट यातायात सुविधाजनक हुनुका साथै वरपर मार्ट र अस्पताल पनि धेरै छन्।"
                }
              ]
            },
            {
              "pattern": "형-(으)면서도",
              "en": "even though ~ / while also being ~",
              "ne": "~ भए पनि",
              "note": "Shows contrast — something is true while the opposite-seeming thing is also true.",
              "examples": [
                {
                  "ko": "공유 주택은 월세가 싸면서도 시설이 좋아요.",
                  "en": "Share houses are cheap in rent while also having good facilities.",
                  "ne": "साझा आवासको भाडा सस्तो भए पनि सुविधा राम्रो हुन्छ।"
                }
              ]
            }
          ],
          "dialogues": [],
          "activities": [
            {
              "ko": "살고 싶은 집에 대해 이야기하기",
              "en": "Talking about the home you'd like to live in",
              "ne": "बस्न चाहेको घरबारे कुरा गर्ने"
            },
            {
              "ko": "이사할 때 해야 하는 일을 순서대로 쓰기",
              "en": "Writing the steps of moving in order",
              "ne": "सर्दा गर्नुपर्ने कामहरू क्रममा लेख्ने"
            }
          ],
          "culture": {
            "ko": "공유 주택 (셰어 하우스)",
            "en": "Shared Housing (Share Houses)",
            "ne": "साझा आवास (शेयर हाउस)",
            "text": "Share houses — where two or more people share a rental home, using common spaces like the living room and kitchen but keeping their own private rooms — are spreading rapidly among Korea's younger generation, and not only for economic reasons."
          },
          "quiz": []
        },
        {
          "id": "k3-ch12",
          "number": 12,
          "ko": "전통 명절",
          "en": "Traditional Holidays",
          "ne": "परम्परागत चाडपर्व",
          "summary": "Vocabulary for Korea's major traditional holidays, their foods and customs, and comparing them with holidays from your own country; reported-speech grammar.",
          "vocab": [
            {
              "ko": "명절",
              "en": "traditional holiday, festival",
              "ne": "चाडपर्व"
            },
            {
              "ko": "설날",
              "en": "Seollal (Lunar New Year)",
              "ne": "सेल्लाल (चन्द्र नववर्ष)"
            },
            {
              "ko": "추석",
              "en": "Chuseok (harvest festival)",
              "ne": "चुसेओक (फसल पर्व)"
            },
            {
              "ko": "한식",
              "en": "Hansik (cold food day)",
              "ne": "हान्सिक (चिसो खाना दिन)"
            },
            {
              "ko": "단오",
              "en": "Dano (5th of 5th lunar month)",
              "ne": "दानो"
            },
            {
              "ko": "차례",
              "en": "ancestral memorial rite",
              "ne": "पुर्खाको चारे विधि"
            },
            {
              "ko": "차례를 지내다",
              "en": "to hold the ancestral rite",
              "ne": "चारे विधि गर्नु"
            },
            {
              "ko": "세배",
              "en": "New Year bow (to elders)",
              "ne": "नयाँ वर्षको ढोग"
            },
            {
              "ko": "세뱃돈",
              "en": "New Year money (after sebae)",
              "ne": "ढोगपछि पाइने पैसा"
            },
            {
              "ko": "떡국",
              "en": "rice cake soup",
              "ne": "तोक्कुक (चामलको केक सुप)"
            },
            {
              "ko": "송편",
              "en": "songpyeon (half-moon rice cake)",
              "ne": "सोङप्योन"
            },
            {
              "ko": "윷놀이",
              "en": "yut nori (board game)",
              "ne": "युत खेल"
            },
            {
              "ko": "연날리기",
              "en": "kite flying",
              "ne": "चङ्गा उडाउने"
            },
            {
              "ko": "제기차기",
              "en": "jegi-chagi (shuttlecock kick)",
              "ne": "जेगी खेल"
            },
            {
              "ko": "설빔",
              "en": "new clothes worn on Seollal",
              "ne": "सेल्लालमा लगाउने नयाँ लुगा"
            },
            {
              "ko": "조상",
              "en": "ancestors",
              "ne": "पुर्खा"
            },
            {
              "ko": "음식을 올리다",
              "en": "to offer food (to ancestors)",
              "ne": "खाना चढाउनु"
            },
            {
              "ko": "햇곡식",
              "en": "the year's fresh grains",
              "ne": "नयाँ अन्न"
            },
            {
              "ko": "햇과일",
              "en": "the year's fresh fruits",
              "ne": "नयाँ फलफूल"
            },
            {
              "ko": "만물의 기운",
              "en": "the energy of all things",
              "ne": "सबै चीजहरूको ऊर्जा"
            },
            {
              "ko": "풍습",
              "en": "custom, tradition",
              "ne": "चलन, परम्परा"
            },
            {
              "ko": "전통",
              "en": "tradition",
              "ne": "परम्परा"
            },
            {
              "ko": "감사하는 마음",
              "en": "a grateful heart",
              "ne": "कृतज्ञता"
            },
            {
              "ko": "대표적인",
              "en": "representative, typical",
              "ne": "प्रतिनिधि"
            },
            {
              "ko": "음력",
              "en": "lunar calendar",
              "ne": "चन्द्र पात्रो"
            },
            {
              "ko": "강릉 단오제",
              "en": "Gangneung Danoje Festival",
              "ne": "गाङनेउङ दानोजे चाड"
            },
            {
              "ko": "다사인",
              "en": "Dashain (Nepal)",
              "ne": "दशैं"
            },
            {
              "ko": "티하르",
              "en": "Tihar (Nepal)",
              "ne": "तिहार"
            },
            {
              "ko": "셀로티",
              "en": "selroti (Nepali festive bread)",
              "ne": "सेलरोटी"
            }
          ],
          "grammar": [
            {
              "pattern": "동형-는다고/-(ㄴ)다고 하다",
              "en": "(it is said / they think) that ~ — reported speech",
              "ne": "~ भनिन्छ / भन्ठानिन्छ (अप्रत्यक्ष कथन)",
              "note": "Reports what someone says, thinks, or believes.",
              "examples": [
                {
                  "ko": "설날에 떡국을 먹으면 나이도 한 살 더 먹는다고 생각한다.",
                  "en": "It is thought that if you eat tteokguk on Seollal, you grow one year older.",
                  "ne": "सेल्लालमा तोक्कुक खाए एक वर्ष उमेर बढ्छ भन्ठानिन्छ।"
                }
              ]
            }
          ],
          "dialogues": [
            {
              "title": "전통 명절 비교 — 한국 vs 네팔",
              "en": "Comparing holidays: Korea vs Nepal",
              "ne": "चाडपर्व तुलना: कोरिया र नेपाल",
              "lines": [
                {
                  "ko": "한국의 대표적인 명절은 설날과 추석이고 네팔의 대표적인 명절은 다사인과 티하르이다.",
                  "en": "Korea's representative holidays are Seollal and Chuseok, and Nepal's are Dashain and Tihar.",
                  "ne": "कोरियाका प्रतिनिधि चाडपर्व सेल्लाल र चुसेओक हुन् र नेपालका दशैं र तिहार हुन्।"
                },
                {
                  "ko": "한국에서는 설날에 떡국을 먹고 네팔에서는 다사인에 셀로티를 먹는다.",
                  "en": "In Korea tteokguk is eaten on Seollal, and in Nepal selroti is eaten on Dashain.",
                  "ne": "कोरियामा सेल्लालमा तोक्कुक खान्छन् र नेपालमा दशैंमा सेलरोटी खान्छन्।"
                }
              ]
            }
          ],
          "activities": [
            {
              "ko": "한국과 우리나라의 명절을 비교하는 글쓰기",
              "en": "Writing a piece comparing Korean and your country's holidays",
              "ne": "कोरिया र आफ्नो देशको चाडपर्व तुलना गर्ने लेख"
            }
          ],
          "culture": {
            "ko": "강릉 단오제",
            "en": "Gangneung Danoje Festival",
            "ne": "गाङनेउङ दानोजे चाड",
            "text": "Among Korea's four major holidays, Dano falls on the 5th day of the 5th lunar month — believed to be when the energy of all things is strongest. The Gangneung Danoje Festival is a famous celebration recognized for its cultural heritage."
          },
          "quiz": []
        },
        {
          "id": "k3-ch13",
          "number": 13,
          "ko": "직장 생활",
          "en": "Workplace Life",
          "ne": "कार्यालय जीवन",
          "summary": "Vocabulary for job types, workplace tasks and hierarchy, salary and allowances, and the concept of work-life balance; grammar for giving advice and expressing uncertainty between options.",
          "vocab": [
            {
              "ko": "사무직",
              "en": "office work",
              "ne": "कार्यालय काम"
            },
            {
              "ko": "생산직",
              "en": "production work",
              "ne": "उत्पादन काम"
            },
            {
              "ko": "관리직",
              "en": "management work",
              "ne": "व्यवस्थापन काम"
            },
            {
              "ko": "영업직",
              "en": "sales work",
              "ne": "बिक्री काम"
            },
            {
              "ko": "판매직",
              "en": "retail work",
              "ne": "विक्रेता काम"
            },
            {
              "ko": "일용직",
              "en": "daily-wage work",
              "ne": "दैनिक ज्यालादारी काम"
            },
            {
              "ko": "지시",
              "en": "instruction, order",
              "ne": "निर्देशन"
            },
            {
              "ko": "작성하다",
              "en": "to write, fill out",
              "ne": "लेख्नु, भर्नु"
            },
            {
              "ko": "제출하다",
              "en": "to submit",
              "ne": "बुझाउनु"
            },
            {
              "ko": "보고하다",
              "en": "to report",
              "ne": "प्रतिवेदन गर्नु"
            },
            {
              "ko": "결재",
              "en": "approval (sign-off)",
              "ne": "स्वीकृति"
            },
            {
              "ko": "작업",
              "en": "work, task",
              "ne": "काम, कार्य"
            },
            {
              "ko": "마무리하다",
              "en": "to finish, wrap up",
              "ne": "टुङ्ग्याउनु"
            },
            {
              "ko": "정비하다",
              "en": "to maintain, service",
              "ne": "मर्मत गर्नु"
            },
            {
              "ko": "작동",
              "en": "operation, functioning",
              "ne": "सञ्चालन"
            },
            {
              "ko": "공구",
              "en": "tool",
              "ne": "औजार"
            },
            {
              "ko": "재고",
              "en": "inventory, stock",
              "ne": "स्टक"
            },
            {
              "ko": "자재",
              "en": "materials",
              "ne": "सामग्री"
            },
            {
              "ko": "창고",
              "en": "warehouse, storage",
              "ne": "गोदाम"
            },
            {
              "ko": "연봉",
              "en": "annual salary",
              "ne": "वार्षिक तलब"
            },
            {
              "ko": "일당",
              "en": "daily pay",
              "ne": "दैनिक ज्याला"
            },
            {
              "ko": "수당",
              "en": "allowance, bonus",
              "ne": "भत्ता, बोनस"
            },
            {
              "ko": "성과",
              "en": "result, achievement",
              "ne": "नतिजा"
            },
            {
              "ko": "상사",
              "en": "superior, boss",
              "ne": "माथिल्लो अधिकारी"
            },
            {
              "ko": "팀장",
              "en": "team leader",
              "ne": "टिम लिडर"
            },
            {
              "ko": "선배",
              "en": "senior (colleague)",
              "ne": "सिनियर"
            },
            {
              "ko": "상하 관계",
              "en": "hierarchical relationship",
              "ne": "माथि-तल सम्बन्ध"
            },
            {
              "ko": "회사 규칙",
              "en": "company rules",
              "ne": "कम्पनीका नियम"
            },
            {
              "ko": "허락을 받다",
              "en": "to get permission",
              "ne": "अनुमति लिनु"
            },
            {
              "ko": "파악하다",
              "en": "to grasp, understand",
              "ne": "बुझ्नु"
            },
            {
              "ko": "적응하다",
              "en": "to adapt",
              "ne": "अनुकूल हुनु"
            },
            {
              "ko": "피로",
              "en": "fatigue",
              "ne": "थकान"
            },
            {
              "ko": "재충전하다",
              "en": "to recharge",
              "ne": "पुनः ऊर्जा भर्नु"
            },
            {
              "ko": "이겨 내다",
              "en": "to overcome",
              "ne": "जित्नु"
            },
            {
              "ko": "워라밸",
              "en": "work-life balance",
              "ne": "कार्य-जीवन सन्तुलन"
            },
            {
              "ko": "소확행",
              "en": "small but certain happiness",
              "ne": "सानो तर पक्का खुशी"
            }
          ],
          "grammar": [
            {
              "pattern": "동-는 게 좋다",
              "en": "it's good / better to ~ (advice)",
              "ne": "~ गर्नु राम्रो हुन्छ (सल्लाह)",
              "note": "Used to give advice or a recommendation.",
              "examples": [
                {
                  "ko": "그럴 때는 팀장님께 먼저 보고하는 게 좋아요.",
                  "en": "In that case it's good to report to the team leader first.",
                  "ne": "त्यस्तो बेला पहिले टिम लिडरलाई प्रतिवेदन गर्नु राम्रो हो।"
                }
              ]
            },
            {
              "pattern": "동-는지 동-는지 모르겠다",
              "en": "I don't know whether to ~ or ~",
              "ne": "~ गर्ने कि ~ गर्ने थाहा छैन",
              "note": "Expresses uncertainty between two options.",
              "examples": [
                {
                  "ko": "일을 더 잘하는 게 좋은지 빨리 하는 게 좋은지 모르겠어요.",
                  "en": "I don't know whether it's better to do the work more carefully or to do it quickly.",
                  "ne": "काम राम्रोसँग गर्नु राम्रो हो कि छिटो गर्नु राम्रो हो थाहा छैन।"
                }
              ]
            }
          ],
          "dialogues": [],
          "activities": [
            {
              "ko": "직장 생활에서 겪은 일에 대해 이야기하기",
              "en": "Talking about experiences in your workplace",
              "ne": "कार्यालय जीवनका अनुभवबारे कुरा गर्ने"
            },
            {
              "ko": "일과 생활의 균형에 대해 쓰기",
              "en": "Writing about work-life balance",
              "ne": "काम र जीवनको सन्तुलनबारे लेख्ने"
            }
          ],
          "culture": {
            "ko": "워라밸과 소확행",
            "en": "Work-Life Balance & Small Happiness",
            "ne": "कार्य-जीवन सन्तुलन र सानो खुशी",
            "text": "As people increasingly value personal happiness over social success, the word 워라밸 (work-life balance) emerged, along with 소확행 — small but certain happiness found in everyday life."
          },
          "quiz": []
        },
        {
          "id": "k3-ch14",
          "number": 14,
          "ko": "인터넷과 스마트폰",
          "en": "Internet & Smartphones",
          "ne": "इन्टरनेट र स्मार्टफोन",
          "summary": "Vocabulary for how we use the internet and smartphones, their benefits and negative effects (addiction, insomnia, isolation), and how to use them wisely.",
          "vocab": [
            {
              "ko": "정보를 검색하다",
              "en": "to search for information",
              "ne": "जानकारी खोज्नु"
            },
            {
              "ko": "동영상",
              "en": "video clip",
              "ne": "भिडियो"
            },
            {
              "ko": "유튜브를 보다",
              "en": "to watch YouTube",
              "ne": "युट्युब हेर्नु"
            },
            {
              "ko": "음악을 듣다",
              "en": "to listen to music",
              "ne": "संगीत सुन्नु"
            },
            {
              "ko": "쇼핑하다",
              "en": "to shop",
              "ne": "किनमेल गर्नु"
            },
            {
              "ko": "스마트폰 중독",
              "en": "smartphone addiction",
              "ne": "स्मार्टफोन लत"
            },
            {
              "ko": "의존하다",
              "en": "to depend on",
              "ne": "निर्भर हुनु"
            },
            {
              "ko": "불면증",
              "en": "insomnia",
              "ne": "निद्रा नलाग्ने रोग"
            },
            {
              "ko": "시력이 나빠지다",
              "en": "eyesight deteriorates",
              "ne": "आँखा कमजोर हुनु"
            },
            {
              "ko": "개인 정보 유출",
              "en": "personal information leak",
              "ne": "व्यक्तिगत जानकारी चुहावट"
            },
            {
              "ko": "사회적 고립감",
              "en": "sense of social isolation",
              "ne": "सामाजिक एकाकीपन"
            },
            {
              "ko": "해소",
              "en": "relief, resolution",
              "ne": "हटाउने, समाधान"
            },
            {
              "ko": "부작용",
              "en": "side effect",
              "ne": "नकारात्मक असर"
            },
            {
              "ko": "현명하게",
              "en": "wisely",
              "ne": "बुद्धिमानीपूर्वक"
            },
            {
              "ko": "적절한",
              "en": "appropriate, suitable",
              "ne": "उचित"
            },
            {
              "ko": "건강을 지키다",
              "en": "to maintain health",
              "ne": "स्वास्थ्य जोगाउनु"
            },
            {
              "ko": "진단",
              "en": "diagnosis",
              "ne": "निदान"
            },
            {
              "ko": "전문가",
              "en": "expert",
              "ne": "विशेषज्ञ"
            },
            {
              "ko": "대중화",
              "en": "popularization, becoming widespread",
              "ne": "व्यापकता"
            },
            {
              "ko": "시대",
              "en": "era, age",
              "ne": "युग"
            },
            {
              "ko": "지갑",
              "en": "wallet",
              "ne": "पर्स"
            },
            {
              "ko": "앱카드",
              "en": "app card (digital card)",
              "ne": "एप कार्ड"
            },
            {
              "ko": "응급 상황",
              "en": "emergency situation",
              "ne": "आपतकालीन अवस्था"
            },
            {
              "ko": "첫째",
              "en": "first(ly)",
              "ne": "पहिलो"
            },
            {
              "ko": "둘째",
              "en": "second(ly)",
              "ne": "दोस्रो"
            },
            {
              "ko": "셋째",
              "en": "third(ly)",
              "ne": "तेस्रो"
            },
            {
              "ko": "그러므로",
              "en": "therefore",
              "ne": "त्यसैले"
            },
            {
              "ko": "과유불급",
              "en": "too much is as bad as too little (idiom)",
              "ne": "अति सर्वत्र वर्जयेत्"
            }
          ],
          "grammar": [
            {
              "pattern": "동-아/어야 하다",
              "en": "must / should ~",
              "ne": "~ गर्नैपर्छ",
              "note": "Expresses obligation or strong recommendation. Often listed with 첫째, 둘째, 셋째 when giving steps.",
              "examples": [
                {
                  "ko": "하루에 스마트폰을 사용하는 시간을 정해 놓고 지켜야 합니다.",
                  "en": "You must set a daily smartphone-use time and stick to it.",
                  "ne": "दिनमा स्मार्टफोन प्रयोग गर्ने समय तोकेर पालना गर्नैपर्छ।"
                }
              ]
            }
          ],
          "dialogues": [],
          "activities": [
            {
              "ko": "인터넷과 스마트폰을 잘 활용하는 방법 말하기",
              "en": "Talking about how to use the internet and smartphones well",
              "ne": "इन्टरनेट र स्मार्टफोन राम्रोसँग प्रयोग गर्ने तरिका बताउने"
            },
            {
              "ko": "스마트폰의 장점과 단점 쓰기",
              "en": "Writing the pros and cons of smartphones",
              "ne": "स्मार्टफोनका फाइदा र बेफाइदा लेख्ने"
            }
          ],
          "culture": {
            "ko": "현명한 스마트폰 사용",
            "en": "Using Smartphones Wisely",
            "ne": "स्मार्टफोनको बुद्धिमानी प्रयोग",
            "text": "Smartphones help us search information, study, and even pay with app cards instead of a wallet — but overuse causes insomnia, weaker eyesight, and isolation. As the saying 과유불급 ('too much is as bad as too little') goes, the key is to use them wisely without depending on them."
          },
          "quiz": []
        },
        {
          "id": "k3-ch16",
          "number": 16,
          "ko": "날씨와 건강",
          "en": "Weather & Health",
          "ne": "मौसम र स्वास्थ्य",
          "summary": "Vocabulary about seasonal health (spring fatigue), weather warnings and forecasts, and staying healthy; grammar for making suggestions and reasoning about likely situations.",
          "vocab": [
            {
              "ko": "봄철",
              "en": "spring season",
              "ne": "वसन्त ऋतु"
            },
            {
              "ko": "봄을 타다",
              "en": "to feel spring fatigue / blues",
              "ne": "वसन्त थकान महसुस गर्नु"
            },
            {
              "ko": "춘곤증",
              "en": "spring fatigue (drowsiness)",
              "ne": "वसन्त थकान"
            },
            {
              "ko": "나른하다",
              "en": "to feel lethargic",
              "ne": "सुस्त लाग्नु"
            },
            {
              "ko": "졸음",
              "en": "drowsiness",
              "ne": "निद्रा लाग्ने"
            },
            {
              "ko": "피로",
              "en": "fatigue",
              "ne": "थकान"
            },
            {
              "ko": "상태",
              "en": "condition, state",
              "ne": "अवस्था"
            },
            {
              "ko": "원인",
              "en": "cause, reason",
              "ne": "कारण"
            },
            {
              "ko": "관련이 있다",
              "en": "to be related to",
              "ne": "सम्बन्धित हुनु"
            },
            {
              "ko": "적응하다",
              "en": "to adapt",
              "ne": "अनुकूल हुनु"
            },
            {
              "ko": "익숙하다",
              "en": "to be accustomed to",
              "ne": "अभ्यस्त हुनु"
            },
            {
              "ko": "예방하다",
              "en": "to prevent",
              "ne": "रोकथाम गर्नु"
            },
            {
              "ko": "규칙적이다",
              "en": "to be regular",
              "ne": "नियमित हुनु"
            },
            {
              "ko": "적당하다",
              "en": "to be appropriate, moderate",
              "ne": "उचित हुनु"
            },
            {
              "ko": "스트레칭을 하다",
              "en": "to stretch",
              "ne": "स्ट्रेचिङ गर्नु"
            },
            {
              "ko": "근육의 긴장",
              "en": "muscle tension",
              "ne": "मांसपेशीको तनाव"
            },
            {
              "ko": "풀어 주다",
              "en": "to relieve, loosen",
              "ne": "फुकाउनु"
            },
            {
              "ko": "효과적이다",
              "en": "to be effective",
              "ne": "प्रभावकारी हुनु"
            },
            {
              "ko": "비타민",
              "en": "vitamin",
              "ne": "भिटामिन"
            },
            {
              "ko": "채소",
              "en": "vegetable",
              "ne": "तरकारी"
            },
            {
              "ko": "수면 시간",
              "en": "sleep time",
              "ne": "निद्राको समय"
            },
            {
              "ko": "푹 자다",
              "en": "to sleep soundly",
              "ne": "गहिरो निद्रा सुत्नु"
            },
            {
              "ko": "일기 예보",
              "en": "weather forecast",
              "ne": "मौसम पूर्वानुमान"
            },
            {
              "ko": "호우 경보",
              "en": "heavy rain warning",
              "ne": "भारी वर्षाको चेतावनी"
            },
            {
              "ko": "위험하다",
              "en": "to be dangerous",
              "ne": "खतरनाक हुनु"
            },
            {
              "ko": "연기하다",
              "en": "to postpone",
              "ne": "स्थगित गर्नु"
            },
            {
              "ko": "야외 행사",
              "en": "outdoor event",
              "ne": "बाहिरी कार्यक्रम"
            },
            {
              "ko": "체육 대회",
              "en": "sports day / athletic meet",
              "ne": "खेलकुद दिवस"
            },
            {
              "ko": "대중교통",
              "en": "public transport",
              "ne": "सार्वजनिक यातायात"
            },
            {
              "ko": "주차하다",
              "en": "to park",
              "ne": "पार्किङ गर्नु"
            }
          ],
          "grammar": [
            {
              "pattern": "동형-(으)ㄹ 텐데",
              "en": "would/will probably ~, so... (reasoning)",
              "ne": "~ होला, त्यसैले...",
              "note": "Used to reason about a likely situation, often before making a suggestion.",
              "examples": [
                {
                  "ko": "지금 출발하면 늦을 텐데 택시를 타는 게 어때요?",
                  "en": "If you leave now you'll probably be late, so how about taking a taxi?",
                  "ne": "अहिले निस्किए ढिलो हुन्छ होला, त्यसैले ट्याक्सी चढ्ने कि कस्तो?"
                }
              ]
            },
            {
              "pattern": "동-는 게 어때요?",
              "en": "how about ~ing? (suggestion)",
              "ne": "~ गर्ने कि कस्तो? (सुझाव)",
              "note": "A polite way to suggest doing something.",
              "examples": [
                {
                  "ko": "체육 대회를 다른 날로 연기하는 게 어때요?",
                  "en": "How about postponing the sports day to another day?",
                  "ne": "खेलकुद दिवस अर्को दिनमा स्थगित गर्ने कि कस्तो?"
                }
              ]
            }
          ],
          "dialogues": [
            {
              "title": "호우 경보 — 여행",
              "en": "Heavy rain warning and travel plans",
              "ne": "भारी वर्षाको चेतावनी र यात्रा",
              "lines": [
                {
                  "ko": "일기 예보 봤어요? 오늘 호우 경보가 내렸대요.",
                  "en": "Did you see the weather forecast? They say a heavy rain warning has been issued today.",
                  "ne": "मौसम पूर्वानुमान हेर्नुभयो? आज भारी वर्षाको चेतावनी जारी भयो रे।"
                },
                {
                  "ko": "정말요? 오늘 여행 가기로 했는데 걱정이에요.",
                  "en": "Really? We planned to travel today — I'm worried.",
                  "ne": "साँच्चै? आज यात्रामा जाने भनेको थियो — चिन्ता लागेको छ।"
                }
              ]
            }
          ],
          "activities": [
            {
              "ko": "날씨에 따라 계획을 바꾸는 상황 말하기",
              "en": "Talking about changing plans according to the weather",
              "ne": "मौसमअनुसार योजना बदल्ने अवस्थाबारे कुरा गर्ने"
            },
            {
              "ko": "건강을 지키는 방법 쓰기",
              "en": "Writing about ways to stay healthy",
              "ne": "स्वास्थ्य जोगाउने तरिका लेख्ने"
            }
          ],
          "culture": {
            "ko": "춘곤증",
            "en": "Spring Fatigue (Chungonjeung)",
            "ne": "वसन्त थकान (춘곤증)",
            "text": "Spring fatigue — commonly expressed in Korean as '봄을 타다' (catching spring) — is not a medical illness but a temporary lethargy as the body adjusts to the season. It usually disappears within 1–3 weeks; regular sleep, light stretching, and vitamin-rich vegetables help."
          },
          "quiz": []
        }
      ]
    },
    {
      "id": "kiip4",
      "name": "KIIP 4",
      "subtitle": "사회통합프로그램 · 중급 2 (Intermediate 2)",
      "chapters": [
        {
          "id": "k4-ch1",
          "number": 1,
          "ko": "한국 생활 적응",
          "en": "Adaptation to Korean Life",
          "ne": "कोरियाली जीवनमा अनुकूलन",
          "summary": "Talking about the early days of settling in Korea, reflecting on how life has changed, and writing about the settlement experience.",
          "vocab": [
            {
              "ko": "한국",
              "rom": "han-guk",
              "en": "Korea",
              "ne": "कोरिया",
              "similar": "대한민국 (Republic of Korea)"
            },
            {
              "ko": "생활",
              "rom": "saeng-hwal",
              "en": "life, living",
              "ne": "जीवन, बसाइ",
              "similar": "삶 (life), 일상 (daily life)"
            },
            {
              "ko": "적응",
              "rom": "jeok-eung",
              "en": "adaptation",
              "ne": "अनुकूलन",
              "similar": "적응하다 (to adapt)"
            },
            {
              "ko": "아이",
              "rom": "a-i",
              "en": "child",
              "ne": "बच्चा",
              "similar": "어린이 (kid), 자녀 (offspring)"
            },
            {
              "ko": "통역사",
              "rom": "tong-yeok-sa",
              "en": "interpreter",
              "ne": "दोभाषे, अनुवादक",
              "similar": "번역가 (translator), 통역관 (formal interpreter)"
            },
            {
              "ko": "초기",
              "rom": "cho-gi",
              "en": "early stage",
              "ne": "सुरुवाती समय",
              "similar": "처음, 초반"
            },
            {
              "ko": "하나하나",
              "rom": "ha-na-ha-na",
              "en": "one by one, each",
              "ne": "एक-एक गरेर",
              "similar": "일일이"
            },
            {
              "ko": "신기하다",
              "rom": "sin-gi-ha-da",
              "en": "to be amazing / curious",
              "ne": "अचम्म लाग्नु",
              "similar": "놀랍다, 신비롭다"
            },
            {
              "ko": "설레다",
              "rom": "seol-le-da",
              "en": "to be excited, to flutter",
              "ne": "रोमाञ्चित हुनु",
              "similar": "두근거리다"
            },
            {
              "ko": "여유",
              "rom": "yeo-yu",
              "en": "leisure, room, ease",
              "ne": "फुर्सद, सहजता",
              "similar": "여유로움"
            },
            {
              "ko": "주변",
              "rom": "ju-byeon",
              "en": "surroundings",
              "ne": "वरिपरि",
              "similar": "주위"
            },
            {
              "ko": "자리를 잡다",
              "rom": "ja-ri-reul jap-da",
              "en": "to settle down",
              "ne": "जमेर बस्नु",
              "similar": "정착하다"
            },
            {
              "ko": "초청하다",
              "rom": "cho-cheong-ha-da",
              "en": "to invite",
              "ne": "बोलाउनु, निम्तो दिनु",
              "similar": "부르다, 초대하다"
            },
            {
              "ko": "문화 차이",
              "rom": "mun-hwa cha-i",
              "en": "cultural difference",
              "ne": "सांस्कृतिक भिन्नता",
              "similar": "문화 격차"
            },
            {
              "ko": "향수병",
              "rom": "hyang-su-byeong",
              "en": "homesickness",
              "ne": "घरको याद लाग्ने रोग",
              "similar": "고향 생각"
            },
            {
              "ko": "편견",
              "rom": "pyeon-gyeon",
              "en": "prejudice",
              "ne": "पूर्वाग्रह",
              "similar": "선입견"
            },
            {
              "ko": "오해",
              "rom": "o-hae",
              "en": "misunderstanding",
              "ne": "गलतफहमी",
              "similar": "착각"
            },
            {
              "ko": "보람차다",
              "rom": "bo-ram-cha-da",
              "en": "to be rewarding, fulfilling",
              "ne": "सन्तोषजनक, फलदायी हुनु",
              "similar": "보람있다, 뿌듯하다"
            },
            {
              "ko": "정착",
              "rom": "jeong-chak",
              "en": "settlement",
              "ne": "बसोबास, स्थायी बसाइ",
              "similar": "정착하다 (to settle)"
            },
            {
              "ko": "이민자",
              "rom": "i-min-ja",
              "en": "immigrant",
              "ne": "आप्रवासी",
              "similar": "이주민, 외국인"
            }
          ],
          "grammar": [
            {
              "pattern": "동-느라고",
              "en": "because of doing ~ (and so something else happened)",
              "ne": "~ गर्नाले / ~ गर्न लाग्दा (त्यसैले अर्को कुरा भयो)",
              "note": "Used when the first clause is the cause/reason — usually something that took effort or led to a negative or unintended result. Same subject for both clauses. Attaches to a verb stem; the verb stays in the present form before -느라고.",
              "examples": [
                {
                  "ko": "직장을 구하느라고 여기저기 뛰어다녔어요.",
                  "en": "I ran around here and there looking for a job.",
                  "ne": "जागिर खोज्नाले यहाँ-त्यहाँ दौडादौड गरें।"
                },
                {
                  "ko": "앞만 보고 달리느라고 여유가 없었어요.",
                  "en": "I had no leisure because I was just running toward my goals.",
                  "ne": "अगाडि मात्र हेरेर दौडनाले फुर्सद थिएन।"
                },
                {
                  "ko": "적은 월급으로 사느라고 친구도 자주 못 만났어요.",
                  "en": "I couldn't meet my friends often because I was living on a small salary.",
                  "ne": "थोरै तलबमा बाँच्नाले साथीहरूलाई पनि बारम्बार भेट्न सकिनँ।"
                }
              ]
            },
            {
              "pattern": "동형-을수록",
              "en": "the more ~ , the more ~",
              "ne": "जति ~ गर्‍यो, त्यति नै ~",
              "note": "Shows that as one thing increases, another changes accordingly. Often paired as 'A-(으)면 A-을수록' for emphasis (the more you A, the more...).",
              "examples": [
                {
                  "ko": "한국 생활은 하면 할수록 정이 들어요.",
                  "en": "The more I live in Korea, the more attached I become.",
                  "ne": "कोरियाली जीवन जति बिताउँदै गयो, त्यति नै माया बस्दै जान्छ।"
                },
                {
                  "ko": "한국어는 공부할수록 재미있어요.",
                  "en": "The more I study Korean, the more fun it is.",
                  "ne": "कोरियाली भाषा जति पढ्यो, त्यति नै रमाइलो लाग्छ।"
                }
              ]
            }
          ],
          "dialogues": [
            {
              "title": "이 사람의 한국 생활은 어떤 것 같아요?",
              "en": "How does this person's life in Korea seem to you?",
              "ne": "यो व्यक्तिको कोरियाली जीवन कस्तो लाग्छ?",
              "lines": [
                {
                  "ko": "이 사람의 한국 생활은 바쁘지만 보람찬 것 같아요.",
                  "en": "This person's life in Korea seems busy but rewarding.",
                  "ne": "यो व्यक्तिको कोरियाली जीवन व्यस्त भए पनि सन्तोषजनक जस्तो लाग्छ।"
                },
                {
                  "ko": "통역사로 일하면서 한국 사회에 잘 적응한 것 같아요.",
                  "en": "They seem to have adapted well to Korean society while working as an interpreter.",
                  "ne": "दोभाषेको रूपमा काम गर्दै कोरियाली समाजमा राम्ररी अनुकूलन भएको जस्तो लाग्छ।"
                }
              ]
            },
            {
              "title": "한국 생활 초기에 어땠어요?",
              "en": "How was it for you in the early days of life in Korea?",
              "ne": "कोरियाली जीवनको सुरुवाती समयमा कस्तो थियो?",
              "lines": [
                {
                  "ko": "하나하나 다 새롭고 신기하게 느껴졌어요.",
                  "en": "Each and every thing felt new and amazing.",
                  "ne": "एक-एक कुरा सबै नयाँ र अचम्म लाग्थ्यो।"
                },
                {
                  "ko": "향수병에 걸려서 가족들이 너무 그리웠어요.",
                  "en": "I got homesick and missed my family a lot.",
                  "ne": "घरको याद लागेर परिवारको धेरै सम्झना आयो।"
                },
                {
                  "ko": "이제는 주변을 돌아볼 수 있는 여유가 생겼어요.",
                  "en": "Now I have the room to look around me.",
                  "ne": "अब वरिपरि हेर्न सक्ने फुर्सद पाएको छु।"
                }
              ]
            }
          ],
          "activities": [
            {
              "ko": "한국 생활 적응 시기 회고하기",
              "en": "Looking back on your period of adapting to Korean life",
              "ne": "कोरियाली जीवनमा अनुकूलन भएको समय सम्झने"
            },
            {
              "ko": "한국 정착 경험에 대해 쓰기",
              "en": "Writing about your settlement experience in Korea",
              "ne": "कोरियामा बसोबासको अनुभवबारे लेख्ने"
            }
          ],
          "culture": {
            "ko": "이민자 정착 프로그램",
            "en": "Immigrant Settlement Programs",
            "ne": "आप्रवासी बसोबास कार्यक्रमहरू",
            "text": "Korea runs settlement-support programs for immigrants — most notably the Social Integration Program (KIIP / 사회통합프로그램), which provides Korean language and Korean culture education to help newcomers adapt and qualify for visa and residency benefits."
          },
          "quiz": [
            {
              "q": "What does 적응 mean?",
              "options": [
                "adaptation",
                "interpreter",
                "homesickness",
                "prejudice"
              ],
              "answer": 0
            },
            {
              "q": "Choose the correct meaning of 통역사.",
              "options": [
                "translator (written)",
                "interpreter",
                "immigrant",
                "neighbour"
              ],
              "answer": 1
            },
            {
              "q": "The pattern 동-느라고 is used to express…",
              "options": [
                "a polite request",
                "the more ~ the more ~",
                "a cause that took effort / led to a (often negative) result",
                "future intention"
              ],
              "answer": 2
            },
            {
              "q": "Complete: 한국어는 공부___ 재미있어요. (The more I study, the more fun it is.)",
              "options": [
                "-느라고",
                "-할수록",
                "-지만",
                "-으려고"
              ],
              "answer": 1
            },
            {
              "q": "What does 향수병 refer to?",
              "options": [
                "a cultural festival",
                "homesickness",
                "a settlement visa",
                "a language exam"
              ],
              "answer": 1
            }
          ]
        },
        {
          "id": "k4-ch2",
          "number": 2,
          "ko": "가족의 변화",
          "en": "Changes in the Family",
          "ne": "परिवारमा आएको परिवर्तन",
          "summary": "Vocabulary about family forms and their characteristics; talking and writing about the kind of family you like.",
          "vocab": [
            {
              "ko": "가족",
              "rom": "ga-jok",
              "en": "family",
              "ne": "परिवार",
              "similar": "식구, 가정"
            },
            {
              "ko": "형태",
              "rom": "hyeong-tae",
              "en": "form, type",
              "ne": "रूप, प्रकार",
              "similar": "모양, 유형"
            },
            {
              "ko": "특징",
              "rom": "teuk-jing",
              "en": "characteristic, feature",
              "ne": "विशेषता",
              "similar": "특성"
            },
            {
              "ko": "동거",
              "rom": "dong-geo",
              "en": "living together, cohabitation",
              "ne": "सँगै बस्नु",
              "similar": "함께 살다"
            },
            {
              "ko": "출산",
              "rom": "chul-san",
              "en": "childbirth",
              "ne": "बच्चा जन्माउनु",
              "similar": "분만"
            },
            {
              "ko": "장려",
              "rom": "jang-nyeo",
              "en": "encouragement, promotion",
              "ne": "प्रोत्साहन",
              "similar": "권장"
            }
          ],
          "grammar": [
            {
              "pattern": "동형-을 뿐만 아니라",
              "en": "not only ~ (but also)",
              "ne": "~ मात्र होइन (...पनि)",
              "note": "Adds information: 'not only A but also B'. Attaches to verb/adjective stems.",
              "examples": [
                {
                  "ko": "그 집은 넓을 뿐만 아니라 깨끗해요.",
                  "en": "That house is not only spacious but also clean.",
                  "ne": "त्यो घर फराकिलो मात्र होइन, सफा पनि छ।"
                }
              ]
            },
            {
              "pattern": "동형-을 수밖에 없다",
              "en": "have no choice but to ~ / can only ~",
              "ne": "~ गर्नु बाहेक अरू उपाय छैन",
              "note": "Expresses that there is no other option but to do something.",
              "examples": [
                {
                  "ko": "표가 없어서 집에 갈 수밖에 없었어요.",
                  "en": "There were no tickets, so I had no choice but to go home.",
                  "ne": "टिकट नभएकोले घर जानु बाहेक अरू उपाय थिएन।"
                }
              ]
            }
          ],
          "dialogues": [],
          "activities": [
            {
              "ko": "가족의 특징에 대해 말하기",
              "en": "Talking about the characteristics of families",
              "ne": "परिवारको विशेषताबारे कुरा गर्ने"
            },
            {
              "ko": "좋아하는 가족의 형태에 대해 쓰기",
              "en": "Writing about the family form you prefer",
              "ne": "मनपर्ने परिवारको रूपबारे लेख्ने"
            }
          ],
          "culture": {
            "ko": "출산 장려 정책",
            "en": "Childbirth Encouragement Policy",
            "ne": "बच्चा जन्माउन प्रोत्साहन नीति",
            "text": "Policies and benefits the Korean government offers to encourage childbirth in response to a low birth-rate society."
          },
          "quiz": []
        },
        {
          "id": "k4-ch3",
          "number": 3,
          "ko": "생활 속의 과학",
          "en": "Science in Daily Life",
          "ne": "दैनिक जीवनमा विज्ञान",
          "summary": "Vocabulary for science and technology in everyday life (AI, robots, smart devices), talking about the latest products, and writing that compares life before and after new technology.",
          "vocab": [
            {
              "ko": "인공 지능 (AI)",
              "rom": "in-gong ji-neung",
              "en": "Artificial Intelligence",
              "ne": "कृत्रिम बुद्धिमत्ता",
              "similar": "AI"
            },
            {
              "ko": "로봇 청소기",
              "rom": "ro-bot cheong-so-gi",
              "en": "robot vacuum cleaner",
              "ne": "रोबोट भ्याकुम क्लिनर"
            },
            {
              "ko": "인공 지능 스피커",
              "rom": "in-gong ji-neung seu-pi-keo",
              "en": "AI speaker",
              "ne": "एआई स्पिकर"
            },
            {
              "ko": "자율 주행차",
              "rom": "ja-yul ju-haeng-cha",
              "en": "self-driving car",
              "ne": "स्वचालित कार"
            },
            {
              "ko": "3D 프린터",
              "rom": "seu-ri-di peu-rin-teo",
              "en": "3D printer",
              "ne": "थ्रीडी प्रिन्टर"
            },
            {
              "ko": "드론",
              "rom": "deu-ron",
              "en": "drone",
              "ne": "ड्रोन"
            },
            {
              "ko": "가상 현실 (VR) 게임",
              "rom": "ga-sang hyeon-sil ge-im",
              "en": "virtual reality game",
              "ne": "भर्चुअल रियालिटी खेल"
            },
            {
              "ko": "무인 편의점",
              "rom": "mu-in pyeon-ui-jeom",
              "en": "unmanned convenience store",
              "ne": "मानवरहित सुविधा पसल"
            },
            {
              "ko": "모바일 앱",
              "rom": "mo-ba-il aep",
              "en": "mobile app",
              "ne": "मोबाइल एप"
            },
            {
              "ko": "공기 청정기",
              "rom": "gong-gi cheong-jeong-gi",
              "en": "air purifier",
              "ne": "हावा सफा गर्ने मेसिन"
            },
            {
              "ko": "사물 인터넷 (IoT)",
              "rom": "sa-mul in-teo-net",
              "en": "Internet of Things",
              "ne": "इन्टरनेट अफ थिङ्स"
            },
            {
              "ko": "환자",
              "rom": "hwan-ja",
              "en": "patient",
              "ne": "बिरामी"
            },
            {
              "ko": "안내",
              "rom": "an-nae",
              "en": "guidance, information",
              "ne": "मार्गदर्शन, जानकारी",
              "similar": "가이드"
            },
            {
              "ko": "제공하다",
              "rom": "je-gong-ha-da",
              "en": "to provide",
              "ne": "प्रदान गर्नु",
              "similar": "주다"
            },
            {
              "ko": "활용하다",
              "rom": "hwal-yong-ha-da",
              "en": "to utilize, make use of",
              "ne": "प्रयोग गर्नु",
              "similar": "이용하다, 사용하다"
            },
            {
              "ko": "알아보다",
              "rom": "a-ra-bo-da",
              "en": "to find out, look into",
              "ne": "जान्ने प्रयास गर्नु, खोज्नु",
              "similar": "조사하다"
            },
            {
              "ko": "의료",
              "rom": "ui-ryo",
              "en": "medical care",
              "ne": "चिकित्सा",
              "similar": "의학"
            },
            {
              "ko": "진료하다",
              "rom": "jin-ryo-ha-da",
              "en": "to examine (a patient)",
              "ne": "जाँच गर्नु"
            },
            {
              "ko": "분석하다",
              "rom": "bun-seok-ha-da",
              "en": "to analyze",
              "ne": "विश्लेषण गर्नु"
            },
            {
              "ko": "역할",
              "rom": "yeok-hal",
              "en": "role",
              "ne": "भूमिका",
              "similar": "임무"
            },
            {
              "ko": "정확하다",
              "rom": "jeong-hwak-ha-da",
              "en": "to be accurate",
              "ne": "सही, यथार्थ हुनु",
              "similar": "올바르다"
            },
            {
              "ko": "결정하다",
              "rom": "gyeol-jeong-ha-da",
              "en": "to decide",
              "ne": "निर्णय गर्नु",
              "similar": "정하다"
            }
          ],
          "grammar": [
            {
              "pattern": "동형-는 줄 알다",
              "en": "thought that ~ (mistaken belief)",
              "ne": "~ हो भन्ठान्नु (गलत अनुमान)",
              "note": "Expresses that you assumed or believed something — often a belief that turns out to be wrong. Pairs naturally with the realization ending -군요/-네요.",
              "examples": [
                {
                  "ko": "인공 지능 때문에 의사의 일자리가 줄어드는 줄 알았어요.",
                  "en": "I thought doctors' jobs would decrease because of AI.",
                  "ne": "कृत्रिम बुद्धिमत्ताका कारण डाक्टरहरूको रोजगारी घट्छ भन्ठानेको थिएँ।"
                }
              ]
            },
            {
              "pattern": "동-곤 하다",
              "en": "used to ~ / would (repeatedly) do ~",
              "ne": "पटक-पटक ~ गर्ने गर्थें",
              "note": "Describes an action that was done repeatedly or habitually in the past.",
              "examples": [
                {
                  "ko": "예전에는 의사가 직접 처방하는 일을 하곤 했습니다.",
                  "en": "In the past, doctors used to do the prescribing themselves.",
                  "ne": "पहिले डाक्टर आफैंले औषधि सिफारिस गर्ने गर्थे।"
                }
              ]
            }
          ],
          "dialogues": [
            {
              "title": "사회자 (Host) — 인공 지능과 의료",
              "en": "AI and medical care",
              "ne": "कृत्रिम बुद्धिमत्ता र चिकित्सा",
              "lines": [
                {
                  "ko": "인공 지능 때문에 의사의 일자리가 줄어드는 줄 알았는데 그게 아니었군요.",
                  "en": "I thought doctors' jobs would decrease because of AI, but that wasn't the case.",
                  "ne": "कृत्रिम बुद्धिमत्ताका कारण डाक्टरको रोजगारी घट्छ भन्ठानेको थिएँ, तर त्यस्तो रहेनछ।"
                },
                {
                  "ko": "앞으로는 인공 지능 덕분에 환자가 보다 높은 의료 서비스를 받을 수 있겠네요.",
                  "en": "In the future, thanks to AI, patients will be able to receive higher-quality medical services.",
                  "ne": "अब उप्रान्त कृत्रिम बुद्धिमत्ताका कारण बिरामीहरूले झन् उच्च स्तरको चिकित्सा सेवा पाउन सक्ने भए।"
                }
              ]
            }
          ],
          "activities": [
            {
              "ko": "생활 속 최신 제품에 대해 이야기하기",
              "en": "Talking about the latest products in daily life",
              "ne": "दैनिक जीवनका नवीनतम उत्पादनबारे कुरा गर्ने"
            },
            {
              "ko": "기술 발전으로 인한 생활의 변화를 비교하는 글쓰기",
              "en": "Writing that compares life changes brought by technological development",
              "ne": "प्रविधिको विकासले ल्याएको जीवनको परिवर्तन तुलना गर्ने लेख"
            }
          ],
          "culture": {
            "ko": "온돌",
            "en": "Ondol — Korean Underfloor Heating",
            "ne": "ओन्दोल — कोरियाली भुइँ तताउने प्रणाली",
            "text": "Ondol (온돌) is Korea's traditional underfloor heating system. Heat flows beneath the floor to warm the room — an early piece of everyday Korean science and engineering that still shapes how modern Korean homes are heated."
          },
          "quiz": [
            {
              "q": "What does 인공 지능 mean?",
              "options": [
                "Internet of Things",
                "Artificial Intelligence",
                "Virtual Reality",
                "self-driving car"
              ],
              "answer": 1
            },
            {
              "q": "Choose the meaning of 활용하다.",
              "options": [
                "to decide",
                "to provide",
                "to utilize / make use of",
                "to analyze"
              ],
              "answer": 2
            },
            {
              "q": "The pattern 동형-는 줄 알다 expresses…",
              "options": [
                "a habitual past action",
                "a (often mistaken) belief or assumption",
                "the more ~ the more ~",
                "a polite request"
              ],
              "answer": 1
            },
            {
              "q": "예전에는 의사가 직접 처방하___ 했습니다. (used to do)",
              "options": [
                "-는 줄 알",
                "-곤",
                "-기 위해서",
                "-덕분에"
              ],
              "answer": 1
            },
            {
              "q": "What is 온돌?",
              "options": [
                "a robot vacuum",
                "Korean underfloor heating",
                "an AI speaker",
                "an air purifier"
              ],
              "answer": 1
            }
          ]
        },
        {
          "id": "k4-ch4",
          "number": 4,
          "ko": "생애 의례",
          "en": "Life-cycle Ceremonies (Rites of Passage)",
          "ne": "जीवनचक्रका संस्कार (विधिहरू)",
          "summary": "Vocabulary and expressions for life-event ceremonies (coming of age, weddings, blessings), and writing a short essay introducing a ceremony from your own culture.",
          "vocab": [
            {
              "ko": "의례",
              "en": "ceremony, ritual",
              "ne": "विधि, संस्कार",
              "similar": "의식, 행사"
            },
            {
              "ko": "의식",
              "en": "ritual, ceremony",
              "ne": "संस्कार, विधि",
              "similar": "의례"
            },
            {
              "ko": "특별한 날",
              "en": "special life event / day",
              "ne": "विशेष जीवनको दिन"
            },
            {
              "ko": "기념하다",
              "en": "to commemorate",
              "ne": "सम्झना गर्नु",
              "similar": "축하하다"
            },
            {
              "ko": "비슷하다",
              "en": "to be similar",
              "ne": "मिल्दोजुल्दो हुनु",
              "similar": "유사하다"
            },
            {
              "ko": "남자아이",
              "en": "boy",
              "ne": "पुरुष बच्चा",
              "similar": "사내아이"
            },
            {
              "ko": "어린이",
              "en": "child",
              "ne": "बालक, बच्चा",
              "similar": "아이"
            },
            {
              "ko": "어른",
              "en": "adult",
              "ne": "वयस्क, ठूलो मान्छे",
              "similar": "성인"
            },
            {
              "ko": "보통",
              "en": "usually",
              "ne": "सामान्यतया",
              "similar": "일반적으로"
            },
            {
              "ko": "사이",
              "en": "between",
              "ne": "बीचमा",
              "similar": "가운데"
            },
            {
              "ko": "치르다",
              "en": "to hold (a ceremony)",
              "ne": "सम्पन्न गर्नु",
              "similar": "행하다"
            },
            {
              "ko": "머리를 깎다",
              "en": "to shave the head",
              "ne": "कपाल खौर्नु",
              "similar": "삭발하다"
            },
            {
              "ko": "어깨",
              "en": "shoulder",
              "ne": "काँध"
            },
            {
              "ko": "신성하다",
              "en": "to be sacred",
              "ne": "पवित्र हुनु",
              "similar": "거룩하다"
            },
            {
              "ko": "성스럽다",
              "en": "to be holy / sacred",
              "ne": "पवित्र हुनु"
            },
            {
              "ko": "실",
              "en": "thread",
              "ne": "धागो",
              "similar": "끈"
            },
            {
              "ko": "걸다",
              "en": "to hang, to place",
              "ne": "लगाउनु, झुन्ड्याउनु",
              "similar": "두르다"
            },
            {
              "ko": "친척",
              "en": "relatives",
              "ne": "नातेदार",
              "similar": "친지"
            },
            {
              "ko": "모이다",
              "en": "to gather",
              "ne": "भेला हुनु",
              "similar": "만나다"
            },
            {
              "ko": "축복",
              "en": "blessing",
              "ne": "आशीर्वाद",
              "similar": "복"
            },
            {
              "ko": "선물",
              "en": "gift",
              "ne": "उपहार"
            },
            {
              "ko": "마치다",
              "en": "to finish",
              "ne": "सक्नु",
              "similar": "끝내다"
            },
            {
              "ko": "종교적",
              "en": "religious",
              "ne": "धार्मिक"
            },
            {
              "ko": "책임",
              "en": "responsibility",
              "ne": "जिम्मेवारी",
              "similar": "의무"
            },
            {
              "ko": "의무",
              "en": "duty",
              "ne": "कर्तव्य",
              "similar": "책임"
            },
            {
              "ko": "인생",
              "en": "life",
              "ne": "जीवन",
              "similar": "삶"
            },
            {
              "ko": "새로운",
              "en": "new",
              "ne": "नयाँ",
              "similar": "새"
            },
            {
              "ko": "단계",
              "en": "stage",
              "ne": "चरण",
              "similar": "과정"
            },
            {
              "ko": "의미 있다",
              "en": "to be meaningful",
              "ne": "अर्थपूर्ण हुनु",
              "similar": "뜻깊다"
            },
            {
              "ko": "중요하다",
              "en": "to be important",
              "ne": "महत्त्वपूर्ण हुनु"
            },
            {
              "ko": "이어지다",
              "en": "to continue, last",
              "ne": "चल्नु"
            },
            {
              "ko": "신랑",
              "en": "groom",
              "ne": "दुलहा"
            },
            {
              "ko": "신부",
              "en": "bride",
              "ne": "दुलही"
            },
            {
              "ko": "행렬",
              "en": "procession",
              "ne": "जुलुस"
            },
            {
              "ko": "부르다",
              "en": "to call",
              "ne": "भन्नु, बोलाउनु"
            },
            {
              "ko": "가르마",
              "en": "hair parting",
              "ne": "सिउँदो"
            },
            {
              "ko": "가루",
              "en": "powder",
              "ne": "धूलो"
            },
            {
              "ko": "바르다",
              "en": "to apply",
              "ne": "लगाउनु"
            },
            {
              "ko": "불",
              "en": "fire",
              "ne": "आगो"
            },
            {
              "ko": "주위",
              "en": "around",
              "ne": "वरिपरि"
            },
            {
              "ko": "일곱 바퀴",
              "en": "seven rounds",
              "ne": "सात फेरा"
            },
            {
              "ko": "돌다",
              "en": "to go around",
              "ne": "घुम्नु"
            },
            {
              "ko": "끝난 후에",
              "en": "after it ends",
              "ne": "सकिएपछि"
            },
            {
              "ko": "잔치",
              "en": "feast",
              "ne": "भोज"
            },
            {
              "ko": "열다",
              "en": "to hold (an event)",
              "ne": "आयोजना गर्नु"
            },
            {
              "ko": "하나가 되다",
              "en": "to become one",
              "ne": "एक हुनु"
            },
            {
              "ko": "아름답다",
              "en": "to be beautiful",
              "ne": "सुन्दर हुनु"
            }
          ],
          "grammar": [
            {
              "pattern": "동형-(을)뿐만 아니라",
              "en": "not only ~ (but also)",
              "ne": "~ मात्र होइन (...पनि)",
              "note": "Used to add a second, often stronger, point on top of the first.",
              "examples": [
                {
                  "ko": "이 의례는 아름다울 뿐만 아니라 의미도 깊습니다.",
                  "en": "This ceremony is not only beautiful but also deeply meaningful.",
                  "ne": "यो विधि सुन्दर मात्र होइन, अर्थपूर्ण पनि छ।"
                }
              ]
            }
          ],
          "dialogues": [
            {
              "title": "Useful expressions · 생애 의례 글쓰기",
              "en": "Expressions for writing about a life-cycle ceremony",
              "ne": "जीवनचक्र विधिबारे लेख्ने अभिव्यक्तिहरू",
              "lines": [
                {
                  "ko": "제 고향에는 ~라는 의례가 있습니다.",
                  "en": "In my hometown there is a ceremony called ~.",
                  "ne": "मेरो गाउँमा ~ भन्ने विधि छ।"
                },
                {
                  "ko": "이 의례는 ~을/를 기념하는 의식입니다.",
                  "en": "This ceremony commemorates ~.",
                  "ne": "यो विधि ~ सम्झना गर्ने संस्कार हो।"
                },
                {
                  "ko": "어른이 되는 것을 축하합니다.",
                  "en": "It celebrates becoming an adult.",
                  "ne": "वयस्क हुने कुरा मनाइन्छ।"
                },
                {
                  "ko": "가족과 친척이 모여서 축복을 받습니다.",
                  "en": "Family and relatives gather and receive blessings.",
                  "ne": "परिवार र नातेदार भेला भएर आशीर्वाद पाइन्छ।"
                }
              ]
            }
          ],
          "activities": [
            {
              "ko": "우리 문화의 생애 의례에 대해 이야기하기",
              "en": "Talking about a life-cycle ceremony in your culture",
              "ne": "आफ्नो संस्कृतिको जीवनचक्र विधिबारे कुरा गर्ने"
            },
            {
              "ko": "생애 의례를 소개하는 글쓰기 (7문장)",
              "en": "Writing a short essay (7 sentences) introducing a ceremony",
              "ne": "जीवनचक्र विधि परिचय गराउने छोटो लेख (७ वाक्य)"
            }
          ],
          "culture": {
            "ko": "생애 의례",
            "en": "Rites of Passage",
            "ne": "जीवनचक्रका संस्कार",
            "text": "Cultures around the world mark major life stages — birth, coming of age, marriage — with ceremonies. Korea's 성년의 날 (Coming of Age Day) and Nepal's Bratabandha are examples that celebrate the transition into adulthood and new responsibilities."
          },
          "quiz": []
        },
        {
          "id": "k4-ch5",
          "number": 5,
          "ko": "여가와 전통문화",
          "en": "Leisure & Traditional Culture",
          "ne": "फुर्सद र परम्परागत संस्कृति",
          "summary": "Talking about leisure activities and ways to experience Korean traditional culture (museums, hanok villages, palaces, pansori), using grammar to give choices and express amazement.",
          "vocab": [
            {
              "ko": "여가 시간",
              "en": "free / leisure time",
              "ne": "फुर्सदको समय"
            },
            {
              "ko": "전통문화",
              "en": "traditional culture",
              "ne": "परम्परागत संस्कृति"
            },
            {
              "ko": "박물관",
              "en": "museum",
              "ne": "संग्रहालय"
            },
            {
              "ko": "유물",
              "en": "relic, artifact",
              "ne": "पुरातात्विक वस्तु"
            },
            {
              "ko": "유적지",
              "en": "historic site",
              "ne": "ऐतिहासिक स्थल"
            },
            {
              "ko": "역사",
              "en": "history",
              "ne": "इतिहास"
            },
            {
              "ko": "역사적",
              "en": "historical",
              "ne": "ऐतिहासिक"
            },
            {
              "ko": "가치",
              "en": "value",
              "ne": "मूल्य, महत्त्व"
            },
            {
              "ko": "한옥",
              "en": "traditional Korean house",
              "ne": "परम्परागत कोरियाली घर"
            },
            {
              "ko": "민속촌",
              "en": "folk village",
              "ne": "लोक गाउँ"
            },
            {
              "ko": "체험",
              "en": "hands-on experience",
              "ne": "अनुभव"
            },
            {
              "ko": "경험하다",
              "en": "to experience",
              "ne": "अनुभव गर्नु"
            },
            {
              "ko": "옛 궁궐",
              "en": "old palace",
              "ne": "पुरानो दरबार"
            },
            {
              "ko": "웅장하다",
              "en": "to be grand, magnificent",
              "ne": "भव्य, विशाल हुनु"
            },
            {
              "ko": "화려하다",
              "en": "to be splendid, dazzling",
              "ne": "भव्य, आकर्षक हुनु"
            },
            {
              "ko": "야경",
              "en": "night view",
              "ne": "रातको दृश्य"
            },
            {
              "ko": "남산 타워",
              "en": "Namsan Tower",
              "ne": "नाम्सान टावर"
            },
            {
              "ko": "경주",
              "en": "Gyeongju (historic city)",
              "ne": "ग्योङजु"
            },
            {
              "ko": "제주도",
              "en": "Jeju Island",
              "ne": "जेजु टापु"
            },
            {
              "ko": "한글",
              "en": "Hangul (Korean alphabet)",
              "ne": "हाङ्गुल"
            },
            {
              "ko": "글자",
              "en": "letter, writing",
              "ne": "अक्षर, लिपि"
            },
            {
              "ko": "과학적이다",
              "en": "to be scientific",
              "ne": "वैज्ञानिक हुनु"
            },
            {
              "ko": "공연",
              "en": "performance",
              "ne": "प्रदर्शन"
            },
            {
              "ko": "관광객",
              "en": "tourist",
              "ne": "पर्यटक"
            },
            {
              "ko": "외국인",
              "en": "foreigner",
              "ne": "विदेशी"
            },
            {
              "ko": "인기 있다",
              "en": "to be popular",
              "ne": "लोकप्रिय हुनु"
            },
            {
              "ko": "기회",
              "en": "opportunity, chance",
              "ne": "अवसर, मौका"
            },
            {
              "ko": "선택하다",
              "en": "to choose, select",
              "ne": "छनोट गर्नु",
              "similar": "고르다, 정하다"
            },
            {
              "ko": "관계없다",
              "en": "to not matter",
              "ne": "फरक नपर्नु",
              "similar": "상관없다"
            },
            {
              "ko": "방법",
              "en": "way, method",
              "ne": "तरिका"
            },
            {
              "ko": "고향",
              "en": "hometown",
              "ne": "गाउँ, जन्मस्थान"
            },
            {
              "ko": "연락하다",
              "en": "to contact",
              "ne": "सम्पर्क गर्नु"
            },
            {
              "ko": "지내다",
              "en": "to spend time, get along",
              "ne": "बिताउनु, सम्बन्ध राख्नु"
            },
            {
              "ko": "감기",
              "en": "a cold (illness)",
              "ne": "रुघा"
            },
            {
              "ko": "낫다",
              "en": "to recover, heal",
              "ne": "निको हुनु"
            },
            {
              "ko": "따뜻하다",
              "en": "to be warm",
              "ne": "न्यानो हुनु"
            },
            {
              "ko": "섭취하다",
              "en": "to consume, take in",
              "ne": "सेवन गर्नु"
            },
            {
              "ko": "고민",
              "en": "worry, concern",
              "ne": "चिन्ता"
            },
            {
              "ko": "해결하다",
              "en": "to solve, resolve",
              "ne": "समाधान गर्नु"
            },
            {
              "ko": "전문가",
              "en": "expert",
              "ne": "विशेषज्ञ"
            },
            {
              "ko": "조언",
              "en": "advice",
              "ne": "सल्लाह"
            },
            {
              "ko": "장점",
              "en": "strong point, merit",
              "ne": "राम्रो गुण"
            },
            {
              "ko": "맵다",
              "en": "to be spicy",
              "ne": "पिरो हुनु"
            },
            {
              "ko": "마음",
              "en": "heart, mind",
              "ne": "मन"
            },
            {
              "ko": "가벼워지다",
              "en": "to become light",
              "ne": "हल्का हुनु"
            }
          ],
          "grammar": [
            {
              "pattern": "동형-든지 (-든지 -든지)",
              "en": "whether ~ or ~ / no matter which",
              "ne": "~ होस् वा ~, जे भए पनि",
              "note": "Used to say it doesn't matter which option is chosen. Often used in pairs: A-든지 B-든지 (either A or B).",
              "examples": [
                {
                  "ko": "민속촌에 가든지 한옥 마을에 가든지 해 보세요.",
                  "en": "Try either going to a folk village or to a hanok village.",
                  "ne": "लोक गाउँ जानुहोस् वा हानोक गाउँ जानुहोस्।"
                }
              ]
            },
            {
              "pattern": "얼마나 동형-는지 모르다",
              "en": "you wouldn't believe how ~ / how very ~",
              "ne": "कति ~ छ भन्ने थाहै छैन (अति नै)",
              "note": "Emphasizes a strong degree — 'you have no idea how ... it is'.",
              "examples": [
                {
                  "ko": "이링 씨가 얼마나 요리를 잘하는지 몰라요.",
                  "en": "You wouldn't believe how well Yi Ling cooks.",
                  "ne": "इलिङले कति राम्रोसँग पकाउँछ भन्ने तपाईंलाई थाहै छैन।"
                }
              ]
            }
          ],
          "dialogues": [
            {
              "title": "정아라 & 잠시드 — 한옥 체험",
              "en": "Talking about hanok experiences",
              "ne": "हानोक अनुभवबारे कुराकानी",
              "lines": [
                {
                  "ko": "요즘 외국인 관광객들에게 한옥 체험이 얼마나 인기 있는지 몰라요.",
                  "en": "You wouldn't believe how popular hanok experiences are with foreign tourists these days.",
                  "ne": "आजकल विदेशी पर्यटकहरूमाझ हानोक अनुभव कति लोकप्रिय छ भन्ने थाहै छैन।"
                },
                {
                  "ko": "그렇군요. 기회가 있을 때 저도 꼭 해 보고 싶네요.",
                  "en": "Is that so. When I get a chance, I'd really like to try it too.",
                  "ne": "ए हो र। मौका मिल्दा मैले पनि अवश्य गरेर हेर्ने इच्छा छ।"
                }
              ]
            }
          ],
          "activities": [
            {
              "ko": "여가 활동과 전통문화 체험 방법에 대해 이야기하기",
              "en": "Talking about leisure activities and ways to experience traditional culture",
              "ne": "फुर्सदका गतिविधि र परम्परागत संस्कृति अनुभव गर्ने तरिकाबारे कुरा गर्ने"
            }
          ],
          "culture": {
            "ko": "한글",
            "en": "Hangul — Korea's Scientific Alphabet",
            "ne": "हाङ्गुल — कोरियाको वैज्ञानिक लिपि",
            "text": "Hangul, created under King Sejong, is widely admired as one of the world's most scientific writing systems — its letter shapes reflect the position of the mouth and tongue when making each sound."
          },
          "quiz": []
        },
        {
          "id": "k4-ch6",
          "number": 6,
          "ko": "국제화 시대",
          "en": "The Age of Globalization",
          "ne": "अन्तर्राष्ट्रियकरणको युग",
          "summary": "Vocabulary about globalization and multicultural society, discussing how an open mind helps us accept change and difference, and grammar for expressing degree.",
          "vocab": [
            {
              "ko": "국제화",
              "en": "globalization",
              "ne": "अन्तर्राष्ट्रियकरण"
            },
            {
              "ko": "다문화 사회",
              "en": "multicultural society",
              "ne": "बहुसांस्कृतिक समाज"
            },
            {
              "ko": "편견",
              "en": "prejudice",
              "ne": "पूर्वाग्रह",
              "similar": "선입견"
            },
            {
              "ko": "선입견",
              "en": "preconception",
              "ne": "पूर्वधारणा"
            },
            {
              "ko": "버리다",
              "en": "to throw away, discard",
              "ne": "त्याग्नु, फाल्नु"
            },
            {
              "ko": "변화",
              "en": "change",
              "ne": "परिवर्तन"
            },
            {
              "ko": "다름",
              "en": "difference",
              "ne": "भिन्नता"
            },
            {
              "ko": "받아들이다",
              "en": "to accept",
              "ne": "स्वीकार्नु"
            },
            {
              "ko": "열린 마음",
              "en": "an open mind",
              "ne": "खुला मन"
            },
            {
              "ko": "열리다",
              "en": "to be open",
              "ne": "खुला हुनु"
            },
            {
              "ko": "의식",
              "en": "consciousness, awareness",
              "ne": "चेतना"
            },
            {
              "ko": "감각",
              "en": "sense, feel",
              "ne": "बुझाइ, अनुभूति"
            },
            {
              "ko": "키우다",
              "en": "to raise, develop",
              "ne": "विकास गर्नु, हुर्काउनु"
            },
            {
              "ko": "다양하다",
              "en": "to be diverse",
              "ne": "विविध हुनु",
              "similar": "여러 가지"
            },
            {
              "ko": "분야",
              "en": "field, area",
              "ne": "क्षेत्र",
              "similar": "부문"
            },
            {
              "ko": "인력",
              "en": "manpower, personnel",
              "ne": "जनशक्ति",
              "similar": "노동력"
            },
            {
              "ko": "모집",
              "en": "recruitment",
              "ne": "भर्ती",
              "similar": "채용"
            },
            {
              "ko": "일자리",
              "en": "job, workplace",
              "ne": "रोजगारी"
            },
            {
              "ko": "직장인",
              "en": "office worker",
              "ne": "कर्मचारी"
            },
            {
              "ko": "업무",
              "en": "work, duties",
              "ne": "काम"
            },
            {
              "ko": "파견하다",
              "en": "to dispatch (someone)",
              "ne": "खटाउनु"
            },
            {
              "ko": "체류하다",
              "en": "to stay, reside",
              "ne": "बसोबास गर्नु"
            },
            {
              "ko": "국내",
              "en": "domestic, within the country",
              "ne": "देशभित्र"
            },
            {
              "ko": "진입",
              "en": "entering, entry",
              "ne": "प्रवेश"
            },
            {
              "ko": "주변",
              "en": "surroundings",
              "ne": "वरिपरि",
              "similar": "주위"
            },
            {
              "ko": "더 이상",
              "en": "no longer",
              "ne": "अब उप्रान्त",
              "similar": "이제는"
            },
            {
              "ko": "낯설어하다",
              "en": "to find unfamiliar",
              "ne": "अनौठो मान्नु",
              "similar": "어색해하다"
            },
            {
              "ko": "어울리다",
              "en": "to mingle, get along",
              "ne": "घुलमिल हुनु",
              "similar": "친하게 지내다"
            },
            {
              "ko": "생각을 넓히다",
              "en": "to broaden one's thinking",
              "ne": "सोचाइ फराकिलो बनाउनु",
              "similar": "시야를 넓히다"
            },
            {
              "ko": "경험하다",
              "en": "to experience",
              "ne": "अनुभव गर्नु"
            },
            {
              "ko": "필수적",
              "en": "essential",
              "ne": "अनिवार्य"
            },
            {
              "ko": "당연히",
              "en": "of course, naturally",
              "ne": "स्वाभाविक रूपमा"
            },
            {
              "ko": "과반수",
              "en": "majority, more than half",
              "ne": "आधाभन्दा बढी"
            },
            {
              "ko": "응답하다",
              "en": "to respond",
              "ne": "जवाफ दिनु"
            },
            {
              "ko": "최우선",
              "en": "top priority",
              "ne": "सबैभन्दा पहिलो प्राथमिकता"
            },
            {
              "ko": "열심히",
              "en": "diligently, hard",
              "ne": "ध्यान दिएर, मेहनतले",
              "similar": "부지런히"
            }
          ],
          "grammar": [
            {
              "pattern": "동형-(으)ㄹ 정도로",
              "en": "to the extent that ~ / so much that ~",
              "ne": "~ हुने हदसम्म",
              "note": "Emphasizes degree with a comparable example. Similar to -(으)ㄹ 만큼 (often interchangeable); contrast with simple -아/어서 (cause-result, no emphasis on degree).",
              "examples": [
                {
                  "ko": "발 디딜 틈이 없을 정도로 사람이 많았어요.",
                  "en": "There were so many people that there was no room to even step.",
                  "ne": "खुट्टा टेक्ने ठाउँ नहुने हदसम्म मानिस धेरै थिए।"
                }
              ]
            }
          ],
          "dialogues": [
            {
              "title": "국제화 시대 — 열린 마음",
              "en": "Globalization and an open mind",
              "ne": "अन्तर्राष्ट्रियकरण र खुला मन",
              "lines": [
                {
                  "ko": "국제화 시대를 살아가기 위해서는 편견과 선입견을 버리고 열린 마음으로 변화와 다름을 받아들여야 하겠죠.",
                  "en": "To live in the era of globalization, we must throw away prejudice and preconceptions and accept change and difference with an open mind.",
                  "ne": "अन्तर्राष्ट्रियकरणको युगमा बाँच्न पूर्वाग्रह र पूर्वधारणा त्यागेर खुला मनले परिवर्तन र भिन्नतालाई स्वीकार्नुपर्छ नि।"
                },
                {
                  "ko": "맞아요. 저도 다양한 사람들과 어울리면서 생각을 넓히면 좋겠어요.",
                  "en": "That's right. I also hope to broaden my thinking while mingling with various people.",
                  "ne": "ठीक हो। म पनि विभिन्न मानिसहरूसँग घुलमिल हुँदै सोचाइ फराकिलो बनाउन चाहन्छु।"
                }
              ]
            }
          ],
          "activities": [
            {
              "ko": "경험한 국제화 시대의 모습에 대해 이야기하기",
              "en": "Talking about the globalized world you have experienced",
              "ne": "अनुभव गरेको अन्तर्राष्ट्रियकरणको युगबारे कुरा गर्ने"
            }
          ],
          "culture": {
            "ko": "다문화 사회와 유네스코",
            "en": "Multicultural Society & UNESCO",
            "ne": "बहुसांस्कृतिक समाज र युनेस्को",
            "text": "As societies become multicultural, respecting diversity matters more than ever. International bodies like UNESCO have adopted conventions to recognize and protect the cultural diversity of different countries."
          },
          "quiz": []
        },
        {
          "id": "k4-ch7",
          "number": 7,
          "ko": "건강과 질병",
          "en": "Health & Disease",
          "ne": "स्वास्थ्य र रोग",
          "summary": "Vocabulary about diseases, healthy habits, body organs, and Korea's national health insurance system; introducing the health system of your own country.",
          "vocab": [
            {
              "ko": "건강",
              "en": "health",
              "ne": "स्वास्थ्य"
            },
            {
              "ko": "질병",
              "en": "disease, illness",
              "ne": "रोग"
            },
            {
              "ko": "기대 수명",
              "en": "life expectancy",
              "ne": "अपेक्षित आयु"
            },
            {
              "ko": "의학 기술",
              "en": "medical technology",
              "ne": "चिकित्सा प्रविधि"
            },
            {
              "ko": "발달",
              "en": "development, advance",
              "ne": "विकास"
            },
            {
              "ko": "인간",
              "en": "human",
              "ne": "मानव"
            },
            {
              "ko": "신체 기관",
              "en": "body organ",
              "ne": "शारीरिक अङ्ग",
              "similar": "장기, 신체 부위"
            },
            {
              "ko": "암",
              "en": "cancer",
              "ne": "क्यान्सर"
            },
            {
              "ko": "고혈압",
              "en": "high blood pressure",
              "ne": "उच्च रक्तचाप",
              "similar": "저혈압 (low BP)"
            },
            {
              "ko": "당뇨병",
              "en": "diabetes",
              "ne": "मधुमेह"
            },
            {
              "ko": "성인병",
              "en": "adult / lifestyle disease",
              "ne": "वयस्क रोग"
            },
            {
              "ko": "혈압",
              "en": "blood pressure",
              "ne": "रक्तचाप"
            },
            {
              "ko": "과음",
              "en": "excessive drinking",
              "ne": "धेरै रक्सी पिउने",
              "similar": "폭음"
            },
            {
              "ko": "과식",
              "en": "overeating",
              "ne": "धेरै खाने",
              "similar": "폭식"
            },
            {
              "ko": "운동 부족",
              "en": "lack of exercise",
              "ne": "व्यायामको कमी",
              "similar": "운동 결핍"
            },
            {
              "ko": "발생 위험",
              "en": "risk of occurrence",
              "ne": "हुने जोखिम"
            },
            {
              "ko": "방지하다",
              "en": "to prevent",
              "ne": "रोक्नु"
            },
            {
              "ko": "심하다",
              "en": "to be severe",
              "ne": "गम्भीर हुनु"
            },
            {
              "ko": "병원비",
              "en": "hospital cost",
              "ne": "अस्पताल खर्च"
            },
            {
              "ko": "경제적 부담",
              "en": "economic burden",
              "ne": "आर्थिक भार"
            },
            {
              "ko": "건강 보험",
              "en": "health insurance",
              "ne": "स्वास्थ्य बीमा"
            },
            {
              "ko": "사회 보험",
              "en": "social insurance",
              "ne": "सामाजिक बीमा"
            },
            {
              "ko": "제도",
              "en": "system",
              "ne": "प्रणाली"
            },
            {
              "ko": "국민",
              "en": "citizens, the people",
              "ne": "नागरिक"
            },
            {
              "ko": "보험료",
              "en": "insurance premium",
              "ne": "बीमा शुल्क"
            },
            {
              "ko": "내다",
              "en": "to pay",
              "ne": "तिर्नु"
            },
            {
              "ko": "가입하다",
              "en": "to join, subscribe",
              "ne": "सहभागी हुनु"
            },
            {
              "ko": "가입자",
              "en": "subscriber, member",
              "ne": "सदस्य"
            },
            {
              "ko": "보험 급여",
              "en": "insurance benefits",
              "ne": "बीमा लाभ"
            },
            {
              "ko": "관리",
              "en": "management",
              "ne": "व्यवस्थापन"
            },
            {
              "ko": "운영",
              "en": "operation, running",
              "ne": "सञ्चालन"
            },
            {
              "ko": "실시하다",
              "en": "to implement, carry out",
              "ne": "लागू गर्नु"
            },
            {
              "ko": "제공하다",
              "en": "to provide",
              "ne": "प्रदान गर्नु"
            },
            {
              "ko": "평소에",
              "en": "regularly, usually",
              "ne": "नियमित रूपमा"
            },
            {
              "ko": "소득",
              "en": "income",
              "ne": "आय"
            },
            {
              "ko": "재산",
              "en": "property, wealth",
              "ne": "सम्पत्ति"
            },
            {
              "ko": "체류 자격",
              "en": "residence / stay status",
              "ne": "बसोबास स्थिति"
            },
            {
              "ko": "일정한",
              "en": "a certain, fixed",
              "ne": "निश्चित"
            },
            {
              "ko": "다소",
              "en": "slightly, somewhat",
              "ne": "केही"
            },
            {
              "ko": "대체로",
              "en": "generally, mostly",
              "ne": "प्रायः"
            }
          ],
          "grammar": [
            {
              "pattern": "동-되",
              "en": "do ~, but (with a condition / reservation)",
              "ne": "~ गर्नु, तर (सर्तसहित)",
              "note": "Allows an action but adds a condition or limitation to it.",
              "examples": [
                {
                  "ko": "식사를 하되 자극적인 음식은 피하세요.",
                  "en": "Do eat, but avoid stimulating (spicy/irritating) food.",
                  "ne": "खाना खानुहोस्, तर उत्तेजक खाना नखानुहोस्।"
                }
              ]
            },
            {
              "pattern": "동-았/었더니",
              "en": "I did ~, and then (I found / it resulted in) ~",
              "ne": "मैले ~ गरें, अनि (परिणाम) ~",
              "note": "Used for first-person past actions that lead to a discovered result or consequence.",
              "examples": [
                {
                  "ko": "무리해서 일했더니 몸이 아파요.",
                  "en": "I overworked, and then my body started aching.",
                  "ne": "धेरै जोड गरेर काम गरें, अनि शरीर दुख्न थाल्यो।"
                }
              ]
            }
          ],
          "dialogues": [],
          "activities": [
            {
              "ko": "건강을 지키는 방법에 대해 이야기하기",
              "en": "Talking about ways to maintain health",
              "ne": "स्वास्थ्य जोगाउने तरिकाबारे कुरा गर्ने"
            },
            {
              "ko": "우리 고향의 건강 보험 제도를 소개하기",
              "en": "Introducing the health insurance system of your home country",
              "ne": "आफ्नो देशको स्वास्थ्य बीमा प्रणाली परिचय गराउने"
            }
          ],
          "culture": {
            "ko": "국민건강보험",
            "en": "National Health Insurance",
            "ne": "राष्ट्रिय स्वास्थ्य बीमा",
            "text": "Korea's National Health Insurance is a social insurance system: citizens regularly pay premiums, the National Health Insurance Corporation manages the funds, and members receive medical benefits when needed. Premiums are based on income and property."
          },
          "quiz": []
        },
        {
          "id": "k4-ch8",
          "number": 8,
          "ko": "정보화 사회",
          "en": "Information Society",
          "ne": "सूचना समाज",
          "summary": "Vocabulary for internet and smartphone activities and online sign-up forms; grammar for confirming what you heard and for doing two things at once; discussing smartphone addiction.",
          "vocab": [
            {
              "ko": "인터넷",
              "en": "internet",
              "ne": "इन्टरनेट"
            },
            {
              "ko": "스마트폰",
              "en": "smartphone",
              "ne": "स्मार्टफोन"
            },
            {
              "ko": "정보",
              "en": "information",
              "ne": "जानकारी, सूचना"
            },
            {
              "ko": "검색하다",
              "en": "to search",
              "ne": "खोज्नु"
            },
            {
              "ko": "다운로드하다",
              "en": "to download",
              "ne": "डाउनलोड गर्नु"
            },
            {
              "ko": "가입하다",
              "en": "to sign up, register",
              "ne": "दर्ता हुनु"
            },
            {
              "ko": "개인 정보 입력",
              "en": "personal information entry",
              "ne": "व्यक्तिगत जानकारी प्रविष्टि"
            },
            {
              "ko": "아이디",
              "en": "ID, username",
              "ne": "आईडी"
            },
            {
              "ko": "비밀번호",
              "en": "password",
              "ne": "पासवर्ड"
            },
            {
              "ko": "이름",
              "en": "name",
              "ne": "नाम"
            },
            {
              "ko": "성별",
              "en": "gender",
              "ne": "लिङ्ग"
            },
            {
              "ko": "메일 수신 여부",
              "en": "whether to receive email",
              "ne": "इमेल प्राप्ति (हुने/नहुने)"
            },
            {
              "ko": "이벤트 소식",
              "en": "event news",
              "ne": "कार्यक्रम समाचार"
            },
            {
              "ko": "광고 메일",
              "en": "advertisement email",
              "ne": "विज्ञापन इमेल"
            },
            {
              "ko": "직업",
              "en": "occupation, job",
              "ne": "पेसा"
            },
            {
              "ko": "확인",
              "en": "confirm",
              "ne": "पुष्टि"
            },
            {
              "ko": "취소",
              "en": "cancel",
              "ne": "रद्द"
            },
            {
              "ko": "중독",
              "en": "addiction",
              "ne": "लत"
            },
            {
              "ko": "예방하다",
              "en": "to prevent",
              "ne": "रोकथाम गर्नु"
            }
          ],
          "grammar": [
            {
              "pattern": "동형-는다면서요? / -(이)라면서요?",
              "en": "I heard that ~, is that right?",
              "ne": "~ रे, हो?",
              "note": "Used to confirm something you heard from someone else.",
              "examples": [
                {
                  "ko": "요즘 그 앱이 아주 인기가 많다면서요?",
                  "en": "I heard that app is very popular these days — is that right?",
                  "ne": "आजकल त्यो एप धेरै लोकप्रिय छ रे, हो?"
                }
              ]
            },
            {
              "pattern": "동-을 겸 (동-을 겸)",
              "en": "for the dual purpose of ~ (and ~)",
              "ne": "~ गर्ने उद्देश्यले (र ~ पनि)",
              "note": "Used when one action serves two purposes at once.",
              "examples": [
                {
                  "ko": "운동도 할 겸 친구도 만날 겸 공원에 갔어요.",
                  "en": "I went to the park both to exercise and to meet a friend.",
                  "ne": "व्यायाम पनि गर्ने र साथी पनि भेट्ने उद्देश्यले पार्क गएँ।"
                }
              ]
            }
          ],
          "dialogues": [],
          "activities": [
            {
              "ko": "인터넷과 스마트폰 사용의 문제점 말하기",
              "en": "Talking about problems of internet and smartphone use",
              "ne": "इन्टरनेट र स्मार्टफोन प्रयोगका समस्याबारे कुरा गर्ने"
            },
            {
              "ko": "스마트폰 중독 문제와 예방 방법 쓰기",
              "en": "Writing about smartphone addiction and how to prevent it",
              "ne": "स्मार्टफोनको लत र रोकथामबारे लेख्ने"
            }
          ],
          "culture": {
            "ko": "한국의 앱 문화",
            "en": "Korean App Culture",
            "ne": "कोरियाली एप संस्कृति",
            "text": "Korea has a highly developed app culture — from messaging and payments to delivery, banking, and public services, smartphones are central to daily life."
          },
          "quiz": []
        },
        {
          "id": "k4-ch9",
          "number": 9,
          "ko": "사건과 사고",
          "en": "Incidents and Accidents",
          "ne": "घटना र दुर्घटना",
          "summary": "Vocabulary for injuries and accidents (broken bones, sprains, burns, fire); grammar for near-miss situations (동-을 뻔하다) and stating causes (명으로 인해); talking about incidents and safety.",
          "vocab": [],
          "grammar": [],
          "dialogues": [],
          "activities": [],
          "culture": {},
          "quiz": []
        }
      ]
    }
  ]
};
