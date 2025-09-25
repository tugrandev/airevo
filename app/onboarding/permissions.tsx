import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function PermissionsScreen() {
  const router = useRouter();

  return (
    <ThemedView style={styles.container}>
      <View style={styles.content}>
        <ThemedText type="title">Enable notifications</ThemedText>
        <ThemedText>We’ll only send helpful tips and milestone reminders.</ThemedText>
      </View>
      <PrimaryButton
        title="Enable Notifications"
        onPress={() => {
          // TODO: Integrate Expo Notifications permission flow in implementation phase
          router.push('/onboarding/plan-preview');
        }}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, justifyContent: 'space-between' },
  content: { gap: 12, marginTop: 24 },
});
