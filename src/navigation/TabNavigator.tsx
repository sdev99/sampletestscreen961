import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { MainTabBar, screens } from './MainTabBar';
import { TouchableOpacity, Image, View } from 'react-native';

const Tab = createBottomTabNavigator();

const TabBarComponent =
  ({ onTabItemPress }: { onTabItemPress: (route: string) => void }) =>
  (props: BottomTabBarProps) => {
    return <MainTabBar {...props} onTabItemPress={onTabItemPress} />;
  };

export default function TabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{tabBarBackground:()=>(<View />)}} tabBar={TabBarComponent({ onTabItemPress: () => {} })}>
        {screens.map(screen => {
          return (
            <Tab.Screen
              options={{
                headerShown: false,
                tabBarActiveTintColor: "#f00",
                tabBarInactiveTintColor:"#8897AE"
              }}
              name={screen.name}
              component={screen.component}
            />
          );
        })}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
