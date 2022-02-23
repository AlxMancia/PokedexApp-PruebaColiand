import Swal from "sweetalert2";
import { types } from "../types/types"
import axios from "axios";


export const nextId = (idPoke) => {
    return async (dispatch)=>{
        try { 
            const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${idPoke}`);
            const {name, id ,height,base_experience,weight,abilities,moves} = data;
            const image = data.sprites.other["official-artwork"].front_default;

            const {data:data2} = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${idPoke}`)
            const {  base_happiness,
                capture_rate,
                color,
                generation,
                growth_rate,
                habitat,
                order,
                shape } = data2;

                if(habitat){
                    dispatch(saveNewPoke({name, 
                        id ,
                        height,
                        base_experience,
                        weight,
                        abilities,
                        moves,
                        image,
                        base_happiness,
                        capture_rate,
                        color,
                        generation,
                        growth_rate,
                        habitat,
                        order,
                        shape
                    }))
                }
                dispatch(saveNewPoke({name, 
                    id ,
                    height,
                    base_experience,
                    weight,
                    abilities,
                    moves,
                    image,
                    base_happiness,
                    capture_rate,
                    color,
                    generation,
                    growth_rate,
                    habitat:'None',
                    order,
                    shape
                }))
        } catch (error) {
            return Swal.fire('Error',"No ha podido ser encontrado",'error');
        }
    }
}

export const searchNewPoke =  (search) =>{
    return async (dispatch)=>{
        try { 
            const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${search}`);
            const {name, id ,height,base_experience,weight,abilities,moves} = data;
            const image = data.sprites.other["official-artwork"].front_default;

            const {data:data2} = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
            const {  base_happiness,
                capture_rate,
                color,
                generation,
                growth_rate,
                habitat,
                order,
                shape } = data2;

            if(habitat){
                dispatch(saveNewPoke({name, 
                    id ,
                    height,
                    base_experience,
                    weight,
                    abilities,
                    moves,
                    image,
                    base_happiness,
                    capture_rate,
                    color,
                    generation,
                    growth_rate,
                    habitat,
                    order,
                    shape
                }))
            }
            dispatch(saveNewPoke({name, 
                id ,
                height,
                base_experience,
                weight,
                abilities,
                moves,
                image,
                base_happiness,
                capture_rate,
                color,
                generation,
                growth_rate,
                habitat:'None',
                order,
                shape
            }))

        } catch (error) {
            console.log(error)
            return Swal.fire('Error',"No ha podido ser encontrado",'error');
    }
}
}

const saveNewPoke = (pokemon) => ({
    type:types.pokeSetNew,
    payload:pokemon
})
