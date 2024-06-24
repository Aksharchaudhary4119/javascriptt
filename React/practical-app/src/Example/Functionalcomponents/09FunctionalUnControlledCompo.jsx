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
           </form>
        </>
    );
};

export default FunctionalUnControlledCompo;