import { logoutSaga, checkAuthTimeoutSaga, authUserSaga, authCheckStateSaga } from './auth';
import * as actionTypes from '../actions/actionTypes';
import { takeEvery, all, takeLatest } from 'redux-saga/effects';
import { initIngredientsSaga } from './burgerBuilder';
import { purchaseBurgerSaga, fetchOrdersSaga } from './order';


export function* watchAuth() {
    yield all( //good for running simultaneously
        [
            takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, logoutSaga),
            takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga),
            takeEvery(actionTypes.AUTH_USER, authUserSaga),
            takeEvery(actionTypes.AUTH_CHECK_STATE, authCheckStateSaga)
        ]
    )
}


export function* wathBurgerBuilder() {
    yield takeEvery(actionTypes.INIT_INGREDIENTS, initIngredientsSaga);
}

export function* wacthOrder() {
    yield takeLatest(actionTypes.PURCHASE_BURGER, purchaseBurgerSaga);
    yield takeEvery(actionTypes.FETCH_ORDERS, fetchOrdersSaga);
}