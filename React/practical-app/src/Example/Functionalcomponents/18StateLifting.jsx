import React, { useState } from 'react';
import ChildComponent from './19ChildComponent.jsx';

const StateLiftingInFunctionalCompo = () => {
    const [statedata, setStatedata] = useState();
    const parentFunc = (data) => {
        // setStatedata(data)
        // console.log("called parent function",data);
        setStatedata(data)
    }
    return (
        <>

            <p>Parent State : {statedata}</p>
            {/* <button>Click Parent</button> */}
            <ChildComponent title="testing" func={parentFunc} />  {statedata}

<br />

<br />
            <p>
            In React, sharing state is accomplished by moving it up to the closest common ancestor of the components that need it. This is called “lifting state up”.
            </p>
            <p>
            The useReducer Hook is used to store and update states, just like the useState Hook. It accepts a reducer function as its first parameter and the initial state as the second. useReducer returns an array that holds the current state value and a dispatch function to which you can pass an action and later invoke it.[[UseReducer હૂકનો ઉપયોગ સ્ટેટ હૂકની જેમ જ સ્ટેટ્સને સ્ટોર કરવા અને અપડેટ કરવા માટે થાય છે. તે તેના પ્રથમ પરિમાણ તરીકે રીડ્યુસર ફંક્શન અને બીજા તરીકે પ્રારંભિક સ્થિતિ સ્વીકારે છે. useReducer એ એરે આપે છે જે વર્તમાન સ્થિતિ મૂલ્ય ધરાવે છે અને એક ડિસ્પેચ ફંક્શન કે જેમાં તમે ક્રિયા પસાર કરી શકો છો અને પછીથી તેને બોલાવી શકો છો.]]
            </p>
        </>
    );
};

export default StateLiftingInFunctionalCompo;