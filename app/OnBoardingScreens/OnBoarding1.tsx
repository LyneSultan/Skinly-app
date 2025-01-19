import { colors } from "@/colors/colors";
import OnboardingCard from "@/components/OnBoardingCard";
import { base } from "@/style/base";
import { Image, View } from "react-native";
import { style } from "./style";

const OnboardingScreen1 = () => {

  return (
    <View style={{ backgroundColor: colors.background }}>

      <View style={[base.default, base.flex, base.column, style.container]}>
        <View style={base.alignCenter}>
          <Image source={require('@/assets/images/onboarding1.png')} style={style.image} />
        </View>

        <OnboardingCard title="Discover Your Skin Type" subtitle="Personalized Product Recommendations" path="/OnBoardingScreens/OnBoarding2" />



      </View>
    </View>
  )
}
export default OnboardingScreen1;
