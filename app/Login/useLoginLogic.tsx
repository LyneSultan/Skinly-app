import { useRouter } from "expo-router";

export const useLoginLogic = () => {
  const router = useRouter();
  const handleLogin = () => {
    router.push('/HomeScreen')
  }
  return {
    handleLogin,
  };
}
