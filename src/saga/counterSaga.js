import { takeEvery, delay } from "redux-saga/effects";
import { incrementAsync } from "../counter/counterSlice";

// Worker saga: will perform the async increment task
function* incrementAsyncSaga() {
    yield delay(1000);
}

// Watcher saga: listens for incrementAsync actions
function* watchIncrementAsync() {
    yield takeEvery(incrementAsync.type, incrementAsyncSaga);
}
export default watchIncrementAsync;
