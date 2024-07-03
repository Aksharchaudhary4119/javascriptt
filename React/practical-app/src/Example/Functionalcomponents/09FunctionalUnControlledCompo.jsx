import Reac, { useRef } from 'react';

const FunctionalUnControlledCompo = () => {
    const inputRef = useRef(null);

    function handleSumbmit() {
        alert(`Name: ${inputRef.current.value}`)
    }
    return (
        <>
           <h1 className='geeks'>GeeksForGeeks</h1> 
           <h3>Uncontrolled Component</h3>
           <form onSubmit={handleSumbmit}>
            <label>Nmae :-</label>
            <input
                type="text"
                name='name'            
                ref={inputRef}
            />
            <button type='submit'>Submit</button>

            <p>
            An uncontrolled component stores the current value of the form data using react ref. Uncontrolled component react are helpful when we need to integrate react with other libraries which do not follow react design patterns.
            </p>
           </form>
        </>
    );
};

export default FunctionalUnControlledCompo;