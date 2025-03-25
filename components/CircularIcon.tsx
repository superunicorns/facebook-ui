import { View, StyleSheet } from 'react-native'
import React, { ReactNode } from 'react'

function CircularIcon({ 
  backgroundColor, 
  icon, 
  notification }: {
    backgroundColor: string; 
    icon: ReactNode;
    notification?: boolean;
  }) {
  return (
    <View style={[{ backgroundColor }, styles.container]}>
      {notification && <View style={styles.notification} />}
      {icon}
    </View>
  )
}

export default CircularIcon;

const styles = StyleSheet.create({
  container: {
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    position: "relative"
  },
  notification: {
    backgroundColor: "red",
    width: 10, 
    height: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: -2,
    right: 2,
    borderColor: "#fff",
    borderWidth: 2
  },
})