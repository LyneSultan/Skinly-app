import { useRouter } from "expo-router";

export const useWelcomeLogic = () => {
  const router = useRouter();

  const handleStart = () => {
    router.push('/Login');
  }
  return {
    handleStart
  }
}
