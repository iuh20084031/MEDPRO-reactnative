import { Pressable, Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'

const ScreenSelectedRecord = ({ navigation, route }) => {
    const [patientParams, setPatientParams] = useState({});

    useEffect(() => {
        try {
            const patient = route.params;
            console.log('đây là thông tin nhận được')
            console.log(patient)
            setPatientParams(patient);
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
                    }}>THÔNG TIN HỒ SƠ</Text>
                    <View>
                        <View style={styles.infoView}>
                            <Text style={{
                                fontSize: 16,
                                width: 140
                            }}>Họ và tên :</Text>
                            <Text style={{
                                fontSize: 16,
                                width: 200
                            }}>{patientParams.patienName}</Text>
                        </View>
                        <View style={styles.infoView}>
                            <Text style={{
                                fontSize: 16,
                                width: 140
                            }}>Mã số bệnh nhân :</Text>
                            <Text style={{
                                fontSize: 16,
                                width: 200
                            }}>{patientParams.patientCode}</Text>
                        </View>
                        <View style={styles.infoView}>
                            <Text style={{
                                fontSize: 16,
                                width: 140
                            }}>Ngày sinh :</Text>
                            <Text style={{
                                fontSize: 16,
                                width: 200
                            }}>{patientParams.dob}</Text>
                        </View>
                        <View style={styles.infoView}>
                            <Text style={{
                                fontSize: 16,
                                width: 140
                            }}>Giới tính :</Text>
                            <Text style={{
                                fontSize: 16,
                                width: 200
                            }}>{patientParams.male}</Text>
                        </View>
                        <View style={styles.infoView}>
                            <Text style={{
                                fontSize: 16,
                                width: 140
                            }}>Địa chỉ :</Text>
                            <Text style={{
                                fontSize: 16,
                                width: 200
                            }}>{patientParams.address}</Text>
                        </View>
                        <View style={styles.infoView}>
                            <Text style={{
                                fontSize: 16,
                                width: 140
                            }}>CCCD/Passport :</Text>
                            <Text style={{
                                fontSize: 16,
                                width: 200
                            }}>{patientParams.passport}</Text>
                        </View>
                        <View style={styles.infoView}>
                            <Text style={{
                                fontSize: 16,
                                width: 140
                            }}>Mã bảo hiểm y tế :</Text>
                            <Text style={{
                                fontSize: 16,
                                width: 200
                            }}>{patientParams.bhyt}</Text>
                        </View>
                        <View style={styles.infoView}>
                            <Text style={{
                                fontSize: 16,
                                width: 140
                            }}>Nghề nghiệp :</Text>
                            <Text style={{
                                fontSize: 16,
                                width: 200
                            }}>{patientParams.profession}</Text>
                        </View>
                        <View style={styles.infoView}>
                            <Text style={{
                                fontSize: 16,
                                width: 140
                            }}>Số điện thoại :</Text>
                            <Text style={{
                                fontSize: 16,
                                width: 200
                            }}>{patientParams.phone}</Text>
                        </View>
                        <View style={styles.infoView}>
                            <Text style={{
                                fontSize: 16,
                                width: 140
                            }}>Email :</Text>
                            <Text style={{
                                fontSize: 16,
                                width: 200
                            }}>{patientParams.email}</Text>
                        </View>
                        <View style={styles.infoView}>
                            <Text style={{
                                fontSize: 16,
                                width: 140
                            }}>Địa chỉ :</Text>
                            <Text style={{
                                fontSize: 16,
                                width: 200
                            }}>{patientParams.address}</Text>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </ScrollView>
    )
}
export default ScreenSelectedRecord

const styles = StyleSheet.create({
    infoView: {
        flexDirection: 'row',
        padding: 10,
        borderBottomColor: '#ffffe6',
        borderBottomWidth: 0.1,
        borderBottomStyle: 'dotted',
    }
})