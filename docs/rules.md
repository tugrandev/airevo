## Airevo Design Rules and Guidelines

### Purpose
Minimal, cool, and aesthetic mobile experience that feels calm, confident, and helpful. This document defines design principles, tokens, component rules, motion, content style, accessibility, and delivery checklists for a consistent v1.

---

## 1) Design Principles
- Clarity over decoration: remove anything that doesn’t guide a decision or action.
- Calm confidence: neutral surfaces, limited accent color, generous whitespace.
- One primary action per screen: make the next step unmistakable.
- Friendly, never cute: personable tone without jokes or slang.
- Accessible by default: contrast, touch targets, dynamic type, VoiceOver/TalkBack.
- Offline-first UX: show state clearly; sync gracefully when online.

---

## 2) Visual Language
### 2.1 Color Palette (tokens)
- Primary: `--color-primary` (blue/teal family; cool, modern)
- On Primary: `--color-on-primary` (always readable on primary)
- Surface: `--color-surface` (base background)
- Surface Variant: `--color-surface-alt` (cards, sheets)
- Text Primary: `--color-text` (high-contrast on surface)
- Text Secondary: `--color-text-secondary` (body/meta)
- Success: `--color-success`; Warning: `--color-warning`; Danger: `--color-danger`
- Border/Dividers: `--color-border`

Dark mode: all tokens have dark equivalents, e.g., `--color-surface/dark`.
Use one accent only (Primary). Success/Warning/Danger for status only, never as accents.

### 2.2 Typography (mobile scale)
- TitleXL: 32/38, semibold
- TitleL: 24/30, semibold
- TitleM: 20/26, medium
- BodyL: 17/24, regular
- BodyM: 15/22, regular
- Caption: 13/18, regular
Use sentence case. Never all caps for running text. Max 2 weights on a screen.

### 2.3 Spacing & Layout
- Base unit: 4px. Spacing scale: 4, 8, 12, 16, 24, 32, 40, 56.
- Safe areas respected on iOS/Android.
- Content width: breathable; avoid edge-to-edge for text blocks.
- Card radius: 12px (can be 16px on modals/sheets). Button radius: 12px.
- Dividers: 1px using `--color-border` only when grouping is unclear.

### 2.4 Elevation & Shadows
- Level 0: surface (no shadow)
- Level 1: cards/sheets (soft, low blur, 8% opacity)
- Level 2: floating action/surfaces (medium blur, 12% opacity)
Avoid harsh shadows and multiple layers.

### 2.5 Imagery & Icons
- Icons: stroke-based, 24px default; use the project’s `components/ui/icon-symbol.*` helpers.
- Illustrations: monochrome or duotone; no stock photos in v1.

---

## 3) Components (rules)
- Buttons
  - Primary: filled with `--color-primary`, text `--color-on-primary`.
  - Secondary: outline, text `--color-primary`, border `--color-border`.
  - Tertiary: text-only. One primary per screen.
- Inputs
  - Large tap targets (min 44x44). Clear labels above fields. Inline validation.
- Cards
  - Use for grouping dashboard KPIs and checklists. Keep density low.
- Lists & Rows
  - Title, optional meta, chevron if navigates. 56–64px row height.
- Chips/Tags
  - Multi-select triggers/motivations. Max 2 lines wrap.
- Progress Ring
  - Use for urge timer and milestones; avoid full-screen spinners.
- Badges
  - Minimal glyph + short label. Celebrate in-line; avoid intrusive modals.

Empty States
- Show purpose, 1-line benefit, and a single CTA. Include subdued illustration if needed.

Error States
- Human explanation, recovery action, and option to retry later.

---

## 4) Motion & Haptics
- Durations: 120ms (small), 180ms (medium), 240ms (large).
- Easing: standard (ease-in-out); spring only for playful micro-interactions.
- Page transitions: subtle push/fade; no parallax.
- Haptics
  - Light selection on toggles and tab switches.
  - Success feedback on badge earned/pledge confirmed.
  - Warning feedback on destructive actions.

---

## 5) Content Style (microcopy)
- Tone: supportive mentor; direct and warm. Avoid guilt/fear.
- Person-first: “You” voice; use the user’s name when known.
- Brevity: titles ≤ 50 chars, body ≤ 140 chars per step.
- Numbers over adjectives: “3–5 minutes” over “a few minutes”.
- Sentence case. Use emojis sparingly (badges only).

---

## 6) Accessibility
- Contrast: WCAG AA for text and essential UI.
- Tap targets: ≥ 44x44.
- Dynamic Type: scale fonts; avoid fixed heights on text containers.
- Labels: meaningful accessibility labels/roles on interactive elements.
- Focus order: logical; visible focus for keyboards/switch access.

---

## 7) Notifications (etiquette)
- Default cadence: 1–2/day during week 1, then 0–1/day.
- Respect quiet hours from user prefs; never break them.
- Purposeful only: cravings support, milestones, plan tasks.
- Include action ("Open breathing", "Start urge timer").

---

## 8) Performance Budgets
- First interactive: < 2s on mid-range device.
- Image assets: vector where possible; PNG < 200KB each.
- Avoid unnecessary re-renders; memoize heavy components.
- List virtualization for > 20 items.

---

## 9) Platform Guidelines
- iOS: native gestures, back swipe; large titles allowed on top-level screens.
- Android: ripple feedback; hardware back support on every screen.
- Safe area & keyboard handling verified on both.

---

## 10) Theming & Tokens (implementation)
- Centralize in `constants/theme.ts` and expose via `hooks/use-theme-color`.
- Add semantic tokens (do not use raw hex in components):
  - Colors: primary, onPrimary, surface, surfaceAlt, text, textSecondary, border, success, warning, danger.
  - Typography: titleXL, titleL, titleM, bodyL, bodyM, caption.
  - Spacing: xs(4), s(8), sm(12), m(16), lg(24), xl(32), xxl(40).
  - Radius: card(12), button(12).
- Dark mode: provide token pairs and auto-switch.

---

## 11) Screen-Specific Guidance
- Onboarding
  - Each step: single purpose, progress indicator, autosave.
  - Ask name early; reuse in copy.
  - Optional demographics/health clearly labeled and skippable.
- Dashboard
  - Top stat: countdown/days smoke-free with streak icon.
  - 3–4 KPI cards max; one daily lesson card; 1–3 tasks.
- Cravings Tools
  - Urge timer front-and-center; quick access to breathing and reframes.
  - Log outcome succinctly after timer.

---

## 12) Do / Don’t
- Do: keep one clear primary action per view.
- Do: favor fewer words and more whitespace.
- Do: show progress and success states frequently.
- Don’t: stack multiple full-bleed gradients or heavy shadows.
- Don’t: mix more than one accent color.
- Don’t: animate purely decorative elements.

---

## 13) Delivery Checklist (per PR / screen)
- Figma alignment (if applicable) and token usage only (no hard-coded hex).
- Dark mode reviewed.
- Accessibility pass (labels, contrast, dynamic type, tap targets).
- Performance check (no unnecessary re-renders; lists virtualized).
- Copy reviewed for tone and brevity.
- Haptics appropriate and not overused.

---

## 14) Developer Notes (Expo/React Native)
- Use `ThemedText`/`ThemedView` from `components/` to ensure token usage.
- Use `IconSymbol` from `components/ui/icon-symbol.*` for consistent icons.
- Centralize all colors/spacing/typography via `constants/theme.ts`.
- Respect `use-color-scheme` hooks for light/dark.
- Keep components pure; side-effects in hooks/services.

---

End of rules.
