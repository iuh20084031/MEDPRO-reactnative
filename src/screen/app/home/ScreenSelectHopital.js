import { FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Rating from '@mui/material/Rating';
import { saveHospital } from '../../../firebase/hopitals/writeHopital'
import {getAllHospitals} from '../../../firebase/hopitals/readHopital' 

const ScreenSelectHopital = ({ navigation, route }) => {
    const [search, setSearch] = useState('')
    const [hospital, setHospital] = useState([]);
    const [filteredHopital, setFilteredHopital] = useState([]);

    useEffect(() => {
        getAllHospitals((hospitalsArray) => {
          setHospital(hospitalsArray);
          setFilteredHopital(hospitalsArray);
        });
      }, []);
    console.log(hospital)
    useEffect(() => {
        const filtered = hospital.filter((item) =>
            (item.name.toLowerCase() + item.address.toLowerCase()).includes(search.toLowerCase())
        );
        setFilteredHopital(filtered);
    }, [search]);

/*     useEffect(() => {
        for (let i = 1; i < 15; i++) {
            saveHospital(i, 'Bệnh viện XYZ ' + i, '456' + i + ' Đường ABC, Hà Nội', 4.2, 'https://th.bing.com/th/id/R.036b033a1e414bab9fa2cc8305c9a767?rik=gUxkE%2f9IfNPHpw&pid=ImgRaw&r=0');
        }
    }, []) */

    useEffect(() => {
        navigation.setOptions({
            title: 'Chọn cơ sở khám bệnh',
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
                    data={filteredHopital}
                    renderItem={(item) => (
                        <View style={{
                            marginTop : 10
                        }}>
                            <View style={{
                                width: 350,
                                height: 90,
                                borderColor: 'gray',
                                borderWidth: 0.5,
                                borderRadius: 8,
                                alignItems: 'center',
                                padding: 10,
                                flexDirection: 'row'
                            }}>
                                <Image
                                    source={{ uri: item.item.image}}
                                    style={{
                                        width: 60,
                                        height: 60
                                    }}
                                />
                                <View style={{
                                    paddingLeft: 10
                                }}>
                                    <Text style={{
                                        fontSize: 18,
                                        fontWeight: 500,
                                        color: '#3399ff',
                                        width: 300,
                                        lineHeight: 18
                                    }}>{item.item.name}</Text>
                                    <Text style={{
                                        fontSize: 13,
                                        color: 'black',
                                        width: 300,
                                        lineHeight: 15
                                    }}>{item.item.address}</Text>
                                    <Rating name="read-only" value={item.item.rate} readOnly style={{
                                        fontSize: 14
                                    }} />
                                </View>
                            </View>
                        </View> 
                    )}
                    keyExtractor={(item)=> item.id}
                />
            </SafeAreaView>
        </ScrollView>
    )
}

export default ScreenSelectHopital

const styles = StyleSheet.create({})