import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import EmployeeCreateForm from '../components/EmployeeCreateForm';

import {connect} from 'react-redux';
import {saveEmployee, employeeUpdate, updateSchedule, clearEmployeeForm} from '../actions';



const EditEmployeeScreen = ({route, name, phone, schedule,
  navigation,
  employeeUpdate,
  updateSchedule, clearEmployeeForm, saveEmployee}) => {

  const {name: oldName, phone: oldPhone, schedule: oldSchedule, id} = route.params;

  useEffect(() => {
    clearEmployeeForm();
    employeeUpdate({prop: "name", value: oldName});
    employeeUpdate({prop: "phone", value: oldPhone});
    oldSchedule.forEach((day) => updateSchedule(day));
  }, []);

  return (
    <EmployeeCreateForm>
        <Button
          title="Save"
          containerStyle={styles.button}
          onPress={() => {
            saveEmployee(name, schedule, phone, id);
            navigation.navigate('employeeList');
          }}
        />
    </EmployeeCreateForm>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    alignSelf: 'center',
    marginBottom: 10,
    paddingHorizontal: 10
  }
});

/*<Button
  title="Delete"
  containerStyle={styles.button}
  onPress={() => {
    deleteEmployee(name, schedule, phone);
    navigation.navigate('employeeList');
  }}
/>
<Button
  title="Call"
  containerStyle={styles.button}
  onPress={() => {
    saveEmployee(name, schedule, phone);
    navigation.navigate('employeeList');
  }}
/> */
function mapStateToProps(state) {
  return state.employeeForm;
}

export default connect(mapStateToProps,
  {employeeUpdate, saveEmployee,
    updateSchedule, clearEmployeeForm})(EditEmployeeScreen);
