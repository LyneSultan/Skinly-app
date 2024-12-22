import { base } from '@/style/base';
import React from 'react';
import { Image, Text, View } from 'react-native';

interface RequirementItemProps {
  image: any;
  text: string;
}

const RequirementItem = ({ image, text }: RequirementItemProps) => {
  return (
    <View style={[base.flex, base.row, base.alignCenter, base.gap]}>
      <Image source={image} />
      <Text>{text}</Text>
    </View>
  );
};

export default RequirementItem;
