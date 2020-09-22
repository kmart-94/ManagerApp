import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Card, CardSection} from './common';

export default function EmployeeListCard({name, phone, schedule, id, navigation}) {
  return (
    <TouchableOpacity onPress={
      () => {
        navigation.navigate('employeeEdit', {name, phone, schedule, id});

      }
    }>
      <CardSection>
        <Text style={styles.listText}>{name}</Text>
      </CardSection>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  listText: {
    fontSize: 20

  }
});
