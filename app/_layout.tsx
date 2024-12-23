import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>

      <Stack.Screen name="index" options={{ title: 'Login' }} />
      <Stack.Screen name="Register/index" options={{ title: 'Register' }} />
      <Stack.Screen name="Login/index" options={{ title: 'Login' }} />
      <Stack.Screen name="SkinScan/index" options={{ title: 'Skin detection' }} />
      <Stack.Screen name="WelcomeScreen/index" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

    </Stack>
  );
}
