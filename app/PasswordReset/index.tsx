import { colors } from "@/colors/colors";
import ButtonComponent from "@/components/base/Button";
import { Input } from "@/components/base/Input";
import { base } from "@/style/base";
import Checkbox from "expo-checkbox";
import { Image, Text, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { style } from "./style";
import useResetLogic from "./useResetLogic";

const PasswordResetPage = () => {
  const { handleReset, setPassword, showPassword, setShowPassword, setConfirmPassword } = useResetLogic();
  return (
    <KeyboardAwareScrollView style={{ backgroundColor: colors.background }}>

      <View style={{ backgroundColor: colors.background }}>

        <View style={[base.default]} >
          <View style={[base.flex, base.column]}>

            <View style={base.alignCenter}>
              <Image source={require('@/assets/images/passwordReset.png')} style={style.image} />
            </View>
            <Text style={style.subtitle}>Reset Your Password</Text>

            <View style={[base.gap]}>
              <Input text="Password" label="Password" onChangeText={(text) => setPassword(text)} password={!showPassword} />
              <Input text="Confirm Password" label="Password Confirmation" onChangeText={(text) => setConfirmPassword(text)} password={!showPassword} />

              <View style={style.checkboxContainer}>
                <Checkbox
                  value={showPassword}
                  onValueChange={() => setShowPassword(!showPassword)} />
                <Text style={style.showPasswordText}>Show Password</Text>
              </View>
              <ButtonComponent text="Save" onPress={handleReset} />
            </View>
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>

  )
}
export default PasswordResetPage;
