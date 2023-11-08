import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import ScreenLogin from './src/screen/authentication/ScreenLogin';
import ScreenPasswordConfirm from './src/screen/authentication/ScreenPasswordConfirm';
import ScreenAccount from './src/screen/app/account/ScreenAccount';
import ScreenDoctor from './src/screen/app/home/ScreenDoctor';
import ScreenServicePackage from './src/screen/app/home/ScreenServicePackage';
import ScreenPasswordLogin from './src/screen/authentication/ScreenPasswordLogin';
import ScreenHome from './src/screen/app/home/ScreenHome';

const Stack = createNativeStackNavigator();

export default function App() { 
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='ScreenLogin'>
        <Stack.Screen
          name='ScreenLogin'
          component={ScreenLogin}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='ScreenHome'
          component={ScreenHome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='ScreenPasswordLogin'
          component={ScreenPasswordLogin}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='ScreenPasswordConfirm'
          component={ScreenPasswordConfirm}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='ScreenDoctor'
          component={ScreenDoctor}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='ScreenServicePackage'
          component={ScreenServicePackage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='ScreenAccount'
          component={ScreenAccount}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
