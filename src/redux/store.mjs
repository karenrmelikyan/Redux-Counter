
import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "./counter.mjs";

// Storage for all existing reducers
export default configureStore({
    reducer: {
        counter: counterReducer,
    }
});

