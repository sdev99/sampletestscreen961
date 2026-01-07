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
      contentContainerStyle={{ paddingHorizontal: 16 }}
    >
      {data.map(item => (
        <>
          {item.badge && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{item.badge}</Text>
            </View>
          )}
          <View key={item.id} style={{ alignItems: 'center', marginRight: 25 }}>
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
          </View>
        </>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    width: 60,
    height: 60,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    // Shadow for Android
    elevation: 5,
  },
  icon: {
    width: 28,
    height: 28,
  },
  title: {
    fontSize: 12,
    textAlign: 'center',
    marginTop: 6,
  },
  badge: {
    position: 'absolute',
    top: -4,
    left: 30,
    backgroundColor: 'red',
    height: 12,
    width: 30,
    borderRadius: 15,
    paddingHorizontal: 2,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  badgeText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
});

export default HomeMenuSection;
