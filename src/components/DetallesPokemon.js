import React from 'react'
import { useSelector } from 'react-redux';
import { Habilidades } from './Habilidades';
import { Movimientos } from './Movimientos';

export const DetallesPokemon = () => {
    const {altura,peso,experiencia,totalMov,totalHab,base_happiness,capture_rate,color,generation,growth_rate,habitat,order,shape} = useSelector( state => state.poke );

    JSON.stringify(totalMov);
    JSON.stringify(totalHab)

    return(
        <div className='detalles2'>
            <div className='allDetalles'>
                <div className='detallesPokemon'>
                    <h3>Detalles de pokemon</h3>
                    <span><b>Altura:</b> {altura}</span><br/>
                    <span><b>Peso:</b> {peso}</span><br/>
                    <span><b>Experiencia base:</b> {experiencia}</span><br/>
                    <span><b>Total de movimientos: </b>{totalMov.length}</span><br/>
                    <span><b>Total de habilidades: </b>{totalHab.length}</span><br/>
                    <br/>
                </div>

                <div className='detallesEspecies'>
                    <h3>Detalles de especie</h3>
                    <span><b>Alegria:</b> {base_happiness}</span><br/>
                    <span><b>Tasa de captura:</b> {capture_rate}</span><br/>
                    <span><b>Color:</b> {color}</span><br/>
                    <span><b>Generacion:</b> {generation}</span><br/>
                    <span><b>Tasa de crecimiento:</b> {growth_rate}</span><br/>
                    <span><b>Habitad:</b> {habitat}</span><br/>
                    <span><b>Orden:</b> {order}</span><br/>
                    <span><b>Forma:</b> {shape}</span><br/>
                </div>
            </div>
            <div>
                <div className='habilidades'>
                    <Habilidades/>
                </div>
                
                <div className='movimientos'>
                    <Movimientos/>
                </div>
            </div>
        </div>
    )
}