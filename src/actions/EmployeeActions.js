import firebase from 'firebase';
import {EMPLOYEE_UPDATE, UPDATE_SCHEDULE, SAVE_EMPLOYEE} from './types';

export const employeeUpdate = ({prop, value}) => {
  return {type: EMPLOYEE_UPDATE, payload: {prop, value}};
};

export const updateSchedule = (item) => {
  return {type: UPDATE_SCHEDULE, payload: item};
};

export const saveEmployee = (id) => {
  return {type: SAVE_EMPLOYEE, payload: id}
};
