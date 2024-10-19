import { all } from "redux-saga/effects";
import userSaga from "./userSaga";
import counterSaga from "./counterSaga";

export default function* rootSaga() {
    yield all([
        userSaga(),
        counterSaga()
    ]);
}