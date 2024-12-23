import { fetch } from 'expo/fetch';
import { useState } from 'react';

const pageSize = 6;

export const useHomeLogic = () => {
  const [data, setData] = useState<DataItem[]>([]);
  const [page, setPage] = useState(1);
 const fetchData = async () => {
   try {
    const response = await fetch(`http://192.168.248.239:3000/product?page=1&pageSize=${pageSize}`);
    const data = await response.json();
    return data;

  } catch (error) {
    console.error(error);
  }
  };

  const handleViewMore=async(page:number) => {
    try {
      const response = await fetch(`http://192.168.248.239:3000/product?page=${page}&pageSize=${pageSize}`);
      const data = await response.json();
      console.log(response);
      return data;

    } catch (error) {
      console.error(error);
    }
  }
  return {
    fetchData,
    handleViewMore,
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
