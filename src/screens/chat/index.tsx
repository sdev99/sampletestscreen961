import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./style";
import { Text } from "react-native";

const ChatScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Chat Screen</Text>
    </SafeAreaView>
  );
};

export default ChatScreen;