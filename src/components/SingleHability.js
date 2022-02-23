import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { titleCase } from '../helper/upperCase';

export const SingleHability = (hab) => {

    const {name,url} = hab.hab.ability;

    const [abilidad, setAbilidad] = useState({
        name:'',
        efect:'',
        generation:''
    })

    useEffect(() => {
            const getHab =async() =>{
            try {
              const {data} = await axios.get(url);
              setAbilidad({
                name:data.name,
                efect:data.effect_entries[1].effect,
                generation:data.generation.name
              })
            } catch (error) {
              console.error(error);
            }
          }
        getHab();
    }, [])

    return(
        <div className='singleHab'>
            <h3>{titleCase(name)}</h3>
            <div>
                <span><b>Efecto: </b>{abilidad.efect}</span><br/>
                <span><b>Generacion: </b>{abilidad.generation}</span><br/>
            </div>
        </div>
    )
}
