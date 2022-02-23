import React from 'react'
import { useSelector } from 'react-redux';
import { SingleHability } from './SingleHability';

export const Habilidades = () => {
    const {totalHab} = useSelector( state => state.poke );

    return(
        <div>
            <h3>Habilidades</h3>
            {totalHab.map((hab,i) => <SingleHability key={i} hab={hab} />)}
        </div>
    )
}
