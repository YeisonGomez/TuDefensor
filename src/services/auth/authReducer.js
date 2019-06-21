import { createReducer, createActions } from 'reduxsauce'
import { Map } from 'immutable'

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  signup: ['payload'],
  signupSuccess: [],
  signupFailed: ['error']
})

export const AuthTypes = Types
export default Creators

/* ------------- Initial State ------------ - */
export const INITIAL_STATE = Map({
  error: false
})

const signupSuccess = (state = INITIAL_STATE, action) => {
  return { ...state, error: false }
}

const signupFailed = (state = INITIAL_STATE, action) => {
    return { ...state, error: true, error: action.error }
  }

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.SIGNUP_SUCCESS]: signupSuccess,
  [Types.SIGNUP_FAILED]: signupFailed,  
})