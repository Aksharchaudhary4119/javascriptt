import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const FunctionalCompoMenu = () => {
    return (
        <>
            <div className="row my-3">
                <div className="col offset-md-6">
                    <ol>
                        <li><Link to="functionalcomponentintro">Introduction</Link></li>
                        <li><Link to="functionalcomponentstate">State</Link></li>
                        <li><Link to="functionalcomponentprops">Props</Link></li>
                        <li><Link to="functionalcomponentUseContext">UseContext</Link></li>
                    </ol>
                </div>
                <div className='row my-3'>
                    <div className='col'>
                    <Outlet />
                    </div>–
                </div>
            </div>
        </>
    )
}

export default FunctionalCompoMenu;