import { routes } from "@/routes/server.routes";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";
import { useRouter } from "expo-router";
import { useState } from "react";

export const useLoginLogic = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessages, setErrorMessages] = useState([]);

  const apiUrl = process.env.EXPO_PUBLIC_API_URL;

  const handleLogin = async () => {
    const payload = { email, password };

    try {
      const response = await axios.post(apiUrl + routes.login, payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const token = response.data.access_token;

      await AsyncStorage.setItem('authToken', token);
      setErrorMessages([]);
      if (response.data.user.user_type === 'user') {
        router.push('/(tabs)/HomeScreen')
      } else if (response.data.user.user_type === 'company') {
        router.push('/Company')
      }

    } catch (error: any) {
      setErrorMessages(error.response.data.message);
    };
  }

  return {
    handleLogin,
    setEmail,
    setPassword,
    errorMessages
  };
}
