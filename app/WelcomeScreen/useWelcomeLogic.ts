import { useRouter } from "expo-router";

export const useWelcomeLogic = () => {
  const router = useRouter();

  const handleStart = () => {
    router.push('/OnBoardingScreen1');
  }
  return {
    handleStart
  }
}
