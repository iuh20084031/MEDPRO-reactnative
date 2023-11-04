import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ScreenLogin from './src/screen/ScreenLogin';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

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
          name='ScreenSignup'
          component={ScreenLogin}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='ScreenHome'
          component={ScreenLogin}
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
