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
const CARD_WIDTH = width * 0.85; // card width 70% of screen

const HorizontalCardSection: React.FC<HorizontalCardSectionProps> = ({
  data,
}) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.scrollView}
      contentContainerStyle={{ paddingHorizontal: 16, marginTop: 50 }}
    >
      {data.map((item, key) => (
        <View style={styles.mainContainer} key={key}>
          <View style={styles.lableContainer}>
            <Text style={styles.lableText}>{item.lable}</Text>
            <Image
              source={require('../assets/images/chevronright.png')}
              style={styles.icon}
            />
          </View>

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
        </View>
      ))}
    </ScrollView>
  );
};

const ScreenWidth = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  scrollView: {
    width: '100%',
    alignSelf: 'flex-start',
  },
  mainContainer: {
    marginBottom: 6,
    marginRight: 10,
    alignSelf: 'flex-start',
  },
  image: {
    width: CARD_WIDTH,
    height: (CARD_WIDTH * 7) / 15,
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
