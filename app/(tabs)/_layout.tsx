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
        name="HomeScreen/index"
        options={{
          title: 'Home', tabBarIcon: ({ color }) => <FontAwesome size={24} name="home" color={color} />,
        }}
      />
    </Tabs>
  );
}
export default Layout;
