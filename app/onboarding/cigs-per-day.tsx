import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { useOnboardingStore } from '@/features/onboarding/store';
import { useThemeColor } from '@/hooks/use-theme-color';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

export default function CigsPerDayScreen() {
  const router = useRouter();
  const { data, update } = useOnboardingStore();
  const [value, setValue] = useState(
    data.cigsPerDay !== undefined ? String(data.cigsPerDay) : ''
  );
  const num = Number.parseInt(value, 10);
  const isValid = Number.isFinite(num) && num >= 0 && num <= 60;
  const border = useThemeColor({}, 'icon');

  return (
    <ThemedView style={styles.container}>
      <View style={styles.content}>
        <ThemedText type="title">How many cigarettes do you smoke per day?</ThemedText>
        <TextInput
          accessibilityLabel="Cigarettes per day"
          style={[styles.input, { borderColor: border }]}
          keyboardType="number-pad"
          value={value}
          onChangeText={setValue}
          placeholder="e.g., 10"
          maxLength={2}
          autoFocus
          returnKeyType="done"
        />
      </View>
      <PrimaryButton
        title="Continue"
        onPress={() => {
          if (!isValid) return;
          update({ cigsPerDay: num });
          router.push('/onboarding/triggers');
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
