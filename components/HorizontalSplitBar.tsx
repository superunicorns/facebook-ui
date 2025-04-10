import { View, Image, StyleSheet } from 'react-native'
import React from 'react'
import CircularIcon from './CircularIcon';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const HorizontalSplitBar = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image resizeMode='contain' source={require("../assets/facebook-logo.png")} style={{ width: 120 }} />
      </View>
      <View style={{ flexDirection: "row", gap: 10 }}>
      <CircularIcon backgroundColor='#BEBEBE' icon={ <MaterialIcons name="search" size={18} color="#fff" /> } />
      <CircularIcon backgroundColor='#FA7373' icon={ <MaterialCommunityIcons name="bell" size={18} color="#fff" /> } />
      <CircularIcon backgroundColor='#84B6FB' notification icon={ <MaterialCommunityIcons name="account-group" size={18} color="#fff" /> } />
      <CircularIcon backgroundColor='#0766ff' icon={ <MaterialCommunityIcons name="facebook-messenger" size={18} color="#fff" /> } />
      </View>
    </View>
  )
}

export default HorizontalSplitBar;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 60,
  }
})