import { FlatList, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useEffect } from 'react';
import { Image } from 'react-native';
import { useState } from 'react';
import { TextInput } from 'react-native';
import { saveDepartment } from '../../../firebase/departments/writeDepartments';
import { getAllDepartments } from '../../../firebase/departments/readDepartments';

const ScreenSelectDepartment = ({ navigation, route }) => {
    const [hospitalPrams, setHospitalParams] = useState({});
    const [patientParams, setPatientParams] = useState({});
    const [search, setSearch] = useState('');
    const [departments, setDepartments] = useState([]);
    const [departmentsFiltered, setDepartmentssFiltered] = useState(departments);

    /* useEffect(() => {
        for (let i = 1; i < 20; i++) {
          saveDepartment(i, 'Khoa răng hàm mặt '+i);
        }
      }, []) */
    useEffect(() => {
        getAllDepartments((arr) => {
            setDepartments(arr);
            setDepartmentssFiltered(arr);
        });
    }, []);

    useEffect(() => {
        const filtered = departments.filter((item) =>
            item.name.toLowerCase().includes(search.toLowerCase())
        );
        setDepartmentssFiltered(filtered);
    }, [search]);

    useEffect(() => {
        navigation.setOptions({
            title: 'Chọn chuyên khoa khám',
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
        try {
            var { hospital, patient } = route.params;
            setHospitalParams(hospital);
            setPatientParams(patient);
        } catch (error) {
            console.log(error);
        }
    }, [navigation]);

    console.log('next', hospitalPrams);
    console.log('next', patientParams);

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
                    data={departmentsFiltered}
                    keyExtractor={(item)=> item.id}
                    renderItem={(item) => (
                        <Pressable
                            onPress={()=>{
                                navigation.navigate('ScreenSelectDate', {
                                    hospital : hospitalPrams,
                                    patient : patientParams,
                                    department : item.item
                                })
                            }}
                            style ={{
                                width : 350,
                                height : 50,
                                justifyContent : 'center',
                                padding : 5,
                                borderWidth : 0.5,
                                borderColor : '#1ac6ff',
                                borderRadius : 8, 
                                margin : 5
                            }}
                        >
                            <Text style={{
                                fontSize : 15,
                                color : '#33adff',
                                fontWeight : 500,
                                paddingLeft : 15
                            }}>
                                {item.item.name}
                            </Text>
                        </Pressable>
                    )}
                />
            </SafeAreaView>
        </ScrollView>
    )
}

export default ScreenSelectDepartment

const styles = StyleSheet.create({})