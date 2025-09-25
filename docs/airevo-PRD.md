## Product Requirements Document (PRD)

### Project: Airevo - Quit Smoking App (iOS/Android, Expo React Native)

### Document Version
- Version: 1.0
- Owner: Product
- Last Updated: 2025-09-25

---

## 1) Overview
Airevo is a mobile app that helps smokers quit and stay smoke-free through personalized onboarding, an adaptive quit plan, behavioral support, cravings management tools, and progress tracking. The experience blends evidence-based techniques (CBT, motivational interviewing, contingency management) with gamification and coaching options.

---

## 2) Goals & Non-Goals
### Goals
- Help users select a realistic quit date and prepare for it.
- Personalize a quit plan based on nicotine dependence, triggers, and motivation.
- Provide effective, on-demand craving coping tools and preventive nudges.
- Track progress: days smoke-free, cigarettes avoided, money saved, health benefits.
- Encourage long-term abstinence through streaks, rewards, and content.

### Non-Goals (v1)
- Medical diagnosis or replacement for professional care.
- Clinical outcomes certification or regulated medical device claims.
- Community features (forum/feed) are out-of-scope in v1.

---

## 3) Success Metrics (KPIs)
- Activation: onboarding completion rate >= 70%.
- Conversion to plan: % users who set a quit date >= 60%.
- Early retention: Day-7 retention >= 35%; Day-30 retention >= 15%.
- Engagement: median weekly active days >= 3; >= 3 cravings logged in first week.
- Outcome proxy: 7-day point prevalence abstinence at Day-30 self-report >= 20%.
- NPS >= 40 and average app rating >= 4.5.

---

## 4) Target Users & Personas
- New Quitter Nick: just decided to quit, moderate dependence, needs structure.
- Restart Rachel: multiple attempts, high dependence, needs stronger support & accountability.
- Casual Chris: low dependence, cost/health motivated, wants fast, simple flow.

Accessibility/language: English v1, left-to-right; WCAG AA where feasible.

---

## 5) Competitive Landscape (reference)
- Quit Genius, Smoke Free, EasyQuit, QuitNow!, MyQuit.
- Differentiators: adaptive long onboarding, dynamic notifications by trigger time, optional coach, and clear health/money impact visuals.

---

## 6) Scope Summary (v1)
- Long, personalized onboarding and assessment (5-8 minutes, skippable modules with save state).
- Dashboard with real-time progress and milestones.
- Quit Plan builder with tasks before/after Quit Day.
- Cravings support: urge timer, breathing, CBT reframes, quick actions.
- Trigger tracking and insights; streaks and badges.
- Education library (bite-sized lessons) + daily challenges.
- Optional NRT/medication tracking (informational, not prescriptive).
- Notifications & reminders (time-of-day, event-based, milestone-based).
- Data export and privacy controls.

Out-of-scope v1: live chat coaching, 1:1 telehealth, multi-device web app.

---

## 7) Detailed Features & Requirements

### 7.1 Onboarding & Assessment (Long, Personalized)
Objectives: capture baseline, personalize plan, build motivation.

Required screens/sections:
- Welcome & consent
  - Explain non-medical disclaimer
  - Optional marketing consent
- Account creation (email + password or Apple/Google; guest mode allowed in v1; upsell sign-in for sync)
- Baseline smoking profile
  - Age started, years smoking
  - Cigarettes/day (or week), preferred brand/pack price
  - Time to first cigarette after waking (Heaviness of Smoking Index)
  - Morning craving score (1-10)
- Dependence & history
  - Previous quit attempts (count, longest abstinence, what helped/hurt)
  - Withdrawal symptoms historically
- Triggers & contexts (multi-select + free-text)
  - Stress, coffee, alcohol, after meals, driving, social, boredom, specific times
- Motivation & goals
  - Top reasons (health, money, family, performance, smell)
  - Readiness & confidence (scales 0-10)
- Health & support
  - Comorbidities (anxiety/depression self-report), current medications (optional)
  - Household smokers, social support availability
- Quit date selection
  - Recommend within next 2 weeks; allow immediate quit today
  - Offer gradual reduction plan if not ready (optional path)
- NRT/medication info (optional)
  - Informational guidance only; user can track patches/gum/lozenges
- Personalization summary
  - Show tailored plan preview; allow edit

Form/UX requirements:
- Progress indicator; save and resume
- Plain language; tooltips for sensitive items
- Skippable with defaults but encourage completion

