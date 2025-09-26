import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { useOnboardingStore } from '@/features/onboarding/store';
import { useThemeColor } from '@/hooks/use-theme-color';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, TextInput, View } from 'react-native';

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
      <KeyboardAvoidingView 
        style={styles.keyboardAvoidingView}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20}
      >
        <ScrollView 
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
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
        </ScrollView>
        <View style={styles.buttonContainer}>
          <PrimaryButton
            title="Continue"
            onPress={() => {
              if (!isValid) return;
              update({ cigsPerDay: num });
              router.push('/onboarding/triggers');
            }}
            disabled={!isValid}
          />
        </View>
      </KeyboardAvoidingView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  keyboardAvoidingView: { flex: 1 },
  scrollContent: { flexGrow: 1, padding: 16 },
  content: { gap: 12, marginTop: 24, flex: 1 },
  buttonContainer: { padding: 16, paddingTop: 8 },
  input: {
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 16,
    minHeight: 48,
  },
});
