import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <ThemedView style={styles.container}>
      <View style={styles.content}>
        <ThemedText type="title" style={styles.title}>Start your smoke‑free journey</ThemedText>
        <ThemedText style={styles.body}>Personalized plan, real tools, and support when it matters.</ThemedText>
      </View>
      <PrimaryButton title="Get Started" onPress={() => router.push('/onboarding/benefits')} />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, justifyContent: 'space-between' },
  content: { gap: 12, marginTop: 48 },
  title: { },
  body: { },
});
