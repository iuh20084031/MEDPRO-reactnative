import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View, } from 'react-native'
import React, { useEffect } from 'react'
import { useState } from 'react';
import { Pressable } from 'react-native';
import { saveAppointment } from '../../../firebase/appointments/writeAppointments';
import { RadioButton } from 'react-native-paper';
const ScreenSelectedPayment = ({ navigation, route }) => {
    const [appointmentParams, setAppointmentParams] = useState({});
    const handleConfirm = () => {
        navigation.navigate("ScreenPaymentCheckOut")
    }
    const [paymentMethod, setPaymentMethod] = useState("at_hospital");

    const onPaymentMethodChange = (event) => {
        setPaymentMethod(event.target.value);
    };
    useEffect(() => {
        try {
            const appointment = route.params;
            console.log('đây là thông tin nhận được')
            console.log(appointment)
            setAppointmentParams(appointment);
        } catch (error) {
            console.log(error);
        }
        navigation.setOptions({
            title: 'Thông tin phiếu thanh toán',
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
                    }}>THÔNG TIN THANH TOÁN</Text>
                    <View>
                        <View style={styles.viewInfo}>
                            <Text style={styles.textLabel}>Họ và tên :</Text>
                            <Text style={styles.textField}>{appointmentParams.patientName}</Text>
                        </View>
                        <View style={styles.viewInfo}>
                            <Text style={styles.textLabel}>Mã số bệnh nhân :</Text>
                            <Text style={styles.textField}>{appointmentParams.patientCode}</Text>
                        </View>
                        <View style={styles.viewInfo}>
                            <Text style={styles.textLabel}>Ngày sinh :</Text>
                            <Text style={styles.textField}>{appointmentParams.patientDob}</Text>
                        </View>
                        <View style={styles.viewInfo}>
                            <Text style={styles.textLabel}>Giới tính :</Text>
                            <Text style={styles.textField}>{appointmentParams.patientMale}</Text>
                        </View>
                        <View style={styles.viewInfo}>
                            <Text style={styles.textLabel}>Địa chỉ :</Text>
                            <Text style={styles.textField}>{appointmentParams.patientAddress}</Text>
                        </View>
                        <View style={styles.viewInfo}>
                            <Text style={styles.textLabel}>CCCD/Passport :</Text>
                            <Text style={styles.textField}>{appointmentParams.patientPassport}</Text>
                        </View>
                        <View style={styles.viewInfo}>
                            <Text style={styles.textLabel}>Mã bảo hiểm y tế :</Text>
                            <Text style={styles.textField}>{appointmentParams.patientBhyt}</Text>
                        </View>
                        <View style={styles.viewInfo}>
                            <Text style={styles.textLabel}>Nghề nghiệp :</Text>
                            <Text style={styles.textField}>{appointmentParams.patientProfession}</Text>
                        </View>
                        <View style={styles.viewInfo}>
                            <Text style={styles.textLabel}>Số điện thoại :</Text>
                            <Text style={styles.textField}>{appointmentParams.patientPhone}</Text>
                        </View>
                        <View style={styles.viewInfo}>
                            <Text style={styles.textLabel}>Email :</Text>
                            <Text style={styles.textField}>{appointmentParams.patientEmail}</Text>
                        </View>
                        <View style={styles.viewInfo}>
                            <Text style={styles.textLabel}>Nơi khám :</Text>
                            <Text style={styles.textField}>{appointmentParams.hospitalName}</Text>
                        </View>
                        <View style={styles.viewInfo}>
                            <Text style={styles.textLabel}>Chuyên khoa :</Text>
                            <Text style={styles.textField}>{appointmentParams.departmentName}</Text>
                        </View>
                        <View style={styles.viewInfo}>
                            <Text style={styles.textLabel}>Bác sĩ khám :</Text>
                            <Text style={styles.textField}>{appointmentParams.doctorName}</Text>
                        </View>
                        <View style={styles.viewInfo}>
                            <Text style={styles.textLabel}>Giá khám :</Text>
                            <Text style={styles.textField}>{appointmentParams.price}</Text>
                        </View>
                        <View style={styles.viewInfo}>
                            <Text style={styles.textLabel}>Thời gian khám :</Text>
                            <Text style={styles.textField}>{appointmentParams.date}</Text>
                        </View>
                    </View>
                </View>
                {/* Lựa chọn hình thức thanh toán */}
                <View style={styles.container}>
                    <Text style={styles.title}>Chọn hình thức thanh toán</Text>
                    <View style={styles.radioGroup}>
                        <RadioButton
                            value="at_hospital"
                            onChange={onPaymentMethodChange}
                            selected={paymentMethod === "at_hospital"}
                        />
                        <Text style={styles.radioText}>Thanh toán tại bệnh viện</Text>
                    </View>
                    <View style={styles.radioGroup}>
                        <RadioButton
                            value="transfer"
                            onChange={onPaymentMethodChange}
                            selected={paymentMethod === "transfer"}
                        />
                        <Text style={styles.radioText}>Thanh toán chuyển khoản</Text>
                    </View>
                    {paymentMethod === "transfer" && (
                        <View style={styles.qrCode}>
                            <Image
                                source={require("../../../../images/maqrkalite.jpg")}
                                style={styles.qrCodeImage}
                            />
                        </View>
                    )}
                    <View style={styles.qrCode}>
                        <Image
                            source={require("../../../../images/maqrkalite.jpg")}
                            style={styles.qrCodeImage}
                        />
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
                    }}>Xác nhận Thanh Toán</Text>
                </Pressable>
            </SafeAreaView>
        </ScrollView>
    )
}

export default ScreenSelectedPayment

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
    },
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
    },
    radioGroup: {
        flexDirection: "row",
        margin: 10,
    },
    radioText: {
        marginLeft: 10,
    },
    qrCode: {
        width: 200,
        height: 200,
    },
    qrCodeImage: {
        width: '100%',
        height: '100%',
    },

})