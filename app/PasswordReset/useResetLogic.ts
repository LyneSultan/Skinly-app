import { routes } from '@/routes/server.routes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useContext, useState } from 'react';
import AppContext from '../context/userContext';

const useResetLogic = () => {
  const { email } = useLocalSearchParams<{ email: string }>();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const router = useRouter();
  const { setUser } = useContext(AppContext);

  const handleReset = async () => {
    if (!password || !confirmPassword) {
      return console.log('Error', 'Both fields are required.');
    }
    if (password !== confirmPassword) {
      return console.log('Error', 'Passwords do not match.');
    }

    try {
      const apiUrl = process.env.EXPO_PUBLIC_API_URL;
      const response = await axios.post(apiUrl + routes.reset, {
        email,
        password,
      });
      console.log('data', response.data);
      await AsyncStorage.setItem('authToken', response.data.access_token);
      setUser(response.data.user);

      if (response.data.user.user_type === 'user') {
        router.push('/(tabs)/HomeScreen');
      } else if (response.data.user.user_type === 'company') {
        router.push('/Company');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return {
    handleReset,
    setConfirmPassword,
    setPassword,
  };
};
export default useResetLogic;
