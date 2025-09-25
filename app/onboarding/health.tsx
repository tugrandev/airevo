import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Chip } from '@/components/ui/Chip';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { useOnboardingStore } from '@/features/onboarding/store';
import { useRouter } from 'expo-router';
import React, { useMemo, useState } from 'react';
import { StyleSheet, View } from 'react-native';

const PRESETS = ['Breathing', 'Heart', 'Diabetes', 'None', 'Prefer not to say'];

export default function HealthScreen() {
  const router = useRouter();
  const { data, update } = useOnboardingStore();
  const [selected, setSelected] = useState<string[]>(data.healthConcerns ?? []);

  const toggle = (label: string) => {
    setSelected((prev) => (prev.includes(label) ? prev.filter((t) => t !== label) : [...prev, label]));
  };

  const canContinue = useMemo(() => true, []);

  return (
    <ThemedView style={styles.container}>
      <View style={styles.content}>
        <ThemedText type="title">Any health areas you’re watching? (Optional)</ThemedText>
        <View style={styles.chips}>
          {PRESETS.map((p) => (
            <Chip key={p} label={p} selected={selected.includes(p)} onPress={() => toggle(p)} />
          ))}
        </View>
      </View>
      <PrimaryButton
        title="Continue"
        onPress={() => {
          update({ healthConcerns: selected });
          router.push('/onboarding/demographics');
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
});
