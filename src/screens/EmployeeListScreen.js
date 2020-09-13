import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {Text, View, StyleSheet} from 'react-native';
import EmployeeList from '../components/EmployeeList';

export default function EmployeeListScreen() {
  return (
    <SafeAreaView>
      <View>
        <EmployeeList />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({})
