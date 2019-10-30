import React from 'react';
import data from "../data.json";
console.log(data);


const Unit_pokemon = props => {
    const { id, sprites, name, height, weight, location_area_encounters, types, stats, moves } = props;
    return(
        <ul>
            <li>
                {id}
            </li>
            <li>
                {sprites}
            </li>
            <li>
                {name}
            </li>
            <li>
                {height}
            </li>
            <li>
                {weight}
            </li>
            <li>
                {location_area_encounters}
            </li>
            <li>
                {types}
            </li>
            <li>
                {stats}
            </li>
            <li>
                {moves}
            </li>
        </ul>
    );
};


export default Unit_pokemon;
