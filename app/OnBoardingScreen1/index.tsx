import { colors } from "@/colors/colors";
import OnboardingCard from "@/components/OnBoardingCard";
import { base } from "@/style/base";
import { Image, View } from "react-native";

const OnboardingScreen1 = () => {

  return (
    <View style={{ backgroundColor: colors.background }}>

      <View style={[base.default, base.flex, base.column, base.spaceAround]}>
        <View style={base.alignCenter}>
          <Image source={require('@/assets/images/onboarding1.png')} />
        </View>

        <OnboardingCard title="Know Your Ingredient" subtitle="Learn what goes into your skincare " path="/Login" />

      </View>
    </View>
  )
}
export default OnboardingScreen1;
