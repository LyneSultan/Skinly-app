import AppContext from '@/app/context/userContext';
import { PickImage } from '@/hooks/ImagePicker/pickImage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useRouter } from 'expo-router';
import { useContext, useState } from 'react';

export const useProfileLogic = () => {
  const { user, setUser } = useContext(AppContext);
  const router = useRouter();
  const { pickImage } = PickImage();


  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: user.name,
    email: user.email,
    profile_picture: user?.profile_pircture || null,
    password: '******',
  });

  const handlePickImage = async () => {
    const imageUri = await pickImage();
    const token = await AsyncStorage.getItem('authToken');


    console.log('here', imageUri);


    const formData = new FormData();
      formData.append('image', {
        uri: imageUri,
        type: 'image/jpeg',
        name: 'profile.jpg',
      });

      const response = await axios.post(
        `${process.env.EXPO_PUBLIC_API_URL}/users/profile`,
        formData,
        {
          headers: {
            Authorization: token,
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      setFormData((prev) => ({
        ...prev,
        profile_picture: response.data,
      }));

    console.log(response.data);

  };

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
    router.replace('/OnBoardingScreens/OnBoarding1');
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
    handlePickImage
  };
};
