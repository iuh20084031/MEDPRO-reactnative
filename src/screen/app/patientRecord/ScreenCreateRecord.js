import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Pressable, Text, TextInput, Picker, Switch, Button, ScrollView, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import { savePatientRecord } from '../../../firebase/patientRecords/writePatientRecord'

const PatientRecordsComponent = () => {
    const [patientRecordsCreated, setPatientRecordsCreated] = useState(false);

    useEffect(() => {
        if (!patientRecordsCreated) {
            savePatientRecord(
                3,
                "Phạm Nhật Linh",
                "VIP-20084031",
                "20/01/2002",
                "Nam",
                "044200221139",
                "2005566789",
                "Sinh viên",
                "0906702589",
                "nhatlinhdev201@gmail.com",
                "Zen tower, Q12, TP HCM"
            );
            savePatientRecord(
                4,
                "Phạm Nhật Link",
                "VIP-20084032",
                "20/08/2002",
                "Nam",
                "044200221139",
                "2005566789",
                "Sinh viên",
                "0906702589",
                "nhatlinhdev201@gmail.com",
                "Zen tower, Q12, TP HCM"
            );

            setPatientRecordsCreated(true);
        }
    }, []);

    return (
        <View>
            {patientRecordsCreated ? (
                <Text>Patient records created successfully!</Text>
            ) : (
                <Text>Creating patient records...</Text>
            )}
        </View>
    );
};


