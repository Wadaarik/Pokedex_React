import React from 'react';


const Form = ({ handleSubmit, value }) =>  (

    <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="Filtrer"></label>
            Nom du Pokemon<br/>
            <input
                id="filter"
                type="text"
                name="filter"
            />
            <input type="submit" value="Filtrer"/>
        </form>
        <p>{value}</p>
    </>
);
export default Form;
