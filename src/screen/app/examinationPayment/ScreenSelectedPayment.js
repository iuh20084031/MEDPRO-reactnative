import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useState } from 'react';
import { Pressable } from 'react-native';
import { saveAppointment } from '../../../firebase/appointments/writeAppointments';

const ScreenSelectedPayment = ({ navigation, route }) => {
    const [hospitalPrams, setHospitalParams] = useState({});
    const [patientParams, setPatientParams] = useState({});
    const [departmentParams, setDepartmentParams] = useState({});
    const [dateParams, setDateParams] = useState('');
    const [doctorParams, setDoctorParams] = useState({});

    useEffect(() => {
        try {
            var { hospital, patient, department, date, doctor } = route.params;
            setHospitalParams(hospital);
            setPatientParams(patient);
            setDepartmentParams(department);
            setDateParams(date);
            setDoctorParams(doctor);
        } catch (error) {
            console.log(error);
        }

        navigation.setOptions({
            title: 'Xác nhận thông tin đặt khám',
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
    const handleConfirm = () => {
        saveAppointment(patientParams, hospitalPrams, departmentParams, doctorParams, dateParams);
        navigation.navigate("ScreenBookingSuccess")
    }
    return (
        <ScrollView>
            <SafeAreaView style={{
                width: '100%',
                padding: 10,
                backgroundColor: 'white',
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <View style={{
                    padding: 5,
                    borderRadius: 5,
                    shadowColor: 'rgba(0, 0, 0, 0.2)',
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 3,
                    shadowRadius: 5,
                }}>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: 500,
                        color: 'black',
                        margin: 20,
                        textAlign: 'center',
                        borderBottomColor: 'gray',
                        borderBottomWidth: 0.1,
                        padding: 2
                    }}>THÔNG TIN BỆNH NHÂN</Text>
                    <View>
                        <View style={styles.viewInfo}>
                            <Text style={styles.textLabel}>Họ và tên :</Text>
                            <Text style={styles.textField}>{patientParams.patienName}</Text>
                        </View>
                        <View style={styles.viewInfo}>
                            <Text style={styles.textLabel}>Mã số bệnh nhân :</Text>
                            <Text style={styles.textField}>{patientParams.patientCode}</Text>
                        </View>
                        <View style={styles.viewInfo}>
                            <Text style={styles.textLabel}>Ngày sinh :</Text>
                            <Text style={styles.textField}>{patientParams.dob}</Text>
                        </View>
                        <View style={styles.viewInfo}>
                            <Text style={styles.textLabel}>Giới tính :</Text>
                            <Text style={styles.textField}>{patientParams.male}</Text>
                        </View>
                        <View style={styles.viewInfo}>
                            <Text style={styles.textLabel}>Địa chỉ :</Text>
                            <Text style={styles.textField}>{patientParams.address}</Text>
                        </View>
                        <View style={styles.viewInfo}>
                            <Text style={styles.textLabel}>CCCD/Passport :</Text>
                            <Text style={styles.textField}>{patientParams.passport}</Text>
                        </View>
                        <View style={styles.viewInfo}>
                            <Text style={styles.textLabel}>Mã bảo hiểm y tế :</Text>
                            <Text style={styles.textField}>{patientParams.bhyt}</Text>
                        </View>
                        <View style={styles.viewInfo}>
                            <Text style={styles.textLabel}>Nghề nghiệp :</Text>
                            <Text style={styles.textField}>{patientParams.profession}</Text>
                        </View>
                        <View style={styles.viewInfo}>
                            <Text style={styles.textLabel}>Số điện thoại :</Text>
                            <Text style={styles.textField}>{patientParams.phone}</Text>
                        </View>
                        <View style={styles.viewInfo}>
                            <Text style={styles.textLabel}>Email :</Text>
                            <Text style={styles.textField}>{patientParams.email}</Text>
                        </View>
                        <View style={styles.viewInfo}>
                            <Text style={styles.textLabel}>Nơi khám :</Text>
                            <Text style={styles.textField}>{hospitalPrams.name}</Text>
                        </View>
                        <View style={styles.viewInfo}>
                            <Text style={styles.textLabel}>Chuyên khoa :</Text>
                            <Text style={styles.textField}>{departmentParams.name}</Text>
                        </View>
                        <View style={styles.viewInfo}>
                            <Text style={styles.textLabel}>Bác sĩ khám :</Text>
                            <Text style={styles.textField}>{doctorParams.name}</Text>
                        </View>
                        <View style={styles.viewInfo}>
                            <Text style={styles.textLabel}>Giá khám :</Text>
                            <Text style={styles.textField}>{doctorParams.price}</Text>
                        </View>
                        <View style={styles.viewInfo}>
                            <Text style={styles.textLabel}>Thời gian khám :</Text>
                            <Text style={styles.textField}>{dateParams}</Text>
                        </View>
                    </View>
                </View>
                <Pressable
                    onPress={handleConfirm}
                    style={{
                        marginTop: 20,
                        width: 200,
                        height: 50,
                        borderRadius: 8,
                        backgroundColor: '#1a75ff',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <Text style={{
                        color: 'white',
                        fontSize: 18,
                        fontWeight: 500
                    }}>Xác nhận đặt khám</Text>
                </Pressable>
            </SafeAreaView>
        </ScrollView>
    )
}

export default ScreenConfimBooking

const styles = StyleSheet.create({
    viewInfo: {
        flexDirection: 'row',
        padding: 10,
        borderBottomColor: '#ffffe6',
        borderBottomWidth: 0.1,
        borderBottomStyle: 'dotted',
    },
    textLabel: {
        fontSize: 16,
        width: 140
    },
    textField: {
        fontSize: 16,
        width: 200
    }

})