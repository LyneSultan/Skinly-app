import { routes } from '@/routes/server.routes';
import { fetch } from 'expo/fetch';
import { useEffect, useState } from 'react';

const pageSize = 12;
const apiUrl = process.env.EXPO_PUBLIC_API_URL;

export const useHomeLogic = () => {
  const [data, setData] = useState<DataItem[]>([]);
  const [page, setPage] = useState(1);
  const [ads, setAds] = useState<string[]>([]);
  const [adsIndex, setAdsIndex] = useState(0);

  const newAds: string[] = [];

  useEffect(() => {
    const getData = async () => {
      try {
        const fetchedData = await fetchData();
        setData((prev) => [...prev, ...fetchedData]);

        fetchedData.forEach((d: DataItem) =>
          d.products?.forEach((product) => {
            if (product.additional_info) {
              const adWithProductName = `${product.link}: ${product.additional_info.advertisement}`;
              newAds.push(adWithProductName);
            }
          })
        );
        setAds((prevAds) => [...prevAds, ...newAds]);
        console.log('ads', ads);
      } catch (error: any) {
        console.log(error.message);
      }
    };
    getData();
  }, [page]);

  const fetchData = async () => {
    try {
      const response = await fetch(apiUrl + routes.getProducts(page, pageSize));
      const data = await response.json();
      console.log(page);
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const viewMore = async () => {
    const current = page + 1;
    setPage(current);
  };

  const handleAdsChange = (event: any) => {
    setAdsIndex(event.nativeEvent.position);
  };

  return {
    data,
    page,
    ads,
    handleAdsChange,
    adsIndex,
    viewMore,
  };
};
type Product = {
  image: string;
  name: string;
  price: string;
  link: string;
  additional_info?: {
    advertisement: string;
  };
};

export type DataItem = {
  _id: string;
  name: string;
  scraping_file: string;
  products: Product[];
};
