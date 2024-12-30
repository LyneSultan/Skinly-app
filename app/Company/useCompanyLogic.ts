import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useState } from 'react';

const pageSize = 6;
const apiUrl = process.env.EXPO_PUBLIC_API_URL;

export const useCompanyLogic = () => {
  const [data, setData] = useState<Product[]>([]);
  const [page, setPage] = useState(1);

 const fetchData = async (page:number) => {
   try {
     const TOKEN=await AsyncStorage.getItem('authToken');

     const response = await axios.get(`${apiUrl}/product/company`, {
      headers: {
        Authorization: TOKEN,
      },
      params: {
        page,
        pageSize,
      },
     });
     console.log(response.data);
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
    setPage
  }

}
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
