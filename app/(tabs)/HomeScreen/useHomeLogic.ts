import { fetch } from 'expo/fetch';
import { useEffect, useState } from 'react';

const pageSize = 12;
const apiUrl = process.env.EXPO_PUBLIC_API_URL;

export const useHomeLogic = () => {
  const [data, setData] = useState<DataItem[]>([]);
  const [page, setPage] = useState(1);
  const [ads, setAds] = useState<string[]>([]);
  const newAds :string[] = [];

  useEffect(() => {
    const getData = async () => {
      try {
        const fetchedData = await fetchData();
        setData((prev) => [...prev, ...fetchedData]);

        fetchedData.forEach((d:DataItem) =>
          d.products?.forEach((product) => {
            if (product.additional_info) {
              newAds.push(product.additional_info.advertisement);
            }
          })
        );
        setAds(() => [ ...newAds]);
        console.log(ads);

      } catch (error:any) {
        console.log(error.message);
      }
    };
    getData();
  }, [page]);

 const fetchData = async (page?:number) => {
   try {
    const response = await fetch(`${apiUrl}/product?page=${page}&pageSize=${pageSize}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
  };

  const viewMore = async() => {
    const current = page + 1;
    setPage(current);
  }

  return {
    data,
    page,
    ads,
    viewMore
  }
}
 type Product = {
  image: string;
  name: string;
   price: string;
   additional_info?: {
     advertisement:string,
   }
};

export type DataItem = {
  _id: string;
  name: string;
  scraping_file: string;
  products: Product[];
};
