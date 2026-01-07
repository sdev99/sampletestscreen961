import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './style';
import { Image, ScrollView, Text, View } from 'react-native';
import Header from '../../componenets/Header';
import HomeMenuSection from '../../componenets/HomeMenuSection';
import HorizontalCardSection from '../../componenets/HorizontalCardSection';
import NewsSection from '../../componenets/NewsSection';
import { ScreenBg } from '../../assets/svgs';

const menuData = [
  {
    id: '1',
    title: 'Rvwd',
    icon: require('../../assets/images/R.png'),
    badge: 'new',
  },
  { id: '2', title: 'DineOut', icon: require('../../assets/images/spoon.png') },
  { id: '3', title: 'Events', icon: require('../../assets/images/curve.png') },
  { id: '4', title: 'Stays', icon: require('../../assets/images/bed.png') },
  {
    id: '5',
    title: 'Whish',
    icon: require('../../assets/images/bed.png'),
    backgroundColor: '#e74c3c',
  },
  { id: '6', title: 'All', icon: require('../../assets/images/threedot.png') },
];

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.bgView}>
        <Image
          style={styles.bgViewImg}
          resizeMode="stretch"
          source={require('../../assets/images/ScreenBg.png')}
        />
      </View>
      <Header />
      <ScrollView style={styles.scrollView}>
        <View style={styles.textContainer}>
          <Text style={styles.greetingText}>Good afternoon,</Text>
          <Text style={styles.greetingText}>Anthony</Text>
        </View>
        <View style={styles.temprature}>
          <Image
            source={require('../../assets/images/sun.png')}
            style={styles.icon}
          />
          <Text style={styles.tempText}>24c</Text>
          <Text style={styles.partyText}>party cloudy</Text>
        </View>
        <View style={styles.list}>
          <HomeMenuSection
            data={menuData}
            onPress={item => console.log('Pressed', item.title)}
          />
        </View>
        <HorizontalCardSection
          data={[
            {
              id: '1',
              image: require('../../assets/images/foodie.png'), // ya URI
              title: 'Join our exclusive foodie community',
              subtitle: 'Ad • Rvwd by 961',
              lable: 'Check it out',
              onPress: () => console.log('Card 1 pressed'),
            },
            {
              id: '2',
              image: require('../../assets/images/foodie.png'),
              title: 'Explore travel destinations',
              subtitle: 'Ad • Rvwd by 524',
              lable: 'instagram',
            },
          ]}
        />
        <View style={styles.newSection}>
          <Text style={styles.news}>Latest News</Text>
          <NewsSection
            data={[
              {
                id: '1',
                text: 'Multiple Israeli airstrikes in South Lebanon in sudden escalation.',
              },
              {
                id: '2',
                text: 'Multiple Israeli airstrikes in South Lebanon in sudden escalation.',
              },
            ]}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
