import { fetch } from 'expo/fetch';

const fetchData = async () => {
  try {
    const response = await fetch('http://192.168.10.128:3000/product');
    const data = await response.json();
    return data;

  } catch (error) {
    console.error(error);
  }
};
export default fetchData;

export type Product = {
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
