import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import LoginForm from '../components/LoginForm';
import {Button} from 'react-native-elements';

function LoginScreen({navigation}) {
  return (
    <SafeAreaView>
      <LoginForm type="Log In" />
      <Button
        title="Sign Up"
        type= "clear"
        onPress={() => {navigation.navigate('signup')}}
      />
    </SafeAreaView>
  );
}

export default LoginScreen;
