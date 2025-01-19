import axios from 'axios';
import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';

export const useRecommendLogic = () => {
  const { skinType } = useLocalSearchParams<{ skinType: string }>();
  console.log(skinType);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiUrl = process.env.EXPO_PUBLIC_API_URL;
  // console.log(skinType);
  useEffect(() => {

    const fetchData = async () => {
      try {
        console.log("hi");
        // const response = await fetch(`${apiUrl}/uploads/skincare_suggestions.json`);
        // const result = await response.json(); // Get the raw text response
        const response = await axios.get(`${apiUrl}/product/skin`);
        const result = await response.data; // Get the raw text response
        // const parsedResult = JSON.parse(result); // Parse it into a JavaScript object
        console.log("result,",response.data);
        // console.log("here",response);
        const skinData = result.skin_types[skinType];
        console.log('skinData', skinData);
      //   console.log('result', result);

        if (skinData) {
          setData(skinData);
        } else {
          setError('Invalid skin type or no recommendations found.');
        }
      } catch (error) {
        console.log(error);
        setError('Failed to load data. Please try again later.');
      }
    };

    fetchData();
  },[]);
  return {
    skinType,
    error,
    isLoading,
    data,
  };
};
