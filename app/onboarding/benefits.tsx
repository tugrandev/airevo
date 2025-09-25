import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function BenefitsScreen() {
  const router = useRouter();

  return (
    <ThemedView style={styles.container}>
      <View style={styles.cards}>
        <ThemedText style={styles.card}>Personalized plan</ThemedText>
        <ThemedText style={styles.card}>Track progress</ThemedText>
        <ThemedText style={styles.card}>Cravings help on demand</ThemedText>
      </View>
      <PrimaryButton title="Continue" onPress={() => router.push('/onboarding/name')} />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, justifyContent: 'space-between' },
  cards: { gap: 12, marginTop: 24 },
  card: { },
});
