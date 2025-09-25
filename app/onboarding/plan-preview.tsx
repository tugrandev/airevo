import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { useOnboardingStore } from '@/features/onboarding/store';
import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function PlanPreviewScreen() {
  const router = useRouter();
  const { data } = useOnboardingStore();

  return (
    <ThemedView style={styles.container}>
      <View style={styles.content}>
        <ThemedText type="title">Your personalized plan</ThemedText>
        <ThemedText>Focus: {data.triggers?.[0] ?? 'Your triggers'}</ThemedText>
        <ThemedText>Motivation: {data.motivations?.[0] ?? 'Your why'}</ThemedText>
      </View>
      <PrimaryButton title="Continue" onPress={() => router.push('/onboarding/account')} />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, justifyContent: 'space-between' },
  content: { gap: 8, marginTop: 24 },
});
