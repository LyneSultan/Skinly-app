import ButtonComponent from '@/components/base/Button';
import { base } from '@/style/base';
import { useRouter } from 'expo-router';
import { Image, Text, TextInput, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { style } from './style';

const VerificationCodePage = () => {
  const router = useRouter();
  return (
    <KeyboardAwareScrollView>

      <View style={[base.default]} >
        <View style={[base.flex, base.column, base.gap]}>
          <View style={base.alignCenter}>
            <Image source={require('@/assets/images/verificationCode.png')} style={{ width: "90%", height: 300 }} />
          </View>
          <Text style={style.header}>Enter Verification Code</Text>
          <View style={[base.flex, base.row, base.justifyCenter, base.gap]}>
            <TextInput keyboardType="numeric" style={style.inputBox} maxLength={1} />
            <TextInput keyboardType="numeric" style={style.inputBox} maxLength={1} />
            <TextInput keyboardType="numeric" style={style.inputBox} maxLength={1} />
            <TextInput keyboardType="numeric" style={style.inputBox} maxLength={1} />

          </View>
          <View>
            <Text style={[{ textAlign: "center" }]}>Don’t receive code ? Re-send</Text>
          </View>
          <View>
            <ButtonComponent text='Submit' onPress={() => { router.push('/PasswordReset') }} />
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>


  );
}
export default VerificationCodePage;
