import { ThemedText } from '@/components/themed-text';
import { useThemeColor } from '@/hooks/use-theme-color';
import React from 'react';
import { Pressable, StyleSheet, ViewStyle } from 'react-native';

export type PrimaryButtonProps = {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  style?: ViewStyle;
  accessibilityLabel?: string;
};

export function PrimaryButton({ title, onPress, disabled, style, accessibilityLabel }: PrimaryButtonProps) {
  const bg = useThemeColor({}, 'tint');
  const fg = useThemeColor({}, 'background');

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel ?? title}
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.button,
        { backgroundColor: bg, opacity: disabled ? 0.5 : pressed ? 0.9 : 1 },
        style,
      ]}
    >
      <ThemedText style={[styles.label, { color: fg }]} type="defaultSemiBold">
        {title}
      </ThemedText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    minHeight: 48,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  label: {
    fontSize: 16,
  },
});
