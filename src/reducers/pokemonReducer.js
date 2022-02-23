import { types } from "../types/types";

const initialState = {
    _idPoke:1,
    name:'bulbasaur',
    image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
    altura:7,
    peso:69,
    experiencia:64,
    totalMov:[],
    totalHab:[],
    baseJoy:50,
    capture_rate:45,
    color:'green',
    generation:'generation-i',
    growth_rate:'medium-slow',
    habitat:'grassland',
    order:1,
    shape:'quadruped'
}

export const pokemonReducer = (state = initialState,action) =>{

    switch (action.type) {
       case types.pokeNextId :
           return {
               ...state,
               _idPoke: action.payload
           }
        case types.pokePrevId :
            return {
                ...state,
                _idPoke: action.payload
            }
        case types.pokeSetNew:
            return {
               _idPoke: action.payload.id,
               name:action.payload.name,
               image:action.payload.image,
               altura:action.payload.height,
               peso:action.payload.weight,
               experiencia:action.payload.base_experience,
               totalMov:action.payload.moves,
               totalHab:action.payload.abilities,
               base_happiness:action.payload.base_happiness,
               capture_rate:action.payload.capture_rate,
               color:action.payload.color.name,
               generation:action.payload.generation.name,
               growth_rate:action.payload.growth_rate.name,
               habitat:action.payload.habitat.name,
               order:action.payload.order,
               shape:action.payload.shape.name
            }
           
        default:
            return state;
    }

}