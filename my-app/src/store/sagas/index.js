import {logoutSaga, checkAuthTimeoutSaga} from './auth';
import * as actionTypes from '../actions/actionTypes';
import {takeEvery} from 'redux-saga/effects';

export function* watchAuth(){
    yield takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, logoutSaga);
    yield takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga);
}