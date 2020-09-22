import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {StyleSheet} from 'react-native';
import EmployeeList from '../components/EmployeeList';

export default function EmployeeListScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <EmployeeList navigation={navigation}/>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
