import { useEffect, useState } from 'react'
import './PokeMonDetails.css'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

function PokeMonDetails(){

    const {id} = useParams()
    const POKEMON_DETAIL_URL = 'https://pokeapi.co/api/v2/pokemon/' 
    const [pokemon, setPokemon] = useState(null)
    async function downloadPokemon(){
        const response = await axios.get(POKEMON_DETAIL_URL + id);
        const pokemon =response.data;
        setPokemon({
            name : pokemon.name,
            height : pokemon.height,
            weight : pokemon.weight,
            types : pokemon.types,
            image :pokemon.sprites.other.dream_world.front_default
        })
    }

    useEffect(()=>{
        downloadPokemon()
    },[])
    return(
        <>
        <h1 className='pokedex-redirect'>
            <Link to='/'>
                Pokedex
            </Link>
        </h1>
        {pokemon && <div className='pokemon-details-wrapper'>
           <div className='pokemon-name'>
             {pokemon.name}
           </div>
           <div className='pokemon-img'>
            <img src={pokemon.image} alt="image" />
           </div>
           <div className='pokemon-attrs'>
            <div>
                Height : {pokemon.height}
            </div>
           <div>
             Weight : {pokemon.weight}
           </div>
           </div>
           <div className='pokemon-type'>
           <h1>Type : </h1> {pokemon.types.map(t => <span className='type' key={t.type.name}> {t.type.name}</span> )}
           </div>
        </div>}
    </>
    )
}
export default PokeMonDetails