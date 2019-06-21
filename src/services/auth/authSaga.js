import { put, all, takeLatest } from 'redux-saga/effects'
import Api from '../../common/api';

import authAction, { AuthTypes } from './authReducer'

function* signup(data) {    
  let response = yield Api.post('/auth/signup', data.payload)
  if (response.ok) {
  }
}

function* ActionWatcher() {
  yield takeLatest(AuthTypes.SIGNUP, signup)
}


export default function* rootSaga() {
  yield all([
    ActionWatcher()
  ]);
}