import React from "react";
import {useSelector} from "react-redux";

export default function Observer() {

    const {count} = useSelector((state) => state.counter);

    return(
        <h1 align={"center"}>Observer: {count}</h1>
    );
}