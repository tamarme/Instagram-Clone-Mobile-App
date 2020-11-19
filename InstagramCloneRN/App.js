import React, { useState, useMemo, useEffect } from 'react';
import { View, Text } from 'react-native';
import Main from './src/components/Main/Main';
import SignUp from './src/components/Auth/SignUp/SignUp';
import LogIn from './src/components/Auth/LogIn/LogIn';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { store } from './src/redux/store';
import { Provider } from 'react-redux';
import { AuthContext } from './src/context/context';

const Stack = createStackNavigator();

export default function App() {

  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);
  const authContext = useMemo(() => ({
    signIn: () => {
      setUserToken('bvfkjdf');
      setIsLoading(false);
    },
    signOut: () => {
      setUserToken(null);
      setIsLoading(false);
    },
    signUp: () => {
      setUserToken('bvfkjdf');
      setIsLoading(false);
    }
  }))
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [])

  if (isLoading) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    )
  }

  return (
    <Provider store={store}>
      <AuthContext.Provider value={authContext}>
        <NavigationContainer>
          {userToken === null ? (
            <Stack.Navigator
              screenOptions={{
                headerShown: false
              }}
            >
              <Stack.Screen name="signup" component={SignUp} />
              <Stack.Screen name="login" component={LogIn} />
            </Stack.Navigator>
          ) : (
              <Main />
            )}
        </NavigationContainer>
      </AuthContext.Provider>
    </Provider>
  );
}