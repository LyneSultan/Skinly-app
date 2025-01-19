import { colors } from '@/colors/colors';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.primary, 
        tabBarHideOnKeyboard: true, 
      }} >
      <Tabs.Screen
        name="index"
        options={{ href: null, }} />

      <Tabs.Screen
        name="HomeScreen/index"
        options={{
          title: 'Home', tabBarIcon: ({ color }) => <FontAwesome size={24} name="home" color={color} />,
        }}
      />

      <Tabs.Screen
        name="ProductSearch/[name]"
        options={{
          title: 'Search', tabBarIcon: ({ color }) => <FontAwesome size={16} name="search" color={color} />,
        }}
      />
      <Tabs.Screen
        name="Ocr/index"
        options={{
          title: 'Scan', tabBarIcon: ({ color }) => <FontAwesome size={16} name="camera" color={color} />,
        }}
      />
      <Tabs.Screen
        name="Profile/index"
        options={{
          title: 'Profile', tabBarIcon: ({ color }) => <FontAwesome size={16} name="user" color={color} />,
        }}
      />
    </Tabs>

  );
}
export default Layout;
