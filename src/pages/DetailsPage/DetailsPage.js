import React, { useEffect, useState} from 'react';
import axios from 'axios';
import { BASE_URL } from '../../constants/url';
import { useParams, useNavigate } from 'react-router-dom';
import { goToBackPage } from '../../routes/coordinator';

const DetailsPage = () => {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonStats, setPokemonStats] = useState([]);
  const [pokemonType, setPokemonType] = useState([]);
  const [pokemonMoves, setPokemonMoves] = useState([]);
  const [id, setId] = useState('')

const navigate = useNavigate();
const params = useParams();
// console.log(params)
const getPokemon = () => {
  axios 
    .get(`${BASE_URL}/${params.idOrName}`)
    .then(response => {
      setPokemonStats(response.data.stats)
      console.log(response.data.stats)
      setPokemonType(response.data.types)
      console.log(response.data.types)
      setPokemonMoves(response.data.moves)
      console.log(response.data.moves)
      setId(response.data.id)
    })
    .catch(error =>{
      console.log(error);
      console.log('Ocorreu um erro, tente novamente');
    })
}

useEffect(getPokemon, []);


  return (
    <div>
        <div className='Header'>
          <button onClick={() => goToBackPage(navigate)}> Voltar </button>
          <h1>{params.idOrName}</h1>
  

          <div>
            <button> Adicionar na Pokedex</button>
            <button> Remover na Pokedex</button>
          </div>
        </div>
        <div>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
          alt={id}
        />
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}/>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id}.png`}/>
        </div>
       
            


         <h2>STATS</h2>
         {pokemonStats.map((pokemon) => { 
                return (
                    <div key={pokemon.stat.name}> 
                        <p><strong>{pokemon.stat.name}: </strong>{pokemon.base_stat}</p>
                    </div>
    )
        })}

         <div>
         <h2>TIPOS</h2>
         {pokemonType.map((pokemon) => { 
                return (
                    <div key={pokemon.type.name}> 
                        <p><strong>{pokemon.type.name}: </strong>{pokemon.type.name}</p>
                    </div>
    )
        })}
         </div>
         <div>
         <h2>MOVES</h2>
         {pokemonMoves.map((pokemon) => { 
                return (
                    <div key={pokemon.move.name}> 
                        <p><strong>{pokemon.move.name}: </strong>{pokemon.move.name}</p>
                    </div>
    )
        })}


        </div>
    </div>
  );
};

export { DetailsPage };
