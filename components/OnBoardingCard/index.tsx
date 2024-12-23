import { typography } from "@/style/typography";
import { Text, View } from "react-native";
import ButtonComponent from "../base/Button";
import { style } from "./style";

const OnboardingCard = () => {
  return (
    <View style={style.card}>
      <Text style={[style.text, typography.h1, typography.bold]}>Know Your Ingredient</Text>
      <Text style={style.text}>Learn what goes into your skincare</Text>
      <View>
        <ButtonComponent text="Next" mode="contained" />
      </View>
    </View>
  );
};

export default OnboardingCard;
