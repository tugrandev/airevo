import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Chip } from '@/components/ui/Chip';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { useOnboardingStore } from '@/features/onboarding/store';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

const GENDERS = ['Male', 'Female', 'Non-binary', 'Prefer not to say'] as const;
const AGES = ['Under 18', '18-24', '25-34', '35-44', '45-54', '55+'] as const;

export default function DemographicsScreen() {
  const router = useRouter();
  const { data, update } = useOnboardingStore();
  const [gender, setGender] = useState<string | undefined>(data.gender);
  const [ageRange, setAgeRange] = useState<string | undefined>(data.ageRange);

  return (
    <ThemedView style={styles.container}>
      <View style={styles.content}>
        <ThemedText type="title">A few optional details</ThemedText>
        <ThemedText>Gender</ThemedText>
        <View style={styles.chips}>
          {GENDERS.map((g) => (
            <Chip key={g} label={g} selected={gender === g} onPress={() => setGender(g)} />
          ))}
        </View>
        <ThemedText>Age Range</ThemedText>
        <View style={styles.chips}>
          {AGES.map((a) => (
            <Chip key={a} label={a} selected={ageRange === a} onPress={() => setAgeRange(a)} />
          ))}
        </View>
      </View>
      <PrimaryButton
        title="Continue"
        onPress={() => {
          update({ gender: gender as any, ageRange: ageRange as any });
          router.push('/onboarding/quit-date');
        }}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, justifyContent: 'space-between' },
  content: { gap: 12, marginTop: 24 },
  chips: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
});
