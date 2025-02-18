import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { globalStyles } from '@/styles/global-styles'
import AppButton from '@/components/AppButton'
import ThemeText from '@/components/ThemeText'
import { Colors } from '@/constants/Colors'
import ColorButton from '@/components/ColorButton'
import { useColors } from '@/hooks/useColors'

const index = () => {
  const {
    temperature,
    backgroundColor,
    setTemperature,
    setBackgroundColor,
    getColor,
    getRandomColor,
  } = useColors();

  return (
    <View style={[globalStyles.container, { backgroundColor: backgroundColor }]}>
      
      {/* EJERCICIO 1: CONTROL DE TEMPERATURA */}
      <ThemeText variant="h1">Temperature App</ThemeText>
      <ThemeText variant="h2" color={getColor()}>{temperature}</ThemeText>
      <AppButton
        label="-"
        onPress={() => setTemperature(temperature-1)}
        position="left"
      />
      <AppButton
        label="+"
        onPress={() => setTemperature(temperature+1)}
      />

      {/* EJERCICIO 2: COLORES HEXADECIMALES */}
      <ColorButton
        label='CAMBIAR COLOR'
        doubleSize
        backgroundColor={backgroundColor}
        onPress={() => setBackgroundColor(getRandomColor())}
      />

    </View>
  )
}

export default index