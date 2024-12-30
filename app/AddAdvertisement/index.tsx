import { useSearchParams } from "expo-router/build/hooks";
import { Text, View } from "react-native";

const AddvertisementPage = () => {
  const productName = useSearchParams(); // Retrieve the productName query parameter
  return (


    <View>
      <Text>Add Advertisement for: {productName}</Text>
    </View>
  )
}
export default AddvertisementPage;
