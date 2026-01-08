// HomeMenuSection.tsx
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';

type MenuItem = {
  id: string;
  title: string;
  subTitle: string;
  icon: any;
  badge?: string;
  isFullIcon?: boolean;
};

type HomeMenuSectionProps = {
  data: MenuItem[];
  onPress?: (item: MenuItem) => void;
};

const HomeMenuSection: React.FC<HomeMenuSectionProps> = ({ data, onPress }) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 6 }}
    >
      {data.map(item => (
        <View key={item.id} style={styles.boxContainer}>
          <TouchableOpacity
            style={[styles.itemContainer]}
            onPress={() => onPress?.(item)}
          >
            <Image
              source={item.icon}
              style={item.isFullIcon ? styles.fullIcon : styles.icon}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <Text style={styles.title}>{item.title}</Text>
          {item.subTitle && (
            <Text style={styles.subTitle}>{item.subTitle}</Text>
          )}
          {item.badge && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{item.badge}</Text>
            </View>
          )}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    width: 45,
    height: 45,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    borderColor: '#EFF0F3',
    borderWidth: 1,
    borderStyle: 'solid',
    overflow: 'visible',
    backgroundColor: '#fff',
  },
  icon: {
    width: 23,
    height: 23,
  },
  fullIcon: {
    width: '100%',
    height: '100%',
  },
  boxContainer: {
    paddingTop: 5,
    alignItems: 'center',
    width: 71,
  },
  title: {
    fontSize: 13,
    textAlign: 'center',
    marginTop: 6,
    fontWeight: '600',
    color: '#000',
    lineHeight: 20,
  },
  subTitle: {
    fontSize: 10,
    color: '#5E5E5E',
  },
  badge: {
    position: 'absolute',
    backgroundColor: 'red',
    height: 12,
    width: 30,
    borderRadius: 16,
    paddingHorizontal: 2,
  },
  badgeText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 12,
  },
});

export default HomeMenuSection;
