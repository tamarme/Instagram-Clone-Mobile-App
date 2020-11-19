import React, { useState, useReducer, useMemo, useEffect } from 'react';
import Main from './src/components/Main/Main';
import SignUp from './src/components/Auth/SignUp/SignUp';
import LogIn from './src/components/Auth/LogIn/LogIn';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { store } from './src/redux/store';
import { Provider } from 'react-redux';
import { AuthContext } from './src/context/context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoaderImage from './src/components/LoaderImage/LoaderImage';
//import { loginReducer, initialLoginState } from './src/redux/reducers/LogIn/login';

const Stack = createStackNavigator();

export default function App() {

  initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null
  }

  loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false
        };
      case 'LOGIN':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false
        };
      case 'REGISTER':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false
        };
    }
  }
  const [loginState, dispatch] = useReducer(loginReducer, initialLoginState);
  
  const authContext = useMemo(() => ({
    signIn: async (userName, password) => {
      let userToken = null;
      if (userName === 'user' && password === 'pass') {
        userToken = 'gvyruekh';
        try {
          await AsyncStorage.setItem('userToken', userToken);
        } catch (e) {
          console.log(e);
        }
      }
      dispatch({ type: 'LOGIN', id: userName, token: userToken })
    },
    signOut: async () => {
      try {
        await AsyncStorage.removeItem('userToken');
      } catch (e) {
        console.log(e);
      }
      dispatch({ type: 'LOGOUT' })
    },
    signUp: () => {
    }
  }), [])

  useEffect(() => {
    setTimeout(async () => {
      let userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        console.log(e);
      }
      dispatch({ type: 'REGISTER', token: userToken })
    }, 1000);
  }, [])

  if (loginState.isLoading) {
    return <LoaderImage />
  }

  return (
    <Provider store={store}>
      <AuthContext.Provider value={authContext}>
        <NavigationContainer>
          {loginState.userToken === null ? (
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
