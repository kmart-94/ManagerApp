import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function CardSection({children}) {
  return (
      <View style={styles.container}>
        {children}
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderBottomWidth: 1,
    paddingHorizontal: 5,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd'
  }
});
