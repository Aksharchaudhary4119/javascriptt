import React from 'react';

const HooksInFunctionalCompo = () => {
    return (
        <>
            <p>Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.</p>
            <p> This page describes the APIs for the built-in Hooks in React.</p>
            <p>If you’re new to Hooks, you might want to check out the overview first. You may also find useful information in the frequently asked questions section.</p>
            <ul>
                <li>
                    <p><a href="#basic-hooks">Basic Hooks</a></p>
                    <ul>
                        <li><a href="#usestate"><code className="gatsby-code-text">useState</code></a> <span>useState is a React Hook that lets you add a state variable to your component.</span> </li>
                        <li><a href="#useeffect"><code className="gatsby-code-text">useEffect</code></a><span>useEffect is a React Hook that lets you synchronize a component with an external system.</span></li>
                        <li><a href="#uselayouteffect"><code className="gatsby-code-text">useLayoutEffect</code></a></li>
                        <li><a href="#useref"><code className="gatsby-code-text">useRef</code></a></li>
                    </ul>
                </li>
                <li>
                    <p><a href="#additional-hooks">Additional Hooks</a></p>
                    <ul>
                        <li><a href="#usecallback"><code className="gatsby-code-text">useCallback</code></a></li>
                        <li><a href="#usememo"><code className="gatsby-code-text">useMemo</code></a></li>
                        <li><a href="#useimperativehandle"><code className="gatsby-code-text">useImperativeHandle</code></a></li>
                        <li><a href="#usedebugvalue"><code className="gatsby-code-text">useDebugValue</code></a></li>
                        <li><a href="#usedeferredvalue"><code className="gatsby-code-text">useDeferredValue</code></a></li>
                        <li><a href="#usetransition"><code className="gatsby-code-text">useTransition</code></a></li>
                        <li><a href="#useid"><code className="gatsby-code-text">useId</code></a></li>
                        <li><a href="#usecontext"><code className="gatsby-code-text">useContext</code></a></li>
                        <li><a href="#usereducer"><code className="gatsby-code-text">useReducer</code></a></li>
                    </ul>
                </li>
                <li>
                    <p><a href="#library-hooks">Library Hooks</a></p>
                    <ul>
                        <li><a href="#usesyncexternalstore"><code className="gatsby-code-text">useSyncExternalStore</code></a></li>
                        <li><a href="#useinsertioneffect"><code className="gatsby-code-text">useInsertionEffect</code></a></li>
                    </ul>
                </li>
            </ul>
            <p>
            React Hooks are functions that let you use state and other React features in functional components without writing a class component. Hooks were introduced in React version 16.8 as a way to simplify state management and reduce code duplication in React applications.
            </p>

            <h1>Interview Questions</h1>
            <h3>1. What are hooks in React?</h3>
            <p> Hooks are a new addition in React 16.8. They let developers use state and other React features without writing a class. Hooks doesn’t violate any existing React concepts. Instead, Hooks provide a direct API to react concepts such as props, state, context, refs and life-cycle</p>

            <h3>2.What is React Hooks?</h3>
            <p>React Hooks is a function that lets you use state and other React features without writing a class. They were introduced in React 16.8 to enable functional components to use state which means to make the code good and easy to understand.</p>

            <h3>3.What problems do React Hooks solve?</h3>
            <p>React Hooks solves the problems of sharing the stateful logic between components in a more modular and reusable way than class component.</p>

            <h3>4.What are the basic built-in React Hooks?</h3>
            <ul>
                <li><u>useState </u>enables components to manage and update their own state without using classes.</li>
                <li><u>useEffect </u>is used to connect component to an external system.</li>
                <li><u>useContext </u> it is used to consume data from a Context in a functional component.</li>
                <li><u>useReducer </u>is used to manage complex state logic through a reducer function.</li>
                <li><u>useCallback </u>used to memoize functions, preventing unnecessary re-renders in child components.</li>
                <li><u>useMemo </u> is used to memoize the result of a function computation, preventing unnecessary recalculations.</li>
                <li><u>useRef </u>is used to create mutable references that persist across renders in functional components.    
                </li>
                <li><u>useImperativeHandler </u> customizes the instance value that is exposed when using ref with functional components.</li>
            </ul>


        </>
    );
};

export default HooksInFunctionalCompo;