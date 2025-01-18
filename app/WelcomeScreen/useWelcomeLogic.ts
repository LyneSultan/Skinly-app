import { useRouter } from "expo-router";

export const useWelcomeLogic = () => {
  const router = useRouter();

  const handleStart = () => {
    router.replace('/OnBoardingScreens/OnBoarding1');
  }
  return {
    handleStart
  }
}
