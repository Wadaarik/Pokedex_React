import React from 'react';
import Unit_pokemon from '../components/unit_pokemon';

const Pokemons = ({Pokemons}) => (
    <ul>
        {Pokemons.map((Pokemons, index)=>(
            <Unit_pokemon
                key={'Pokemons' + index}
                name={Pokemons.name}
                sprites={Pokemons.sprites}
                height={Pokemons.height}
                weight={Pokemons.weight}
                location_area_encounters={Pokemons.location_area_encounters}
                types={Pokemons.types}
                stats={Pokemons.stats}
                moves={Pokemons.moves}
            />
        ))}
    </ul>
);


export default Pokemons;
