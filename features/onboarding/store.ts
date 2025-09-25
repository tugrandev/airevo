import { create } from 'zustand';

export type OnboardingData = {
  name?: string;
  firstCigaretteAge?: number;
  cigsPerDay?: number;
  triggers?: string[];
  motivations?: string[];
  attempted?: boolean;
  challenges?: string[];
  details?: string;
  hasSupporter?: boolean;
  supporterName?: string;
  healthConcerns?: string[];
  gender?: 'male' | 'female' | 'non_binary' | 'prefer_not_to_say';
  ageRange?: 'under_18' | '18_24' | '25_34' | '35_44' | '45_54' | '55_plus';
  quitDate?: string;
  planMode?: 'cold_turkey' | 'reduction';
  shortTermGoals?: string[];
  pledgeAccepted?: boolean;
  notificationFrequency?: 'daily' | 'few_per_day' | 'emergencies_only';
  preferredNotificationTimes?: number[];
};

type OnboardingStore = {
  data: OnboardingData;
  update: (partial: Partial<OnboardingData>) => void;
  reset: () => void;
};

export const useOnboardingStore = create<OnboardingStore>((set) => ({
  data: {},
  update: (partial) => set((s) => ({ data: { ...s.data, ...partial } })),
  reset: () => set({ data: {} }),
}));
