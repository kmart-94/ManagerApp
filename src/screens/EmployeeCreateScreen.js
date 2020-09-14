import React from 'react';
import {StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import EmployeeCreateForm from '../components/EmployeeCreateForm';

import {connect} from 'react-redux';
import {saveEmployee} from '../actions';

const EmployeeCreateScreen = ({saveEmployee}) => {
  return (
    <EmployeeCreateForm>
      <Button
        title="Save"
        containerStyle={styles.button}
        onPress={saveEmployee}
      />
      <Button
        title="Text"
        containerStyle={styles.button}
      />
      <Button
        title="Fire"
        containerStyle={styles.button}
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

export default connect(null, {saveEmployee})(EmployeeCreateScreen);
