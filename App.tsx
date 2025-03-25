import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import CircularIcon from './components/CircularIcon';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function App() {
  return (
    <View style={styles.container}>
      <CircularIcon backgroundColor='#BEBEBE' icon={ <MaterialIcons name="search" size={20} color="#fff" /> } />
      <CircularIcon backgroundColor='#FA7373' icon={ <MaterialCommunityIcons name="bell" size={18} color="#fff" /> } />
      <CircularIcon backgroundColor='#84B6FB' notification icon={ <MaterialCommunityIcons name="account-group" size={18} color="#fff" /> } />
      <CircularIcon backgroundColor='blue' icon={ <MaterialIcons name="search" size={18} color="#fff" /> } />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center',
  },
});
