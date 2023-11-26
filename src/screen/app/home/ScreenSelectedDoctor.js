import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native';
import { useState } from 'react';
import { useEffect } from 'react';
import { TextInput } from 'react-native';
import { Pressable } from 'react-native';
import PersonIcon from '@mui/icons-material/Person';
import TransgenderIcon from '@mui/icons-material/Transgender';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PriceChangeIcon from '@mui/icons-material/PriceChange';
import { getAllDoctors } from '../../../firebase/doctors/readDoctors';
import { saveDoctor } from '../../../firebase/doctors/writeDoctors';


const ScreenSelectedDoctor = ({ navigation, route }) => {
    const [hospitalPrams, setHospitalParams] = useState({});
    const [patientParams, setPatientParams] = useState({});
    const [departmentParams, setDepartmentParams] = useState({});
    const [dateParams, setDateParams] = useState('');
    const [search, setSearch] = useState('')
    const [doctors, setDoctors] = useState([]);
    const [doctorsFiltered, setDoctorsFiltered] = useState(doctors);

    /* useEffect(() => {
        for (let i = 1; i < 12; i++) {
            saveDoctor(i, "Bác sĩ Nha hoa - Phạm Nhật Linh " + i, "Nam", "Nha Khoa", "20/12/2023", "120.000");
        }
    }, []); */
    useEffect(() => {
        const filtered = doctors.filter((item) =>
            (item.name.toLowerCase() + item.male.toLowerCase() + item.department.toLowerCase()).includes(search.toLowerCase())
        );
        setDoctorsFiltered(filtered);
    }, [search]);

    useEffect(() => {
        getAllDoctors((arr) => {
            setDoctors(arr);
            setDoctorsFiltered(arr);
        })
        try {
            var { hospital, patient, department, date } = route.params;
            setHospitalParams(hospital);
            setPatientParams(patient);
            setDepartmentParams(department);
            setDateParams(date);
        } catch (error) {
            console.log(error);
        }

        navigation.setOptions({
            title: 'Lựa chọn bác sĩ',
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
                    data={doctorsFiltered}
                    keyExtractor={(item) => item.id}
                    renderItem={(item) => (
                        <Pressable
                            onPress={() => {
                                navigation.navigate('ScreenConfirmBooking', {
                                    hospital: hospitalPrams,
                                    patient: patientParams,
                                    department: departmentParams,
                                    date: dateParams,
                                    doctor : item.item
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
                                }}>{item.item.name}</Text>
                            </View>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                margin: 4
                            }}>
                                <TransgenderIcon color='primary' style={{ fontSize: 30, width: 40 }} />
                                <Text style={{
                                    color: 'black',
                                    fontSize: 15,
                                    fontWeight: 450
                                }}>Giới tính : {item.item.male}</Text>
                            </View>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                margin: 4
                            }}>
                                <HealthAndSafetyIcon color='primary' style={{ fontSize: 30, width: 40 }} />
                                <Text style={{
                                    color: 'black',
                                    fontSize: 15,
                                    fontWeight: 450
                                }}>Chuyên khoa : {item.item.department}</Text>
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
                                }}>Lịch khám :{item.item.date}</Text>
                            </View>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                margin: 4
                            }}>
                                <PriceChangeIcon color='primary' style={{ fontSize: 30, width: 40 }} />
                                <Text style={{
                                    color: 'black',
                                    fontSize: 15,
                                    fontWeight: 450,
                                    width: 300
                                }}>Giá khám :{item.item.price}đ</Text>
                            </View>
                        </Pressable>
                    )}
                />
            </SafeAreaView>
        </ScrollView>
    )
}

export default ScreenSelectedDoctor

const styles = StyleSheet.create({})