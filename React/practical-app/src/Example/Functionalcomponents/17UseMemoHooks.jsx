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

            <br />
            <p>
            React useMemo() hook is a function that caches the value produced from an expensive function used inside a React component. It accepts the expensive function and works by storing the value produced from the function when that is passed the same arguments repeatedly.
            </p>
            <p>
            that is passed the same arguments repeatedly.
            </p>
            <p>
            UseMemo react hooks chhe jeno upyog function or calculation na parinamo ne yaad kari ne optimize karva de chhe
            </p>

            <h3>1. What is the useMemo hook and how is it used?</h3>
            <p> The useMemo hook works to memoize functions within React. Memoization is a technique for caching the result of a function call so that it does not have to be recalculated every time the function is used.</p>

            <h3>2.UseMemoHooks</h3>
            <p>The useMemo is a hook used in the functional component of react that returns a memoized value. Memoization is a concept used in general when we don’t need to recompute the function with a given argument for the next time as it returns the cached result. A memoized function remembers the results of output for a given set of inputs. In React also, we use this concept, whenever in the React component, the state and props do not change the component and the component does not re-render, it shows the same output. The useMemo hook is used to improve performance in our React application.</p>

            <h3>3. What is the use of the useMemo hook?</h3>
            <p>The useMemo hook is used to memoise an expensive operation that we give it. The term "memoise" refers to remembering past values that have already been computed.</p>

        </div>
    );
}
 
// const to square the value
const squareNum = (number) => {
    console.log("Squaring will be done!");
    return Math.pow(number, 5);
}

export default UseMemoHooks;