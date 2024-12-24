import { Linking } from "react-native";

export const useProductLogic = () => {
  const getProduct = async (productName:string|string[]) => {
    try {
      const response = await fetch(
        `http://192.168.248.239:3000/product/common/${productName}`
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const data = await response.json();
      console.log(data);
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
