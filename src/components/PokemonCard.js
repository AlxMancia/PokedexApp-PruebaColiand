import React from 'react'
import { titleCase } from '../helper/upperCase';


export const PokemonCard = ({name,id,image}) => {

    let upperCaseName = titleCase(name);
    return(
        <div className='pk-card'>
            <h1>{upperCaseName}</h1>
            <h2>Pokemon : #{id}</h2>
            <img src={image} alt="MDN" ></img>
        </div>
    )
}
