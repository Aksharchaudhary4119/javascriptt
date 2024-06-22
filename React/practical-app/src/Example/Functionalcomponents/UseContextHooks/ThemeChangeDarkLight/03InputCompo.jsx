import React, { useContext } from 'react';
import {ThemeContext} from './01mainFile';


const InputCompo = (props) => {
    const darkTheme = useContext(ThemeContext)
    return (
        <>
            {/* {JSON.stringify(darkTheme)} */}
          <input type="text" className={darkTheme ? "form-control" : "form-control text-bg-dark"} placeholder='Enter User Name' name="username" id="username" />  
        </>
    );
};

export default InputCompo;