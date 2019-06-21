import { put, all, takeLatest } from 'redux-saga/effects'
import Api from '../../common/api';
import navigation from '../../navigation/NavigationService';
import Token from '../../common/token';
import authAction, { AuthTypes } from './authReducer'

function* signup(data) {    
  let payload = yield Api.post('/auth/signup', data.payload)
  .then(response => response.text())
  .catch(error => ({ state: 'ERROR', data: error } ));

  if(payload){
    Token.setToken(payload);
    navigation.navigate('newsContacts');
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