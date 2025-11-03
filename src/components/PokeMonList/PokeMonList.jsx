import { useEffect, useState } from 'react';
import axios from 'axios'
import './PokeMonList.css'
import Pokemon from '../PokeMon/Pokemon';

function PokeMonList(){

    const[pokemonList, setPokemonList] = useState([]);
    const[pokedexUrl, setPokedexUrl] = useState('https://pokeapi.co/api/v2/pokemon');


    async function downloadPokemons () {

        const response = await axios.get(pokedexUrl);

        const pokemonResults = response.data.results; // array of pokemons

        const pokemonPromise = pokemonResults.map((pokemon) => axios.get(pokemon.url));

        const pokemonListData = await axios.all(pokemonPromise);

        const pokemonFinalList = pokemonListData.map( pokemonData =>{
            const pokemon = pokemonData.data;
            console.log(pokemon.sprites.other.dream_world.front_default)
            return{
                id : pokemon.id,
                name : pokemon.name,
                image :pokemon.sprites.other.dream_world.front_default,
                types : pokemon.types
            }
        })
        setPokemonList(pokemonFinalList)
        // console.log(pokemonFinalList)
    }

    useEffect(() =>{
        downloadPokemons()
    }, []);

    return(
        <div className='pokemonList-wrapper'>
           
           <div >
            <h1>Pokemon List</h1>
            </div>

            <div className='page-controls'>
                <button>Prev</button>
                <button>Next</button>
            </div>
           
            <div className='pokemon-list'>
                {pokemonList.map((pokemon) => 
                <Pokemon 
                    key={pokemon.id}
                    name ={pokemon.name} 
                    id={pokemon.id} 
                    image={pokemon.image}
                />)}
            </div>
            
        </div>
    )
}
export default PokeMonList