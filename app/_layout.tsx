import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack>

      <Stack.Screen name="index" options={{ title: 'Login' }} />
      <Stack.Screen name="Register/index" options={{ title: 'Register' }} />
      <Stack.Screen name="Login/index" options={{ title: 'Login' }} />
      <Stack.Screen name="HomeScreen1/index" options={{ title: '1' }} />
      <Stack.Screen name="SkinScan/index" options={{ title: 'Skin detection' }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

    </Stack>
  );
}
