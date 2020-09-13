import React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import EmployeeCreateForm from './EmployeeCreateForm';

export default function EmployeeList() {
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];

  return (
    <View styles={styles.container}>
      <EmployeeCreateForm />
      <FlatList
        data={DATA}
        renderItem={({item}) => <Text>{item.title}</Text>}
        keyExtractor = {item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
