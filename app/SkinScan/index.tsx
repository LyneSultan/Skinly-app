import ButtonComponent from '@/components/base/Button';
import RequirementItem from '@/components/RequirementCard';
import { base } from '@/style/base';
import { typography } from '@/style/typography';
import React from 'react';
import { Text, View } from "react-native";
import { style } from './style';
import { useSkinPageLogic } from './useSkinPageLogic';

const SkinScan = () => {
  const { handlePickImage, handleTakePicture, apiResponse } = useSkinPageLogic();

  return (
    <View style={[base.flex, base.default]}>
      <View style={[base.gap]}>
        <Text style={[typography.h1]}>One click away from personalized skincare insights</Text>

        <View style={[style.requirementCard]}>

          <View style={[base.flex, base.alignCenter, { marginBottom: "15%" }]}>
            <Text style={[typography.h2, base.whiteText]}> Snap, Scan, Transform!</Text>
          </View>

          <View style={[base.flex, base.column, base.gap]}>
            <RequirementItem text='Relax your face' image={require('@/assets/images/face.png')} />
            <RequirementItem text='Do not apply any products' image={require('@/assets/images/product.png')} />
            <RequirementItem text='Sit in a good lighting' image={require('@/assets/images/lighting.png')} />
          </View>

        </View>

        <View>
          <ButtonComponent text='Take picture' onPress={handleTakePicture} />
        </View>

        <View>
          <ButtonComponent text='Upload picture' mode='outlined' onPress={handlePickImage} />
        </View>

        {apiResponse && (
          <Text>{typeof apiResponse === 'object' ? JSON.stringify(apiResponse) : apiResponse}</Text>
        )}

      </View>
    </View >
  );

}
export default SkinScan;
