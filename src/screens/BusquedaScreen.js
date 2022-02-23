import React from 'react'
import { useSelector } from 'react-redux'
import { BuscarPokemon } from '../components/BuscarPokemon';
import { PokemonCard } from '../components/PokemonCard';
import { Link } from 'react-router-dom';
import { titleCase } from '../helper/upperCase';



export const BusquedaScreen = () => {

    

    const {name,_idPoke,image} = useSelector( state => state.poke );

    return (
        <>
            <BuscarPokemon/>
            <div className='pkCardContainer'>
                <PokemonCard name={name} id={_idPoke} image={image}/>
            </div>
            <div className='form-group'>
                <Link to="/detalles" className="btn btn-primary center">Ir a detalles</Link>
            </div>
        </>
    )
}
