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

      const storedToken = await AsyncStorage.getItem('authToken');
      console.log('Stored Token:', storedToken);
      router.push('/(tabs)/HomeScreen')

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
