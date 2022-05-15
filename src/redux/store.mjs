import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "./counter.mjs";

export default configureStore({
    reducer: {
       counter: counterReducer
    }
});


