import firebase from 'firebase';

import {EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_SUCCESS, ERROR, LOGIN_START} from './types';

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const loginUser = ({email, password}) => {
  return (dispatch) => {
    dispatch({type: LOGIN_START, payload: true});

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(user => {
      dispatch({type: LOGIN_SUCCESS, payload: user});
    })
    .catch(function(error) {
      dispatch({type: ERROR, payload: 'Authentication Failed'});
    });
  }
};

export const createUser = ({email, password}) => {
  return (dispatch) => {
    dispatch({type: LOGIN_START, payload: true});

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(user => {
      dispatch({type: LOGIN_SUCCESS, payload: user});
    })
    .catch(function(error) {
      dispatch({type: ERROR, payload: 'error signing in'});
    });
  }
};
