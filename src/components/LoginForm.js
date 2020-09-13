import React, {useState} from 'react';

import {connect} from 'react-redux';
import {emailChanged, passwordChanged, loginUser, createUser} from '../actions';

import {Text, StyleSheet} from 'react-native';
import Card from './common/Card';
import CardSection from './common/CardSection';
import Spinner from './common/Spinner';
import {Button, Input} from 'react-native-elements';



function LoginForm({type,
  emailChanged,
  passwordChanged,
  loginUser,
  createUser,
  email,
  password,
  error,
  loading}) {

  return <Card>
    <CardSection>
      <Input
        placeholder="Email"
        value={email}
        onChangeText={(newEmail) => emailChanged(newEmail)}
        autoCapitalize="none"
        autoCorrect={false}
      />
    </CardSection>
    <CardSection>
      <Input
        placeholder="Password"
        value={password}
        onChangeText={(newPassword) => passwordChanged(newPassword)}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
      />
    </CardSection>
    {error ? <Text style={styles.error}>{error}</Text> : null }
    <CardSection>
      { loading ? <Spinner />:
      <Button
        title={type}
        //type="outline"
        containerStyle={styles.button}
        onPress={() => {
            if (type == "Log In") {
              loginUser({email, password});
            }
            else if (type === "Sign Up") {
              createUser({email, password});
            }
            else {
              console.log("Wrong type specified.");
            }
        }}
      />}
    </CardSection>
  </Card>
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    marginVertical: 5
  },
  error: {
    color: 'red',
    width: "100%",
    paddingHorizontal: 15,
    textAlign: 'center'
  }
});

function mapStateToProps(state) {
  return state.auth;
}

export default connect(mapStateToProps, {emailChanged, passwordChanged, loginUser, createUser})(LoginForm);
