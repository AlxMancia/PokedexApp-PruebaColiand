import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { DetallesPokemon } from '../components/DetallesPokemon';
import { PokemonCard } from '../components/PokemonCard'

export const DetallesScreen = () => {

    const {name,_idPoke,image} = useSelector( state => state.poke );

    return (
        <div className='detallesContainer'>
            <Link to="/" className="btn-secondary">Ir a busqueda</Link>
            <div className='detallesContainer2'>
                <PokemonCard name={name} id={_idPoke} image={image}/>
                <DetallesPokemon/>
            </div>
        </div>
    )
}
