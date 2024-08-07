import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react';

// const ChilCompoHoneyCom = () => {
const ChilCompo = forwardRef((props, ref) => {

    const arr = [1, 2, 3, 4, 5, 6];
    const [ele, setEle] = useState();
    const [ele2, setEle2] = useState();
    useImperativeHandle(ref, () => ({
        getAlert() {
            // console.log("called");
            // shuffle(arr);
            let suffRes = shuffle(arr);
            console.log("suffRes res", suffRes);
            setEle(suffRes[0]);
        },
    }))
    useEffect(() => {
        // console.log("sending arr",arr);
        let suffRes = shuffle(arr)
        console.log("suffresponse ",suffRes);
        setEle(suffRes[0]);
        setEle2(suffRes[1]);
    
        suffRes.shift(); // for first element
        suffRes.shift(); // for second element
        console.log(suffRes);
        props.onAddHandler(suffRes);

    },[ele])  
    const shuffle = (array) => {
        for (let index = array.length - 1; index > 0; index--) {
            const j = Math.floor(Math.random() * (index + 1));
            // console.log("value of j ",j);
            const temp = array[index];  
            // console.log("value of temp ",temp);
            array[index] = array[j];
            array[j] = temp;
        }
        return array
    }
    return (
        <>
            {arr}
            Child Component    
            <h3>Child first Element {ele}</h3>
            <h3>Child second Element {ele2}</h3>  
        </>
    );
});

export default ChilCompo;