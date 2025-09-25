import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Chip } from '@/components/ui/Chip';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { useOnboardingStore } from '@/features/onboarding/store';
import { useThemeColor } from '@/hooks/use-theme-color';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

export default function SupportScreen() {
  const router = useRouter();
  const { data, update } = useOnboardingStore();
  const [hasSupporter, setHasSupporter] = useState<boolean>(data.hasSupporter ?? false);
  const [supporterName, setSupporterName] = useState<string>(data.supporterName ?? '');
  const border = useThemeColor({}, 'icon');

  return (
    <ThemedView style={styles.container}>
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
      <PrimaryButton
        title="Continue"
        onPress={() => {
          update({ hasSupporter, supporterName: hasSupporter ? supporterName : '' });
          router.push('/onboarding/health');
        }}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, justifyContent: 'space-between' },
  content: { gap: 12, marginTop: 24 },
  row: { flexDirection: 'row', gap: 8 },
  input: { borderWidth: 1, borderRadius: 12, paddingHorizontal: 16, minHeight: 48 },
});
