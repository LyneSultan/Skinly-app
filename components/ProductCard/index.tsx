import { base } from "@/style/base";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { style } from "./style";

type ProductCardProps = {
  product: {
    image: string;
    name: string;
    price: string;
    link: string;
  };
  company: {
    name: string;
    logo: string;
  };
  onLinkPress: (link: string) => void;
}
const ProductCard = ({ product, company, onLinkPress }: ProductCardProps) => (
  <View style={[style.productContainer, base.flex, base.column, base.gap]}>
    <View>
      <Image source={{ uri: product.image }} style={[style.productImage, base.borderRadius]} />
    </View>
    <View style={[base.flex, base.row, base.spaceAround, base.wrap]}>
      <View>
        <Image source={{ uri: company.logo }} style={[style.logo, base.borderRadius]} />
      </View>
      <View>
        <Text>{company.name}</Text>
      </View>
      <View>
        <Text>{product.price.split(' ')[0]}</Text>
      </View>
    </View>
    <Text>{product.name}</Text>
    <TouchableOpacity onPress={() => onLinkPress(product.link)} style={[base.alignCenter]}>
      <Text style={{ fontStyle: 'italic', textDecorationLine: 'underline' }}>Learn more</Text>
    </TouchableOpacity>
  </View>
);


export default ProductCard;
