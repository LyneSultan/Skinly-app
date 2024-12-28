import { routes } from "@/routes/server.routes";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";
import { useRouter } from "expo-router";
import { useState } from "react";

export const useRegisterLogic = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [password_confirmation, setPasswordConfirmation] = useState('');
  const [errorMessages, setErrorMessages] = useState([]);

  const apiUrl = process.env.EXPO_PUBLIC_API_URL;
  const handleRegister = async () => {
    const payload = {
      name,
      password_confirmation,
      email,
      password,
    };
    console.log(apiUrl);

    try {
      const response = await axios.post(apiUrl + routes.register, payload, {
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
    setEmail,
    setPassword,
    setName,
    setPasswordConfirmation,
    handleRegister,
    errorMessages
  };
}
