import { FlatList, Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';
import { savePatientRecord } from '../../../firebase/patientRecords/writePatientRecord';
import { getAllPatientRecords, getallPatientRecors } from '../../../firebase/patientRecords/readPatientRecord'
import { SafeAreaView } from 'react-native';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import CakeIcon from '@mui/icons-material/Cake';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const ScreenSelectPatient = ({ navigation, route }) => {
    const [hospitalPrams, setHospitalParams] = useState({});
    const [patients, setPatients] = useState([]);
    /* useEffect(()=>{
        savePatientRecord(1, "Phạm Nhật Linh", "VIP-20084031", "20/01/2002", "Nam", "044200221139", "2005566789", "Sinh viên", "0906702589", "nhatlinhdev201@gmail.com","Zen tower, Q12, TP HCM");
        savePatientRecord(2, "Phạm Nhật Link", "VIP-20084032", "20/08/2002", "Nam", "044200221139", "2005566789", "Sinh viên", "0906702589", "nhatlinhdev201@gmail.com","Zen tower, Q12, TP HCM");
    },[]); */
    useEffect(() => {
        navigation.setOptions({
            title: 'Chọn hồ sơ bệnh nhân',
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

    useEffect(() => {
        var hos = route.params?.hospital;
        hos ? setHospitalParams(hos) : null;
        console.log(hospitalPrams);
    }, [navigation]);

    useEffect(() => {
        getAllPatientRecords((patientRs) => {
            setPatients(patientRs);

        })
    }, [])
    console.log(patients)
    return (
        <ScrollView>
            <SafeAreaView style={{
                width: '100%',
                flex: 1,
                alignItems: 'center'
            }}>
                <FlatList
                    data={patients}
                    renderItem={(item) => (
                        <Pressable
                            onPress={() => {
                                navigation.navigate('ScreenSelectDepartment', {
                                    hospital : hospitalPrams,
                                    patient : item.item
                                })
                                console.log(hospitalPrams, item.item)
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
                                <AccountCircleIcon color='primary' style={{ fontSize: 30, width: 40 }} />
                                <Text style={{
                                    color: '#1a8cff',
                                    fontSize: 18,
                                    fontWeight: 500,
                                    alignItems: 'center',
                                    margin: 4
                                }}>{item.item.patienName}</Text>
                            </View>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                margin: 4
                            }}>
                                <PhoneAndroidIcon color='primary' style={{ fontSize: 30, width: 40 }} />
                                <Text style={{
                                    color: 'black',
                                    fontSize: 15,
                                    fontWeight: 450
                                }}>{item.item.phone}</Text>
                            </View>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                margin: 4
                            }}>
                                <CakeIcon color='primary' style={{ fontSize: 30, width: 40 }} />
                                <Text style={{
                                    color: 'black',
                                    fontSize: 15,
                                    fontWeight: 450
                                }}>{item.item.dob}</Text>
                            </View>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                margin: 4
                            }}>
                                <LocationOnIcon color='primary' style={{ fontSize: 30, width: 40 }} />
                                <Text style={{
                                    color: 'black',
                                    fontSize: 15,
                                    fontWeight: 450,
                                    width: 300
                                }}>{item.item.address}</Text>
                            </View>
                        </Pressable>
                    )}
                    keyExtractor={(item) => item.id}
                />
            </SafeAreaView>
        </ScrollView>
    )
}

export default ScreenSelectPatient

const styles = StyleSheet.create({})