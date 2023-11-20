import { StyleSheet, Text, View, Pressable, Image, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

const ScreenNewRecord = ({ navigation }) => {
    return (
        <SafeAreaView style={[styles.container, { flex: 1 }]}>

            <View style={styles.topNav}>
                <Pressable style={styles.press} onPress={() => { navigation.navigate("ScreenHome") }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                        <Icon name='arrow-left' size={25} color={'white'} />
                    </View>
                </Pressable>
                <Text style={{ fontSize: 22, color: 'white', fontWeight: 600 }}>Tạo mới hồ sơ</Text>
            </View>
            <View style={styles.container}>
                <Text style={{ fontSize: 22, color: 'black', fontWeight: 600 }}>
                    Tạo hồ sơ bệnh nhân
                </Text>

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