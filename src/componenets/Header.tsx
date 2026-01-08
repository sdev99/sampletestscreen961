import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import {
  Logo,
  MegaCreater,
  Message,
  NotificationBellIcon,
} from '../assets/svgs';

const Stat = ({
  icon,
  svgIcon: SvgIcon,
  value,
}: {
  icon?: any;
  svgIcon?: any;
  value: string;
}) => (
  <TouchableOpacity style={styles.stat}>
    {SvgIcon && <SvgIcon width={15} height={15} />}
    {icon && <Image source={icon} style={styles.statIcon} />}
    <Text style={styles.statText}>{value}</Text>
  </TouchableOpacity>
);

const IconWithBadge = ({ icon: Icon, badge }: { icon: any; badge: string }) => (
  <TouchableOpacity style={styles.iconWrapper}>
    <Icon style={styles.iconStyle} width={15} height={15} />
    <View style={styles.badge}>
      <Text style={styles.badgeText}>{badge}</Text>
    </View>
  </TouchableOpacity>
);

const Header = () => {
  return (
    <View style={styles.container}>
      {/* LEFT SIDE */}
      <View style={styles.left}>
        <Logo color="#FF0000" width={40} height={21} />
        <Image
          source={require('../assets/images/avatar.png')}
          style={styles.avatar}
        />
      </View>

      {/* RIGHT SIDE */}
      <View style={styles.right}>
        <Stat icon={require('../assets/images/star.png')} value="523" />
        <Stat svgIcon={MegaCreater} value="19.9k" />
        <IconWithBadge icon={Message} badge="15" />
        <IconWithBadge icon={NotificationBellIcon} badge="99+" />
      </View>
    </View>
  );
};

export default Header;
const styles = StyleSheet.create({
  container: {
    height: 50,
    paddingLeft: 16,
    paddingRight: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  left: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },

  logo: {
    width: 40,
    height: 20,
    marginRight: 15,
  },

  avatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
  },

  right: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },

  stat: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  statIcon: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
  },

  statText: {
    marginLeft: 3,
    fontSize: 13,
    fontWeight: '600',
    color: '#4E4E4E',
    paddingHorizontal: 1,
  },

  iconStyle: {
    position: 'absolute',
    top: 8,
    left: 0,
    alignSelf: 'center',
  },
  iconWrapper: {
    height: 30,
  },

  actionIcon: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
  },

  badge: {
    marginLeft: 6,
    backgroundColor: '#FF3B30',
    borderRadius: 10,
    minWidth: 23,
    height: 15,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 4,
    borderWidth: 1.3,
    borderColor: '#fff',
  },

  badgeText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: '600',
  },
});
