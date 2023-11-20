import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import background from '../../../../images/notiDefaultImg.jpg'
import { SafeAreaView } from 'react-native-safe-area-context'
const notiScreen = ({ navigation }) => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.topNav}>
                    <Pressable style={styles.press} onPress={() => { navigation.navigate("ScreenHome") }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                            <Icon name='arrow-left' size={25} color={'white'} />
                        </View>
                    </Pressable>
                    <Text style={{ fontSize: 25, color: 'white', fontWeight: 700 }}>Danh sách thông báo</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default notiScreen


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
    }
})