import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function DoneScreen() {
  const router = useRouter();

  return (
    <ThemedView style={styles.container}>
      <View style={styles.content}>
        <ThemedText type="title">You’re all set</ThemedText>
        <ThemedText>Let’s begin your smoke‑free journey.</ThemedText>
      </View>
      <PrimaryButton title="Go to Dashboard" onPress={() => router.replace('/(tabs)')} />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, justifyContent: 'space-between' },
  content: { gap: 12, marginTop: 24 },
});
