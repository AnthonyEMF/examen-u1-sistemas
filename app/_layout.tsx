import { View } from 'react-native'
import { globalStyles } from '@/styles/global-styles'
import { Slot } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import React from 'react'

export default function _layout() {
  return (
    <View 
      style={globalStyles.background}
    >
      <Slot />
      <StatusBar style='auto'/>
    </View>
  )
}