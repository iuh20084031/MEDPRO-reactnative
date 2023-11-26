import React, { useEffect } from 'react';
import { useState } from 'react';
import { View, Text, Image } from 'react-native';

const ScreenCreateSucces = ({ navigation, route }) => {
    const [countdown, setCountdown] = useState(5);

    useEffect(() => {
        const interval = setInterval(() => {
            setCountdown((prevCountdown) => prevCountdown - 1);
        }, 1000);
        if (countdown === 0) {
            clearInterval(interval);
            navigation.navigate('ScreenAllRecord');
        }

        return () => clearInterval(interval);
    }, [countdown, navigation]);

    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Image
                source={require('../../../../images/success.gif')}
                style={{
                    width: 300,
                    height: 300,
                    borderRadius: 300,
                    marginBottom: 30
                }}
            />
            <Text style={{
                fontSize: 22,
                fontWeight: 500,
                color: '#1a8cff'
            }}>Tạo thành công hồ sơ mới !</Text>
            <Text style={{
                fontSize: 15,
                fontWeight: 500,
                color: '#1a8cff',
                marginTop : 30, 
                width : 300,
                textAlign : 'center'

            }}>{`Quay trở về trang danh sách hồ sơ đã tạo sau ${countdown} giây`}</Text>
        </View>
    );
};

export default ScreenCreateSucces;
