import React from 'react'
import { useSelector } from 'react-redux';
import { SingleMove } from './SingleMove';

export const Movimientos = () => {
    const {totalMov} = useSelector( state => state.poke );

    return(
        <div>
            <h3>Movimientos</h3>
            {totalMov.map((moves,i) => <SingleMove key={i} moves={moves} />)}
        </div>
    )
}
