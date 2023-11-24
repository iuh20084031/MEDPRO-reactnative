import { Image, ImageBackground, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { signIn } from '../../firebase/FirebaseAuth';

const ScreenLogin = ({ navigation, route }) => {
  const [nextState, setNextSate] = useState(false);
  const [warning, setWarning] = useState(false);
  const [warp, setWarP] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  useEffect(() => {
    var emaiS = route.params?.emailSignUp;
    emaiS ? setEmail(emaiS) : null;
    console.log("ems : ",emaiS)
  }, [ route, navigation ])
  useEffect(() => {
    const changeNextState = () => {
      isValidEmail(email)&&password ? setNextSate(true) : setNextSate(false);
    }
    changeNextState();
  }, [email])

  const isValidEmail = (email) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  }

  const handleWarningEmail = () => {
    if (isValidEmail(email)) {
      setNextSate(true)
      setWarning(false)
    } else {
      setNextSate(false)
      setWarning(true)
    }
  }
  const handelNextLogin = () => {
    if (nextState) {
      signIn(email, password, navigation);
    }
    console.log("email : ", email)
    console.log("password : ", password)
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
            marginTop: 30
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

          }}>Đăng nhập với email</Text>
          <Text style={{
            width: '85%',
            color: 'white',
            lineHeight: 17,
            textAlign: 'center',
            fontSize: 16,
            marginTop: 20
          }}>Sử dụng email để tạo tài khoản hoặc đăng nhập vào MEDPRO</Text>
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
            width: '26%',
            paddingBottom: 5,
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottomColor: 'white',
            borderBottomWidth: 2
          }}>
            <MailOutlineIcon style={{
              color: 'white',
            }} />
            <Text style={{
              fontSize: 17,
              color: 'white',
            }}>Email </Text>
          </View>
          <View style={{
            width: '69%'
          }}>
            <TextInput
              value={email}
              placeholder='Nhập địa chỉ email'
              placeholderTextColor={'#f2f2f2'}
              onChangeText={(text) => setEmail(text)}
              onBlur={handleWarningEmail}
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
        }}>Vui lòng nhập đúng email !</Text> : null}

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
            width: '26%',
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
              onBlur={() => {
                password?setWarP(false):setWarP(true);
              }}
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
        {warp ? <Text style={{
          width: '85%',
          color: 'red'
        }}>Vui lòng nhập mật khẩu !</Text> : null}
        <Text style={{
          fontSize: 18,
          fontWeight: 600,
          color: 'white',
          margin: 20
        }}>Hoặc đăng nhập bằng</Text>
        <View style={{
          flexDirection: 'row',
          margin: 20
        }}>
          <Pressable>
            <Image
              source={require('../../../images/icon-fb.png')}
              style={{
                width: 45,
                height: 45,
                borderRadius: 50
              }}
            />
          </Pressable>
          <Pressable>
            <Image
              source={require('../../../images/icon-google.png')}
              style={{
                width: 45,
                height: 45,
                borderRadius: 50,
                marginLeft: 40,
                marginRight: 40,
              }}
            />
          </Pressable>
          <Pressable>
            <Image
              source={require('../../../images/icon-zalo.png')}
              style={{
                width: 45,
                height: 45,
                borderRadius: 50
              }}
            />
          </Pressable>
        </View>
        <Pressable
          onPress={handelNextLogin}
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
          }}>Đăng nhập</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            navigation.navigate('ScreenSignUp', {})
          }}
        >
          <Text
            style={{
              marginTop: 15,
              color: 'white'
            }}
          >Đăng ký tài khoản tại đây</Text>
        </Pressable>
      </ImageBackground>
    </View>
  )
}

export default ScreenLogin

const styles = StyleSheet.create({})