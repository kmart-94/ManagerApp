import React from 'react';
import firebase from 'firebase';
import {Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function LogOutScreen() {

  function logOut() {
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
      console.log("signed out");
    }).catch(function(error) {
      // An error happened.
      console.log("error");
    });
  }

  return (
    <SafeAreaView>
      <Button
        title="Log Out"
        type= "outline"
        onPress={() => {logOut()}}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});
