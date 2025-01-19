import { colors } from '@/colors/colors';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

interface ChatBubbleProps {
  skinType: string;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ skinType }) => {
  return (
    <View style={styles.container}>


      <View style={styles.chatBubble}>
        <Text style={styles.header}>Your Skin Type: {skinType}</Text>
      </View>
      <Image
        source={require('@/assets/images/chatbot.png')}
        style={styles.chatbotImage}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 10,
  },
  chatbotImage: {
    width: 60,
    height: 50,
    marginLeft: 28,
  },
  chatBubble: {
    maxWidth: '75%',
    alignSelf: 'center',
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 15,
    borderBottomLeftRadius: 0,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.background,
  },
});

export default ChatBubble;
