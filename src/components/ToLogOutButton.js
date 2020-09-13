import React from 'react';
import {StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';

export default ({navigation}) => {
  
  return <Button
    title= "Log Out"
    onPress={() =>navigation.navigate('logout') }
    containerStyle={styles.container}
  ></Button>
}

const styles = StyleSheet.create({
  container: {marginHorizontal: 5}
})
