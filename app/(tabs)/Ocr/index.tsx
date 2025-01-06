import ButtonComponent from '@/components/base/Button';
import { StepItem } from '@/components/StepItem';
import { base } from '@/style/base';
import { typography } from '@/style/typography';
import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { style } from './style';
import { useOcrLogic } from './useOcrLogic';

const Ocr = () => {
  const { loading, handlePickImage, handleTakePicture, apiResponse } = useOcrLogic();
  return (
    <View style={[base.flex, base.default]}>
      <View>
        <Text style={style.title}>
          Discover what ingredients suit your skin best. Follow the steps below to get started.
        </Text>
      </View>

      <View style={[style.requirementCard, base.flex, base.row, base.gap]}>

        <View style={style.container}>
          <Text style={[typography.h1, base.whiteText, typography.bold]}> Snap, Scan, Transform!</Text>
          <StepItem stepNumber={1} text="Ensure Ingredients are Readable" image={require('@/assets/images/face1.png')} />
          <StepItem stepNumber={2} text="Capture or Upload the Image" image={require('@/assets/images/foundation.png')} />
          <StepItem stepNumber={3} text="Wait for Results" image={require('@/assets/images/sun.png')} />
        </View>

      </View>
      <View style={base.gap}>
        <ButtonComponent text="Take Picture" onPress={handleTakePicture} disabled={loading} />
        <ButtonComponent text="Upload Picture" mode="outlined" onPress={handlePickImage} disabled={loading} />
      </View>

      {loading && (
        <ActivityIndicator size="large" color="#D16F9A" style={{ marginTop: 20 }} />
      )}

      {apiResponse && (
        <Text>{apiResponse.data}</Text>
      )}
    </View>
  );
};

export default Ocr;


