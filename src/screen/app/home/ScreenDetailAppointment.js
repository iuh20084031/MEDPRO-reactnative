import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Image } from 'react-native';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native';
import { Pressable } from 'react-native';

const ScreenDetailAppointment = ({ navigation, route }) => {
    const [info, setInfo] = useState({});
    useEffect(() => {
        try {
            var { info } = route.params;
            setInfo(info);
            console.log(info)
        } catch (error) {
            console.log(error);
        }

        navigation.setOptions({
            title: 'Chi tiết phiếu đặt khám',
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
                    }}>THÔNG TIN BỆNH NHÂN</Text>
                    <View>
                        <View style={{
                            flexDirection: 'row',
                            padding: 10,
                            borderBottomColor: '#ffffe6',
                            borderBottomWidth: 0.1,
                            borderBottomStyle: 'dotted',
                        }}>
                            <Text style={{
                                fontSize: 16,
                                width: 140
                            }}>Họ và tên :</Text>
                            <Text style={{
                                fontSize: 16,
                                width: 200
                            }}>{info.patientName}</Text>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            padding: 10,
                            borderBottomColor: '#ffffe6',
                            borderBottomWidth: 0.1,
                            borderBottomStyle: 'dotted',
                        }}>
                            <Text style={{
                                fontSize: 16,
                                width: 140
                            }}>Mã số bệnh nhân :</Text>
                            <Text style={{
                                fontSize: 16,
                                width: 200
                            }}>{info.patientCode}</Text>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            padding: 10,
                            borderBottomColor: '#ffffe6',
                            borderBottomWidth: 0.1,
                            borderBottomStyle: 'dotted',
                        }}>
                            <Text style={{
                                fontSize: 16,
                                width: 140
                            }}>Ngày sinh :</Text>
                            <Text style={{
                                fontSize: 16,
                                width: 200
                            }}>{info.patientDob}</Text>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            padding: 10,
                            borderBottomColor: '#ffffe6',
                            borderBottomWidth: 0.1,
                            borderBottomStyle: 'dotted',
                        }}>
                            <Text style={{
                                fontSize: 16,
                                width: 140
                            }}>Giới tính :</Text>
                            <Text style={{
                                fontSize: 16,
                                width: 200
                            }}>{info.patientMale}</Text>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            padding: 10,
                            borderBottomColor: '#ffffe6',
                            borderBottomWidth: 0.1,
                            borderBottomStyle: 'dotted',
                        }}>
                            <Text style={{
                                fontSize: 16,
                                width: 140
                            }}>Địa chỉ :</Text>
                            <Text style={{
                                fontSize: 16,
                                width: 200
                            }}>{info.patientAddress}</Text>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            padding: 10,
                            borderBottomColor: '#ffffe6',
                            borderBottomWidth: 0.1,
                            borderBottomStyle: 'dotted',
                        }}>
                            <Text style={{
                                fontSize: 16,
                                width: 140
                            }}>CCCD/Passport :</Text>
                            <Text style={{
                                fontSize: 16,
                                width: 200
                            }}>{info.patientPassport}</Text>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            padding: 10,
                            borderBottomColor: '#ffffe6',
                            borderBottomWidth: 0.1,
                            borderBottomStyle: 'dotted',
                        }}>
                            <Text style={{
                                fontSize: 16,
                                width: 140
                            }}>Mã bảo hiểm y tế :</Text>
                            <Text style={{
                                fontSize: 16,
                                width: 200
                            }}>{info.patientBhyt}</Text>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            padding: 10,
                            borderBottomColor: '#ffffe6',
                            borderBottomWidth: 0.1,
                            borderBottomStyle: 'dotted',
                        }}>
                            <Text style={{
                                fontSize: 16,
                                width: 140
                            }}>Nghề nghiệp :</Text>
                            <Text style={{
                                fontSize: 16,
                                width: 200
                            }}>{info.patientProfession}</Text>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            padding: 10,
                            borderBottomColor: '#ffffe6',
                            borderBottomWidth: 0.1,
                            borderBottomStyle: 'dotted',
                        }}>
                            <Text style={{
                                fontSize: 16,
                                width: 140
                            }}>Số điện thoại :</Text>
                            <Text style={{
                                fontSize: 16,
                                width: 200
                            }}>{info.patientPhone}</Text>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            padding: 10,
                            borderBottomColor: '#ffffe6',
                            borderBottomWidth: 0.1,
                            borderBottomStyle: 'dotted',
                        }}>
                            <Text style={{
                                fontSize: 16,
                                width: 140
                            }}>Email :</Text>
                            <Text style={{
                                fontSize: 16,
                                width: 200
                            }}>{info.patientEmail}</Text>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            padding: 10,
                            borderBottomColor: '#ffffe6',
                            borderBottomWidth: 0.1,
                            borderBottomStyle: 'dotted',
                        }}>
                            <Text style={{
                                fontSize: 16,
                                width: 140
                            }}>Nơi khám :</Text>
                            <Text style={{
                                fontSize: 16,
                                width: 200
                            }}>{info.hospitalName}</Text>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            padding: 10,
                            borderBottomColor: '#ffffe6',
                            borderBottomWidth: 0.1,
                            borderBottomStyle: 'dotted',
                        }}>
                            <Text style={{
                                fontSize: 16,
                                width: 140
                            }}>Chuyên khoa :</Text>
                            <Text style={{
                                fontSize: 16,
                                width: 200
                            }}>{info.departmentName}</Text>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            padding: 10,
                            borderBottomColor: '#ffffe6',
                            borderBottomWidth: 0.1,
                            borderBottomStyle: 'dotted',
                        }}>
                            <Text style={{
                                fontSize: 16,
                                width: 140
                            }}>Bác sĩ khám :</Text>
                            <Text style={{
                                fontSize: 16,
                                width: 200
                            }}>{info.doctorName}</Text>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            padding: 10,
                            borderBottomColor: '#ffffe6',
                            borderBottomWidth: 0.1,
                            borderBottomStyle: 'dotted',
                        }}>
                            <Text style={{
                                fontSize: 16,
                                width: 140
                            }}>Giá khám :</Text>
                            <Text style={{
                                fontSize: 16,
                                width: 200
                            }}>{info.price}</Text>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            padding: 10,
                            borderBottomColor: '#ffffe6',
                            borderBottomWidth: 0.1,
                            borderBottomStyle: 'dotted',
                        }}>
                            <Text style={{
                                fontSize: 16,
                                width: 140
                            }}>Thời gian khám :</Text>
                            <Text style={{
                                fontSize: 16,
                                width: 200
                            }}>{info.date}</Text>
                        </View>
                    </View>
                </View>
                <Pressable
                    onPress={()=> {
                        navigation.navigate('ScreenHome')
                    }}
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
                    }}>Trở về trang chính</Text>
                </Pressable>
            </SafeAreaView>
        </ScrollView>
    )
}

export default ScreenDetailAppointment

const styles = StyleSheet.create({})