import create from 'zustand';

interface UserOnboardingState {
  onboardingStep: number;
  setOnboardingStep: (step: number) => void;
}

export const useUserOnboardingStore = create<UserOnboardingState>((set) => ({
  onboardingStep: 1,
  setOnboardingStep: (step) => set({ onboardingStep: step })
}));

