import { FlatList, StyleSheet, Text, View, Pressable, Image, SafeAreaView, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { getAllNotifications } from '../../../firebase/notifications/readNotifications';
import { saveNotifications } from '../../../firebase/notifications/writeNotifications'

export const CreateNotificationComponent = () => {
    const [notificationsCreated, setNotificationsCreated] = useState(false);

    useEffect(() => {
        if (!notificationsCreated) {
            saveNotifications({ title: 'Ngày Sức Khỏe Việt', date: '20/10/2023', image: 'https://picsum.photos/60', categories: 'Sự kiện' });
            saveNotifications({ title: 'Ngày Sức Khỏe Hàn', date: '30/10/2023', image: 'https://picsum.photos/60', categories: 'Sự kiện' });
            setNotificationsCreated(true);
        }
    }, []);

    return (
        <View>
            {notificationsCreated ? (
                <Text>Patient records created successfully!</Text>
            ) : (
                <Text>Creating patient records...</Text>
            )}
        </View>
    );
};

const notiScreen = ({ navigation, route }) => {
    const [search, setSearch] = useState('');
    const [notification, setNotification] = useState([]);
    const [filteredNotification, setFilteredNotification] = useState([]);

    useEffect(() => {
        getAllNotifications((notiArr) => {
            setNotification(notiArr);
            setFilteredNotification(notiArr);
        })
    }, [])
    useEffect(() => {
        navigation.setOptions({
            title: 'Danh sách Thông báo',
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
        const filtered = notification.filter((item) =>
            (item.title.toLowerCase() + item.date.toLowerCase() + item.categories.toLowerCase()).includes(search.toLowerCase())
        );
        setFilteredNotification(filtered);
    }, [search]);

    return (
        <ScrollView>
            <SafeAreaView style={[styles.container, { flex: 1 }]}>
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
                    {/* <CreateNotificationComponent /> */}
                    <FlatList
                        data={filteredNotification}
                        renderItem={(item) => (
                            <Pressable
                                onPress={() => {
                                    console.log(item.item)
                                    // navigation.navigate('ScreenSelectedRecords', item.item)
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
                                        source={{ uri: item.item.image }}
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
                                        }}>{item.item.title}</Text>
                                        <Text style={{
                                            fontSize: 13,
                                            color: 'black',
                                            width: 300,
                                            lineHeight: 15
                                        }}>{item.item.date}</Text>
                                        <Text style={{
                                            fontSize: 13,
                                            color: 'black',
                                            width: 300,
                                            lineHeight: 15
                                        }}>Chuyên mục: {item.item.categories}</Text>

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

export default notiScreen

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

