import React from 'react';


const Form = ({ handleSubmit, value }) =>  (

    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="Search"></label>
            Nom du Pokemon<br/>
            <input
                id="search"
                type="text"
                name="search"
            />
            <input className='submit' type="submit" value="Search Pokemon"/>
        </form>
    </div>
);
export default Form;
