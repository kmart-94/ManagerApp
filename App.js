import React, {useEffect, useState} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import {connect} from 'react-redux';
import reducers from './src/reducers';
import firebase from 'firebase';

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, View } from 'react-native';
import ToLogOutButton from './src/components/ToLogOutButton';
import AddEmployeeButton from './src/components/AddEmployeeButton';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './src/screens/LoginScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import EmployeeListScreen from './src/screens/EmployeeListScreen';
import LogOutScreen from './src/screens/LogOutScreen';

const Stack = createStackNavigator();

function App() {
  const [isSignedIn, setIsSignedIn] = useState(null);

  React.useEffect(() => {
    var firebaseConfig = {
    apiKey: "AIzaSyCcyel9oAroN53uj-oDskcIK8diJoMfcW0",
    authDomain: "manager-8a0fb.firebaseapp.com",
    databaseURL: "https://manager-8a0fb.firebaseio.com",
    projectId: "manager-8a0fb",
    storageBucket: "manager-8a0fb.appspot.com",
    messagingSenderId: "833812743302",
    appId: "1:833812743302:web:69d716623d1f637c077d07",
    measurementId: "G-JS21NR7HXR"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setIsSignedIn(true);
      }
      else {
        setIsSignedIn(false);
      }
    });
  }, []);


  return (
    <NavigationContainer>
      {isSignedIn ?
        <Stack.Navigator>
          <Stack.Screen
            name="employeeList"
            component={EmployeeListScreen}
            options={({navigation}) => ({title: "Employees",
            headerTitleAlign: 'center',
              headerLeft: () => <ToLogOutButton navigation={navigation} />,
              headerRight: () => <AddEmployeeButton navigation={navigation} />
            })}
          />
          <Stack.Screen
            name="logout"
            component={LogOutScreen}
            options={{title: "Log Out"}}
          />
        </Stack.Navigator>
        :
        isSignedIn === false ?
          <Stack.Navigator>
            <Stack.Screen
              name="login"
              component={LoginScreen}
              options={{title: "Log In"}}
            />
            <Stack.Screen
              name="signup"
              component={SignUpScreen}
              options={{title: "Sign Up", headerLeft: null}}
            />
          </Stack.Navigator>
          :
          null
      }
    </NavigationContainer>
  );
}

export default () => {
  return (
    <SafeAreaProvider>
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))} >
        <App />
      </Provider >
    </SafeAreaProvider>
  );
}
