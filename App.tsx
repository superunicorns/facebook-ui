import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import HorizontalSpitBar from './components/HorizontalSplitBar';
import { SafeAreaView } from "react-native-safe-area-context";
import Constants from 'expo-constants';

const STATUSBAR_HEIGHT = Constants.statusBarHeight

export default function App() {

  return (
    <SafeAreaView style={[{ paddingTop: STATUSBAR_HEIGHT }, styles.container]}>
        <StatusBar style="auto" />
        <HorizontalSpitBar />
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
  },
});
