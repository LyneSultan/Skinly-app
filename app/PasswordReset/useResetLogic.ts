import { routes } from "@/routes/server.routes";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";

const useResetLogic = () => {
  const { email } = useLocalSearchParams<{ email: string }>();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const router = useRouter();

  const handleReset = async () => {
    if (!password || !confirmPassword) {
      return console.log("Error", "Both fields are required.");
    }
    if (password !== confirmPassword) {
      return  console.log("Error", "Passwords do not match.");
    }

    try {
      const apiUrl = process.env.EXPO_PUBLIC_API_URL;
      const response = await axios.post(apiUrl + routes.reset, {
        email,
        password,
      });
      console.log(response.data);

      if (response.status === 201) {
        router.push('/(tabs)/HomeScreen');
        await AsyncStorage.setItem("authToken", response.data.access_token);
        console.log(AsyncStorage.getItem("authToken"));

      }
    } catch (error) {
      console.error(error);
    }
  };

  return {
    handleReset,
    setConfirmPassword,
    setPassword
  }
}
export default  useResetLogic;
