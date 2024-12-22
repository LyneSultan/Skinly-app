import ButtonComponent from '@/components/base/Button';
import RequirementItem from '@/components/RequirementCard';
import { base } from '@/style/base';
import { typography } from '@/style/typography';
import React from 'react';
import { Text, View } from "react-native";
import { style } from './style';
import { useSkinPageLogic } from './useSkinPageLogic';


const SkinScan = () => {

  const { pickImage, takePicture, imageUri } = useSkinPageLogic();
  return (
    <View style={[base.flex, base.alignCenter,]}>
      <View style={[base.maxWidth, base.gap]}>
        <Text style={[typography.h1]}>One click away from personalized skincare insights</Text>

        <View style={[style.requirementCard, base.gap]}>

          <View style={[base.flex, base.alignCenter]}>
            <Text style={[typography.h1]}> Snap, Scan, Transform!</Text>
          </View>

          <View style={[base.flex, base.column, base.gap]}>
            <RequirementItem text='Relax your face.' image={require('@/assets/images/face.png')} />
            <RequirementItem text='Do not apply any products' image={require('@/assets/images/product.png')} />
            <RequirementItem text='Sit in a good lighting' image={require('@/assets/images/lighting.png')} />
          </View>

        </View>


        <ButtonComponent text='Take picture' mode='contained' onPress={takePicture} />
        <ButtonComponent text='Upload picture' mode='outlined' onPress={pickImage} />

      </View>
    </View >
  );

}
export default SkinScan;
