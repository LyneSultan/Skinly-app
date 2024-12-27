import OnboardingCard from "@/components/OnBoardingCard";
import { base } from "@/style/base";
import { Image, View } from "react-native";

const OnboardingScreen1 = () => {

  return (
    <View style={[base.default, base.flex, base.column, base.spaceAround]}>
      <View style={base.alignCenter}>
        <Image source={require('@/assets/images/onboarding1.png')} />
      </View>

      <OnboardingCard title="Know Your Ingredient" subtitle="Learn what goes into your skincare " path="/Login" />

    </View>
  )
}
export default OnboardingScreen1;
