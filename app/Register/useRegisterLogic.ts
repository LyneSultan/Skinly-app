import { routes } from '@/routes/server.routes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useRouter } from 'expo-router';
import { useContext, useState } from 'react';
import AppContext from '../context/userContext';

export const useRegisterLogic = () => {
  const router = useRouter();
  const { setUser } = useContext(AppContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [password_confirmation, setPasswordConfirmation] = useState('');
  const [errorMessages, setErrorMessages] = useState([]);

  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordConfirmationError, setPasswordConfirmationError] =
    useState('');

  const apiUrl = process.env.EXPO_PUBLIC_API_URL;
  const handleRegister = async () => {
    const payload = {
      name,
      password_confirmation,
      email,
      password,
    };
    console.log(apiUrl);

    if (!name) {
      console.log('not name');
      setNameError(' * Name is required');
      return;
    } else {
      setNameError('');
    }

    if (!email) {
      setEmailError(' * Email is required');
      return;
    } else {
      setEmailError('');
    }

    if (!password) {
      setPasswordError(' * Password is required');
      return;
    } else {
      setPasswordError('');
    }

    if (password !== password_confirmation) {
      setPasswordConfirmationError('Passwords do not match');
      return;
    } else {
      setPasswordConfirmationError('');
    }
    try {
      const response = await axios.post(apiUrl + routes.register, payload, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const token = response.data.access_token;

      await AsyncStorage.setItem('authToken', token);
      console.log(response.data);
      setUser(response.data.user);

      const storedToken = await AsyncStorage.getItem('authToken');
      console.log('Stored Token:', storedToken);

      router.push('/(tabs)/HomeScreen');
    } catch (error: any) {
      setErrorMessages(error.response.data.message);
    }
  };

  return {
    setEmail,
    setPassword,
    setName,
    setPasswordConfirmation,
    handleRegister,
    errorMessages,
    nameError,
    emailError,
    passwordError,
    passwordConfirmationError,
  };
};
