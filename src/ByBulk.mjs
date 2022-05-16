import React, {useState} from "react";
import {changeByAmount} from "./redux/counter.mjs";
import {useDispatch} from "react-redux";

export default function ByBulk() {
    const dispatcher = useDispatch();
    const [text, setText] = useState(0);

     function setNumber(event) {
        const x = Number(event.target.value);
        setText(x);
    }

    return(
        <>
            <div align={'center'}>
                <input type={'text'} onChange={(e) => setNumber(e)}/>
                <button onClick={() => dispatcher(changeByAmount(text))}>Set Value</button>
            </div>
        </>
    );
}

