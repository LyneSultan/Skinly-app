import ButtonComponent from '@/components/base/Button';
import { base } from '@/style/base';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { Image, Text, TextInput, View } from 'react-native';
import { style } from './style';

const VerificationCodePage = () => {
  const router = useRouter();
  const { code } = useLocalSearchParams<{ code: string }>();
  const [inputs, setInputs] = useState(['', '', '', '']);

  // Log the full query parameters
  useEffect(() => {
    console.log(`Email: ${code}`); // Log the actual 'code' parameter
  }, [code]);

  const handleInputChange = (value: string, index: number) => {
    const updatedInputs = [...inputs];
    updatedInputs[index] = value;
    setInputs(updatedInputs);
    console.log(updatedInputs.join(''));
    console.log("here");
  };

  const handleSubmit = () => {
    const verificationCode = inputs.join('');
    console.log(`Verification Code: ${verificationCode}`);
    if (code === verificationCode) {
      router.push(`/PasswordReset`);
    }
    else {
      console.log(`verifivation${verificationCode} while code is${code}`)
    }
  };
  return (
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

        <ButtonComponent
          text="Submit"
          onPress={handleSubmit}
        />
      </View>
    </View>
  );
};

export default VerificationCodePage;
