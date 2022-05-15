import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment} from "./redux/counter.mjs";

function App() {
    // Get named constant from 'Slice',
    // which will be changed in common context
    const {value} = useSelector((state) => state.counter);

    // Get 'dispatch' function for
    // invoking functions from 'Slice'.
    // The dispatched functions should be
    // invoking via () (don't forget it)
    const dispatch = useDispatch();

    return (
        <>
            <div align={"center"} >
                <h1>Counter: {value}</h1>
                <button onClick={() => dispatch(decrement())}>-</button>
                <button onClick={() => dispatch(increment())}>+</button>
            </div>
        </>
    );
}

export default App;

