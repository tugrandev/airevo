import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Chip } from '@/components/ui/Chip';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { useOnboardingStore } from '@/features/onboarding/store';
import { useThemeColor } from '@/hooks/use-theme-color';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

export default function QuitDateScreen() {
  const router = useRouter();
  const { data, update } = useOnboardingStore();
  const [planMode, setPlanMode] = useState<'cold_turkey' | 'reduction'>(data.planMode ?? 'cold_turkey');
  const [quitDate, setQuitDate] = useState<string>(data.quitDate ?? '');
  const border = useThemeColor({}, 'icon');
  const isValid = quitDate.length >= 8; // YYYY-MM-DD minimal check

  return (
    <ThemedView style={styles.container}>
      <View style={styles.content}>
        <ThemedText type="title">Pick your Quit Date</ThemedText>
        <ThemedText>We recommend 1–2 weeks to prepare, or pick today.</ThemedText>
        <View style={styles.row}>
          <Chip label="Cold turkey" selected={planMode === 'cold_turkey'} onPress={() => setPlanMode('cold_turkey')} />
          <Chip label="Reduction" selected={planMode === 'reduction'} onPress={() => setPlanMode('reduction')} />
        </View>
        <TextInput
          accessibilityLabel="Quit date"
          style={[styles.input, { borderColor: border }]}
          placeholder="YYYY-MM-DD"
          value={quitDate}
          onChangeText={setQuitDate}
          autoFocus
          returnKeyType="done"
        />
      </View>
      <PrimaryButton
        title="Continue"
        onPress={() => {
          if (!isValid) return;
          update({ planMode, quitDate });
          router.push('/onboarding/short-term-goals');
        }}
        disabled={!isValid}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, justifyContent: 'space-between' },
  content: { gap: 12, marginTop: 24 },
  row: { flexDirection: 'row', gap: 8 },
  input: { borderWidth: 1, borderRadius: 12, paddingHorizontal: 16, minHeight: 48 },
});
