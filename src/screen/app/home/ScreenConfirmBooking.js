import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useState } from 'react';
import { Pressable } from 'react-native';

const ScreenConfimBooking = ({ navigation, route }) => {
  const [hospitalPrams, setHospitalParams] = useState({});
  const [patientParams, setPatientParams] = useState({});
  const [departmentParams, setDepartmentParams] = useState({});
  const [dateParams, setDateParams] = useState('');
  const [doctorParams, setDoctorParams] = useState({});

  useEffect(() => {
    try {
      var { hospital, patient, department, date, doctor } = route.params;
      setHospitalParams(hospital);
      setPatientParams(patient);
      setDepartmentParams(department);
      setDateParams(date);
      setDoctorParams(doctor);
    } catch (error) {
      console.log(error);
    }

    navigation.setOptions({
      title: 'Xác nhận thông tin đặt khám',
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
          padding : 5,
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
            textAlign : 'center',
            borderBottomColor : 'gray',
            borderBottomWidth : 0.1, 
            padding : 2
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
              }}>{patientParams.patienName}</Text>
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
              }}>{patientParams.patientCode}</Text>
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
              }}>{patientParams.dob}</Text>
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
              }}>{patientParams.male}</Text>
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
              }}>{patientParams.address}</Text>
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
              }}>{patientParams.passport}</Text>
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
              }}>{patientParams.bhyt}</Text>
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
              }}>{patientParams.profession}</Text>
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
              }}>{patientParams.phone}</Text>
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
              }}>{patientParams.email}</Text>
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
              }}>Đại chỉ :</Text>
              <Text style={{
                fontSize: 16,
                width: 200
              }}>{patientParams.address}</Text>
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
              }}>{hospitalPrams.name}</Text>
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
              }}>{departmentParams.name}</Text>
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
              }}>{doctorParams.name}</Text>
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
              }}>{doctorParams.price}</Text>
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
              }}>{dateParams}</Text>
            </View>
          </View>
        </View>
        <Pressable
          onPress={() => {

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
          }}>Xác nhận đặt khám</Text>
        </Pressable>
      </SafeAreaView>
    </ScrollView>
  )
}

export default ScreenConfimBooking

const styles = StyleSheet.create({})