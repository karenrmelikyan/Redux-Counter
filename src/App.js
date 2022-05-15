import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {increment, decrement} from "./redux/counter.mjs";


function App() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
      <>
          <div align={"center"} >
              <h1>Counter: {count}</h1>
              <button onClick={() => dispatch(decrement())}>-</button>
              <button onClick={() => dispatch(increment())}>+</button>
          </div>
      </>
  );
}

export default App;
