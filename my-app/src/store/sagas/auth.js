import { put } from 'redux-saga/effects';
import * as actions from '../actions/index';
import * as actionTypes from '../actions/actionTypes';
import delay from 'redux-saga';

export function* logoutSaga(action) {
    yield localStorage.removeItem('token');
    yield localStorage.removeItem('expirationDate');
    yield localStorage.removeItem('userId');
    yield put({
        type: actionTypes.AUTH_LOGOUT
    });
};
export function* checkAuthTimeoutSaga(action){
   yield delay(action.expirationTime * 1000);
   yield put(actions.logout());
}