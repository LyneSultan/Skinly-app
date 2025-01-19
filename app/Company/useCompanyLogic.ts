import { routes } from '@/routes/server.routes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useEffect, useState } from 'react';

const pageSize = 12
  ;
const apiUrl = process.env.EXPO_PUBLIC_API_URL;

export const useCompanyLogic = () => {
  const [data, setData] = useState<Product[]>([]);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const getData = async () => {
      try {
        const fetchedData = await fetchData(page);
        setData(fetchedData);
        // console.log("fetchedData,",fetchedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    getData();
  }, [page]);

  const previousHandle = async () => {
    if (page > 1) {
      const current = page - 1;
      setPage(current);
    }
  };
  const nextHandle = async () => {
    const current = page + 1;
    setPage(current);
  };
  const fetchData = async (page: number) => {
    try {
      const TOKEN = await AsyncStorage.getItem('authToken');

      const response = await axios.get(apiUrl + routes.getCompanyProducts, {
        headers: {
          Authorization: TOKEN,
        },
        params: {
          page,
          pageSize,
        },
      });
      console.log('here', response.data.count);
      setCount(response.data.count.productsCount);
      // console.error(response.data);

      return response.data.products;
    } catch (error) {
      console.error(error);
    }
  };
  return {
    fetchData,
    data,
    page,
    setData,
    setPage,
    nextHandle,
    count,
    previousHandle,
  };
};
type Product = {
  image: string;
  name: string;
  price: string;
};

export type DataItem = {
  _id: string;
  name: string;
  scraping_file: string;
  products: Product[];
};
