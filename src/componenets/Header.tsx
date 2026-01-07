import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Stat = ({ icon, value }: { icon: any; value: string }) => (
  <View style={styles.stat}>
    <Image source={icon} style={styles.statIcon} />
    <Text style={styles.statText}>{value}</Text>
  </View>
);

const IconWithBadge = ({ icon, badge }: { icon: any; badge: string }) => (
  <TouchableOpacity style={styles.iconWrapper}>
    <Image source={icon} style={styles.actionIcon} />

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
        {/* <Text style={styles.score}>961</Text> */}
        <Image
          source={require('../assets/images/logo.png')}
          style={styles.logo}
        />
        <Image
          source={require('../assets/images/avatar.png')}
          style={styles.avatar}
        />
      </View>

      {/* RIGHT SIDE */}
      <View style={styles.right}>
        <Stat icon={require('../assets/images/star.png')} value="523" />
        <Stat icon={require('../assets/images/leave.png')} value="19.9k" />
        <IconWithBadge icon={require('../assets/images/file.png')} badge="15" />
        <IconWithBadge icon={require('../assets/images/bell.png')} badge="9+" />
      </View>
    </View>
  );
};

export default Header;
const styles = StyleSheet.create({
  container: {
    height: 64,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  logo: {
    width: 40,
    height: 20,
    marginRight: 15,
  },

  avatar: {
    width: 24,
    height: 24,
    borderRadius: 16,
  },

  right: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 18,
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
    color: '#111',
  },

  iconWrapper: {
    marginHorizontal: 6,
  },

  actionIcon: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
  },

  badge: {
    position: 'absolute',
    top: -6,
    right: -15,
    backgroundColor: '#FF3B30',
    borderRadius: 10,
    minWidth: 23,
    height: 12,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 4,
  },

  badgeText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: '700',
  },
});
