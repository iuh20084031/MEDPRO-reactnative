import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import ScreenLogin from './src/screen/authentication/ScreenLogin';
import ScreenPasswordLogin from './src/screen/authentication/ScreenPasswordLogin';
import mainApp from './src/screen/app/mainApp';
import ScreenSignUp from './src/screen/authentication/ScreenSignup';
import store from './src/redux/stores';
import { Provider } from 'react-redux';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='MainApp'>
          <Stack.Screen name='ScreenLogin' component={ScreenLogin} options={{ headerShown: false }} />
          <Stack.Screen name='ScreenSignUp' component={ScreenSignUp} options={{ headerShown: false }} />
          <Stack.Screen name='MainApp' component={mainApp} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
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
