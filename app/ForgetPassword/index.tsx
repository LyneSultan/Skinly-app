import { colors } from "@/colors/colors";
import ButtonComponent from "@/components/base/Button";
import { Input } from "@/components/base/Input";
import { base } from "@/style/base";
import { typography } from "@/style/typography";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Image, Keyboard, KeyboardAvoidingView, Text, TouchableWithoutFeedback, View } from "react-native";
import useVerifcationLogic from "../VerificationCode/useVerificationLogic";

const ForgetPassword = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const { senCode, error } = useVerifcationLogic();

  return (
    <KeyboardAvoidingView>
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
    </KeyboardAvoidingView>
  )
}
export default ForgetPassword;
