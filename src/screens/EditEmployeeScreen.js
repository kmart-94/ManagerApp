import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import EmployeeCreateForm from '../components/EmployeeCreateForm';
import ConfirmModal from '../components/common/ConfirmModal';

import {connect} from 'react-redux';
import {saveEmployee,
  employeeUpdate,
  updateSchedule,
  clearEmployeeForm, deleteEmployee} from '../actions';
import Communications from 'react-native-communications';



const EditEmployeeScreen = ({route, name, phone, schedule,
  navigation,
  employeeUpdate,
  updateSchedule,
  clearEmployeeForm, saveEmployee, deleteEmployee}) => {

  const {name: oldName, phone: oldPhone, schedule: oldSchedule, id} = route.params;

  const [showModal, setShowModal] = useState(false);

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
        <Button
          title="Text"
          containerStyle={styles.button}
          onPress={() => {
            Communications.text(phone, `Your upcoming shift is on ${schedule}`);
          }}
        />
        <Button
          title="Delete"
          containerStyle={styles.button}
          onPress={() => {
            setShowModal(!showModal);
          }}
        />
        <ConfirmModal
          message={`Are you sure you want to delete ${name}?`}
          onConfirm={() => {
            deleteEmployee(id);
            setShowModal(!showModal);
            navigation.navigate('employeeList');
          }}
          onDecline={() => setShowModal(false)}
          visible={showModal}
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


function mapStateToProps(state) {
  return state.employeeForm;
}

export default connect(mapStateToProps,
  {employeeUpdate, saveEmployee,
    updateSchedule, clearEmployeeForm, deleteEmployee})(EditEmployeeScreen);
