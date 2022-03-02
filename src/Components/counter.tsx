import React, {useEffect, useState} from 'react';
import s from "./counter.module.css"

export const Counter = () => {

    const [count, setCount] = useState<number>(0)

    useEffect( () => {
        let valueAsString = localStorage.getItem('counterValue')
        if (valueAsString) {
            let valueAsNumber = JSON.parse(valueAsString)
            setCount(valueAsNumber)
        }
    }, [])

    useEffect( () => {
        localStorage.setItem('counterValue', JSON.stringify(count))
    }, [count] )



    const incrementCount = () => {
        setCount(count + 1)
    }
    const decrementCount = () => {
        setCount(count - 1)
    }
    const resetCount = () => {
        setCount(0)
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
