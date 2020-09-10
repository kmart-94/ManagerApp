import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import LoginForm from '../components/LoginForm';
import {Button} from 'react-native-elements';

function SignUpScreen({navigation}) {
  return (
    <SafeAreaView>
      <LoginForm type="Sign Up" />
      <Button
        title="Log In"
        type= "clear"
        onPress={() => {navigation.navigate('login')}}
      />
    </SafeAreaView>
  );
}

export default SignUpScreen;
