import { Text, View } from "react-native";
import ButtonComponent from "../base/Button";

const OnboardingCard = () => {
  return (
    <View>
      <Text>Know Your Ingredient</Text>
      <Text>Learn what goes into your skincare </Text>
      <ButtonComponent text="Next" mode="contained" />

    </View>
  )
}
export default OnboardingCard;
