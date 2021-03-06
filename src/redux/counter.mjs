import {createSlice} from "@reduxjs/toolkit";

// 'Slicer' for context sharing:
// (value states, functions).
export const CounterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
    },
    reducers: {
        increment: (state) => {
            state.value += 1;
        },

        decrement: (state) => {
            state.value -= 1;
        },

        changeByAmount: (state, action) => {
            state.value = action.payload;
        },
    }
});

export const {increment, decrement, changeByAmount} = CounterSlice.actions;

export default CounterSlice.reducer;
