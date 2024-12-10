import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import userReducer from '../User/userSlice';
import counterReducer from "../counter/counterSlice";
import rootSaga from '../saga/rootSaga';

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();
const logger = createLogger({
    // Optional: You can customize the logger options here
    collapsed: true, // Collapse log messages for easier viewing
    diff: true, // Show state differences
});

// Configure the store
const store = configureStore({
    reducer: {
        user: userReducer,
        counter: counterReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware, logger),
});

// Then run the saga
sagaMiddleware.run(rootSaga);

export default store;
