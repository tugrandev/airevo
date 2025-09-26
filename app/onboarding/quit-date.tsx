import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Chip } from '@/components/ui/Chip';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { useOnboardingStore } from '@/features/onboarding/store';
import { useThemeColor } from '@/hooks/use-theme-color';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, TextInput, View } from 'react-native';

export default function QuitDateScreen() {
  const router = useRouter();
  const { data, update } = useOnboardingStore();
  const [planMode, setPlanMode] = useState<'cold_turkey' | 'reduction'>(data.planMode ?? 'cold_turkey');
  const [quitDate, setQuitDate] = useState<string>(data.quitDate ?? '');
  const border = useThemeColor({}, 'icon');
  const isValid = quitDate.length >= 8; // YYYY-MM-DD minimal check

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
            <ThemedText type="title">Pick your Quit Date</ThemedText>
            <ThemedText>We recommend 1–2 weeks to prepare, or pick today.</ThemedText>
            <View style={styles.row}>
              <Chip label="Cold turkey" selected={planMode === 'cold_turkey'} onPress={() => setPlanMode('cold_turkey')} />
              <Chip label="Reduction" selected={planMode === 'reduction'} onPress={() => setPlanMode('reduction')} />
            </View>
            <TextInput
              accessibilityLabel="Quit date"
              style={[styles.input, { borderColor: border }]}
              placeholder="YYYY-MM-DD"
              value={quitDate}
              onChangeText={setQuitDate}
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
              update({ planMode, quitDate });
              router.push('/onboarding/short-term-goals');
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
  row: { flexDirection: 'row', gap: 8 },
  input: { borderWidth: 1, borderRadius: 12, paddingHorizontal: 16, minHeight: 48 },
});
