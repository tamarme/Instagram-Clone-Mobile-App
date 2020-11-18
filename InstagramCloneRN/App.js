import React from 'react';
import Main from './src/Main/Main';
import SignUp from './src/components/Auth/SignUp/SignUp';
import LogIn from './src/components/Auth/LogIn/LogIn';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="signup" component={SignUp} />
        <Stack.Screen name="login" component={LogIn} />
        <Stack.Screen name="main" component={Main} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}