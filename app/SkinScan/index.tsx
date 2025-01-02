import ButtonComponent from '@/components/base/Button';
import RequirementItem from '@/components/RequirementCard';
import { base } from '@/style/base';
import { typography } from '@/style/typography';
import React from 'react';
import { Image, Text, View } from "react-native";
import { style } from './style';
import { useSkinPageLogic } from './useSkinPageLogic';

const SkinScan = () => {
  const { handlePickImage, handleTakePicture, apiResponse } = useSkinPageLogic();

  return (
    <View style={[base.flex, base.default]}>
      <View style={[base.gap]}>
        <Text style={[typography.h1]}>One click away from personalized skincare insights</Text>
        <View style={[style.requirementCard]}>
          <View style={[base.flex, base.alignCenter,]}>
            <Text style={[typography.h1, base.whiteText, typography.bold]}> Snap, Scan, Transform!</Text>
          </View>

          <View style={[base.flex, base.column, base.gap]}>
            <RequirementItem text='Relax your face' image={require('@/assets/images/face1.png')} />
            <RequirementItem text='Do not apply any products' image={require('@/assets/images/foundation.png')} />
            <RequirementItem text='Sit in a good lighting' image={require('@/assets/images/sun.png')} />
          </View>
        </View>

        <ButtonComponent text='Take picture' onPress={handleTakePicture} />

        <ButtonComponent text='Upload picture' mode='outlined' onPress={handlePickImage} />

        {apiResponse && (
          <>
            {apiResponse.error && (
              <Text>An error occured please retry again</Text>
            )}
            {apiResponse.class === 'dry' ? (
              <View style={[base.flex, base.row]}>
                <Text>Your skin type is Dry</Text>
                <Image source={require('@/assets/images/Dry.png')} style={{ width: 65 }} />
              </View>

            ) : (
              <Text>{apiResponse.class}</Text>
            )}
          </>
        )}

      </View>
    </View >
  );
}
export default SkinScan;
