import { View, StyleSheet } from 'react-native'
import React from 'react'
import HorizontalSplitBar from './HorizontalSplitBar';
import AvatarBar from './AvatarBar';

const HeaderBar = () => {
  return (
    <View style={styles.container}>
      <HorizontalSplitBar />
      <AvatarBar 
        imageUri="https://images.pexels.com/photos/31252333/pexels-photo-31252333.jpeg?auto=compress&cs=tinysrgb&w=1200" 
        title="What's on your mind, Lisa?" 
      />
    </View>
  )
}

export default HeaderBar;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 18,
    backgroundColor: "#fff"
  },
})

