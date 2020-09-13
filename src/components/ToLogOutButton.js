import React from 'react';
import {StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';

export default ({onPress}) => {

  return <Button
    title= "Log Out"
    containerStyle={styles.container}
    onPress={onPress}
  ></Button>
}

const styles = StyleSheet.create({
  container: {marginHorizontal: 5}
})
