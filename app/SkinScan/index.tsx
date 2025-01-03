import { colors } from '@/colors/colors';
import ButtonComponent from '@/components/base/Button';
import RequirementItem from '@/components/RequirementCard';
import { base } from '@/style/base';
import { typography } from '@/style/typography';
import React from 'react';
import { Image, Text, View } from "react-native";
import { ActivityIndicator } from 'react-native-paper';
import { style } from './style';
import { useSkinPageLogic } from './useSkinPageLogic';

const SkinScan = () => {
  const { handlePickImage, handleTakePicture, apiResponse, loading } = useSkinPageLogic();
  const imageMap = {
    dry: require('@/assets/images/dry.png'),
    oily: require('@/assets/images/oily.png'),
    normal: require('@/assets/images/normal.png'),
  };

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

        <ButtonComponent text='Take picture' onPress={handleTakePicture} disabled={loading} />

        <ButtonComponent text='Upload picture' mode='outlined' onPress={handlePickImage} disabled={loading} />
        {loading && (
          <ActivityIndicator size="large" color='#D16F9A' style={{ marginTop: 20 }} />
        )}

        {apiResponse && (
          <>
            {apiResponse.error && (
              <Text style={{ color: 'red', fontSize: 16, textAlign: 'center', marginBottom: 10 }}>
                An error occurred. Please retry again.
              </Text>
            )}
            {apiResponse.class && (
              <View
                style={[
                  base.flex,
                  base.row,
                  { backgroundColor: '#F0F0F0', padding: 15, borderRadius: 10, alignItems: 'center', marginBottom: 15 },
                ]}
              >
                <Text style={{ fontSize: 18, fontWeight: 'bold', flex: 1 }}>
                  Your skin type is{' '}
                  <Text style={{ color: colors.primary }}>
                    {apiResponse.class.charAt(0).toUpperCase() + apiResponse.class.slice(1)}
                  </Text>
                </Text>
                {imageMap[apiResponse.class] ? (
                  <Image
                    source={imageMap[apiResponse.class]}
                    style={{ width: 60, height: 60, resizeMode: 'contain', marginLeft: 10 }}
                  />
                ) : (
                  <Text>No image available</Text>
                )}
              </View>
            )}
          </>
        )}

      </View>
    </View >
  );
}
export default SkinScan;
