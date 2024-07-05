import { forwardRef,useImperativeHandle, useState } from "react";

const ButtonCompo = forwardRef((props,ref) => {
    const [toggle,setToggle] = useState(true)
    useImperativeHandle(ref , () => ({
        alertToggle(){
            console.log("called inside child compo btn");
        },
    }));
    return (
        <>
        child compo
        <p>Props : {props.data}</p>
        <p>thise will containers child data : {toggle && <span>Toggle</span>} </p>  
        </>
    );
});

export default ButtonCompo;