import { base } from '@/style/base';
import React from 'react';
import { Image, Text, TextInput, View } from 'react-native';

const VerificationCodePage = () => {

  return (

    <View style={[base.default]} >
      <View style={[base.flex, base.column]}>
        <View style={base.alignCenter}>
          <Image source={require('@/assets/images/verificationCode.png')} style={{ width: "90%", height: 300 }} />
        </View>
        <Text >Enter Verification Code</Text>
        <View>
          <TextInput keyboardType="numeric" />
        </View>
      </View>
    </View>

  );
}
export default VerificationCodePage;
