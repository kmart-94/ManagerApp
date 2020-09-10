import {EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_SUCCESS, ERROR, LOGIN_START} from '../actions/types.js';

const INITIAL_STATE = {email: '', password: '', error: null, loading: false, user: {}};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return {...state, email: action.payload};
    case PASSWORD_CHANGED:
      return {...state, password: action.payload};
    case LOGIN_SUCCESS:
      return {...state, user: action.payload, error: null, loading: false, email: '', password: ''};
    case LOGIN_START:
      return {...state, loading: action.payload, error: ''};
    case ERROR:
      return {...state, error: action.payload, loading: false, password: ''};
    default:
      return state;
  }
}
