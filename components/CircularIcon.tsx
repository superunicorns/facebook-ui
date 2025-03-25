import { View, Text } from 'react-native'
import React from 'react'
import Feather from '@expo/vector-icons/Feather';

function CircularIcon() {
  return (
    <View style={{
      backgroundColor: "#BEBEBE",
      width: 40,
      height: 40,
      borderRadius: 20,
      alignItems: "center",
      justifyContent: "center"
    }}>
      <Feather name="search" size={18} color="#fff" />
    </View>
  )
}

export default CircularIcon;