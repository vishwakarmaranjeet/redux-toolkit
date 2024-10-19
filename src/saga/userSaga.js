import { call, put, takeLatest, delay } from "redux-saga/effects";
import axios from "axios";
import { fetchUserRequest, fetchUserSuccess, fetchUserFailure } from "../User/userSlice";

function fetchUserApi() {
    return axios.get('https://jsonplaceholder.typicode.com/users');
}

/** Worker Saga: will be fired on fetchUserRequest actions */
function* fetchUserSaga() {
    try {
        yield delay(100);
        const response = yield call(fetchUserApi);
        yield put(fetchUserSuccess(response.data));
    } catch (error) {
        yield put(fetchUserFailure(error.message));
    }
}

/** Watcher Saga: watches for actions dispatched to the store and starts worker saga */
function* userSaga() {
    yield takeLatest(fetchUserRequest.type, fetchUserSaga);
}

export default userSaga;