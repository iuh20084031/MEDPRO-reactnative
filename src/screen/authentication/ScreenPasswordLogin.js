import { Image, ImageBackground, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';

const ScreenPasswordLogin = ({ navigation, route }) => {
    const examplePassword = 'nhatlinh';
    const [phoneNumberLogin, setPhoneNumberLogin] = useState("0000000000");
    const [usernameLogin, setUsernameLogin] = useState("Nhật Linh");
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('')
    const [status, setStatus] = useState('initial')
    useEffect(()=> {
        const {phoneNumber} = route.params;
        setPhoneNumberLogin(phoneNumber); 
    },[navigation])
    console.log("Params : ", route.params)
    useEffect(() => {
        password?setStatus('ok'):setStatus('initial')
    }, [password])

    const handleLogin = () => {
        if(status==='ok') {
            if(password===examplePassword) {
                navigation.navigate('ScreenHome', {
                    usernameLogin : usernameLogin,
                    phoneNumberLogin : phoneNumberLogin
                })
            } else {
                setStatus('passwordIsNotCorrect');
            } 
        } else {
            setStatus('passwordIsNull')
        }
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
                <Image
                    source={require('../../../images/avt.jpg')}
                    style={{
                        width: 80,
                        height: 80,
                        borderRadius: 50,
                        borderColor: 'gray',
                        borderWidth: 1,
                        margin: 10
                    }}
                />
                <Text style={{
                    fontSize: 20,
                    color: 'white',
                    fontWeight: 550,
                    margin: 5
                }}>{usernameLogin}</Text>
                <Text style={{
                    fontSize: 20,
                    color: 'white',
                    fontWeight: 450,
                }}>{phoneNumberLogin}</Text>
                <Text style={{
                    fontSize: 20,
                    color: 'white',
                    fontWeight: 500,
                    margin: 30
                }}>Nhập mật khẩu</Text>
                <View style={{
                    width: '70%',
                    height: 30,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderBottomColor: 'white',
                    borderBottomWidth: 2,
                    flexDirection: 'row'
                }}>
                    <TextInput
                        placeholder='* * * * * * * *'
                        placeholderTextColor={'white'}
                        secureTextEntry={!showPassword}
                        value={password}
                        onChangeText={(text)=> setPassword(text)}
                        style={{
                            justifyContent: 'center',
                            alignContent: 'center',
                            textAlign: 'center',
                            fontSize: 17,
                            color: 'white',
                            borderColor: 'transparent'
                        }}
                    />
                    <Pressable
                        onPress={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? <VisibilityIcon style={{ color: 'white' }} /> : <VisibilityOffIcon style={{ color: 'white' }} />}
                    </Pressable>
                </View>
                {status === 'passwordIsNull' ? <Text style={{ color: 'red', fontSize: 15, margin: 5 }}>Vui lòng nhập mật khẩu !</Text> : null}
                {status === 'passwordIsNotCorrect' ? <Text style={{ color: 'red', fontSize: 15, margin: 5 }}>Mật khẩu không chính xác !</Text> : null}
                <View style={{
                    width: '85%',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginTop: 40
                }}>
                    <Pressable
                        /* onPress={handleLogin} */
                    >
                        <Text style={{
                            color: 'white',
                            fontSize: 16,
                            borderBottomColor: 'white',
                            borderBottomWidth: 1

                        }}>Quên mật khẩu</Text>
                    </Pressable>
                    <Pressable
                        onPress={() => {
                            navigation.navigate('ScreenLogin',{})
                        }}
                    >
                        <Text style={{
                            color: 'white',
                            fontSize: 16,
                            borderBottomColor: 'white',
                            borderBottomWidth: 1
                        }}>Thoát tài khoản</Text>
                    </Pressable>
                </View>
                <Pressable
                    onPress={handleLogin}
                    disabled={status==='ok' ? false : true}
                    style={[{
                        backgroundColor: '#1D82DB',
                        padding: 10,
                        width: '80%',
                        borderRadius: 10,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 50
                    },
                    status==='ok' ? {

                    } : {
                        opacity: 0.6
                    }]}>
                    <Text style={{
                        fontSize: 21,
                        fontWeight: 600,
                        color: 'white'
                    }}>TIẾP TỤC</Text>
                </Pressable>
            </ImageBackground>
        </View>
    )
}

export default ScreenPasswordLogin

const styles = StyleSheet.create({

})