### 7.2 Dashboard (Home)
- Header: days smoke-free (or countdown until Quit Day), streak flame icon
- KPIs: cigarettes avoided, money saved, time saved, health recovery milestones
- Quick actions: "I have a craving", "Breathing exercise", "Log cigarette" (for reduction phase)
- Today’s tasks: 1-3 checklist items from quit plan
- Milestones: badges earned; next badges preview
- Education: 1 daily lesson card

Calculations (baseline from onboarding):
- Cigarettes avoided = baseline_cigs_per_day x days_smoke_free (approx)
- Packs avoided = cigarettes_avoided / cigs_per_pack
- Money saved = packs_avoided x pack_price
- Time saved = cigarettes_avoided x avg_minutes_per_cig (default 6 min)

### 7.3 Quit Plan Builder
- Pre-Quit (until Quit Day):
  - Remove cues, prepare substitutes, tell supporters, set rewards
- Quit Day checklist:
  - Morning routine change, dispose tobacco, prepare NRT if using
- Post-Quit (Day 1-30):
  - Daily micro-challenges, coping skills, reflection prompts
- Modes: Cold Turkey or Gradual Reduction (optional taper schedule)

### 7.4 Cravings & Coping Tools
- Urge Timer (5-10 minutes) with progress ring and tips; log outcome
- Breathing exercises (box breathing, 4-7-8) with simple animations
- CBT Reframes: thought -> reframe cards
- Emergency toolbox: call supporter, distraction mini-activities
- Craving log: context, trigger, intensity (1-10), urge duration, lapse yes/no

### 7.5 Triggers & Insights
- Trigger frequency charts; top 3 risky times/contexts
- Weekly insights: when cravings spike; suggestions (e.g., avoid coffee 7-9am week 1)

### 7.6 Streaks, Badges, and Rewards
- Badges: 24h, 3d, 7d, 14d, 30d, 60d, 90d, 180d, 365d
- Optional streak freeze (1 per month) if user logs a lapse but does recovery tasks
- Custom rewards: user sets self-rewards; reminders when reached

### 7.7 Education Library
- Categories: Getting Ready, Quit Day, Withdrawal, Social, Long-term
- Short articles (2-4 min read), checklists, and infographics
- Search and bookmarked items

### 7.8 Notifications & Nudges
- Pre-Quit prep reminders (daily)
- Quit Day countdown reminders
- Time-of-day risk nudges based on user triggers (e.g., morning coffee time)
- Craving check-ins: adaptive cadence (more in week 1)
- Milestone celebrations
- Quiet hours and granular opt-out controls

### 7.9 Optional NRT/Medication Tracking (Informational)
- Track daily usage of patches/gum/lozenges (not prescriptive)
- Reminders to replace patch, spacing gum usage

### 7.10 Settings & Privacy
- Profile, baseline edits, currency/pack size, units
- Data export (JSON over email) and delete account
- Notification settings; content preferences

---

## 8) Non-Functional Requirements
- Performance: initial load < 2s on mid-range devices
- Offline-first: core screens work without network; queue sync
- Reliability: data loss rate ~ 0% for local storage; conflict-free merges
- Accessibility: dynamic type, VoiceOver/TalkBack, color contrast AA
- Security: secure storage for tokens; PII minimization; encryption in transit

---

## 9) Architecture & Tech
- Client: Expo (React Native, TypeScript) - aligns with current repo structure
- Local storage: SQLite or MMKV for speed + Redux/RTK Query or Zustand for state
- Sync backend (v1 option A): Supabase or Firebase; anonymous auth supported
- Notifications: Expo Notifications with server scheduling for personalized nudges
- Analytics: Expo Analytics (Segment/Amplitude compatible) + Sentry for crashes

Key modules (client):
- `features/onboarding/*`
- `features/dashboard/*`
- `features/plan/*`
- `features/cravings/*`
- `features/triggers/*`
- `features/education/*`
- `services/notifications.ts`, `services/analytics.ts`, `services/storage.ts`

---

## 10) Data Model (v1 client schema)
UserProfile
- id (string)
- createdAt (iso)
- baseline: { cigsPerDay:number, packPrice:number, cigsPerPack:number=20, timeToFirst:number, yearsSmoking:number }
- motivations: string[]
- readiness:number (0-10), confidence:number (0-10)
- triggers: string[]
- quitPlan: { mode:"cold_turkey"|"reduction", quitDate:iso, tasks: Task[] }
- preferences: { currency:string, notifications:boolean, quietHours:{start:number,end:number} }

Task
- id, title, dateDue: iso, completed:boolean, category:string

CravingLog
- id, timestamp:iso, intensity:number, trigger:string, context:string, durationSec:number, lapsed:boolean

