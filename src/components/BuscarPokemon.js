import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { nextId, searchNewPoke } from '../actions/poke';
import { useForm } from '../hooks/useForm';

export const BuscarPokemon = () => {
    const dispatch = useDispatch();

    const {_idPoke} = useSelector( state => state.poke );

    const [ formSearchValues, handleSearchInputChange] =useForm({
        pokeName:""
    })

    const {pokeName} = formSearchValues;

    const handleNext = () =>{
        dispatch(nextId(_idPoke+1))
    }

    const handlePrev = () =>{
        dispatch(nextId(_idPoke-1))
    }

    const handleSearch = (e) =>{
        e.preventDefault();
        dispatch(searchNewPoke(pokeName))
    }

    return(
        <div className='menu'>
            <div className='menu menu-search'>
                <form onSubmit={handleSearch}>
                    <h4 className="find-text">Escribe el nombre o # de pokedex:</h4>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control form-search"
                            placeholder="Pokemon"
                            name="pokeName"
                            value={pokeName}
                            onChange={handleSearchInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <input 
                            type="submit"
                            className=" btn btn-primary btn-search"
                            value="Buscar" 
                        />
                    </div>
                </form>
            </div>
            <div className="menu-button">
                
                <button className={(_idPoke<=1) ? "hidden" : ''} onClick={handlePrev}> Prev Pokemon </button>
                
                <button onClick={handleNext}> Next Pokemon </button>
            </div>
        </div>
    )
}
