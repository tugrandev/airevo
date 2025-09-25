export const Colors = {
  light: {
    // Base
    background: '#FFFFFF',
    surface: '#F8FAF9',
    surfaceAlt: '#EFF6F3',

    // Text
    text: '#0F172A',
    textSecondary: '#475569',

    // Primary (greenish)
    tint: '#16A34A', // primary accent
    onTint: '#FFFFFF',

    // Icons & borders
    icon: '#6B7280',
    border: '#E2E8F0',

    // Status
    success: '#16A34A',
    warning: '#F59E0B',
    danger: '#DC2626',

    // Tabs
    tabIconDefault: '#94A3B8',
    tabIconSelected: '#16A34A',
  },
  dark: {
    background: '#0B1210',
    surface: '#0F1916',
    surfaceAlt: '#0F1F1A',

    text: '#E6ECE9',
    textSecondary: '#A1A8A4',

    tint: '#22C55E',
    onTint: '#0A0F0D',

    icon: '#9BA1A6',
    border: '#1F2A26',

    success: '#22C55E',
    warning: '#FBBF24',
    danger: '#F87171',

    tabIconDefault: '#9BA1A6',
    tabIconSelected: '#22C55E',
  },
} as const;
