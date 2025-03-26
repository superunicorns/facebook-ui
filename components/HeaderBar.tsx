import { View, StyleSheet } from 'react-native'
import React, { ReactNode } from 'react'
import HorizontalSplitBar from './HorizontalSplitBar';
import Avatar from './Avatar';

const HeaderBar = () => {
  return (
    <View>
      <HorizontalSplitBar />
      <View style={styles.bottomHeader}>
        <Avatar imageUri='https://images.pexels.com/photos/948873/pexels-photo-948873.jpeg?cs=srgb&dl=pexels-olly-948873.jpg&fm=jpg' />
      </View>
    </View>
  )
}

export default HeaderBar;

const styles = StyleSheet.create({
  bottomHeader: { 
    width: "100%", 
    paddingHorizontal: 15, 
    paddingVertical: 10, 
    flexDirection: "row", 
    backgroundColor: "lightgreen", 
    alignItems: "center", 
    justifyContent: "space-between"
  },
})