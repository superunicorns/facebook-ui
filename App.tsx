import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import Constants from 'expo-constants';
import HeaderBar from './components/HeaderBar';

const STATUSBAR_HEIGHT = Constants.statusBarHeight
const ScreenWidth = Dimensions.get("screen").width;

export default function App() { 
  return (
    <SafeAreaView style={[{ paddingTop: STATUSBAR_HEIGHT - 30 }, styles.container]}>
        <StatusBar style="auto" />
        <HeaderBar />
        <View style={{ flex: 1, backgroundColor: "dodgerblue" }}>
          <Text>feed</Text>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    width: ScreenWidth,
  },
});
