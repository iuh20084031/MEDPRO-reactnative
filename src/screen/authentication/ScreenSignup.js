import { Image, ImageBackground, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const ScreenSignup = ({ navigation, route }) => {
  const [nextState, setNextSate] = useState(false);
  const [warning, setWarning] = useState(false)
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const isValidPhoneNumber = (phoneNumber) => {
    const regex = /^\d{10}$/;
    return regex.test(phoneNumber);
  }
  useEffect(() => {
    const changeNextState = () => {
      isValidPhoneNumber(phoneNumber) ? setNextSate(true) : setNextSate(false);
    }
    changeNextState();
  }, [phoneNumber, passwordConfirm])

  const handleWarningPhoneNumber = () => {
    if (isValidPhoneNumber(phoneNumber)) {
      setNextSate(true)
      setWarning(false)
    } else {
      setNextSate(false)
      setWarning(true)
    }
  }
  const handelChangeConfirmPass = () => {
    return password === passwordConfirm;
  }

  const handleSignup = () => {
   if(nextState && handelChangeConfirmPass) {
      
      navigation.navigate('ScreenLogin', {
        'phoneNumber' : phoneNumber
      })
    };
    console.log("phoneNumber : ", phoneNumber)
    console.log("password : ", password)
    console.log("passwordConfirm : ", passwordConfirm)
  }

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
        <Image
          source={require('../../../images/logoVector.png')}
          style={{
            width: 180,
            height: 60,
            resizeMode: 'contain',
            marginTop: 70
          }}
        />
        <View style={{
          marginTop: 40,
          alignItems: 'center',
        }}>
          <Text style={{
            fontSize: 20,
            color: 'white',
            fontWeight: 600,

          }}>Nhập thông tin đăng ký</Text>
          <Text style={{
            width: '85%',
            color: 'white',
            lineHeight: 17,
            textAlign: 'center',
            fontSize: 16,
            marginTop: 20
          }}>Sử dụng số điện thoại để tạo tài khoản hoặc đăng nhập vào MEDPRO</Text>
        </View>
        <View style={{
          flexDirection: 'row',
          width: '90%',
          padding: 10,
          justifyContent: 'space-between',
          marginTop: 50
        }}>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            width: '30%',
            paddingBottom: 5,
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottomColor: 'white',
            borderBottomWidth: 2
          }}>
            <Image
              source={require('../../../images/flag-vn.png')}
              style={{
                width: 35,
                height: 20,
                resizeMode: 'contain'
              }}
            />
            <Text style={{
              fontSize: 17,
              color: 'white',
            }}>+84 </Text>
          </View>
          <View style={{
            width: '69%'
          }}>
            <TextInput
              value={phoneNumber}
              placeholder='Nhập số điện thoại'
              placeholderTextColor={'#f2f2f2'}
              onChangeText={(text) => setPhoneNumber(text)}
              onBlur={handleWarningPhoneNumber}
              style={{
                fontSize: 17,
                paddingBottom: 5,
                borderBottomColor: 'white',
                borderBottomWidth: 2,
                color: 'white',
                padding: 3
              }}
            />
          </View>
        </View>
        {warning ? <Text style={{
          width: '85%',
          color: 'red'
        }}>Vui lòng nhập đúng số điện thoại !</Text> : null}

        <View style={{
          flexDirection: 'row',
          width: '90%',
          padding: 10,
          justifyContent: 'space-between',
          marginTop: 10
        }}>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            width: '30%',
            paddingBottom: 5,
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottomColor: 'white',
            borderBottomWidth: 2
          }}>
            <Text style={{
              fontSize: 17,
              color: 'white',
            }}>Mật khẩu </Text>
          </View>
          <View style={{
            width: '69%'
          }}>
            <TextInput
              value={password}
              placeholder='*****************'
              placeholderTextColor={'#f2f2f2'}
              onChangeText={(text) => setPassword(text)}
              onBlur={{}}
              secureTextEntry={true}
              style={{
                fontSize: 17,
                paddingBottom: 5,
                borderBottomColor: 'white',
                borderBottomWidth: 2,
                color: 'white',
                padding: 3
              }}
            />
          </View>
        </View>

        <View style={{
          flexDirection: 'row',
          width: '90%',
          padding: 10,
          justifyContent: 'space-between',
          marginTop: 10
        }}>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            width: '30%',
            paddingBottom: 5,
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottomColor: 'white',
            borderBottomWidth: 2
          }}>
            <Text style={{
              fontSize: 17,
              color: 'white',
            }}>Xác nhận </Text>
          </View>
          <View style={{
            width: '69%'
          }}>
            <TextInput
              value={passwordConfirm}
              placeholder='*****************'
              placeholderTextColor={'#f2f2f2'}
              onChangeText={(text) => setPasswordConfirm(text)}
              secureTextEntry={true}
              style={{
                fontSize: 17,
                paddingBottom: 5,
                borderBottomColor: 'white',
                borderBottomWidth: 2,
                color: 'white',
                padding: 3
              }}
            />
          </View>
        </View>
        <Pressable
          onPress={handleSignup}
          disabled={nextState ? false : true}
          style={[{
            backgroundColor: '#1D82DB',
            padding: 10,
            width: '80%',
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 30
          },
          nextState ? {

          } : {
            opacity: 0.6
          }]}>
          <Text style={{
            fontSize: 21,
            fontWeight: 600,
            color: 'white'
          }}>Đăng ký</Text>
        </Pressable>
      </ImageBackground>
    </View>
  )
}

export default ScreenSignup

const styles = StyleSheet.create({})