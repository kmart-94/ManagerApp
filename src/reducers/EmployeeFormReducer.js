import {EMPLOYEE_UPDATE, UPDATE_SCHEDULE, SAVE_EMPLOYEE, EMPLOYEE_DELETED} from '../actions/types.js';

const INITIAL_STATE = {name: '', phone: '', schedule: [] ,error: null, loading: false};

function filterOutSelected(value) {
  return value !== this;
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      return {...state, [action.payload.prop]: action.payload.value};
    case UPDATE_SCHEDULE:
      if (state.schedule.includes(action.payload)) {
          return {...state, schedule: state.schedule.filter(filterOutSelected, action.payload)};
      }
      return {...state, schedule: [...state.schedule, action.payload]};
    case SAVE_EMPLOYEE:
      return INITIAL_STATE;
    case EMPLOYEE_DELETED:
      return INITIAL_STATE;
    default:
      return state;
  }
}
