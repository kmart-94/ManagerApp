import firebase from 'firebase';
import {EMPLOYEE_UPDATE,
  UPDATE_SCHEDULE,
  SAVE_EMPLOYEE,
  EMPLOYEES_FETCH_SUCCESS} from './types';

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
  if (id) {
    return (dispatch) => {
      firebase.database().ref(`/users/${currentUser.uid}/employees/${id}`)
      .set({name, phone, schedule});
      dispatch({type: SAVE_EMPLOYEE});
    }
  }
  firebase.database().ref(`/users/${currentUser.uid}/employees`)
  .push({name, phone, schedule});
  return {type: SAVE_EMPLOYEE}
};

export const employeesFetch = () => {
  const {currentUser} = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees`)
    .on('value', snapshot => {
      dispatch ({type: EMPLOYEES_FETCH_SUCCESS, payload: snapshot.val()});
    })
  };
};

export const clearEmployeeForm = () => {
  return {type: SAVE_EMPLOYEE}
}

export const restoreUserForm = (id) => {

}

export const saveEditedEmployee = () => {

}
