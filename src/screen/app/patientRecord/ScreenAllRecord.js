import { FlatList, StyleSheet, Text, View, Pressable, Image, SafeAreaView, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { getAllPatientRecords } from '../../../firebase/patientRecords/readPatientRecord';

const ScreenAllRecord = ({ navigation, route }) => {
    const [search, setSearch] = useState('');
    const [record, setRecord] = useState([]);
    const [filteredRecord, setFilteredRecord] = useState([]);

    useEffect(() => {
        getAllPatientRecords((recordArr) => {
            setRecord(recordArr);
            setFilteredRecord(recordArr);
        })
        navigation.setOptions({
            title: 'Danh sách hồ sơ đã tạo',
            headerRight: () => (
                <View style={{ marginRight: 10 }}>
                    <View
                        style={{
                            flexDirection: 'row', alignItems: 'center'
                        }}
                    >
                        <Pressable style={styles.press} onPress={() => { navigation.navigate("ScreenNewRecord") }}>
                            <View style={{ flexDirection: 'column', alignItems: 'center', gap: 5, alignItems: 'center' }}>
                                <Icon name='user-plus' size={20} color={'white'} />
                                <Text style={{ fontSize: 12, color: 'white', fontWeight: 600 }}>Tạo mới</Text>
                            </View>
                        </Pressable>
                        <Image
                            source={require('../../../../images/medLogo2.png')}
                            style={{
                                width: 60,
                                height: 60,
                                resizeMode: 'contain',
                                marginLeft: 20
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
        const filtered = record.filter((item) =>
            (item.patienName.toLowerCase() + item.address.toLowerCase()).includes(search.toLowerCase())
        );
        setFilteredRecord(filtered);
    }, [search]);

    return (
        <ScrollView>
            <SafeAreaView style={[styles.container, { flex: 1 , backgroundColor:'white'}]}>
                <View style={styles.container}>
                    <View style={styles.searchBar}>
                        <Image source={require('../../../../images/search.png')}
                            style={{ width: 25, height: 25, }} />
                        <TextInput placeholder='Search' placeholderTextColor={'gray'}
                            value={search} onChangeText={(text) => setSearch(text)}
                            style={{
                                width: '90%', lineHeight: 20,
                                color: 'black', paddingLeft: 15
                            }}
                        />
                    </View>
                    <FlatList
                        data={filteredRecord}
                        renderItem={(item) => (
                            <Pressable
                                onPress={() => {
                                    console.log(item.item)
                                    console.log({ record: item.item });
                                    navigation.navigate('ScreenSelectedRecords', item.item)
                                }}
                                style={{
                                    marginTop: 10
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
                                        source={{ uri: 'https://picsum.photos/60' }}
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
                                        }}>{item.item.patienName}</Text>
                                        <Text style={{
                                            fontSize: 13,
                                            color: 'black',
                                            width: 300,
                                            lineHeight: 15
                                        }}>{item.item.address}</Text>

                                    </View>
                                </View>
                            </Pressable>
                        )}
                        keyExtractor={(item) => item.id}
                    />

                </View>
            </SafeAreaView>
        </ScrollView>
    )
}

export default ScreenAllRecord

const styles = StyleSheet.create({
    searchBar: {
        width: '90%',
        borderWidth: 1,
        borderColor: 'gray',
        flexDirection: 'row',
        padding: 10,
        borderRadius: 8,
        marginTop: 20,
        marginBottom: 20
    },
    container: {
        display: 'flex', flexDirection: 'column', gap: 10, height: '100%',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat', alignItems: 'center'
    },
    topNav: {
        width: "100%", alignItems: 'center', justifyContent: "space-around", backgroundColor: '#3385ff', gap: 10, padding: 20,
        borderBottomLeftRadius: 30, borderBottomRightRadius: 30, flexDirection: 'row'
    },
    filterBtn: {
        alignItems: 'center', justifyContent: "center", gap: 10, flexDirection: 'row', paddingTop: 10, paddingBottom: 10, paddingLeft: 15, paddingRight: 15, borderRadius: 200, backgroundColor: 'white'
    },
    pressBtn: {
        alignItems: 'center', justifyContent: "space-around",
        flexDirection: 'row', padding: 10, borderRadius: 200,
        backgroundColor: '#ECECEC', border: '1px solid gray'
    },
    btnDangky: {
        alignItems: 'center', justifyContent: "space-around",
        flexDirection: 'row', padding: 10, borderRadius: 10,
        backgroundColor: '#00b1f5', width: '90%', height: '10%'
    }

})