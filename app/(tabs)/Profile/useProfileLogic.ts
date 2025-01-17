import AppContext from '@/app/context/userContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useRouter } from 'expo-router';
import { useContext, useState } from 'react';

export const useProfileLogic = () => {
  const { user, setUser } = useContext(AppContext);
  const router = useRouter();

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: user.name,
    email: user.email,
    skinType: '******',
  });

  const handleEditToggle = async () => {
    if (isEditing) {
      try {
        const authToken = await AsyncStorage.getItem('authToken');
        if (!authToken) {
          console.error('No auth token found.');
          return;
        }

        setUser({
          ...user,
          name: formData.firstName,
          email: formData.email,
        });

        await axios.patch(
          `${process.env.EXPO_PUBLIC_API_URL}/users`,
          {
            name: formData.firstName,
            email: formData.email,
            skinType: formData.skinType,
          },
          {
            headers: {
              Authorization: authToken,
            },
          }
        );

        console.log('User details updated successfully.');
      } catch (error) {
        console.error('Failed to update user details:', error);
      }
    }
    setIsEditing(!isEditing);
  };
  const handleLogOut = () => {
    AsyncStorage.setItem('authToken', '');
    router.replace('/OnBoardingScreen1');
  };

  const handleChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  return {
    handleChange,
    handleEditToggle,
    handleLogOut,
    isEditing,
    formData,
  };
};
