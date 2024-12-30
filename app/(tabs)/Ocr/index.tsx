import ButtonComponent from '@/components/base/Button';
import { base } from '@/style/base';
import React from 'react';
import { View } from 'react-native';
import { useOcrLogic } from './useOcrLogic';

const Ocr = () => {
  const { handleTakePicture, handlePickImage } = useOcrLogic();

  return (
    <View style={[base.flex, base.default]}>
      <View style={[base.gap]}>

        <View>
          <ButtonComponent text='Take picture' onPress={handleTakePicture} />
        </View>

        <View>
          <ButtonComponent text='Upload picture' mode='outlined' onPress={handlePickImage} />
        </View>

      </View>
    </View >
  );
};

export default Ocr;
