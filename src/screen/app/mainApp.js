import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ScreenHome from './home/ScreenHome';
import ScreenAccount from './account/ScreenAccount';
import notiScreen from './notification/notiScreen';
import ScreenAllRecord from './patientRecord/ScreenAllRecord';
import Icon from 'react-native-vector-icons/Ionicons';
import ScreenFormBooking from './home/ScreenFormBooking';
import ScreenSelectHopital from './home/ScreenSelectHopital';
import ScreenSelectPatient from './home/ScreenSelectPatient';
import ScreenSelectDepartment from './home/ScreenSelectDepartment';
import ScreenSlectDate from './home/ScreenSlectDate';
import ScreenSelectedDoctor from './home/ScreenSelectedDoctor';
import ScreenConfimBooking from './home/ScreenConfirmBooking';
import ScreenBookingSuccess from './home/ScreenBookingSuccess';
import ScreenCreateRecord from './patientRecord/ScreenCreateRecord';
import ScreenSelectedRecord from './patientRecord/ScreenSelectedRecord';
import ScreenNewRecord from './patientRecord/ScreenNewRecord';
import ScreenExaminationPayment from './examinationPayment/ScreenExaminationPayment';
import ScreenSelectedPayment from './examinationPayment/ScreenSelectedPayment';
import ScreenPaymentCheckOut from './examinationPayment/ScreenPaymentCheckOut';
import ScreenCreateSucces from './patientRecord/ScreenCreateSucces';
import ScreenAllBooking from './home/ScreenAllBooking';
import ScreenDetailAppointment from './home/ScreenDetailAppointment';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = ({ navigation, route }) => (
    <Stack.Navigator initialRouteName='ScreenHome'>
        <Stack.Screen
            name='ScreenAllBooking' component={ScreenAllBooking}
        />
        <Stack.Screen
            name='ScreenDetailAppointment' component={ScreenDetailAppointment}
        />
        <Stack.Screen
            name='ScreenHome' component={ScreenHome}
        />
        <Stack.Screen
            name='ScreenSelectDate' component={ScreenSlectDate}
        />
        <Stack.Screen
            name='ScreenSelectDepartment' component={ScreenSelectDepartment}
        />
        <Stack.Screen
            name='ScreenSelectHopital' component={ScreenSelectHopital}
        />
        <Stack.Screen
            name='ScreenFormBooking' component={ScreenFormBooking}
        />
        <Stack.Screen
            name='ScreenSelectPatient' component={ScreenSelectPatient}
        />
        <Stack.Screen
            name='ScreenSelectedDoctor' component={ScreenSelectedDoctor}
        />
        <Stack.Screen
            name='ScreenConfirmBooking' component={ScreenConfimBooking}
        />
        <Stack.Screen
            name='ScreenBookingSuccess' component={ScreenBookingSuccess} options={{ headerShown: false }}
        />
        <Stack.Screen
            name='ExaminationPaymentStack' component={ExaminationPaymentStack} options={{ headerShown: false }}
        />
    </Stack.Navigator>
);

const AccountStack = () => (
    <Stack.Navigator>
        <Stack.Screen name='ScreenAccount' component={ScreenAccount} options={{ headerShown: false }} />
    </Stack.Navigator>
)
const NotificationStack = () => (
    <Stack.Navigator>
        <Stack.Screen name='ScreenNoti' component={notiScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
);
const PatientRecordStack = ({ navigation, route }) => (
    <Stack.Navigator initialRouteName='ScreenAllRecord'>
        <Stack.Screen
            name='ScreenAllRecord' component={ScreenAllRecord} />
        <Stack.Screen
            name='ScreenCreateRecords' component={ScreenCreateRecord} />
        <Stack.Screen
            name='ScreenNewRecord' component={ScreenNewRecord} />
        <Stack.Screen
            name='ScreenSelectedRecords' component={ScreenSelectedRecord} />
        <Stack.Screen
            name='ScreenCreateSucces' component={ScreenCreateSucces} 
        />
    </Stack.Navigator>
);

const ExaminationPaymentStack = ({ navigation, route }) => (
    <Stack.Navigator initialRouteName='ScreenExaminationPayment'>
        <Stack.Screen
            name='ScreenExaminationPayment' component={ScreenExaminationPayment} options={{ headerShown: false }} />
        <Stack.Screen
            name='ScreenSelectedPayment' component={ScreenSelectedPayment} />
        <Stack.Screen
            name='ScreenPaymentCheckOut' component={ScreenPaymentCheckOut} />
    </Stack.Navigator>
);

const mainApp = () => {
    return (
        <Tab.Navigator initialRouteName='TabHome'>
            <Tab.Screen
                name='TabHome'
                component={HomeStack}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Trang chủ',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="home-outline" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name='TabPatientRecord'
                component={PatientRecordStack}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Hồ sơ',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="folder-outline" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name='TabNotification'
                component={NotificationStack}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Thông báo',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="notifications-outline" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name='TabAccount'
                component={AccountStack}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Tài khoản',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="person-circle-outline" size={size} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default mainApp

const styles = StyleSheet.create({})