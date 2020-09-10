import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

export default function Spinner() {
  return (
    <View style={styles.spinnerStyle}>
      <ActivityIndicator/>
    </View>
  );
}

const styles = StyleSheet.create({
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
