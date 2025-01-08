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
  const { senCode } = useVerifcationLogic();

  return (
    <KeyboardAvoidingView
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} >

        <View style={[base.default,]} >
          <View style={[base.flex, base.column, base.gap]}>

            <View style={base.alignCenter}>
              <Image source={require('@/assets/images/forgetPassword.png')} style={{ width: "90%", height: 300 }} />
            </View>

            <View style={[base.gap]}>
              <Text style={typography.h1}>Forgot Password?</Text>
              <Text>Don’t worry ! It happens. Please enter your email we will send you a verification code.</Text>
              <Input label="email" text="Enter your email" onChangeText={(text) => setEmail(text)} />
              <ButtonComponent text="Contine" onPress={async () => {
                const code = await senCode(email);
                router.push(`/VerificationCode?code=${code}`)
              }} />
            </View>

          </View>
        </View >
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}
export default ForgetPassword;
