import React, { useEffect, useState } from 'react';
import axios from "axios";
import { titleCase } from '../helper/upperCase';


export const SingleMove = (moves) => {
    const {name} = moves.moves.move;
    const {url} = moves.moves.move;

    const [mov, setMov] = useState({
        power:0,
        accuracy:'',
        name:'',
        priority:0,
        pp:0,
        damage_class:''
    })

    useEffect(() => {
            const getMov =async() =>{
            try {
              const {data} = await axios.get(url);

              setMov({
                power:data.power,
                accuracy:data.accuracy,
                name:data.name,
                priority:data.priority,
                pp:data.pp,
                damage_class:data.damage_class.name
              })
            } catch (error) {
              console.error(error);
            }
          }
        getMov();
    }, [])



    return(
        <div className='singleMove'>
            <h3>{titleCase(name)}</h3>
            <div>
                <span><b>Poder: </b>{mov.power}</span> <br/>
                <span><b>Prioridad: </b>{mov.priority}</span><br/>
                <span><b>Exactitud: </b>{mov.accuracy}</span><br/>
                <span><b>Puntos de poder: </b>{mov.pp}</span><br/>
                <span><b>Tipo de danio: </b>{mov.damage_class}</span><br/>
            </div>
        </div>
    )
}
