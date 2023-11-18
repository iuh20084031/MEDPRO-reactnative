import { StyleSheet, Text, View, Pressable, Image, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import background from '../../../../images/patientRecodImg.jpg'

const ScreenExaminationForm = ({ navigation }) => {
    //set background color onPressed
    const [bgColor, bgColorState] = useState(['transparent', 'transparent', 'transparent'])
    const btnHandleIn = (index) => {
        const newBgColor = ['transparent', 'transparent', 'transparent']
        console.log("btn pressed")
        newBgColor[index] = "#00b1f5"
        bgColorState(newBgColor)
    }

    //set text color  onPressed
    const [fontColor, setFontColor] = useState(['black', 'black', 'black'])
    const btnHandleFont = (index) => {
        const newFontColor = ['black', 'black', 'black']
        console.log("font pressed")
        newFontColor[index] = "white"
        setFontColor(newFontColor)
    }
    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.topNav}>
                <Pressable style={styles.press} onPress={() => { navigation.navigate("ScreenHome") }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                        <Icon name='arrow-left' size={25} color={'white'} />
                    </View>
                </Pressable>
                <Text style={{ fontSize: 25, color: 'white', fontWeight: 600 }}>Danh sách phiếu khám</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 25, }}>
                <Pressable style={[styles.pressBtn, { backgroundColor: bgColor[0], color: fontColor[0] }]} onPress={() => { btnHandleIn(0), btnHandleFont(0) }}>
                    <Text style={{ fontSize: 15, color: fontColor[0], fontWeight: 500 }}>Chưa thanh toán</Text>
                </Pressable>
                <Pressable style={[styles.pressBtn, { backgroundColor: bgColor[1], color: fontColor[1] }]} onPress={() => { btnHandleIn(1), btnHandleFont(1) }}>
                    <Text style={{ fontSize: 15, color: fontColor[1], fontWeight: 500 }}>Đã khám</Text>
                </Pressable>
                <Pressable style={[styles.pressBtn, { backgroundColor: bgColor[2], color: fontColor[2] }]} onPress={() => { btnHandleIn(2), btnHandleFont(2) }}>
                    <Text style={{ fontSize: 15, color: fontColor[2], fontWeight: 500 }}>Đã hủy</Text>
                </Pressable>
            </View>
        </SafeAreaView>

    )
}

export default ScreenExaminationForm

const styles = StyleSheet.create({
    container: {
        display: 'flex', flexDirection: 'column', gap: 10, height: '100%',
        backgroundImage: `url(${background})`, backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    },
    topNav: {
        width: "100%", alignItems: 'center', justifyContent: "flex-start", backgroundColor: '#00B1F5', gap: 10, padding: 25,
        borderBottomLeftRadius: 30, borderBottomRightRadius: 30, flexDirection: 'row'
    },
    filterBtn: {
        alignItems: 'center', justifyContent: "center", gap: 10, flexDirection: 'row', paddingTop: 10, paddingBottom: 10, paddingLeft: 15, paddingRight: 15, borderRadius: 200, backgroundColor: 'white'
    },
    pressBtn: {
        alignItems: 'center', justifyContent: "space-around",
        flexDirection: 'row', padding: 10, borderRadius: 200,
        backgroundColor: '#ECECEC', border: '1px solid gray'
    }

})