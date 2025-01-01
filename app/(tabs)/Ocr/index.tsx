import ButtonComponent from '@/components/base/Button';
import { base } from '@/style/base';
import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { useOcrLogic } from './useOcrLogic';

const Ocr = () => {
  const { apiResponse, handleTakePicture, handlePickImage, loading, setLoading } = useOcrLogic();

  const handleWithLoading = async (action: any) => {
    await action();
  };

  return (
    <View style={[base.flex, base.default]}>
      <View style={[base.gap]}>

        <View>
          <ButtonComponent
            text="Take picture"
            onPress={() => handleWithLoading(handleTakePicture)}
          />
        </View>

        <View>
          <ButtonComponent
            text="Upload picture"
            mode="outlined"
            onPress={() => handleWithLoading(handlePickImage)}
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