Badge
- id, type:string, earnedAt:iso

EducationItem
- id, title, category, durationMin:number, bodyMarkdown:string

NRTUsage (optional)
- id, date:iso, type:"patch"|"gum"|"lozenge", dose:string, count:number

---

## 11) API (if/when backend is enabled)
- Auth: anonymous or OAuth (Apple/Google)
- `GET /v1/sync` -> pull user entities by updatedAt
- `POST /v1/sync` -> push mutations (CRDT/last-write-wins)
- `POST /v1/logs/craving`
- `POST /v1/notifications/schedule`
- Rate limits and auth via JWT

---

## 12) Personalization Logic (examples)
- Risk hours: from craving logs; schedule nudges 15-30 min prior next day
- Lesson recommendations: based on last 3 craving triggers and plan stage
- Badge cadence: earlier wins concentrated in first 14 days

---

## 13) Analytics Events
- onboarding_started, onboarding_completed
- quit_date_set, plan_mode_selected
- craving_started, craving_completed, craving_lapse_logged
- breathing_started, breathing_completed
- lesson_opened, lesson_completed
- badge_earned, milestone_shared
- notification_received, notification_tapped

Payload standards: include userId (hashed), timestamp, screen, props.

---

## 14) Content
- 30 days of micro-challenges and tips
- 25+ short articles; Markdown stored locally in v1
- Localization-ready strings; English only in v1

---

## 15) Privacy, Legal, Compliance
- Clear non-medical disclaimer
- Explicit consent for notifications and analytics
- Data deletion/export self-service
- Avoid sensitive medical data beyond self-report; minimize PII

---

## 16) Release Plan & Milestones
- M0 (Week 0-1): Foundations - navigation, theme, storage, analytics
- M1 (Week 2-3): Onboarding + baseline save + quit date
- M2 (Week 4-5): Dashboard + quit plan + notifications basic
- M3 (Week 6-7): Cravings tools + logging + insights basics
- M4 (Week 8): Education library + badges, polish, QA
- Beta: 50-100 users TestFlight/Closed testing
- GA: Store listings, support docs, marketing site

---

## 17) Acceptance Criteria (examples)
- User can complete onboarding in <= 8 minutes with autosave.
- User can set/edit a quit date and see countdown/days smoke-free.
- Craving flow runs a timer and records intensity/trigger; data appears in insights.
- Dashboard shows accurate money/time saved using baseline inputs.
- Notifications respect quiet hours and opt-outs.
- All core features work offline; sync resumes when online.

---

## 18) Implementation Guide for Current Repo (Expo)
Screens to add under `app/`:
- `app/onboarding/*` (stack): welcome, profile, dependence, triggers, motivations, quit_date, summary
- `app/(tabs)/dashboard.tsx` (replace `index.tsx` if desired)
- `app/craving/*`: timer, breathing, log
- `app/plan/*`: checklist, tasks
- `app/education/*`: list, detail
- `app/settings/*`

Shared:
- `components/ui/*`: cards, progress ring, breathing animation
- `constants/metrics.ts`: calculation helpers
- `services/*`: `storage.ts`, `analytics.ts`, `notifications.ts`

State:
- Use Zustand or Redux Toolkit; persist with MMKV/AsyncStorage

---

## 19) Onboarding Questionnaire (Field Spec)
- cigsPerDay: number (0-60)
- cigsPerPack: number (default 20)
- packPrice: number (currency configurable)
- timeToFirstCig: enum ["within_5m","5_30m","31_60m",">60m"]
- yearsSmoking: number (0-60)
- attemptsPastYear: number (0-10)
- triggers: string[] (pre-set + custom)
- motivations: string[] (top 3)
- readiness: number (0-10)
- confidence: number (0-10)
- quitDate: iso
- planMode: enum ["cold_turkey","reduction"]
- usingNRT: boolean; nrtTypes: string[]
- hasSupporter: boolean; supporterName:string?; reminders:boolean

---

## 20) Risks & Mitigations
- Low retention after week 1 -> increase early wins, daily challenges, coach upsell later.
- Over-notification -> granular controls + smart pacing + quiet hours.
- Data loss risk offline -> queue + robust local persistence + e2e tests.

---

## 21) Open Questions
- Monetization for v1? (ads vs subscription vs free)
- Which backend (Supabase vs Firebase) - decide at M0

---

## 22) Appendix: Sample Copy
- Craving tip: "Urges peak in 3-5 minutes. Start the timer and breathe with us."
- Badge copy: "First 24 hours smoke-free - your lungs thank you."

---

End of document.
