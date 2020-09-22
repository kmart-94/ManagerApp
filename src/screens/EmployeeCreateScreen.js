import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import EmployeeCreateForm from '../components/EmployeeCreateForm';

import {connect} from 'react-redux';
import {saveEmployee, clearEmployeeForm} from '../actions';

const EmployeeCreateScreen = ({saveEmployee, clearEmployeeForm, name, schedule, phone, navigation}) => {

  useEffect(() => {
    clearEmployeeForm();
  }, []);

  return (
    <EmployeeCreateForm>
      <Button
        title="Save"
        containerStyle={styles.button}
        onPress={() => {
          saveEmployee(name, schedule, phone);
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

function mapStateToProps(state) {
  return state.employeeForm;
}

export default connect(mapStateToProps, {saveEmployee, clearEmployeeForm})(EmployeeCreateScreen);
