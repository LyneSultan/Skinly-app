import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';

export const useRecommendLogic = () => {
  const { skinType } = useLocalSearchParams<{ skinType: string }>();
  console.log(skinType);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const apiUrl = process.env.EXPO_PUBLIC_API_URL;
  console.log(skinType);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${apiUrl}/uploads/mock.json`);
        const result = await response.json();
        const skinData = result.skin_types[skinType];
        console.log('skinData', skinData);
        console.log('result', result);

        if (skinData) {
          setData(skinData);
        } else {
          setError('Invalid skin type or no recommendations found.');
        }
      } catch (err) {
        setError('Failed to load data. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [skinType]);
  return {
    skinType,
    error,
    isLoading,
    data,
  };
};
