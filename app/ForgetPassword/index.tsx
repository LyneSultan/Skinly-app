import ButtonComponent from "@/components/base/Button";
import { Input } from "@/components/base/Input";
import { base } from "@/style/base";
import { typography } from "@/style/typography";
import { Image, Keyboard, Text, TouchableWithoutFeedback, View } from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const ForgetPassword = () => {
  return (
    <KeyboardAwareScrollView>

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

        <View style={[base.default]} >
          <View style={[base.flex, base.column, { gap: 60 }]}>

            <View style={base.alignCenter}>
              <Image source={require('@/assets/images/forgetPassword.png')} />
            </View>

            <View style={{ gap: 20 }}>
              <Text style={typography.h1}>Forgot   Password?</Text>
              <Text>Don’t worry ! It happens. Please enter the phone number we will send the OTP in this phone number.</Text>
              <Input label="text" text="here" />

              <ButtonComponent text="Vontine" />
            </View>
          </View>
        </View >
      </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>


  )
}
export default ForgetPassword;
