import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useEffect } from 'react';
import { Image } from 'react-native';
import { useState } from 'react';

const ScreenMoreInfo = ({navigation, route}) => {
    const [hospitalPrams, setHospitalParams] = useState({});
    const [patientParams, setPatientParams] = useState({});
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
        var {hospital, patient} = route.params;
        setHospitalParams(hospital);
        setPatientParams(patient);
    }, [navigation]);

    console.log('next',hospitalPrams);
    console.log('next', patientParams);
    
    return (
        <View>
            <Text>ScreenMoreInfo</Text>
        </View>
    )
}

export default ScreenMoreInfo

const styles = StyleSheet.create({})