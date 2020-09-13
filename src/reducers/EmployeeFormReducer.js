import {EMPLOYEE_UPDATE} from '../actions/types.js';

const INITIAL_STATE = {name: '', phone: '', shift: '' ,error: null, loading: false};

export default (state = INITIAL_STATE, action) => {
  console.log(state);
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      return {...state, [action.payload.prop]: action.payload.value};
    default:
      return state;
  }
}
