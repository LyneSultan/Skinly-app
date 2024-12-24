import { colors } from '@/colors/colors';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

const Layout = () => {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: colors.primary }}>
      <Tabs.Screen
        name="index"
        options={{ href: null, }} />

      <Tabs.Screen
        name="ProductSearch/[name]"
        options={{ href: null, }} />
      <Tabs.Screen
        name="HomeScreen/index"
        options={{
          title: 'Home', tabBarIcon: ({ color }) => <FontAwesome size={24} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="ProductSearch/index"
        options={{
          title: 'Search', tabBarIcon: ({ color }) => <FontAwesome size={16} name="search" color={color} />,
        }}
      />
    </Tabs>

  );
}
export default Layout;
