import { FlatList, StyleSheet, Text, View, Pressable, Image, SafeAreaView, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { getAllAppointments } from '../../../firebase/appointments/readAppointments';

const ScreenExaminationPayment = ({ navigation, route }) => {
    const [search, setSearch] = useState('');
    const [appointment, setAppointment] = useState([]);
    const [filteredAppointment, setFilteredAppointment] = useState([]);

    useEffect(() => {
        getAllAppointments((appointmentArr) => {
            setAppointment(appointmentArr);
            setFilteredAppointment(appointmentArr);
        })
    }, [])

    useEffect(() => {
        const filtered = appointment.filter((item) =>
            (item.patientName.toLowerCase() + item.patientAddress.toLowerCase()).includes(search.toLowerCase())
        );
        setFilteredAppointment(filtered);
    }, [search]);

    return (
        <ScrollView>
            <SafeAreaView style={[styles.container, { flex: 1 }]}>

                <View style={styles.topNav}>
                    <Pressable style={styles.press} onPress={() => { navigation.navigate('ScreenHome') }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                            <Icon name='arrow-left' size={25} color={'white'} />
                        </View>
                    </Pressable>
                    <Text style={{ fontSize: 22, color: 'white', fontWeight: 600 }}>Hồ sơ bệnh nhân</Text>
                    <Pressable style={styles.press} onPress={() => { navigation.navigate("ScreenNewRecord") }}>
                        <View style={{ flexDirection: 'column', alignItems: 'center', gap: 5, alignItems: 'center' }}>
                            <Icon name='user-plus' size={20} color={'white'} />
                            <Text style={{ fontSize: 12, color: 'white', fontWeight: 600 }}>Tạo mới</Text>
                        </View>
                    </Pressable>
                </View>
                <View style={styles.container}>
                    <View style={styles.searchBar}>
                        <Image source={require('../../../../images/search.png')}
                            style={{ width: 25, height: 25, }} />
                        <TextInput placeholder='Search' placeholderTextColor={'gray'}
                            value={search} onChangeText={(text) => setSearch(text)}
                            style={{
                                width: '90%', lineHeight: 20,
                                color: 'black', paddingLeft: 15
                            }}
                        />
                    </View>
                    <FlatList
                        data={filteredAppointment}
                        renderItem={(item) => (
                            <Pressable
                                onPress={() => {
                                    console.log(item.item)
                                    navigation.navigate('ScreenSelectedPayment', item.item)
                                }}
                                style={{
                                    marginTop: 10
                                }}>
                                <View style={{
                                    width: 350,
                                    height: 90,
                                    borderColor: 'gray',
                                    borderWidth: 0.5,
                                    borderRadius: 8,
                                    alignItems: 'center',
                                    padding: 10,
                                    flexDirection: 'row'
                                }}>
                                    <Image
                                        source={{ uri: 'https://picsum.photos/60' }}
                                        style={{
                                            width: 60,
                                            height: 60
                                        }}
                                    />
                                    <View style={{
                                        paddingLeft: 10
                                    }}>
                                        <Text style={{
                                            fontSize: 18,
                                            fontWeight: 500,
                                            color: '#3399ff',
                                            width: 300,
                                            lineHeight: 18
                                        }}>{item.item.patientName}</Text>
                                        <Text style={styles.textDetail}
                                        >Công nợ: {item.item.price}</Text>
                                        <Text style={styles.textDetail}
                                        >Ngày khám: {item.item.date}</Text>
                                    </View>
                                </View>
                            </Pressable>
                        )}
                        keyExtractor={(item) => item.id}
                    />

                </View>
            </SafeAreaView>
        </ScrollView>
    )
}

export default ScreenExaminationPayment

const styles = StyleSheet.create({
    searchBar: {
        width: '90%',
        borderWidth: 1,
        borderColor: 'gray',
        flexDirection: 'row',
        padding: 10,
        borderRadius: 8,
        marginTop: 20,
        marginBottom: 20
    },
    container: {
        display: 'flex', flexDirection: 'column', gap: 10, height: '100%',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat', alignItems: 'center'
    },
    topNav: {
        width: "100%", alignItems: 'center', justifyContent: "space-around", backgroundColor: '#3385ff', gap: 10, padding: 20,
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
    },
    textDetail: {
        fontSize: 13,
        color: 'black',
        width: 300,
        lineHeight: 15
    },
})