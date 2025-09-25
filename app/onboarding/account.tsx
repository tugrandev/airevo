import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function AccountScreen() {
  const router = useRouter();

  return (
    <ThemedView style={styles.container}>
      <View style={styles.content}>
        <ThemedText type="title">Create your account</ThemedText>
        <ThemedText>Sign in to sync across devices (optional now).</ThemedText>
      </View>
      <View style={{ gap: 8 }}>
        <PrimaryButton title="Continue as Guest" onPress={() => router.push('/onboarding/done')} />
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, justifyContent: 'space-between' },
  content: { gap: 12, marginTop: 24 },
});
