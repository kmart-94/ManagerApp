import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Input, Button} from 'react-native-elements';
import {Card, CardSection} from './common'
import SchedulePicker from './SchedulePicker';

import {connect} from 'react-redux';
import {employeeUpdate} from '../actions';

function EmployeeCreateForm({employeeUpdate, name, phone, children}) {
  return (
    <Card>
      <CardSection>
        <Input
          label="Name"
          placeholder="John Doe"
          value={name}
          onChangeText={(newName) => employeeUpdate({prop: "name", value: newName})}
          autoCorrect={false}
        />
      </CardSection>
      <CardSection>
        <Input
          label="Phone"
          placeholder="xxx-xxx-xxxx"
          value={phone}
          onChangeText={(newPhone) => employeeUpdate({prop: "phone", value: newPhone})}
          autoCorrect={false}
        />
      </CardSection>
      <CardSection>
        <SchedulePicker />
      </CardSection>
      <CardSection>
        <View style={styles.container}>
          {children}
        </View>
      </CardSection>
    </Card>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    alignSelf: 'center',
    marginBottom: 10,
    paddingHorizontal: 10
  },
  container: {
    flex: 1,
    marginTop: 10
  }
});

function mapStateToProps(state) {
  return state.employeeForm;
}

export default connect(mapStateToProps, {employeeUpdate})(EmployeeCreateForm);
