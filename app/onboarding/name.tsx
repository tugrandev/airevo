import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { useOnboardingStore } from '@/features/onboarding/store';
import { useThemeColor } from '@/hooks/use-theme-color';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

export default function NameScreen() {
  const router = useRouter();
  const { data, update } = useOnboardingStore();
  const [name, setName] = useState(data.name ?? '');
  const isValid = name.trim().length >= 1 && name.trim().length <= 40;
  const border = useThemeColor({}, 'icon');
  const accent = useThemeColor({}, 'tint');

  return (
    <ThemedView style={styles.container}>
      <View style={styles.content}>
        <ThemedText type="title">What should we call you?</ThemedText>
        <ThemedText>We’ll use your name in tips and reminders.</ThemedText>
        <TextInput
          accessibilityLabel="Your name"
          style={[styles.input, { borderColor: border }]}
          autoFocus
          autoCapitalize="words"
          value={name}
          onChangeText={setName}
          placeholder="Your name"
          returnKeyType="done"
        />
        {!isValid && name.length > 0 && (
          <ThemedText style={{ color: accent }}>Name must be 1–40 characters.</ThemedText>
        )}
      </View>
      <PrimaryButton
        title="Continue"
        onPress={() => {
          if (!isValid) return;
          update({ name: name.trim() });
          router.push('/onboarding/first-cigarette-age');
        }}
        disabled={!isValid}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, justifyContent: 'space-between' },
  content: { gap: 12, marginTop: 24 },
  input: {
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 16,
    minHeight: 48,
  },
});
