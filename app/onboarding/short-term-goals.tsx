import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Chip } from '@/components/ui/Chip';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { useOnboardingStore } from '@/features/onboarding/store';
import { useThemeColor } from '@/hooks/use-theme-color';
import { useRouter } from 'expo-router';
import React, { useMemo, useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

const PRESETS = [
  'Reduce by 5/day',
  'Go 24h smoke-free',
  'Walk when craving',
  'Replace coffee routine',
  'Call supporter',
];

export default function ShortTermGoalsScreen() {
  const router = useRouter();
  const { data, update } = useOnboardingStore();
  const [selected, setSelected] = useState<string[]>(data.shortTermGoals ?? []);
  const [custom, setCustom] = useState<string>('');
  const border = useThemeColor({}, 'icon');

  const toggle = (label: string) => {
    setSelected((prev) => (prev.includes(label) ? prev.filter((t) => t !== label) : [...prev, label]));
  };

  const canContinue = useMemo(() => selected.length > 0 || custom.trim().length > 0, [selected, custom]);

  return (
    <ThemedView style={styles.container}>
      <View style={styles.content}>
        <ThemedText type="title">Set a few short‑term goals</ThemedText>
        <View style={styles.chips}>
          {PRESETS.map((p) => (
            <Chip key={p} label={p} selected={selected.includes(p)} onPress={() => toggle(p)} />
          ))}
        </View>
        <TextInput
          accessibilityLabel="Custom goal"
          style={[styles.input, { borderColor: border }]}
          placeholder="Add your own (optional)"
          value={custom}
          onChangeText={setCustom}
          autoFocus
          returnKeyType="done"
        />
      </View>
      <PrimaryButton
        title="Continue"
        onPress={() => {
          const goals = custom.trim().length ? [...selected, custom.trim()] : selected;
          update({ shortTermGoals: goals });
          router.push('/onboarding/pledge');
        }}
        disabled={!canContinue}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, justifyContent: 'space-between' },
  content: { gap: 12, marginTop: 24 },
  chips: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  input: { borderWidth: 1, borderRadius: 12, paddingHorizontal: 16, minHeight: 48 },
});
