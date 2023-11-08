import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ScreenPasswordConfirm = ({navigation, route }) => {
  return (
    <View style={{
      width: '100%',
      flex: 1,
      alignItems: 'center'
    }}>
      <ImageBackground
        source={require('../../../images/bg2.jpg')}
        style={{
          width: '100%',
          height: '100%',
          alignItems: 'center',
        }}
      >

      </ImageBackground>
    </View>
  )
}

export default ScreenPasswordConfirm

const styles = StyleSheet.create({})