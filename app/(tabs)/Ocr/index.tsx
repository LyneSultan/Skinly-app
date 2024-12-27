import ButtonComponent from '@/components/base/Button';
import { base } from '@/style/base';
import React from 'react';
import { View } from 'react-native';

const Ocr = () => {
  return (
    <View style={[base.flex, base.default]}>
      <View style={[base.gap]}>

        <View>
          <ButtonComponent text='Take picture' />
        </View>

        <View>
          <ButtonComponent text='Upload picture' mode='outlined' />
        </View>

      </View>
    </View >
  );
};

export default Ocr;
