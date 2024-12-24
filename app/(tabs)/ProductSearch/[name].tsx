import { useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

export default function ProductDetails() {
  const { name } = useLocalSearchParams(); // Get the product ID from the URL

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20 }}>Product Details</Text>
      <Text style={{ fontSize: 16 }}>Product name: {name}</Text>
    </View>
  );
}
