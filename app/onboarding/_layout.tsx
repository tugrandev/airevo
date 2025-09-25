import { Stack } from 'expo-router';

export default function OnboardingLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="benefits" />
      <Stack.Screen name="name" />
      <Stack.Screen name="first-cigarette-age" />
      <Stack.Screen name="cigs-per-day" />
      <Stack.Screen name="triggers" />
      <Stack.Screen name="motivations" />
      <Stack.Screen name="attempts" />
      <Stack.Screen name="support" />
      <Stack.Screen name="health" />
      <Stack.Screen name="demographics" />
      <Stack.Screen name="quit-date" />
      <Stack.Screen name="short-term-goals" />
      <Stack.Screen name="pledge" />
      <Stack.Screen name="notifications" />
      <Stack.Screen name="permissions" />
      <Stack.Screen name="plan-preview" />
      <Stack.Screen name="account" />
      <Stack.Screen name="done" />
    </Stack>
  );
}
