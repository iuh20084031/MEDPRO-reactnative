import { StyleSheet, Text, View, Image, Pressable, ScrollView } from 'react-native'
import React, { cloneElement, useEffect } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { SafeAreaView } from 'react-native-safe-area-context'
const ScreenAccount = ({ navigation }) => {

import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../../redux/actions'
const ScreenAccount = ({ navigation, route }) => {
    const user = useSelector((state)=> state.user);
    const dispatch = useDispatch();
    return (
        <ScrollView>

            <SafeAreaView>
                <View>
                    <View style={{
                        width: "100%", alignItems: 'center', justifyContent: "flex-start", backgroundColor: '#00B1F5', gap: 10, padding: 25,
                        borderBottomLeftRadius: 30, borderBottomRightRadius: 30,
                    }}>

                        <Image source={require('../../../../images/Frame3.jpg')} style={{ width: 150, height: 150, borderRadius: 200, border: '5px solid white' }} />
                        <Text style={{ fontSize: 25, color: 'white', fontWeight: 700 }}>{user?user:"Hello"}</Text>
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
                        <Pressable style={styles.press}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                                <Icon name="question" size={20} color="#00cedf" style={{ padding: 10, backgroundColor: '#d9faf7', borderRadius: 5 }} />
                                <Text style={{ fontSize: 20, color: 'black', fontWeight: '500' }}>Câu hỏi thường gặp</Text>
                            </View>
                            <Icon name="chevron-right" size={15} color="grey" />
                        </Pressable>
                        <Pressable style={styles.press}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                                <Icon name="thumbs-up" size={20} color="#00cedf" style={{ padding: 10, backgroundColor: '#d9faf7', borderRadius: 5 }} />
                                <Text style={{ fontSize: 20, color: 'black', fontWeight: '500' }}>Đánh giá ứng dụng</Text>
                            </View>
                            <Icon name="chevron-right" size={15} color="grey" />
                        </Pressable>
                        <Pressable style={styles.press}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                                <Icon name="share-square-o" size={20} color="#00cedf" style={{ padding: 10, backgroundColor: '#d9faf7', borderRadius: 5 }} />
                                <Text style={{ fontSize: 20, color: 'black', fontWeight: '500' }}>Chia sẻ ứng dụng</Text>
                            </View>
                            <Icon name="chevron-right" size={15} color="grey" />
                        </Pressable>
                        <Pressable style={styles.press}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                                <Icon name="language" size={20} color="#00cedf" style={{ padding: 10, backgroundColor: '#d9faf7', borderRadius: 5 }} />
                                <Text style={{ fontSize: 20, color: 'black', fontWeight: '500' }}>Ngôn ngữ</Text>
                            </View>
                            <Icon name="chevron-right" size={15} color="grey" />
                        </Pressable>
                        <Pressable 
                        onPress={()=>{
                            dispatch(logout());
                            navigation.navigate('ScreenLogin');
                        }}
                        style={styles.press}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                                <Icon name="sign-out" size={20} color="#ff4e17" style={{ padding: 10, backgroundColor: '#ffe3e2', borderRadius: 5 }} />
                                <Text style={{ fontSize: 20, color: 'black', fontWeight: '500' }}>Đăng xuất</Text>
                            </View>
                            <Icon name="chevron-right" size={15} color="grey" />
                        </Pressable>
                    </View>
                </View>
            </SafeAreaView>
        </ScrollView>
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