import firebase from 'firebase';
import {EMPLOYEE_UPDATE, UPDATE_SCHEDULE, SAVE_EMPLOYEE} from './types';

export const employeeUpdate = ({prop, value}) => {
  return {type: EMPLOYEE_UPDATE, payload: {prop, value}};
};

export const updateSchedule = (item) => {
  return {type: UPDATE_SCHEDULE, payload: item};
};

export const saveEmployee = (name, schedule, phone, id) => {
  //gets current authenticated user on this device
  const {currentUser} = firebase.auth();
  //connects to db via users collection, then within that collection
  //find current user, and that users employees collection
  //then push name, phone, schedule onto that
  firebase.database().ref(`/users/${currentUser.uid}/employees`)
  .push({name, phone, schedule});
  return {type: SAVE_EMPLOYEE, payload: id}
};
