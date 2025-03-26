import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Avatar from './Avatar';

const AvatarBar = ({ imageUri, border, borderColor, title }: { imageUri: string; border?: boolean; borderColor?: string; title: string; }) => {
  return (
    <View style={styles.avatarContainer}>
      <Avatar imageUri={imageUri} />
      <Text style={{ color: "#BEBEBE", fontSize: 15 }}>{title}</Text>
    </View>
  )
}

export default AvatarBar;

const styles = StyleSheet.create({
  avatarContainer: { 
    width: "100%", 
    paddingVertical: 10, 
    flexDirection: "row", 
    alignItems: "center", 
    justifyContent: "flex-start",
    gap: 15,
  },
})