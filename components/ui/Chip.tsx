import { ThemedText } from '@/components/themed-text';
import { useThemeColor } from '@/hooks/use-theme-color';
import React from 'react';
import { Pressable, StyleSheet, ViewStyle } from 'react-native';

export type ChipProps = {
  label: string;
  selected?: boolean;
  onPress: () => void;
  style?: ViewStyle;
  accessibilityLabel?: string;
};

export function Chip({ label, selected, onPress, style, accessibilityLabel }: ChipProps) {
  const border = useThemeColor({}, 'icon');
  const bg = useThemeColor({}, 'background');
  const tint = useThemeColor({}, 'tint');
  const textOn = useThemeColor({}, 'background');

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel ?? label}
      onPress={onPress}
      style={[
        styles.chip,
        { borderColor: border, backgroundColor: selected ? tint : bg },
        style,
      ]}
    >
      <ThemedText style={[styles.label, { color: selected ? textOn : undefined }]}>{label}</ThemedText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  chip: {
    minHeight: 40,
    paddingHorizontal: 12,
    borderRadius: 20,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontSize: 15,
  },
});
