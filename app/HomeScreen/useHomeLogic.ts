import { fetch } from 'expo/fetch';
import { useState } from 'react';
export const useHomeLogic = () => {
  const [data, setData] = useState<DataItem[]>([]);
  const [page, setPage] = useState(1);
 const fetchData = async () => {
   try {
    const response = await fetch('http://192.168.10.128:3000/product?page=1&pageSize=6');
    const data = await response.json();
    return data;

  } catch (error) {
    console.error(error);
  }
  };

  const handleViewMore=async(page:number) => {
    try {
      const response = await fetch(`http://192.168.10.128:3000/product?page=${page}&pageSize=6`);
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
export default useHomeLogic;
 type Product = {
  image: string;
  title: string;
  price: string;
};

export type DataItem = {
  _id: string;
  name: string;
  scraping_file: string;
  products: Product[];
};
