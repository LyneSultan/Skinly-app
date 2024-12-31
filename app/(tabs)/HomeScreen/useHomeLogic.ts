import { fetch } from 'expo/fetch';
import { useState } from 'react';

const pageSize = 12;
const apiUrl = process.env.EXPO_PUBLIC_API_URL;
export const useHomeLogic = () => {
  const [data, setData] = useState<DataItem[]>([]);
  const [page, setPage] = useState(1);

 const fetchData = async (page?:number) => {
   try {
    const response = await fetch(`${apiUrl}/product?page=${page}&pageSize=${pageSize}`);
    const data = await response.json();
    return data;

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
