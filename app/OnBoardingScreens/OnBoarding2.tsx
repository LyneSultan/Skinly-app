import { colors } from "@/colors/colors";
import OnboardingCard from "@/components/OnBoardingCard";
import { base } from "@/style/base";
import { Image, View } from "react-native";
import { style } from "./style";

const OnboardingScreen2 = () => {

  return (
    <View style={{ backgroundColor: colors.background }}>

      <View style={[base.default, base.flex, base.column, style.container]}>
        <View style={base.alignCenter}>
          <Image source={require('@/assets/images/onboarding21.jpeg')} style={style.image} />
        </View>

        <OnboardingCard title="Know Your Ingredient" subtitle="Learn what goes into your skincare " path="/OnBoardingScreens/OnBoarding3" />

      </View>
    </View>
  )
}
export default OnboardingScreen2;
