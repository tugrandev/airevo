import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Chip } from '@/components/ui/Chip';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { useOnboardingStore } from '@/features/onboarding/store';
import { useThemeColor } from '@/hooks/use-theme-color';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

const CHALLENGES = ['Cravings', 'Stress', 'Social events', 'Routine', 'Withdrawal', 'Weight gain'];

export default function AttemptsScreen() {
  const router = useRouter();
  const { data, update } = useOnboardingStore();
  const [attempted, setAttempted] = useState<boolean>(data.attempted ?? false);
  const [selected, setSelected] = useState<string[]>(data.challenges ?? []);
  const [details, setDetails] = useState<string>(data.details ?? '');
  const border = useThemeColor({}, 'icon');

  const toggle = (label: string) => {
    setSelected((prev) => (prev.includes(label) ? prev.filter((t) => t !== label) : [...prev, label]));
  };

  return (
    <ThemedView style={styles.container}>
      <View style={styles.content}>
        <ThemedText type="title">Have you tried quitting before?</ThemedText>
        <View style={styles.row}>
          <Chip label="No" selected={!attempted} onPress={() => setAttempted(false)} />
          <Chip label="Yes" selected={attempted} onPress={() => setAttempted(true)} />
        </View>
        {attempted && (
          <>
            <ThemedText>What made it challenging?</ThemedText>
            <View style={styles.chips}>
              {CHALLENGES.map((c) => (
                <Chip key={c} label={c} selected={selected.includes(c)} onPress={() => toggle(c)} />
              ))}
            </View>
            <TextInput
              accessibilityLabel="Additional details"
              style={[styles.input, { borderColor: border }]}
              placeholder="Anything else that made it hard?"
              value={details}
              onChangeText={setDetails}
              multiline
              autoFocus
              returnKeyType="done"
            />
          </>
        )}
      </View>
      <PrimaryButton
        title="Continue"
        onPress={() => {
          update({ attempted, challenges: attempted ? selected : [], details: attempted ? details : '' });
          router.push('/onboarding/support');
        }}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, justifyContent: 'space-between' },
  content: { gap: 12, marginTop: 24 },
  row: { flexDirection: 'row', gap: 8 },
  chips: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  input: { borderWidth: 1, borderRadius: 12, paddingHorizontal: 16, minHeight: 80, paddingTop: 12 },
});
