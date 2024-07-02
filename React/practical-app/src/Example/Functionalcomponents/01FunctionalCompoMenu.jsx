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
                        <li><Link to="functionalcontrolledcompo">Controlled Component</Link></li>
                        <li><Link to="functionaluncontrolledcompo">UnControlled Component</Link></li>
                        <li><Link to="functionalcomponentuseref">UseRef</Link></li>
                        <li><Link to="functionalcomponentresspread">Rest Vs Spread</Link></li>
                        <li><Link to="hooks">ReactJSHooks</Link></li>
                        <li><Link to="useeffect">useEffect</Link></li>
                        <li><Link to="uselayouteffect">useLayoutEffect</Link></li>
                        <li><Link to="uselayouteffect">useCallback</Link></li>
                        <li><Link to="usememohooks">UseMemoHooks</Link></li>
                        <li><Link to="statelifting">StateLifting</Link> </li>
                        <li><Link to="usereducerhookinfunctionalcompo">UseReducerHookInFunctionalCompo</Link> </li>

                    </ol>                           
                </div>
                <div className='row my-3'>
                    <div className='col'>
                    <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}

export default FunctionalCompoMenu;