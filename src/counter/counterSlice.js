import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0
}
const counterSlice = createSlice({
    name: "conuter",
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
        incrementAsync: (state, action) => {
            state.value += action.payload
        }
    }
});

export const { increment, decrement, incrementByAmount, incrementAsync } = counterSlice.actions;
export default counterSlice.reducer;