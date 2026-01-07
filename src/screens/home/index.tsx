import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./style";
import { Text } from "react-native";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Home Screen</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;