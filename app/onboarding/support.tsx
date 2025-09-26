import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Chip } from '@/components/ui/Chip';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { useOnboardingStore } from '@/features/onboarding/store';
import { useThemeColor } from '@/hooks/use-theme-color';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, TextInput, View } from 'react-native';

export default function SupportScreen() {
  const router = useRouter();
  const { data, update } = useOnboardingStore();
  const [hasSupporter, setHasSupporter] = useState<boolean>(data.hasSupporter ?? false);
  const [supporterName, setSupporterName] = useState<string>(data.supporterName ?? '');
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
            <ThemedText type="title">Do you have friends or family who will support you?</ThemedText>
            <View style={styles.row}>
              <Chip label="No" selected={!hasSupporter} onPress={() => setHasSupporter(false)} />
              <Chip label="Yes" selected={hasSupporter} onPress={() => setHasSupporter(true)} />
            </View>
            {hasSupporter && (
              <TextInput
                accessibilityLabel="Supporter name"
                style={[styles.input, { borderColor: border }]}
                placeholder="Supporter name (optional)"
                value={supporterName}
                onChangeText={setSupporterName}
                autoFocus
                returnKeyType="done"
              />
            )}
          </View>
        </ScrollView>
        <View style={styles.buttonContainer}>
          <PrimaryButton
            title="Continue"
            onPress={() => {
              update({ hasSupporter, supporterName: hasSupporter ? supporterName : '' });
              router.push('/onboarding/health');
            }}
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
