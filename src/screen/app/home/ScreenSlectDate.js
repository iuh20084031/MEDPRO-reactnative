import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Pressable } from 'react-native';
import DatePicker from 'react-native-modern-datepicker';
import { format } from 'date-fns';
import { da } from 'date-fns/locale';

const ScreenSlectDate = ({ navigation, route }) => {
    const [hospitalPrams, setHospitalParams] = useState({});
    const [patientParams, setPatientParams] = useState({});
    const [departmentParams, setDepartmentParams] = useState({});
    const [selectedDate, setSelectedDate] = useState('');

    useEffect(() => {
        try {
            var { hospital, patient, department } = route.params;
            setHospitalParams(hospital);
            setPatientParams(patient);
            setDepartmentParams(department);
        } catch (error) {
            console.log(error);
        }
    }, [navigation]);

    useEffect(() => {
        navigation.setOptions({
            title: 'Thời gian đặt khám',
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

    function chuyenDoiNgay(chuoiNgay) {
        const parts = chuoiNgay.split('/');
        const nam = parts[0];
        const thang = parts[1];
        const ngay = parts[2];

        const ngayMoi = `${ngay}/${thang}/${nam}`;

        return ngayMoi;
    }
    const handleConfirm = () => {
        if (selectedDate) {
            navigation.navigate('ScreenSelectedDoctor', {
                hospital: hospitalPrams,
                patient: patientParams,
                department: departmentParams,
                date : selectedDate
            })
            console.log('Ngày và giờ được chọn:', selectedDate);
        } else {
            alert('Vui lòng chọn lại ngày và giờ.');
        }
    };

    return (
        <View>
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor : 'white'
            }}>
                <Text style={{
                    color: '#1a75ff',
                    fontSize: 20,
                    fontWeight: 500,
                    marginTop: 30
                }}>Chọn ngày - giờ đặt khám</Text>
                <DatePicker
                    options={{
                        backgroundColor: '#090C08',
                        textHeaderColor: '#FFA25B',
                        textDefaultColor: '#F6E7C1',
                        selectedTextColor: '#fff',
                        mainColor: '#F4722B',
                        textSecondaryColor: '#D6C7A1',
                        borderColor: 'rgba(122, 146, 165, 0.1)',
                    }}
                    current={selectedDate}
                    mode='date'
                    onSelectedChange={date => setSelectedDate(chuyenDoiNgay(date))}

                    style={{
                        width: 360,
                        height: 360,
                        borderRadius: 10,
                        marginTop: 10,
                    }}
                />
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
                    }}>Xác nhận thời gian</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default ScreenSlectDate

const styles = StyleSheet.create({})