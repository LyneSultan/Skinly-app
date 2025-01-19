import { colors } from '@/colors/colors';
import { Stack } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import { AppProvider } from './context/userContext';

export default function RootLayout() {
  return (
    <AppProvider>
      <View style={styles.container}>
        <Stack>
          <Stack.Screen name="index" options={{ title: 'Login' }} />
          <Stack.Screen name="Register/index" options={{ title: 'Register' }} />
          <Stack.Screen name="Login/index" options={{ title: 'Login' }} />
          <Stack.Screen name="SkinScan/index" options={{ title: 'Skin detection' }} />

          <Stack.Screen name="WelcomeScreen/index" options={{ headerShown: false }} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="OnBoardingScreens/OnBoarding1" options={{ headerShown: false }} />
          <Stack.Screen name="OnBoardingScreens/OnBoarding2" options={{ headerShown: false }} />
          <Stack.Screen name="OnBoardingScreens/OnBoarding3" options={{ headerShown: false }} />

          <Stack.Screen name="ForgetPassword/index" options={{ title: 'Forgot Password' }} />
          <Stack.Screen name="VerificationCode/index" options={{ title: 'Verify Your Email' }} />
          <Stack.Screen name="PasswordReset/index" options={{ title: 'Create New Password' }} />
          <Stack.Screen name="Company/index" options={{ title: 'Product Management' }} />
          <Stack.Screen name="recommendations/index" options={{ title: 'Recommendations' }} />
          <Stack.Screen name="AddAdvertisement/index" options={{ title: 'Promote Your Product' }} />
        </Stack>
      </View>
    </AppProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensures the View fills the entire screen
    backgroundColor: colors.background, // Apply the background color
  },
});
