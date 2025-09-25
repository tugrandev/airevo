import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Chip } from '@/components/ui/Chip';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { useOnboardingStore } from '@/features/onboarding/store';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

const FREQ = ['Daily', 'Few per day', 'Emergencies only'] as const;

export default function NotificationsPrefScreen() {
  const router = useRouter();
  const { data, update } = useOnboardingStore();
  const [freq, setFreq] = useState<string>(
    data.notificationFrequency?.replace(/_/g, ' ') ?? 'Daily'
  );

  return (
    <ThemedView style={styles.container}>
      <View style={styles.content}>
        <ThemedText type="title">How often should we nudge you?</ThemedText>
        <View style={styles.chips}>
          {FREQ.map((f) => (
            <Chip key={f} label={f} selected={freq === f} onPress={() => setFreq(f)} />
          ))}
        </View>
      </View>
      <PrimaryButton
        title="Continue"
        onPress={() => {
          const val = (freq.toLowerCase().replace(/ /g, '_') as any);
          update({ notificationFrequency: val });
          router.push('/onboarding/permissions');
        }}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, justifyContent: 'space-between' },
  content: { gap: 12, marginTop: 24 },
  chips: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
});
