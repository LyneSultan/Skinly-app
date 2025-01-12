import { colors } from '@/colors/colors';
import ButtonComponent from '@/components/base/Button';
import { base } from '@/style/base';
import { Image, Text, TextInput, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { style } from './style';
import useVerificationLogic from './useVerificationLogic';

const VerificationCodePage = () => {
  const { inputs, handleInputChange, handleSubmit } = useVerificationLogic();
  return (
    <KeyboardAwareScrollView style={{ backgroundColor: colors.background }}>
      <View style={{ backgroundColor: colors.background }}>

        <View style={[base.default]}>
          <View style={[base.flex, base.column, base.gap]}>
            <View style={base.alignCenter}>
              <Image source={require('@/assets/images/verificationCode.png')} style={style.image} />
            </View>
            <Text style={style.header}>Enter Verification Code</Text>

            <View style={[base.flex, base.row, base.justifyCenter, base.gap]}>
              {inputs.map((inputValue, index) => (
                <TextInput
                  key={index}
                  keyboardType="numeric"
                  style={style.inputBox}
                  maxLength={1}
                  value={inputValue}
                  onChangeText={(text) => handleInputChange(text, index)}
                />
              ))}
            </View>

            <Text style={style.resendText}>Don’t receive code? Re-send</Text>

            <ButtonComponent text="Submit" onPress={handleSubmit} />
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default VerificationCodePage;
