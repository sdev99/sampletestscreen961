import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';

type CardItem = {
  id: string;
  image: any;
  title: string;
  subtitle?: string;
  onPress?: () => void;
  lable?: string;
};

type HorizontalCardSectionProps = {
  data: CardItem[];
};

const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.7; // card width 70% of screen
const CARD_HEIGHT = 180;

const HorizontalCardSection: React.FC<HorizontalCardSectionProps> = ({
  data,
}) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 16, marginTop: 50 }}
    >
      {data.map(item => (
        <View style={styles.mainContainer}>
          <View style={styles.lableContainer}>
            <Text style={styles.lableText}>{item.lable}</Text>
            <Image
              source={require('../assets/images/chevronright.png')}
              style={styles.icon}
            />
          </View>
          <TouchableOpacity
            key={item.id}
            style={styles.cardContainer}
            onPress={item.onPress}
            activeOpacity={0.8}
          >
            <Image
              source={item.image}
              style={styles.image}
              resizeMode="contain"
            />
            <View style={styles.textContainer}>
              <Text style={styles.title}>{item.title}</Text>
              {item.subtitle && (
                <Text style={styles.subtitle}>{item.subtitle}</Text>
              )}
            </View>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginBottom: 6,
  },
  cardContainer: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    borderRadius: 12,
    marginRight: 16,
    backgroundColor: '#fff',
    overflow: 'hidden',
    // shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    // shadow for Android
    elevation: 5,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  textContainer: {
    padding: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
  subtitle: {
    fontSize: 12,
    color: 'gray',
    marginTop: 2,
  },
  lableContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 7,
  },
  lableText: {
    fontSize: 18,
    fontWeight: '500',
  },
  icon: {
    width: 10,
    height: 16,
    marginLeft: 17,
  },
});

export default HorizontalCardSection;
