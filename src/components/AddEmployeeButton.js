import React from 'react';
import {StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default ({onPress}) => {

  return <Button
    icon= {
      <Icon
        name="plus"
        size= {15}
        color= 'white'
      />
    }
    containerStyle={styles.container}
    onPress={onPress}
  ></Button>
}

const styles = StyleSheet.create({
  container: {marginHorizontal: 5}
})
