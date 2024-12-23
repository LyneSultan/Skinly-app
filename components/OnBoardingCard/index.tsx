import { typography } from "@/style/typography";
import { useRouter } from "expo-router";
import { Text, View } from "react-native";
import ButtonComponent from "../base/Button";
import { style } from "./style";
import { cardProps } from "./useCardLogic";

const OnboardingCard = ({ title, subtitle, path }: cardProps) => {
  const router = useRouter();
  const handlePress = () => {
    router.push(path);
  };

  return (
    <View style={style.card}>
      <Text style={[style.text, typography.h1, typography.bold]}>{title}</Text>
      <Text style={style.text}>{subtitle}</Text>
      <View>
        <ButtonComponent text="Next" mode="contained" onPress={handlePress} />
      </View>
    </View>
  );
};

export default OnboardingCard;
