import React, { useContext } from 'react';
import { usecontext } from 'react';
import { createContext } from 'react';
import { useState } from 'react';


const ThemeContext = createContext();
const UseContextExample = () => {
    const [theme,setTheme] = useState("Light")\
    return (
        <>
        Use context Perrnt Data
        <ThemeContext.Provider value={theme}>
            <FormCompo/>
        </ThemeContext.Provider>
        </>
    );
};

function FormCompo(params) {
    return (
        <>
        Child Data
        <PanelForDisp>
            <button>SignUp</button>
            <button>SignIn</button>
        </PanelForDisp>
        </>
    );
};

function PanelForDisp(params) {
    const theme = useContext(ThemeContext)
    const customClass = "Panel-"+theme;
    return (
        <>
            Grand Child Data
            <div className="{customClass}">
                testing
            </div>
        </>
    );
};

export default UseContextExample;