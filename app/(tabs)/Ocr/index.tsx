import { colors } from '@/colors/colors';
import ButtonComponent from '@/components/base/Button';
import { StepItem } from '@/components/StepItem';
import { base } from '@/style/base';
import { typography } from '@/style/typography';
import React from 'react';
import { ActivityIndicator, Image, ScrollView, Text, View } from 'react-native';
import { style } from './style';
import { useOcrLogic } from './useOcrLogic';

const Ocr = () => {
  const { loading, handlePickImage, handleTakePicture, apiResponse } = useOcrLogic();
  return (
    <ScrollView style={{ backgroundColor: colors.background }}>
      <View >

        <View style={[base.flex, base.default]}>
          <View>
            <Text style={style.title}>
              Discover what ingredients suit your skin best. Follow the steps below to get started.
            </Text>
          </View>

          <View style={[style.requirementCard, base.flex, base.row, base.gap]}>

            <View style={style.container}>
              <Text style={[typography.h1, typography.bold, { color: colors.primary }]}>Discover What Works, Avoid What Doesn't</Text>
              <StepItem stepNumber={1} text="Ensure Ingredients are Readable" image={require('@/assets/images/face1.png')} />
              <StepItem stepNumber={2} text="Capture or Upload the Image" image={require('@/assets/images/foundation.png')} />
              <StepItem stepNumber={3} text="Wait for Results" image={require('@/assets/images/sun.png')} />
            </View>

          </View>
          <View style={base.gap}>
            <ButtonComponent text="Take Picture" onPress={handleTakePicture} disabled={loading} backgroundColor={colors.rose} />
            <ButtonComponent text="Upload Picture" mode="outlined" onPress={handlePickImage} disabled={loading} backgroundColor={colors.background} />
          </View>

          {loading && (
            <ActivityIndicator size="large" color="#D16F9A" style={{ marginTop: 20 }} />
          )}

          {apiResponse && (
            <>
              <View
                style={{
                  alignItems: 'center',
                  marginTop: 20,
                }}
              >

                <View
                  style={{
                    backgroundColor: colors.background, // Subtle background color
                    borderRadius: 30, // Rounded corners
                    padding: 15, // Inner padding
                    borderWidth: 3, // Optional border for emphasis
                    borderColor: colors.primary, // Border color matching the theme
                    borderBottomLeftRadius: 0,
                    marginLeft: 40,
                    maxWidth: '85%',
                    position: 'relative', // Enable absolute positioning of the triangle
                  }}
                >
                  <Text style={[typography.h2, { color: colors.primary, fontWeight: '700', textAlign: 'center' }]}>
                    {apiResponse}
                  </Text>



                </View>
                <Image
                  source={require('@/assets/images/bot3.png')} // Replace with your image path
                  style={{
                    width: 180,
                    marginRight: 190,
                    height: 200,
                  }}
                />


              </View>
            </>
          )}


        </View>
      </View>
    </ScrollView>
  );
};

export default Ocr;


