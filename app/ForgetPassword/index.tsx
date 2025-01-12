import { colors } from "@/colors/colors";
import ButtonComponent from "@/components/base/Button";
import { Input } from "@/components/base/Input";
import { base } from "@/style/base";
import { typography } from "@/style/typography";
import { useState } from "react";
import { Image, Keyboard, Text, TouchableWithoutFeedback, View } from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import useForgetLogic from "./useForgetLogic";

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const { senCode, error } = useForgetLogic();

  return (
    <KeyboardAwareScrollView style={{ backgroundColor: colors.background }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
        <View style={{ backgroundColor: colors.background }}>

          <View style={[base.default,]} >
            <View style={[base.flex, base.column, base.gap]}>

              <View style={base.alignCenter}>
                <Image source={require('@/assets/images/forgetPassword.png')} style={{ width: "90%", height: 300 }} />
              </View>

              <View style={[base.gap]}>
                <Text style={typography.h1}>Forgot Password?</Text>
                <Text>Don’t worry ! It happens. Please enter your email we will send you a verification code.</Text>
                <Input label="Email" text="Enter Your Email" onChangeText={(text) => setEmail(text)} />
                {error && (
                  <Text style={{ color: colors.error }}>{error}</Text>
                )}
                <ButtonComponent text="Contine" onPress={() => senCode(email)} />
              </View>

            </View>
          </View >
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
  )
}
export default ForgetPassword;
