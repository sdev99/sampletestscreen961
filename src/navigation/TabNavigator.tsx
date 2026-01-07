import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home';
import ChatScreen from '../screens/chat';
import { NavigationContainer } from '@react-navigation/native';
import { MainTabBar } from './MainTabBar';
import { TouchableOpacity, Image } from 'react-native';

const Tab = createBottomTabNavigator();

const TabbarIcon = ({ icon }: any) => {
  return (
    <TouchableOpacity style={{width: 50, height: 30}}>
      <Image resizeMode='contain'  source={icon} />
    </TouchableOpacity>
  );
};

const screens = [
  {
    name: 'Home',
    component: HomeScreen,
    tabbarIcon: require('./../assets/icons/ChatTeardrop.png'),
  },
  {
    name: 'News',
    component: ChatScreen,
    tabbarIcon: require('./../assets/icons/Newspaper.png'),
  },
  {
    name: 'Chat',
    component: HomeScreen,
    tabbarIcon: require('./../assets/icons/bubble-chat.png'),
  },
  {
    name: 'Analytics',
    component: ChatScreen,
    tabbarIcon: require('./../assets/icons/Pulse.png'),
  },
  {
    name: 'Add',
    component: ChatScreen,
    tabbarIcon: require('./../assets/icons/button-plus.png'),
  },
];

export default function TabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        {screens.map(screen => {
          return (
            <Tab.Screen
              options={{
                tabBarIcon: () => <TabbarIcon icon={screen.tabbarIcon} />,
                tabBarShowLabel: false,
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
