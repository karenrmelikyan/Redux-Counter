import React from "react";
import {useSelector} from "react-redux";

export default function Observer() {

    const {value} = useSelector(state => state.counter);

    return(
        <h3 align="center">Observer: {value}</h3>
    );
}