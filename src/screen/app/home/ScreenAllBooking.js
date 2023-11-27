import { FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import PersonIcon from '@mui/icons-material/Person';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import { getAllAppointments } from '../../../firebase/appointments/readAppointments';
import { Pressable } from 'react-native';
import { sendEmail } from './sendInfoApportnment';

const ScreenAllBooking = ({ navigation, route }) => {
    const [search, setSearch] = useState('')
    const [bookings, setBooking] = useState([]);
    const [bookingsFiltered, setBookingsFiltered] = useState(bookings);

    useEffect(() => {
        getAllAppointments((arr) => {
            setBooking(arr);
            setBookingsFiltered(arr);
        })
        navigation.setOptions({
            title: 'Lịch khám đã đặt',
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
        <ScrollView>
            <SafeAreaView style={{
                width: '100%',
                flex: 1,
                alignItems: 'center'
            }}>
                <View
                    style={{
                        width: '90%',
                        borderWidth: 1,
                        borderColor: 'gray',
                        flexDirection: 'row',
                        padding: 10,
                        borderRadius: 8,
                        marginTop: 20,
                        marginBottom: 20
                    }}
                >
                    <Image
                        source={require('../../../../images/search.png')}
                        style={{
                            width: 25,
                            height: 25,
                        }}
                    />
                    <TextInput
                        placeholder='Search'
                        placeholderTextColor={'gray'}
                        value={search}
                        onChangeText={(text) => setSearch(text)}
                        style={{
                            width: '90%',
                            lineHeight: 20,
                            color: 'black',
                            paddingLeft: 15
                        }}
                    />
                </View>
                <FlatList
                    data={bookingsFiltered}
                    keyExtractor={(item) => item.id}
                    renderItem={(item) => (
                        <Pressable
                            onPress={() => {
                                navigation.navigate('ScreenDetailAppointment', {
                                    info : item.item
                                })
                            }}
                            style={{
                                width: 360,
                                borderColor: '#80bfff',
                                borderWidth: 0.5,
                                borderRadius: 8,
                                marginTop: 15,
                                padding: 10
                            }}>
                            <View style={{
                                flexDirection: 'row',
                            }}>
                                <PersonIcon color='primary' style={{ fontSize: 30, width: 40 }} />
                                <Text style={{
                                    color: '#1a8cff',
                                    fontSize: 18,
                                    fontWeight: 500,
                                    alignItems: 'center',
                                    margin: 4
                                }}>Bệnh nhân :{item.item.patientName}</Text>
                            </View>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                margin: 4
                            }}>
                                <VolunteerActivismIcon color='primary' style={{ fontSize: 30, width: 40 }} />
                                <Text style={{
                                    color: 'black',
                                    fontSize: 15,
                                    fontWeight: 450,
                                    width : 300
                                }}>Chuyên khoa : {item.item.departmentName}</Text>
                            </View>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                margin: 4
                            }}>
                                <LocalHospitalIcon color='primary' style={{ fontSize: 30, width: 40 }} />
                                <Text style={{
                                    color: 'black',
                                    fontSize: 15,
                                    fontWeight: 450
                                }}>Bệnh viện : {item.item.hospitalName}</Text>
                            </View>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                margin: 4
                            }}>
                                <CalendarMonthIcon color='primary' style={{ fontSize: 30, width: 40 }} />
                                <Text style={{
                                    color: 'black',
                                    fontSize: 15,
                                    fontWeight: 450,
                                    width: 300
                                }}>Ngày khám :{item.item.date}</Text>
                            </View>
                        </Pressable>
                    )}
                />
            </SafeAreaView>
        </ScrollView>
    )
}

export default ScreenAllBooking

const styles = StyleSheet.create({})