const ScreenCreateRecord = () => {
    const [patientInformation, setPatientInformation] = useState({
        id: '',
        name: '',
        dateOfBirth: '',
        gender: '',
        healthInsuranceCode: '',
        cccd: '',
        occupation: '',
        phoneNumber: '',
        relationship: '',
        address: '',
        email: ''
    });

    const handleInputChange = (key, value) => {
        setPatientInformation((prevState) => ({
            ...prevState,
            [key]: value,
        }));
    };

    const handleSubmit = () => {
        // Submit the patient information to the server.
        const id = patientInformation.id;
        const patientName = patientInformation.name;
        const patientCode = patientInformation.id;
        const dob = patientInformation.dateOfBirth;
        const male = patientInformation.gender;
        const passport = patientInformation.cccd;
        const bhyt = patientInformation.healthInsuranceCode;
        const profession = patientInformation.occupation;
        const phone = patientInformation.phoneNumber;
        const email = patientInformation.email;
        const address = patientInformation.address;

        // Send the extracted patient data to the database
        savePatientRecord(id,
            patientName,
            patientCode,
            dob,
            male,
            passport,
            bhyt,
            profession,
            phone,
            email,
            address
        );

    };

    return (

        <ScrollView >
            <SafeAreaView>
                <View style={styles.container}>
                    <View style={styles.topNav}>
                        <Pressable style={styles.press} onPress={() => { navigation.navigate("ScreenHome") }}>
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
                    <View style={{ width: '100%', padding: 10 }}>
                        <TextInput
                            style={styles.nhap}
                            placeholder="Nhập số Id (dễ nhớ)"
                            value={patientInformation.id}
                            onChangeText={(value) => handleInputChange('id', value)}
                        />
                        <TextInput
                            style={styles.nhap}
                            placeholder="Họ và tên (có dấu)"
                            value={patientInformation.name}
                            onChangeText={(value) => handleInputChange('name', value)}
                        />
                        <TextInput
                            style={styles.nhap}
                            placeholder="Ngày sinh"
                            date={patientInformation.dateOfBirth}
                            onDateChange={(date) => handleInputChange('dateOfBirth', date)}
                        />
                        <Text style={styles.texts}>Giới Tính</Text>
                        <Picker
                            style={styles.picker}
                            selectedValue={patientInformation.gender}
                            onValueChange={(value) => handleInputChange('gender', value)}
                        >

                            <Picker.Item label="Nam" value="male" />
                            <Picker.Item label="Nữ" value="female" />
                        </Picker>
                        <TextInput
                            style={styles.nhap}
                            placeholder="Mã bảo hiểm y tế"
                            value={patientInformation.healthInsuranceCode}
                            onChangeText={(value) => handleInputChange('healthInsuranceCode', value)}
                        />
                        <TextInput
                            style={styles.nhap}
                            placeholder="CMND/Passport"
                            value={patientInformation.cccd}
                            onChangeText={(value) => handleInputChange('cccd', value)}
                        />
                        <Picker
                            style={styles.picker}
                            selectedValue={patientInformation.occupation}
                            onValueChange={(value) => handleInputChange('occupation', value)}
                        >
                            <Picker.Item label="Chọn nghề nghiệp" value="" />
                            <Picker.Item label="Công nhân" value="worker" />
                            <Picker.Item label="Nhân viên văn phòng" value="office_worker" />
                            <Picker.Item label="Giáo viên" value="teacher" />
                            <Picker.Item label="Bác sĩ" value="doctor" />
                        </Picker>
                        <TextInput
                            style={styles.nhap}
                            placeholder="Số điện thoại"
                            value={patientInformation.phoneNumber}
                            onChangeText={(value) => handleInputChange('phoneNumber', value)}
                        />
                        <Text style={styles.texts}>Mối quan hệ với bạn</Text>
                        <Picker
                            style={styles.picker}
                            selectedValue={patientInformation.relationship}
                            onValueChange={(value) => handleInputChange('relationship', value)}
                        >
                            <Picker.Item label="Chọn mối quan hệ" value="null" />
                            <Picker.Item label="Vợ/Chồng" value="vợ chồng" />
                            <Picker.Item label="bản thân" value="bản thân" />
                            <Picker.Item label="Mẹ" value="mẹ" />
                            <Picker.Item label="Bố" value="bố" />
                            <Picker.Item label="Con" value="con" />
                        </Picker>
                        <Text style={styles.texts}>Địa chỉ:</Text>
                        <TextInput
                            style={styles.nhap}
                            placeholder="Ấp/khu phố, phường/xã, quận/huyện, Tỉnh/TP"
                            value={patientInformation.address}
                            onChangeText={(value) => handleInputChange('address', value)}
                        />
                        <Text style={styles.texts}>Email:</Text>
                        <TextInput
                            style={styles.nhap}
                            placeholder="vd: mailcuatoi@gmail.com"
                            value={patientInformation.email}
                            onChangeText={(value) => handleInputChange('email', value)}
                        />
                        <Pressable style={styles.btnDangky} onPress={handleSubmit}>
                            <Text style={{ fontSize: 20, color: 'white', fontWeight: 400, textAlign: 'center', width: '100%' }}>Tạo hồ sơ mới</Text>
                        </Pressable>
                    </View>

                </View>
            </SafeAreaView>
        </ScrollView>

    );
};
export default ScreenCreateRecord;
const styles = StyleSheet.create({
    texts: {
        marginLeft: 10,
    },
    container: {
        display: 'flex', flexDirection: 'column', gap: 10, width: '100%',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat', alignItems: 'center'
    },
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
    },
    label: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 10,
    },
    nhap: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 25, // Use pixels instead of 'px'
        padding: 10,
        margin: 10,
        overflow: 'hidden'
    },
    picker: {
        borderWidth: 1,
        borderColor: '#ccc', borderRadius: 100,
        padding: 10,
        margin: 10,
        borderRadius: 5,
    },
    switchLabel: {
        fontSize: 16,
    },
    topNav: {
        width: "100%", alignItems: 'center', justifyContent: "space-around", backgroundColor: '#00B1F5', gap: 10, padding: 20,
        borderBottomLeftRadius: 30, borderBottomRightRadius: 30, flexDirection: 'row'
    },
    btnDangky: {
        alignItems: 'center', justifyContent: "space-around",
        flexDirection: 'row', padding: 10, borderRadius: 100,
        backgroundColor: '#00b1f5', width: '100%'
    },
});
