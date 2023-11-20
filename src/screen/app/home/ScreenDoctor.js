import { StyleSheet, Text, View, Pressable, Image, TextInput } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { SafeAreaView } from 'react-native-safe-area-context'
const ScreenDoctor = ({ navigation }) => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.topNav}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "flex-start", width: "100%", }}>
                        <Icon name='arrow-left' size={25} color={'#FF8678'} style={{ marginRight: 25 }} />
                        <Text style={{ fontSize: 25, color: 'white', fontWeight: 700 }}>Tư vấn khám bệnh từ xa</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 25, }}>
                    <Pressable style={{ width: "40%", alignItems: 'center', justifyContent: "center", gap: 10, flexDirection: 'row', borderRadius: 200, backgroundColor: '#0092DD' }}>
                        <Text style={{ fontSize: 20, color: 'white', fontWeight: 500 }}>Tư vấn ngay</Text>
                    </Pressable>
                    <Pressable style={{ width: "40%", alignItems: 'center', justifyContent: "center", gap: 10, flexDirection: 'row', padding: 5, borderRadius: 200, backgroundColor: '#ECECEC', border: '1px solid gray' }}>
                        <Text style={{ fontSize: 20, color: '#092D3B', fontWeight: 500 }}>Đặt lịch hẹn</Text>
                    </Pressable>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 25, paddingLeft: 10, paddingRight: 10 }}>
                    <Pressable style={{ width: "100%", alignItems: 'center', justifyContent: "flex-start", border: '3px solid white', gap: 10, flexDirection: 'row', padding: 5, borderRadius: 200, paddingLeft: 15, backgroundColor: 'white' }}>
                        <Icon name='search' size={20} color={'lightgrey'} />
                        <TextInput style={{ fontSize: 20, color: 'lightgrey', fontWeight: 500 }} placeholder='Tìm bác sĩ'></TextInput>
                    </Pressable>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 5, flexWrap: 'wrap' }}>
                    <Pressable style={styles.filterBtn}>
                        <Text style={{ fontSize: 12, color: '#20B1DD', fontWeight: 500 }}>Chuyên khoa</Text>
                        <Icon name='chevron-down' size={10} color={'#20B1DD'} />
                    </Pressable>
                    <Pressable style={styles.filterBtn}>
                        <Text style={{ fontSize: 12, color: '#20B1DD', fontWeight: 500 }}>Học hàm/ Học vị</Text>
                        <Icon name='chevron-down' size={10} color={'#20B1DD'} />
                    </Pressable>
                    <Pressable style={styles.filterBtn}>
                        <Text style={{ fontSize: 12, color: '#20B1DD', fontWeight: 500 }}>Giới tính</Text>
                        <Icon name='chevron-down' size={10} color={'#20B1DD'} />
                    </Pressable>
                </View>s
                <View style={{
                    flexDirection: 'column', justifyContent: 'flex-start', gap: 10, padding: 10, alignItems: 'center', borderRadius: 20, backgroundColor: 'white', marginRight: 10, marginLeft: 10
                }}>
                    <View style={{
                        flexDirection: 'row', justifyContent: 'flex-start', gap: 10, alignItems: 'center'
                    }}>
                        <Image source={require('../../../../images/Frame3.jpg')} style={{ width: 70, height: 70, borderRadius: 20, border: '5px solid white' }} />
                        <View style={{ width: '70%' }}>
                            <Text style={{ fontSize: 15, color: '#20B1DD', fontWeight: 700 }}>Thạc sĩ, Bác sĩ Tâm lý Phạm Minh Triết - Nguyên Trưởng Khoa Tâm Lý</Text>
                        </View>
                    </View>
                    <View style={{ width: '90%', height: 1, borderBottomColor: 'lightgrey', borderBottomWidth: 1, }} />
                    <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View style={{ flexDirection: 'column', width: '50%', justifyContent: 'flex-start', alignItems: 'center', gap: 5 }}>
                            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', gap: 5 }}>
                                <Icon name='stethoscope' size={15} color={'black'} />
                                <Text style={{ fontSize: 15, color: 'black', fontWeight: 500 }}>Chuyên khoa:</Text>
                                <Text style={{ fontSize: 15, color: 'black', fontWeight: 500 }}>Tâm lý</Text>
                            </View>
                            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', gap: 5 }}>
                                <Icon name='calendar' size={15} color={'black'} />
                                <Text style={{ fontSize: 15, color: 'black', fontWeight: 500 }}>Lịch khám:</Text>
                                <Text style={{ fontSize: 15, color: 'black', fontWeight: 500 }}>Tâm lý</Text>
                            </View>
                            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', gap: 5 }}>
                                <Icon name='tags' size={15} color={'black'} />
                                <Text style={{ fontSize: 15, color: 'black', fontWeight: 500 }}>Giá khám:</Text>
                                <Text style={{ fontSize: 15, color: 'black', fontWeight: 500 }}>900.000đ</Text>
                            </View>

                        </View>
                        <Pressable style={{ alignItems: 'center', justifyContent: "center", gap: 10, flexDirection: 'row', maxHeight: 39, borderRadius: 20, backgroundColor: '#0092DD', height: 35 }}>
                            <Text style={{ fontSize: 15, color: 'white', fontWeight: 500, paddingLeft: 10, paddingRight: 10 }}>Đặt ngay</Text>
                        </Pressable>
                    </View>
                </View>
                <View style={{
                    flexDirection: 'column', justifyContent: 'flex-start', gap: 10, padding: 10, alignItems: 'center', borderRadius: 20, backgroundColor: 'white', marginRight: 10, marginLeft: 10
                }}>
                    <View style={{
                        flexDirection: 'row', justifyContent: 'flex-start', gap: 10, alignItems: 'center'
                    }}>
                        <Image source={require('../../../../images/Frame3.jpg')} style={{ width: 70, height: 70, borderRadius: 20, border: '5px solid white' }} />
                        <View style={{ width: '70%' }}>
                            <Text style={{ fontSize: 15, color: '#20B1DD', fontWeight: 700 }}>Thạc sĩ, Bác sĩ Tâm lý Phạm Minh Triết - Nguyên Trưởng Khoa Tâm Lý</Text>
                        </View>
                    </View>
                    <View style={{ width: '90%', height: 1, borderBottomColor: 'lightgrey', borderBottomWidth: 1, }} />
                    <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View style={{ flexDirection: 'column', width: '50%', justifyContent: 'flex-start', alignItems: 'center', gap: 5 }}>
                            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', gap: 5 }}>
                                <Icon name='stethoscope' size={15} color={'black'} />
                                <Text style={{ fontSize: 15, color: 'black', fontWeight: 500 }}>Chuyên khoa:</Text>
                                <Text style={{ fontSize: 15, color: 'black', fontWeight: 500 }}>Tâm lý</Text>
                            </View>
                            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', gap: 5 }}>
                                <Icon name='calendar' size={15} color={'black'} />
                                <Text style={{ fontSize: 15, color: 'black', fontWeight: 500 }}>Lịch khám:</Text>
                                <Text style={{ fontSize: 15, color: 'black', fontWeight: 500 }}>Tâm lý</Text>
                            </View>
                            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', gap: 5 }}>
                                <Icon name='tags' size={15} color={'black'} />
                                <Text style={{ fontSize: 15, color: 'black', fontWeight: 500 }}>Giá khám:</Text>
                                <Text style={{ fontSize: 15, color: 'black', fontWeight: 500 }}>900.000đ</Text>
                            </View>

                        </View>
                        <Pressable style={{ alignItems: 'center', justifyContent: "center", gap: 10, flexDirection: 'row', maxHeight: 39, borderRadius: 20, backgroundColor: '#0092DD', height: 35 }}>
                            <Text style={{ fontSize: 15, color: 'white', fontWeight: 500, paddingLeft: 10, paddingRight: 10 }}>Đặt ngay</Text>
                        </Pressable>
                    </View>
                </View>
                <View style={{
                    flexDirection: 'column', justifyContent: 'flex-start', gap: 10, padding: 10, alignItems: 'center', borderRadius: 20, backgroundColor: 'white', marginRight: 10, marginLeft: 10
                }}>
                    <View style={{
                        flexDirection: 'row', justifyContent: 'flex-start', gap: 10, alignItems: 'center'
                    }}>
                        <Image source={require('../../../../images/Frame3.jpg')} style={{ width: 70, height: 70, borderRadius: 20, border: '5px solid white' }} />
                        <View style={{ width: '70%' }}>
                            <Text style={{ fontSize: 15, color: '#20B1DD', fontWeight: 700 }}>Thạc sĩ, Bác sĩ Tâm lý Phạm Minh Triết - Nguyên Trưởng Khoa Tâm Lý</Text>
                        </View>
                    </View>
                    <View style={{ width: '90%', height: 1, borderBottomColor: 'lightgrey', borderBottomWidth: 1, }} />
                    <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View style={{ flexDirection: 'column', width: '50%', justifyContent: 'flex-start', alignItems: 'center', gap: 5 }}>
                            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', gap: 5 }}>
                                <Icon name='stethoscope' size={15} color={'black'} />
                                <Text style={{ fontSize: 15, color: 'black', fontWeight: 500 }}>Chuyên khoa:</Text>
                                <Text style={{ fontSize: 15, color: 'black', fontWeight: 500 }}>Tâm lý</Text>
                            </View>
                            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', gap: 5 }}>
                                <Icon name='calendar' size={15} color={'black'} />
                                <Text style={{ fontSize: 15, color: 'black', fontWeight: 500 }}>Lịch khám:</Text>
                                <Text style={{ fontSize: 15, color: 'black', fontWeight: 500 }}>Tâm lý</Text>
                            </View>
                            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', gap: 5 }}>
                                <Icon name='tags' size={15} color={'black'} />
                                <Text style={{ fontSize: 15, color: 'black', fontWeight: 500 }}>Giá khám:</Text>
                                <Text style={{ fontSize: 15, color: 'black', fontWeight: 500 }}>900.000đ</Text>
                            </View>

                        </View>
                        <Pressable style={{ alignItems: 'center', justifyContent: "center", gap: 10, flexDirection: 'row', maxHeight: 39, borderRadius: 20, backgroundColor: '#0092DD', height: 35 }}>
                            <Text style={{ fontSize: 15, color: 'white', fontWeight: 500, paddingLeft: 10, paddingRight: 10 }}>Đặt ngay</Text>
                        </Pressable>
                    </View>
                </View>
                <View style={{
                    flexDirection: 'column', justifyContent: 'flex-start', gap: 10, padding: 10, alignItems: 'center', borderRadius: 20, backgroundColor: 'white', marginRight: 10, marginLeft: 10
                }}>
                    <View style={{
                        flexDirection: 'row', justifyContent: 'flex-start', gap: 10, alignItems: 'center'
                    }}>
                        <Image source={require('../../../../images/Frame3.jpg')} style={{ width: 70, height: 70, borderRadius: 20, border: '5px solid white' }} />
                        <View style={{ width: '70%' }}>
                            <Text style={{ fontSize: 15, color: '#20B1DD', fontWeight: 700 }}>Thạc sĩ, Bác sĩ Tâm lý Phạm Minh Triết - Nguyên Trưởng Khoa Tâm Lý</Text>
                        </View>
                    </View>
                    <View style={{ width: '90%', height: 1, borderBottomColor: 'lightgrey', borderBottomWidth: 1, }} />
                    <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View style={{ flexDirection: 'column', width: '50%', justifyContent: 'flex-start', alignItems: 'center', gap: 5 }}>
                            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', gap: 5 }}>
                                <Icon name='stethoscope' size={15} color={'black'} />
                                <Text style={{ fontSize: 15, color: 'black', fontWeight: 500 }}>Chuyên khoa:</Text>
                                <Text style={{ fontSize: 15, color: 'black', fontWeight: 500 }}>Tâm lý</Text>
                            </View>
                            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', gap: 5 }}>
                                <Icon name='calendar' size={15} color={'black'} />
                                <Text style={{ fontSize: 15, color: 'black', fontWeight: 500 }}>Lịch khám:</Text>
                                <Text style={{ fontSize: 15, color: 'black', fontWeight: 500 }}>Tâm lý</Text>
                            </View>
                            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', gap: 5 }}>
                                <Icon name='tags' size={15} color={'black'} />
                                <Text style={{ fontSize: 15, color: 'black', fontWeight: 500 }}>Giá khám:</Text>
                                <Text style={{ fontSize: 15, color: 'black', fontWeight: 500 }}>900.000đ</Text>
                            </View>

                        </View>
                        <Pressable style={{ alignItems: 'center', justifyContent: "center", gap: 10, flexDirection: 'row', maxHeight: 39, borderRadius: 20, backgroundColor: '#0092DD', height: 35 }}>
                            <Text style={{ fontSize: 15, color: 'white', fontWeight: 500, paddingLeft: 10, paddingRight: 10 }}>Đặt ngay</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </SafeAreaView>

    )
}

export default ScreenDoctor

const styles = StyleSheet.create({
    container: {
        display: 'flex', flexDirection: 'column', gap: 10,
    },
    topNav: {
        width: "100%", alignItems: 'center', justifyContent: "flex-start", backgroundColor: '#00B1F5', gap: 10, padding: 25,
        borderBottomLeftRadius: 30, borderBottomRightRadius: 30,
    },
    filterBtn: {
        alignItems: 'center', justifyContent: "center", gap: 10, flexDirection: 'row', paddingTop: 10, paddingBottom: 10, paddingLeft: 15, paddingRight: 15, borderRadius: 200, backgroundColor: 'white'
    }
})