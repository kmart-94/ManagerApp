import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import EmployeeList from '../components/EmployeeList';

export default function EmployeeListScreen() {
  return (
    <SafeAreaView>
      <EmployeeList />
    </SafeAreaView>
  );
}
