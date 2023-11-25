import { StyleSheet, Text, View, Pressable, Image, SafeAreaView } from 'react-native'
import React, { useState, useEffect } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

const ScreenNewRecord = ({ navigation }) => {
    console.log("Patient New ")
    useEffect(() => {
        navigation.setOptions({
            title: 'Tạo hồ sơ mới',
            headerRight: () => (
                <View style={{ marginRight: 10 }}>
                    <View
                        style={{
                            flexDirection: 'row'
                        }}
                    >
                        <Image
                            source={require('../../../../images/medLogo2.png')}
                            style={{
                                width: 70,
                                height: 70,
                                resizeMode: 'contain',
                                marginLeft: 80
                            }}
                        />
                    </View>
                </View>
            ),
            headerStyle: {
                backgroundColor: '#3385ff',
                borderRadius: 5,
                shadowColor: 'rgba(0, 0, 0, 0.2)',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 1,
                shadowRadius: 5,
            }
        });
    }, [navigation]);
    return (
        <SafeAreaView style={[styles.container, { flex: 1 }]}>
            <View style={styles.container}>
                <Text style={{ fontSize: 22, color: 'black', fontWeight: 600 }}>
                    Tạo hồ sơ bệnh nhân
                </Text>
                <Text style={{ fontSize: 15, color: 'black', fontWeight: 400, textAlign: 'center', width: '80%' }}>
                    Bạn được phép tạo tối đa 10 hồ sơ (cá nhân và người thân trong gia đình)
                </Text>
                <Pressable style={styles.btnDangky} onPress={() => { navigation.navigate('ScreenCreateRecords') }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                        <Text style={{ fontSize: 20, color: 'white', fontWeight: 400, textAlign: 'center', width: '100%' }}>
                            CHƯA TỪNG KHÁM ĐĂNG KÝ MỚI
                        </Text>
                    </View>
                </Pressable>
                <Pressable style={[styles.btnDangky, { backgroundColor: 'transparent', border: '2px solid #00b1f5' }]} onPress={() => { navigation.navigate('ScreenCreateRecords') }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                        <Icon name='id-card-o' size={25} color={'#00b1f5'} />
                        <Text style={{ fontSize: 20, color: '#00b1f5', fontWeight: 400, textAlign: 'center', width: '100%' }}>
                            QUÉT MÃ BHYT/CCCD
                        </Text>
                    </View>
                </Pressable>
            </View>
        </SafeAreaView>

    )
}

export default ScreenNewRecord

const styles = StyleSheet.create({
    container: {
        display: 'flex', flexDirection: 'column', gap: 10, height: '100%',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat', alignItems: 'center'
    },
    topNav: {
        width: "100%", alignItems: 'center', justifyContent: "space-around", backgroundColor: '#00B1F5', gap: 10, padding: 20,
        borderBottomLeftRadius: 30, borderBottomRightRadius: 30, flexDirection: 'row'
    },
    filterBtn: {
        alignItems: 'center', justifyContent: "center", gap: 10, flexDirection: 'row', paddingTop: 10, paddingBottom: 10, paddingLeft: 15, paddingRight: 15, borderRadius: 200, backgroundColor: 'white'
    },
    pressBtn: {
        alignItems: 'center', justifyContent: "space-around",
        flexDirection: 'row', padding: 10, borderRadius: 200,
        backgroundColor: '#ECECEC', border: '1px solid gray'
    },
    btnDangky: {
        alignItems: 'center', justifyContent: "space-around",
        flexDirection: 'row', padding: 10, borderRadius: 10,
        backgroundColor: '#00b1f5', width: '90%', height: '10%'
    }

})