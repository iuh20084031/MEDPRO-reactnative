import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image, Pressable, ImageBackground } from 'react-native'
import React from 'react'
import { useEffect } from 'react';
import { useSelector } from 'react-redux/es/hooks/useSelector';

const ScreenHome = ({ navigation, route }) => {
  const user = useSelector((state)=> state.user);
  console.log('user :', user)
  useEffect(() => {
    navigation.setOptions({
      title: '',
      headerRight: () => (
        <View style={{ marginRight: 10 }}>
          <View
            style={{
              flexDirection: 'row'
            }}
          >
            <View>
              <Text style={{ fontSize: 17, fontWeight: 750, color: 'white', marginTop: 15 }}>Medpro xin chào </Text>
              <Text style={{ fontSize: 15, fontWeight: 600, color: 'white' }}>{user}</Text>
            </View>
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
      headerLeft: () => (
        <Pressable
          onPress={() => {
            navigation.navigate('TabAccount');
          }}
        >
          <Image
            source={require('../../../../images/avt.jpg')}
            style={{
              width: 40,
              height: 40,
              margin: 15,
              resizeMode: 'contain',
              borderRadius: '50%'
            }}
          />
        </Pressable>
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
    <View style={{
      flex: 1,
      alignItems: 'center',
    }}>
      <ScrollView style={{
        width: '96%'
      }}>
        <SafeAreaView style={{
          borderRadius: 8,
          marginTop: 10,
          alignItems: 'center',
        }}>
          <View style={{
            width: '100%',
            alignItems: 'center',
            shadowColor: 'rgba(0, 0, 0, 0.4)', // Màu của shadow (gray nhạt dần)
            shadowOffset: { width: 0, height: 0 }, // Độ dịch của shadow theo chiều ngang và dọc
            shadowOpacity: 1, // Độ đậm của shadow (tối đa)
            shadowRadius: 10, // Độ cong của shadow
            elevation: 5,
          }}>
            <View style={{
              flexDirection: 'row',
            }}>
              <Pressable
                onPress={() => {
                  navigation.navigate('ScreenSelectHopital', {})
                }}
                style={{
                  width: 130,
                  height: 130,
                  backgroundColor: 'white',
                  margin: 1,
                  borderRadius: 8,
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                <Image
                  source={require('../../../../images/med1.png')}
                  style={{
                    width: 70,
                    height: 70
                  }}
                />
                <Text style={{
                  width: 80,
                  textAlign: 'center'
                }}>Đặt khám tại cơ sở</Text>
              </Pressable>
              <Pressable
                onPress={() => {
                  navigation.navigate('ScreenAllBooking', {});
                }}
                style={{
                  width: 130,
                  height: 130,
                  backgroundColor: 'white',
                  margin: 1,
                  borderRadius: 8,
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                <Image
                  source={require('../../../../images/med3.png')}
                  style={{
                    width: 70,
                    height: 70
                  }}
                />
                <Text style={{
                  width: 80,
                  textAlign: 'center'
                }}>Xem lịch đặt khám</Text>
              </Pressable>
              <Pressable 
              onPress={()=>{
                navigation.navigate('ScreenSelectHopital')
              }}
              style={{
                width: 130,
                height: 130,
                backgroundColor: 'white',
                margin: 1,
                borderRadius: 8,
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Image
                  source={require('../../../../images/med4.png')}
                  style={{
                    width: 70,
                    height: 70
                  }}
                />
                <Text style={{
                  width: 80,
                  textAlign: 'center'
                }}>Đặt khám bác sĩ</Text>
              </Pressable>
            </View>

            <View style={{
              flexDirection: 'row',
            }}>
              <Pressable style={{
                width: 130,
                height: 130,
                backgroundColor: 'white',
                margin: 1,
                borderRadius: 8,
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Image
                  source={require('../../../../images/med6.png')}
                  style={{
                    width: 70,
                    height: 70
                  }}
                />
                <Text style={{
                  width: 80,
                  textAlign: 'center'
                }}>Gói sức khỏe toàn diện</Text>
              </Pressable>
              <Pressable style={{
                width: 130,
                height: 130,
                backgroundColor: 'white',
                margin: 1,
                borderRadius: 8,
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Image
                  source={require('../../../../images/med7.webp')}
                  style={{
                    width: 70,
                    height: 70
                  }}
                />
                <Text style={{
                  width: 80,
                  textAlign: 'center'
                }}>Đặt lịch xét nghiệm</Text>
              </Pressable>
              <Pressable
                onPress={() => {
                  navigation.navigate('ExaminationPaymentStack', {});
                }}
                style={{
                  width: 130,
                  height: 130,
                  backgroundColor: 'white',
                  margin: 1,
                  borderRadius: 8,
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                <Image
                  source={require('../../../../images/med8.webp')}
                  style={{
                    width: 70,
                    height: 70
                  }}
                />
                <Text style={{
                  width: 80,
                  textAlign: 'center'
                }}>Thanh toán viện phí</Text>
              </Pressable>
            </View>

            <View style={{
              flexDirection: 'row',
            }}>
              <Pressable style={{
                width: 130,
                height: 130,
                backgroundColor: 'white',
                margin: 1,
                borderRadius: 8,
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Image
                  source={require('../../../../images/med9.png')}
                  style={{
                    width: 70,
                    height: 70
                  }}
                />
                <Text style={{
                  width: 80,
                  textAlign: 'center'
                }}>Tra cứu kết quả khám bệnh</Text>
              </Pressable>
              <Pressable style={{
                width: 130,
                height: 130,
                backgroundColor: 'white',
                margin: 1,
                borderRadius: 8,
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Image
                  source={require('../../../../images/med10.png')}
                  style={{
                    width: 70,
                    height: 70
                  }}
                />
                <Text style={{
                  width: 80,
                  textAlign: 'center'
                }}>Gọi đặt khám</Text>
              </Pressable>
              <Pressable style={{
                width: 130,
                height: 130,
                backgroundColor: 'white',
                margin: 1,
                borderRadius: 8,
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Image
                  source={require('../../../../images/med11.png')}
                  style={{
                    width: 70,
                    height: 70
                  }}
                />
                <Text style={{
                  width: 80,
                  textAlign: 'center'
                }}>Xem Thêm</Text>
              </Pressable>
            </View>
          </View>
          <ImageBackground
            source={require('../../../../images/datKham.webp')}
            style={{
              width: 320,
              height: 200,
              alignItems: 'center',
              marginTop: 30
            }}
          >
          </ImageBackground>
          <Text style={{
            width: 300,
            fontSize: 22,
            color: '#33adff',
            textAlign: 'center',
            fontWeight: 500
          }}>Đặt khám nhanh - Lấy số thứ tự trực tuyến</Text>
          <Pressable
            onPress={() => {
              navigation.navigate('ScreenFormBooking', {})
            }}
            style={{
              width: 180,
              height: 40,
              borderRadius: 8,
              backgroundColor: '#33adff',
              marginTop: 15,
              justifyContent: 'center',
              alignItems: 'center'

            }}
          >
            <Text style={{
              fontSize: 20,
              fontWeight: 500,
              color: 'white'
            }}>Đặt khám ngay</Text>
          </Pressable>
          <View style={{
            marginTop: 30,
            width: "100%",
            alignItems: 'center'
          }}>
          </View>
        </SafeAreaView>
      </ScrollView>
    </View>
  )
}

export default ScreenHome

const styles = StyleSheet.create({})