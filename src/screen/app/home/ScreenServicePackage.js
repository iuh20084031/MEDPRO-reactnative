import { StyleSheet, Text, View, Pressable, Image, TextInput } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

const ScreenServicePackage = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.topNav}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "flex-start", width: "100%", }}>
                    <Icon name='arrow-left' size={25} color={'#FF8678'} style={{ marginRight: 25 }} />
                    <Text style={{ fontSize: 25, color: 'white', fontWeight: 700 }}>Gói khám sức khỏe</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 25, paddingLeft: 10, paddingRight: 10 }}>
                <Pressable style={{ width: "100%", alignItems: 'center', justifyContent: "flex-start", border: '3px solid white', gap: 10, flexDirection: 'row', padding: 5, borderRadius: 200, paddingLeft: 15, backgroundColor: 'white' }}>
                    <Icon name='search' size={20} color={'lightgrey'} />
                    <TextInput style={{ fontSize: 20, color: 'lightgrey', fontWeight: 500 }} placeholder='Tìm gói khám'></TextInput>
                </Pressable>
            </View> 
            <View style={{
                flexDirection: 'column', justifyContent: 'flex-start', gap: 10, padding: 10, alignItems: 'center', borderRadius: 20, backgroundColor: 'white', marginRight: 10, marginLeft: 10
            }}>
                <View style={{
                    flexDirection: 'row', justifyContent: 'flex-start', gap: 10, alignItems: 'center', width: '100%'
                }}>
                    <Image source={require('../../../../images/Frame3.jpg')} style={{ width: 70, height: 70, borderRadius: 200, border: '5px solid white' }} />
                    <View style={{ width: '70%' }}>
                        <Text style={{ fontSize: 20, color: '#20B1DD', fontWeight: 700 }}>
                            Gói khám bạc - Nam</Text>
                        <Text style={{ fontSize: 15, color: 'black', fontWeight: 400 }}>
                            Bệnh viện Đa Khoa Medic Bình Dương</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View style={{ flexDirection: 'column', width: '60%', justifyContent: 'flex-start', alignItems: 'center', gap: 5 }}>
                        <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', gap: 5 }}>
                            <Icon name='tags' size={15} color={'black'} />
                            <Text style={{ fontSize: 15, color: 'black', fontWeight: 500 }}>Giá khám:</Text>
                            <Text style={{ fontSize: 18, color: 'orange', fontWeight: 700 }}>1.053.000đ</Text>
                        </View>

                    </View>
                    <Pressable style={{ alignItems: 'center', justifyContent: "center", gap: 10, flexDirection: 'row', maxHeight: 39, borderRadius: 20, backgroundColor: '#0092DD', height: 35 }}>
                        <Text style={{ fontSize: 15, color: 'white', fontWeight: 500, paddingLeft: 10, paddingRight: 10 }}>Đặt lịch</Text>
                    </Pressable>
                </View>
            </View>
            <View style={{
                flexDirection: 'column', justifyContent: 'flex-start', gap: 10, padding: 10, alignItems: 'center', borderRadius: 20, backgroundColor: 'white', marginRight: 10, marginLeft: 10
            }}>
                <View style={{
                    flexDirection: 'row', justifyContent: 'flex-start', gap: 10, alignItems: 'center', width: '100%'
                }}>
                    <Image source={require('../../../../images/Frame3.jpg')} style={{ width: 70, height: 70, borderRadius: 200, border: '5px solid white' }} />
                    <View style={{ width: '70%' }}>
                        <Text style={{ fontSize: 20, color: '#20B1DD', fontWeight: 700 }}>
                            Gói khám bạc - Nam</Text>
                        <Text style={{ fontSize: 15, color: 'black', fontWeight: 400 }}>
                            Bệnh viện Đa Khoa Medic Bình Dương</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View style={{ flexDirection: 'column', width: '60%', justifyContent: 'flex-start', alignItems: 'center', gap: 5 }}>
                        <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', gap: 5 }}>
                            <Icon name='tags' size={15} color={'black'} />
                            <Text style={{ fontSize: 15, color: 'black', fontWeight: 500 }}>Giá khám:</Text>
                            <Text style={{ fontSize: 18, color: 'orange', fontWeight: 700 }}>1.053.000đ</Text>
                        </View>

                    </View>
                    <Pressable style={{ alignItems: 'center', justifyContent: "center", gap: 10, flexDirection: 'row', maxHeight: 39, borderRadius: 20, backgroundColor: '#0092DD', height: 35 }}>
                        <Text style={{ fontSize: 15, color: 'white', fontWeight: 500, paddingLeft: 10, paddingRight: 10 }}>Đặt lịch</Text>
                    </Pressable>
                </View>
            </View>
            <View style={{
                flexDirection: 'column', justifyContent: 'flex-start', gap: 10, padding: 10, alignItems: 'center', borderRadius: 20, backgroundColor: 'white', marginRight: 10, marginLeft: 10
            }}>
                <View style={{
                    flexDirection: 'row', justifyContent: 'flex-start', gap: 10, alignItems: 'center', width: '100%'
                }}>
                    <Image source={require('../../../../images/Frame3.jpg')} style={{ width: 70, height: 70, borderRadius: 200, border: '5px solid white' }} />
                    <View style={{ width: '70%' }}>
                        <Text style={{ fontSize: 20, color: '#20B1DD', fontWeight: 700 }}>
                            Gói khám bạc - Nam</Text>
                        <Text style={{ fontSize: 15, color: 'black', fontWeight: 400 }}>
                            Bệnh viện Đa Khoa Medic Bình Dương</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View style={{ flexDirection: 'column', width: '60%', justifyContent: 'flex-start', alignItems: 'center', gap: 5 }}>
                        <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', gap: 5 }}>
                            <Icon name='tags' size={15} color={'black'} />
                            <Text style={{ fontSize: 15, color: 'black', fontWeight: 500 }}>Giá khám:</Text>
                            <Text style={{ fontSize: 18, color: 'orange', fontWeight: 700 }}>1.053.000đ</Text>
                        </View>

                    </View>
                    <Pressable style={{ alignItems: 'center', justifyContent: "center", gap: 10, flexDirection: 'row', maxHeight: 39, borderRadius: 20, backgroundColor: '#0092DD', height: 35 }}>
                        <Text style={{ fontSize: 15, color: 'white', fontWeight: 500, paddingLeft: 10, paddingRight: 10 }}>Đặt lịch</Text>
                    </Pressable>
                </View>
            </View>
            <View style={{
                flexDirection: 'column', justifyContent: 'flex-start', gap: 10, padding: 10, alignItems: 'center', borderRadius: 20, backgroundColor: 'white', marginRight: 10, marginLeft: 10
            }}>
                <View style={{
                    flexDirection: 'row', justifyContent: 'flex-start', gap: 10, alignItems: 'center', width: '100%'
                }}>
                    <Image source={require('../../../../images/Frame3.jpg')} style={{ width: 70, height: 70, borderRadius: 200, border: '5px solid white' }} />
                    <View style={{ width: '70%' }}>
                        <Text style={{ fontSize: 20, color: '#20B1DD', fontWeight: 700 }}>
                            Gói khám bạc - Nam</Text>
                        <Text style={{ fontSize: 15, color: 'black', fontWeight: 400 }}>
                            Bệnh viện Đa Khoa Medic Bình Dương</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View style={{ flexDirection: 'column', width: '60%', justifyContent: 'flex-start', alignItems: 'center', gap: 5 }}>
                        <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', gap: 5 }}>
                            <Icon name='tags' size={15} color={'black'} />
                            <Text style={{ fontSize: 15, color: 'black', fontWeight: 500 }}>Giá khám:</Text>
                            <Text style={{ fontSize: 18, color: 'orange', fontWeight: 700 }}>1.053.000đ</Text>
                        </View>

                    </View>
                    <Pressable style={{ alignItems: 'center', justifyContent: "center", gap: 10, flexDirection: 'row', maxHeight: 39, borderRadius: 20, backgroundColor: '#0092DD', height: 35 }}>
                        <Text style={{ fontSize: 15, color: 'white', fontWeight: 500, paddingLeft: 10, paddingRight: 10 }}>Đặt lịch</Text>
                    </Pressable>
                </View>
            </View>

        </View>
    )
}

export default ScreenServicePackage

const styles = StyleSheet.create({
    container: {
        display: 'flex', flexDirection: 'column', gap: 10,
    },
    topNav: {
        width: "100%", alignItems: 'center', justifyContent: "flex-start", backgroundColor: '#00B1F5', gap: 10, padding: 25,
        borderBottomLeftRadius: 30, borderBottomRightRadius: 30,
    },
    filterBtn: {
        alignItems: 'center', justifyContent: "center", gap: 10, flexDirection: 'row', paddingTop: 10, paddingBottom: 10, paddingLeft: 15, paddingRight: 15, borderRadius: 200, backgroundColor: 'white'
    }
})