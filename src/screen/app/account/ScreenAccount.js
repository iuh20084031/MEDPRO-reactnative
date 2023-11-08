import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React, { cloneElement } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
const ScreenAccount = ({ navigation }) => {
    return (
        <View>
            <View style={{
                width: "100%", alignItems: 'center', justifyContent: "flex-start", backgroundColor: '#00B1F5', gap: 10, padding: 25,
                borderBottomLeftRadius: 30, borderBottomRightRadius: 30,
            }}>
                <View style={{ alignItems: 'left', justifyContent: "center", width: "100%", }}>
                    <Icon name='arrow-left' size={25} color={'#FF8678'} />
                </View>
                <Image source={require('../../../../images/Frame3.jpg')} style={{ width: 150, height: 150, borderRadius: 200, border: '5px solid white' }} />
                <Text style={{ fontSize: 25, color: 'white', fontWeight: 700 }}>Customer's name</Text>
                <Pressable style={{ width: "50%", alignItems: 'center', justifyContent: "center", border: '3px solid white', gap: 10, flexDirection: 'row', padding: 5, borderRadius: 200 }}>
                    <Text style={{ fontSize: 20, color: 'white', fontWeight: 400 }}>Đăng Xuất</Text>
                    <Icon name='chevron-right' size={15} color={'#FF8678'} />
                </Pressable>
            </View>
            <View style={{ padding: 25, gap: 10, backgroundColor: 'white' }}>
                <Text style={{ fontSize: 18, color: 'black', fontWeight: 700 }}>Điều khoản và quy định</Text>
                <Pressable style={styles.press}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                        <Icon name="shield" size={20} color="#00cedf" style={{ padding: 10, backgroundColor: '#d9faf7', borderRadius: 5 }} />
                        <Text style={{ fontSize: 20, color: 'black', fontWeight: '500' }}>Quy định sử dụng</Text>
                    </View>
                    <Icon name="chevron-right" size={15} color="grey" />
                </Pressable>
                <Pressable style={styles.press}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                        <Icon name="book" size={20} color="#00cedf" style={{ padding: 10, backgroundColor: '#d9faf7', borderRadius: 5 }} />
                        <Text style={{ fontSize: 20, color: 'black', fontWeight: '500' }}>Chính sách bảo mật</Text>
                    </View>
                    <Icon name="chevron-right" size={15} color="grey" />
                </Pressable>
                <Pressable style={styles.press}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                        <Icon name="folder-open" size={20} color="#00cedf" style={{ padding: 10, backgroundColor: '#d9faf7', borderRadius: 5 }} />
                        <Text style={{ fontSize: 20, color: 'black', fontWeight: '500' }}>Điều khoản dịch vụ</Text>
                    </View>
                    <Icon name="chevron-right" size={15} color="grey" />
                </Pressable>
                <Pressable style={styles.press}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                        <Icon name="volume-control-phone" size={20} color="#00cedf" style={{ padding: 10, backgroundColor: '#d9faf7', borderRadius: 5 }} />
                        <Text style={{ fontSize: 20, color: 'black', fontWeight: '500' }}>Tổng đài CSKH 19002115</Text>
                    </View>
                    <Icon name="chevron-right" size={15} color="grey" />
                </Pressable>
            </View>
        </View>
    )
}

export default ScreenAccount

const styles = StyleSheet.create({
    press: {

        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 10,
        borderRadius: 200,
    }
})