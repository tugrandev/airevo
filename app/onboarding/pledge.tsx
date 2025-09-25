import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { useOnboardingStore } from '@/features/onboarding/store';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Switch, View } from 'react-native';

export default function PledgeScreen() {
  const router = useRouter();
  const { data, update } = useOnboardingStore();
  const [accepted, setAccepted] = useState<boolean>(data.pledgeAccepted ?? false);
  const name = data.name ?? 'I';
  const date = data.quitDate ?? 'my quit date';

  return (
    <ThemedView style={styles.container}>
      <View style={styles.content}>
        <ThemedText type="title">Your commitment</ThemedText>
        <ThemedText>
          {`${name}, commit to quitting on ${date} for a healthier and happier life.`}
        </ThemedText>
        <View style={styles.row}>
          <Switch value={accepted} onValueChange={setAccepted} />
          <ThemedText>I Commit</ThemedText>
        </View>
      </View>
      <PrimaryButton
        title="Continue"
        onPress={() => {
          update({ pledgeAccepted: accepted });
          router.push('/onboarding/notifications');
        }}
        disabled={!accepted}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, justifyContent: 'space-between' },
  content: { gap: 12, marginTop: 24 },
  row: { flexDirection: 'row', gap: 8, alignItems: 'center' },
});
