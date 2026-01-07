import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import React, { FunctionComponent } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

const MainTabBar: FunctionComponent<
  BottomTabBarProps & {
    onPlusIconPress?: () => void;
    onTabItemPress?: (routeName: string) => void;
    closeModal?: () => void;
  }
> = ({
  state,
  navigation,
  descriptors,
  onTabItemPress,
  onPlusIconPress,
  closeModal,
}) => {
  const { routes } = state;

  const focusedRoute = state.routes[state.index];
  const focusedDescriptor = descriptors[focusedRoute.key];
  const focusedOptions = focusedDescriptor.options;

  const { tabBarActiveTintColor, tabBarInactiveTintColor } = focusedOptions;
  const onPress = (index: number) => {
    const route = routes[index];
    onTabItemPress && onTabItemPress(route.name);

    const { params } = (route.params ?? {}) as { params: RouteParams };

    const event = navigation.emit({
      type: 'tabPress',
      target: route.key,
      canPreventDefault: true,
    });
    const focused = index === state.index;

    if (!focused && !event.defaultPrevented) {
      if (params?.reset) {
      } else {
      }
    }
    closeModal && closeModal();
  };

  return (
    <View style={styles.tabContainer}>
      <View style={styles.plusBtnView}>
        <TouchableOpacity style={styles.createView} onPress={onPlusIconPress}>
          <TabPlusIcon />
        </TouchableOpacity>
      </View>

      <View style={styles.tabView}>
        {routes.map((route, key) => {
          const isDisabled =
            userProfile?.organizationName?.toLowerCase() === 'social' &&
            route.name === 'ChallengeAssessmentsView';

          const TabIcon = TabIcons[route.name];
          return TabIcon ? (
            <React.Fragment key={key}>
              <TouchableOpacity
                style={styles.iconView}
                onPress={() => onPress(key)}
                disabled={isDisabled}
              >
                <TabIcon
                  color={
                    isDisabled
                      ? Colors.tab.tabBarDisable
                      : key === state.index
                      ? tabBarActiveTintColor
                      : tabBarInactiveTintColor
                  }
                />
              </TouchableOpacity>

              {key === 1 && <View style={styles.iconView} />}
            </React.Fragment>
          ) : null;
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    height: 76,
    position: 'absolute',
    zIndex: 1,
    right: 0,
    left: 0,
    bottom: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,
    backgroundColor: 'red',
  },
  iconView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
