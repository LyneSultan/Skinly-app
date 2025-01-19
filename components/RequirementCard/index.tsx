import { base } from '@/style/base';
import { typography } from '@/style/typography';
import React from 'react';
import { Image, Text, View } from 'react-native';
import { style } from './style';

type RequirementItemProps = {
  image: any;
  text: string;
}

const RequirementItem = ({ image, text }: RequirementItemProps) => {
  return (
    <View style={[base.flex, base.row, base.alignCenter, style.card]}>
      <Image source={image} style={style.icon} />
      <Text style={[base.whiteText, typography.h2]}>{text}</Text>
    </View>
  );
};

export default RequirementItem;
