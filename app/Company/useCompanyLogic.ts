import { fetch } from 'expo/fetch';
import { useState } from 'react';

const pageSize = 6;

export const useCompanyLogic = () => {
  const [data, setData] = useState<DataItem[]>([]);
  const [page, setPage] = useState(1);
 const fetchData = async () => {
   try {
     const response = await fetch(`http://192.168.248.239:3000/product/676aae016da6361b6404a87f?page=1&pageSize=2`);
     const data = await response.json();
    return data.products;

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
