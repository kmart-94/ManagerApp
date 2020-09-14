import {EMPLOYEE_UPDATE, UPDATE_SCHEDULE, SAVE_EMPLOYEE} from '../actions/types.js';

const INITIAL_STATE = {name: '', phone: '', schedule: [] ,error: null, loading: false};

function filterOutSelected(value) {
  return value !== this;
}

export default (state = INITIAL_STATE, action) => {
  console.log(state);
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      return {...state, [action.payload.prop]: action.payload.value};
    case UPDATE_SCHEDULE:
      if (state.schedule.includes(action.payload)) {
          return {...state, schedule: state.schedule.filter(filterOutSelected, action.payload)};
      }
      return {...state, schedule: [...state.schedule, action.payload]};
    case SAVE_EMPLOYEE:
      if (action.payload) {
        //do some stuff to save to firebaseio
        //reset state to initial state
      }
      else {

      }
      return INITIAL_STATE;
    default:
      return state;
  }
}
