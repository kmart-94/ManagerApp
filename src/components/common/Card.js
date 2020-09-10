import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function Card({children}) {
  return (
      <View style={styles.container}>
        {children}
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    marginHorizontal: 20,
    marginTop: 10
  }
});
