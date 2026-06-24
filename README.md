# Study KIIP

A level- and chapter-wise Korean study website for the Social Integration Program (사회통합프로그램), with Korean / English / नेपाली content. Features **Lessons**, **Flashcards**, **Quizzes**, and **Search**.

## How to open

Double-click `index.html` — it opens in your browser. No installation or internet needed (only Google Fonts load online).

Navigation: **Level** (KIIP 4, KIIP 3 …) → **Lesson** → tabs for Vocabulary · Grammar · Dialogues · Flashcards · Quiz.

## Adding full lesson content (the `mds` folder) ← main workflow

Put your complete chapter notes as Markdown in the **`mds/`** folder, named like:

- `KIIP4_chapter1.md` → KIIP 4, Lesson 1
- `KIIP3_chapter5.md` → KIIP 3, Lesson 5

Then run once in this folder:

```
node build-lessons.js
```

That regenerates `js/lessons-data.js`. Refresh the site and the chapter shows a **📖 Full Lesson** tab with the *entire* content (every sentence, table, dialogue, reading, writing sample — nothing summarized). Vocabulary is auto-pulled from the tables for flashcards/quizzes. New files appear as lessons automatically, even before anything is added to `data.js`.

The chat artifacts (date stamps, "send the next page", duplicated headers, etc.) are stripped automatically during the build.

### Lessons in other languages (offline, no online service)

The base file (`KIIP4_chapter1.md`) is Korean + English + Nepali. To provide a Full Lesson in another language, add a file with the language code before `.md`:

- `KIIP4_chapter1.vi.md` → Vietnamese version of Chapter 1
- `KIIP3_chapter5.bn.md` → Bengali version of KIIP 3 Chapter 5

Codes: `bn` (বাংলা), `ru` (Русский), `he` (עברית), `ms` (Bahasa Melayu), `vi` (Tiếng Việt), `id` (Bahasa Indonesia), `si` (සිංහල). Run `node build-lessons.js`. Then when a learner picks that language in the top dropdown, the Full Lesson shows that file. If no per-language file exists, it shows the base lesson with its vocabulary tables localized from the offline dictionary. Everything is local — no internet or translation service is used.

## How to add structured content (optional)

All content lives in one file: **`js/data.js`**. You don't touch any other file.

- Each **level** is an object with `id`, `name`, `subtitle`, and a `chapters` array.
- Each **chapter (lesson)** has: `number`, `ko`, `en`, `ne`, `summary`, and the arrays `vocab`, `grammar`, `dialogues`, `activities`, `culture`, `quiz`.

To add a lesson, copy an existing chapter object, paste it into the right level's `chapters` array, and edit the fields. The site automatically:

- builds **flashcards** from each chapter's `vocab`,
- builds a **quiz** from your `quiz` array (or auto-generates vocab questions if `quiz` is empty),
- includes everything in **search**.

Field reference is documented at the top of `js/data.js`.

## Current content

Organized to match your own Claude projects.

- **KIIP 3** — 15 lessons (Ch 1–14, 16; Ch 15 had no source content): 친구 사귀기, 성격, 지역 복지 서비스, 교환과 환불, 생활비와 절약, 지역과 고향, 문화생활, 음식과 요리, 고장과 수리, 직업과 취업, 주거 생활, 전통 명절, 직장 생활, 인터넷과 스마트폰, 날씨와 건강.
- **KIIP 4** — 8 lessons (the content provided so far): 한국 생활 적응, 가족의 변화, 생활 속의 과학, 생애 의례, 여가와 전통문화, 국제화 시대, 건강과 질병, 정보화 사회. More chapters can be added when you provide them.

About **750 vocabulary entries**, each with grammar patterns, dialogues, flashcards, quizzes, and search — all trilingual (Korean / English / नेपाली).

## What's next

This is the website. A mobile app can be built on top of the same `data.js` content later.
