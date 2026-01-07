import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './style';
import { Image, Text, View } from 'react-native';
import Header from '../../componenets/Header';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.textContainer}>
        <Text style={styles.greetingText}>Good afterNoon,</Text>
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
    </SafeAreaView>
  );
};

export default HomeScreen;
