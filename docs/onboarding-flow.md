## Airevo Onboarding Flow – Screen-by-Screen Spec

This spec details each onboarding screen: goal, inputs, validation, navigation, copy, analytics, and accessibility.

---

### 0. Welcome
- Goal: Introduce Airevo and start flow.
- UI: Logo/illustration, headline, short body, Primary button.
- Primary CTA: Get Started
- Secondary: None
- Copy (Title): “Start your smoke‑free journey”
- Copy (Body): “Personalized plan, real tools, and support when it matters.”
- Analytics: onboarding_started
- Accessibility: Button labeled, screen title announced, high contrast.

---

### 1. Benefits (Optional)
- Goal: Reinforce value quickly (2–3 cards).
- UI: Horizontal carousel of benefit cards.
- Primary CTA: Continue
- Cards: “Personalized plan”, “Track progress”, “Cravings help on demand”.
- Analytics: onboarding_benefits_viewed
- Accessibility: Swipeable cards accessible; provide Next button.

---

### 2. Your Name
- Goal: Personalize the experience.
- Input: name (text)
- Validation: 1–40 chars; no emojis.
- Primary CTA: Continue
- Copy (Title): “What should we call you?”
- Copy (Help): “We’ll use your name in tips and reminders.”
- Analytics: onboarding_name_submitted
- Accessibility: Field labeled; clear error text.

---

### 3. First Cigarette Age
- Goal: Understand smoking history.
- Input: firstCigaretteAge (number picker: 8–30 default range)
- Primary CTA: Continue
- Copy (Title): “How old were you when you had your first cigarette?”
- Analytics: onboarding_first_cig_age
- Accessibility: Picker accessible via VoiceOver/TalkBack.

---

### 4. Cigarettes per Day
- Goal: Baseline intensity.
- Input: cigsPerDay (0–60) step 1
- Primary CTA: Continue
- Copy (Title): “How many cigarettes do you smoke per day?”
- Analytics: onboarding_cigs_per_day
- Accessibility: Numeric keypad; error for out-of-range.

---

### 5. Triggers
- Goal: Identify situations that cause smoking.
- Input: triggers (multi-select chips + custom)
- Primary CTA: Continue
- Copy (Title): “What most often makes you want to smoke, {name}?”
- Presets: stress, after meals, with coffee, social events, boredom, habit
- Analytics: onboarding_triggers_selected
- Accessibility: Chips focusable; custom input labeled.

---

### 6. Motivations
- Goal: Capture reasons to quit.
- Input: motivations (multi-select + custom)
- Primary CTA: Continue
- Copy (Title): “Why do you want to quit?”
- Presets: health, family, saving money, better appearance, freedom, doctor’s advice
- Analytics: onboarding_motivations_selected
- Accessibility: Same as triggers.

---

### 7. Previous Attempts
- Goal: Learn from past attempts.
- Input: attempted (yes/no). If yes: challenges (multi-select) + details (optional text)
- Primary CTA: Continue
- Copy (Title): “Have you tried quitting before, {name}?”
- Analytics: onboarding_attempts
- Accessibility: Toggle has label; conditional fields announced.

---

### 8. Support System
- Goal: Identify external support.
- Input: hasSupporter (yes/no). If yes: supporterName (optional)
- Primary CTA: Continue
- Copy (Title): “Do you have friends or family who will support you?”
- Analytics: onboarding_support
- Accessibility: Clear optional field labeling.

---

### 9. Health (Optional)
- Goal: Tailor health tips.
- Input: healthConcerns (multi-select) + preferNotToSay
- Primary CTA: Continue
- Copy (Title): “Any health areas you’re watching?”
- Presets: breathing, heart, diabetes, none, prefer not to say
- Analytics: onboarding_health
- Accessibility: Options accessible; announce optional.

---

### 10. Demographics (Optional)
- Goal: Improve recommendations later.
- Input: gender, ageRange
- Primary CTA: Continue
- Copy (Title): “A few optional details”
- Analytics: onboarding_demographics
- Accessibility: Fieldsets with labels.

---

### 11. Quit Date
- Goal: Commitment.
- Input: quitDate (date picker); planMode (cold_turkey|reduction)
- Primary CTA: Continue
- Copy (Title): “Pick your Quit Date”
- Copy (Help): “We recommend 1–2 weeks to prepare, or pick today.”
- Analytics: quit_date_set, plan_mode_selected
- Accessibility: Date picker support; fallback text input.

---

### 12. Short-Term Goals
- Goal: Visualize success.
- Input: shortTermGoals (suggestions + custom)
- Primary CTA: Continue
- Copy (Title): “Set a few short‑term goals, {name}”
- Analytics: onboarding_goals
- Accessibility: Checkboxes labeled; custom input described.

---

### 13. Digital Pledge
- Goal: Reinforce commitment.
- Input: pledgeAccepted (boolean)
- Primary CTA: I Commit
- Copy (Body): “I, {name}, commit to quitting on {quitDate} for a healthier life.”
- Analytics: onboarding_pledge
- Accessibility: Switch/button labeled; confirmation feedback.

---

### 14. Notification Preferences
- Goal: Set supportive cadence.
- Input: notificationFrequency (daily|few_per_day|emergencies_only), preferredNotificationTimes (optional), quietHours
- Primary CTA: Continue
- Copy (Title): “How often should we nudge you?”
- Analytics: onboarding_notifications_pref
- Accessibility: Time pickers labeled; explain quiet hours clearly.

---

### 15. Permissions
- Goal: Ask for OS permissions with value.
- Input: push permission
- Primary CTA: Enable Notifications
- Copy (Body): “We’ll only send helpful tips and milestone reminders.”
- Analytics: permission_prompt_shown, permission_granted/denied
- Accessibility: System modal readiness; fallback path if denied.

---

### 16. Plan Preview (Optional monetization)
- Goal: Show value of tailored plan; upsell if enabled.
- UI: Highlights based on triggers/motivations.
- Primary CTA: Continue / Start Free Trial (if monetization)
- Analytics: onboarding_plan_preview
- Accessibility: Cards readable; CTAs descriptive.

---

### 17. Account (Optional if guest)
- Goal: Sync data across devices.
- Input: email/password or Apple/Google; guest mode allowed
- Primary CTA: Create Account / Continue as Guest
- Analytics: onboarding_account
- Accessibility: Auth buttons labeled; error handling.

---

### 18. Done → Dashboard
- Goal: Land user into product value.
- UI: Welcome header with name; countdown to quit date; first tasks; access to craving tools.
- Analytics: onboarding_completed
- Accessibility: Focus on main content; announce key info.

---

## Validation & Error Patterns
- Inline errors beneath inputs; concise, friendly language.
- Preserve input state on error; never wipe text.
- Allow skip on optional screens with confirmation.

## Analytics Payload Fields (common)
- userId (hashed), screen, timestamp, props (e.g., cigsPerDay, hasSupporter)

## Haptics
- Light selection on inputs; success feedback on pledge and completion.

## Performance
- Each screen renders < 100ms on mid-range devices; images lazy-loaded.

## Accessibility
- Contrast AA; dynamic type; labels/roles; logical focus; test with VoiceOver/TalkBack.
