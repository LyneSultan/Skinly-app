import { colors } from "@/colors/colors";
import { base } from "@/style/base";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/Feather';
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


  <View style={[style.productContainer, base.flex, base.column, base.spaceBetween, { gap: 10 }]}>
    <View>
      <Image source={{ uri: product.image }} style={[style.productImage, base.borderRadius]} />
    </View>
    <View style={[base.flex, base.row, base.gap, base.wrap,]}>
      <View>
        <Image source={{ uri: company?.logo || 'https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png' }} style={[style.logo, base.borderRadius]} />
      </View>
      <View>
        <Text>{company.name}</Text>
      </View>
    </View>

    <Text
      numberOfLines={3}
      ellipsizeMode="tail"
      style={[style.productName]} >
      {product.name}
    </Text>

    <View style={[base.flex, base.row, base.spaceBetween, base.wrap, base.maxWidth]}>
      <View>
        <Text>{product.price.split(' ')[0]}</Text>
      </View>
      {/* <TouchableOpacity
        onPress={() => onLinkPress(product.link)}
        style={[base.alignCenter,]}
      >
        <Icon name="external-link" size={22} />
      </TouchableOpacity> */}
      <View style={style.arrowContainer}>
        <View style={{ backgroundColor: colors.rose, borderRadius: 30 }}>
          <TouchableOpacity onPress={() => onLinkPress(product.link)} style={[base.alignCenter, style.arrowIcon]} >
            <Icon name="arrow-up-right" size={24} />
          </TouchableOpacity>
        </View>
      </View>

    </View>
  </View >
);


export default ProductCard;
