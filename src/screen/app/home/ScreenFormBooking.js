import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Image } from 'react-native';
import { Pressable } from 'react-native';

const ScreenFormBooking = ({ navigation, route }) => {
    useEffect(() => {
        navigation.setOptions({
            title: 'Thông tin đặt lịch',
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
        <View>
            <Text>ScreenFormBooking</Text>
        </View>
    )
}

export default ScreenFormBooking

const styles = StyleSheet.create({})