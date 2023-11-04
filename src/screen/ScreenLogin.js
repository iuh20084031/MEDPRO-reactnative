import { Image, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-web'

const ScreenLogin = () => {
  useEffect(() => {
    
  }, [])
  return (
    <SafeAreaView style={{
      width: '100%',
      flex: 1,
      alignItems: 'center'
    }}>
      <ImageBackground
        source={require('../../images/bg2.jpg')}
        style={{
          width: '100%',
          height: '100%',
          alignItems: 'center',
        }}
      >
        <Image
          source={require('../../images/logoVector.png')}
          style={{
            width: 180,
            height: 60,
            resizeMode: 'contain',
            marginTop: 70
          }}
        />
        <View style={{
          marginTop: 40,
          alignItems: 'center'
        }}>
          <Text style={{
            fontSize: 18,
            color: 'white',
            fontWeight: 600,

          }}>Vui lòng nhập số điện thoại</Text>
          <Text style={{
            width: '85%',
            color: 'white',
            lineHeight: 17,
            textAlign: 'center',
            fontSize: 16,
            marginTop: 20
          }}>Sử dụng số điện thoại để tạo tài khoản hoặc đăng nhập vào MEDPRO</Text>
        </View>
        <View>
          <TextInput 
            placeholder=''
          />
          <TextInput />
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

export default ScreenLogin

const styles = StyleSheet.create({})