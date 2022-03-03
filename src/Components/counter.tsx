import React from 'react';
import s from "./counter.module.css"
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../BLL/store";
import {decCount, incCount, resCount} from "../BLL/counter-reducer";

export const Counter = () => {

    const count = useSelector<AppRootStateType, number>(state => state.counter.value)
    const dispatch = useDispatch()

    const incrementCount = () => {
        dispatch(incCount())
    }
    const decrementCount = () => {
        dispatch(decCount())
    }
    const resetCount = () => {
        dispatch(resCount())
    }

    return (
        <div className={s.counterContainer}>
            <div className={s.window}>{count}</div>
            <div className={s.incDecBtnContainer}>
                <button onClick={incrementCount} disabled={count === 100 ? true : false}>inc</button>
                <button onClick={decrementCount} disabled={count === 0 ? true : false}>dec</button>
            </div>
            <div className={s.resetBtnContainer}>
                <button onClick={resetCount} disabled={count === 0 ? true : false}>Reset</button>
            </div>
        </div>
    );
};
