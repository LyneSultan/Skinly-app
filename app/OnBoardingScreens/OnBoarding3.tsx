import { colors } from "@/colors/colors";
import OnboardingCard from "@/components/OnBoardingCard";
import { base } from "@/style/base";
import { Image, View } from "react-native";
import { style } from "./style";

const OnboardingScreen3 = () => {

  return (
    <View style={{ backgroundColor: colors.background }}>

      <View style={[base.default, base.flex, base.column, style.container]}>
        <View style={base.alignCenter}>
          <Image source={require('@/assets/images/onboarding3.png')} style={style.image} />
        </View>

        <OnboardingCard title="Compare and Choose" subtitle="Find Products Across Multiple Platforms" path="/Login" />

      </View>
    </View>
  )
}
export default OnboardingScreen3;
