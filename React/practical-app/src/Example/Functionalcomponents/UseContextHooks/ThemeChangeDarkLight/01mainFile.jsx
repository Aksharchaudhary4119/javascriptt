import React, { useState } from 'react';
import FormCol from './02FromCol';

export const ThemeContext = React.createContext()


const MainFile = () => {
    let [theme,setTheme] = useState(true);
    return (
        <>
         <ThemeContext.Provider value={theme}>
        <div className="row">
            <div className="col-4 offset-4">
            <div  className={theme ?"card":"card text-bg-dark"}>

                <div className="card-header text-center">Login</div>
                <label onClick={()=>setTheme(!theme)} htmlFor="">
                    {/* {JSON.stringify(theme)} */}
                    {theme ?<i className='fa fa-moon'></i> :<i className='fa fa-sun'></i>}
                    
                    
                </label>
                <div className="card-body">
                   {/* <FormCol theme = {theme}/> */}
                   <FormCol/>
                    <div className="row my-2 ">
                        <div className="col">
                            <input type="text" className={theme ?"form-control":"form-control text-bg-dark"}  placeholder='Enter Password' name="username" id="username" />
                        </div>
                    </div>
                    <div className="row my-2 ">
                        <div className="col">
                            <input type="button" className='btn btn-primary ' name="btn-login" id="btn-login" value="Login" /> &nbsp;
                            <input type="button" className='btn btn-danger ' name="btn-reset" id="btn-reset" value="Cancel" />
                        </div>
                    </div>
                </div>

            </div>

            </div>
        </div>
         </ThemeContext.Provider>
        </>
    );
};

export default MainFile;
