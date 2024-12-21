import { useRouter } from "expo-router";

export const useRegisterLogic = () => {
  const router = useRouter();
  const handleRegister = () => {
    router.push('/HomeScreen')
  }
  return {
    handleRegister,
  };
}
