import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Linking } from "react-native";

const apiUrl = process.env.EXPO_PUBLIC_API_URL;
export const useProductLogic = () => {
  const { name } = useLocalSearchParams();

  const [productDetails, setProductDetails] = useState<ProductDetails[]>([]);
  const [similarProducts, setSimilarProducts] = useState<ProductDetails[]>([]);

  const [searchQuery, setSearchQuery] = useState('');
  useEffect(() => {
    setSearchQuery('');
  }, [name]);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const details = await getProduct(searchQuery || name);
        
        setProductDetails(details.bestMatches);
        setSimilarProducts(details.similarProducts);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };
    fetchProductDetails();
  }, [searchQuery, name]);

  const getProduct = async (productName:string|string[]) => {
    try {
      const response = await fetch(`${apiUrl}/product/common/${productName}`);

      if (!response.ok) {
        return [];
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Failed to fetch product:", error);
    }
  };

  const productLink  = (url: string) => {
    Linking.openURL(url).catch((err) => console.error('Error opening URL', err));
  };

  return {
    getProduct,
    productLink,
    searchQuery,
    setSearchQuery,
    productDetails,
    similarProducts
  };
};

export type Product = {
  name: string;
  price: string;
  image: string;
  link: string;
}

export type ProductDetails = {
  companyName: string;
  company_logo: string;
  product: Product;
  similarity: number;
}
