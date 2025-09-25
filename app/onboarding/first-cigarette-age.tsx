import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { useOnboardingStore } from '@/features/onboarding/store';
import { useThemeColor } from '@/hooks/use-theme-color';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

export default function FirstCigaretteAgeScreen() {
  const router = useRouter();
  const { data, update } = useOnboardingStore();
  const [value, setValue] = useState(
    data.firstCigaretteAge !== undefined ? String(data.firstCigaretteAge) : ''
  );
  const num = Number.parseInt(value, 10);
  const isValid = Number.isFinite(num) && num >= 8 && num <= 30;
  const border = useThemeColor({}, 'icon');

  return (
    <ThemedView style={styles.container}>
      <View style={styles.content}>
        <ThemedText type="title">How old were you when you had your first cigarette?</ThemedText>
        <TextInput
          accessibilityLabel="Age at first cigarette"
          style={[styles.input, { borderColor: border }]}
          keyboardType="number-pad"
          value={value}
          onChangeText={setValue}
          placeholder="e.g., 16"
          maxLength={2}
          autoFocus
          returnKeyType="done"
        />
      </View>
      <PrimaryButton
        title="Continue"
        onPress={() => {
          if (!isValid) return;
          update({ firstCigaretteAge: num });
          router.push('/onboarding/cigs-per-day');
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
