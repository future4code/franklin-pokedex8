import React, { useEffect, useState} from 'react';
import axios from 'axios';
import { BASE_URL } from '../../constants/url';
import { useParams, useNavigate } from 'react-router-dom';
import { goToBackPage } from '../../routes/coordinator';

const DetailsPage = () => {
const navigate = useNavigate();
const params = useParams();
const [pokemon, setPokemon] = useState({});
// console.log(params)
const getPokemon = () => {
  axios 
    .get(`${BASE_URL}/${params.idOrName}`)
    .then(response => {
      setPokemon(response.data)
      console.log(response.data)
      // console.log(response.data.abilities)
      // console.log(pokemon.moves[0].move.name)
      // console.log(pokemon.stats[0].base_stat)
    })
    .catch(error =>{
      console.log(error);
      console.log('Ocorreu um erro, tente novamente');
    })
}

useEffect(getPokemon, []);

// const pokemonStats = () => {
//   pokemon.stat.map((item) =>{
//     return (
//       <div>
//         {pokemon.stat.name}
//         console.log(pokemon.stat.name)
//       </div>
//     )
//   })
// }


// const showStats = () => {
//   return (
//     <div>
//         <img src='##DE FRENTE'/>
//         <img src='##DE COSTAS'/>
//         <div>
//         <h2>STATS</h2>
//           <p> HP </p>
//           <p> ATK </p>
//           <p> DEF </p>
//           <p> SPECIAL-ATK </p>
//           <p> SPECIAL-DEF </p>
//           <p> SPEED </p>
//         </div>
//         <div>
//           <p>##TIPO 1##</p>
//           <p>##TIPO 2##</p>
//         </div>
//         <div>
//           <h2>MOVES</h2>
//           <p> Moves </p>
//           <p> ## MOVE NAME 2 ##</p>
//           <p> ## MOVE NAME 3 ##</p>
//         </div>
//     </div>
//   );
// };

  return (
    <div>
        <div className='Header'>
          <button onClick={() => goToBackPage(navigate)}> Voltar </button>
          <h1>Nome Pokemon</h1>
          <div>
            <button> Adicionar na Pokedex</button>
            <button> Remover na Pokedex</button>
          </div>
        </div>
        <div>
            <img src='##DE FRENTE'/>
            <img src='##DE COSTAS'/>
            <div>
            <h2>STATS</h2>
            <div>
         <img src='##DE FRENTE'/>
        <img src='##DE COSTAS'/>
        {pokemon.length>0? (<div>
         <h2>STATS</h2>
           <p> HP: {pokemon.stats[0].base_stat}</p>
           <p> ATK: {pokemon.stats[1].base_stat} </p>
           <p> DEF: {pokemon.stats[2].base_stat} </p>
           <p> SPECIAL-ATK: {pokemon.stats[3].base_stat} </p>
           <p> SPECIAL-DEF: {pokemon.stats[4].base_stat} </p>
          <p> SPEED: {pokemon.stats[5].base_stat} </p>
        </div>): console.log('vazio')}
         <div>
           <p>##TIPO 1##</p>
           <p>##TIPO 2##</p>
         </div>
         <div>
           <h2>MOVES</h2>
           <p> Moves </p>
           <p> ## MOVE NAME 2 ##</p>
           <p> ## MOVE NAME 3 ##</p>
         </div>
         </div>
            </div>
        </div>
    </div>
  );
};

export { DetailsPage };
