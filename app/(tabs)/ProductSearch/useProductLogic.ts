import { Linking } from "react-native";

const apiUrl = process.env.EXPO_PUBLIC_API_URL;
export const useProductLogic = () => {
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
    productLink
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
}
