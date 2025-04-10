import { View, Image } from 'react-native'
import React from 'react'

const Avatar = ({ imageUri, border, borderColor }: { imageUri: string; border?: boolean; borderColor?: string; }) => {  
  return (
    <View>
      <Image source={{ uri: imageUri }} style={{ width: 42, height: 42, borderRadius: 21, borderColor: border ? borderColor : "transparent", borderWidth: 1.5 }} />
    </View>
  )
}

export default Avatar;