import ButtonComponent from '@/components/base/Button';
import { base } from '@/style/base';
import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { useOcrLogic } from './useOcrLogic';

const Ocr = () => {
  const { apiResponse, handleTakePicture, handlePickImage, loading } = useOcrLogic();

  return (
    <View style={[base.flex, base.default]}>
      <View style={[base.gap]}>

        <View>
          <ButtonComponent
            text="Take picture"
            onPress={() => handleTakePicture}
          />
        </View>

        <View>
          <ButtonComponent
            text="Upload picture"
            mode="outlined"
            onPress={() => handlePickImage}
          />
        </View>

        {loading && (
          <ActivityIndicator size="large" color='#D16F9A' style={{ marginTop: 20 }} />
        )}

        {apiResponse && (
          <Text style={{ marginTop: 20 }}>
            {typeof apiResponse === 'object' ? JSON.stringify(apiResponse, null, 2) : apiResponse}
          </Text>
        )}
      </View>
    </View>
  );
};

export default Ocr;
