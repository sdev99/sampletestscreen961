import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import React, { FunctionComponent } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { HomeScreen, ChatScreen } from '../screens';
import { CommonActions } from '@react-navigation/native';
import { Add, ChatSpark, Logo, NewsPaper, Pulse } from '../assets/svgs';

export const screens = [
  {
    name: 'Home',
    component: HomeScreen,
    tabbarIcon: Logo,
  },
  {
    name: 'News',
    component: ChatScreen,
    tabbarIcon: NewsPaper,
  },
  {
    name: 'Chat',
    component: HomeScreen,
    tabbarIcon: ChatSpark,
  },
  {
    name: 'Analytics',
    component: ChatScreen,
    tabbarIcon: Pulse,
  },
  {
    name: 'Add',
    component: ChatScreen,
    tabbarIcon: Add,
  },
];

const TabbarIcon = ({ icon, color, onPress }: any) => {
  const TabIcon = icon;
  return (
    <TouchableOpacity style={styles.tabItem} onPress={onPress}>
      <TabIcon color={color} />
    </TouchableOpacity>
  );
};

export const MainTabBar: FunctionComponent<
  BottomTabBarProps & {
    onTabItemPress?: (routeName: string) => void;
  }
> = ({ state, navigation, descriptors, onTabItemPress }) => {
  const { routes } = state;

  const focusedRoute = state.routes[state.index];
  const focusedDescriptor = descriptors[focusedRoute.key];
  const focusedOptions = focusedDescriptor.options;

  const { tabBarActiveTintColor, tabBarInactiveTintColor } = focusedOptions;
  const onPress = (index: number) => {
    const route = routes[index];
    onTabItemPress && onTabItemPress(route.name);

    const { params } = (route.params ?? {}) as any;

    const event = navigation.emit({
      type: 'tabPress',
      target: route.key,
      canPreventDefault: true,
    });
    const focused = index === state.index;

    if (!focused && !event.defaultPrevented) {
      if (params?.reset) {
        navigation.dispatch({
          ...CommonActions.reset({
            index: 0,
            routes: [{ name: route.name }],
          }),
          target: state.key,
        });
      } else {
        navigation.dispatch({
          ...CommonActions.navigate({
            name: route.name,
            merge: true,
          }),
          target: state.key,
        });
      }
    }
  };

  return (
    <View style={styles.tabContainer}>
      <View style={styles.tabView}>
        {routes.map((route, key) => {
          const TabIcon = screens.find(
            item => item.name === route.name,
          )?.tabbarIcon;
          return (
            <React.Fragment key={key}>
              <TabbarIcon
                icon={TabIcon}
                color={
                  key === state.index
                    ? tabBarActiveTintColor
                    : tabBarInactiveTintColor
                }
                onPress={() => onPress(key)}
              />
            </React.Fragment>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    paddingBottom: 16,
    paddingHorizontal: 12,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  tabView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'relative',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
  },
  tabIcon: {
    width: 30,
  },
});
