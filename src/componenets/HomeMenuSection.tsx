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
  icon: any;
  badge?: string;
  backgroundColor?: string;
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
            style={[
              styles.itemContainer,
              { backgroundColor: item.backgroundColor || '#fff' },
            ]}
            onPress={() => onPress?.(item)}
          >
            <Image
              source={item.icon}
              style={styles.icon}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <Text style={styles.title}>{item.title}</Text>
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
    height: 50,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    borderColor: '#EFF0F3',
    borderWidth: 1,
    borderStyle: 'solid',
    overflow: 'visible',
  },
  icon: {
    width: 23,
    height: 23,
  },
  boxContainer: {
    paddingTop: 5,
    alignItems: 'center',
    width: 69,
  },
  title: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: 6,
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
