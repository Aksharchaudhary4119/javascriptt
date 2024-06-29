import React, { useState } from 'react';

const UseMemoHooks = () => {
    const [number, setNumber] = useState(0);
    const squaredNum = squareNum(number);
    const [counter, setCounter] = useState(0);
 
    // Change the state to the input
    const onChangeHandler = (e) => {
        setNumber(e.target.value);
    };
 
    // Increases the counter by 1
    const counterHander = () => {
        setCounter(counter + 1);
    };
    return (
        <div className="Info">
            <h1>Welcome to Dh way it career</h1>
            <input
                type="number"
                placeholder="Enter a number"
                value={number}
                onChange={onChangeHandler}
            ></input>
 
            <div>OUTPUT: {squaredNum}</div>
            <button onClick={counterHander}>
                Counter ++
            </button>
            <div>Counter : {counter}</div>
                <br />
            <p>useMemo is a React Hook that is used to optimize performance by memoizing the result of a function or computation. In simpler terms, it remembers the value that a function returns, so that the function doesn't have to be recalculated every time the component re-renders.</p>

        </div>
    );
}
 
// const to square the value
const squareNum = (number) => {
    console.log("Squaring will be done!");
    return Math.pow(number, 5);
}

export default UseMemoHooks;