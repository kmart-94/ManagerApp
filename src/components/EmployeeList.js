import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {employeesFetch} from '../actions';
import _ from 'lodash';

import {View, StyleSheet, FlatList} from 'react-native';
import EmployeeListCard from './EmployeeListCard';

function EmployeeList({employeesFetch, employeeList, navigation}) {
  const [DATA, setData] = useState([]);
  useEffect(() => {
    employeesFetch();
  }, []);

  useEffect(() => {
    let data = _.map(employeeList, (val, uid) => {
      return {...val, uid};
    });
    setData(data);
  }, [employeeList]);

  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) =>
          <EmployeeListCard
            name={item.name}
            phone={item.phone}
            schedule={item.schedule}
            id={item.uid}
            navigation={navigation}
          />}
        keyExtractor = {item => item.uid}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10
  }
});

function mapStateToProps(state) {
  return state.employees;
}

export default connect(mapStateToProps, {employeesFetch})(EmployeeList);
