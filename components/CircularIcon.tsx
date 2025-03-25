import { View, Text } from 'react-native'
import React, { ReactNode } from 'react'
import Feather from '@expo/vector-icons/Feather';

function CircularIcon({ 
  backgroundColor, 
  icon, 
  notification }: {
    backgroundColor: string; 
    icon: ReactNode;
    notification?: boolean;
  }) {
  return (
    <View style={{
      backgroundColor,
      width: 40,
      height: 40,
      borderRadius: 20,
      alignItems: "center",
      justifyContent: "center",
      position: "relative"
    }}>
      {notification && <View style={{
        backgroundColor: "red",
        width: 12,
        height: 12,
        borderRadius: 6,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: -2,
        right: 2,
        borderColor: "#fff",
        borderWidth: 2
      }} />}
      {icon}
    </View>
  )
}

export default CircularIcon;