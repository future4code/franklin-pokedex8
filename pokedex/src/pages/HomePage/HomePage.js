import React from 'react';
import { BASE_URL } from '../../constants/url';
import { useRequestData } from '../../hooks/useRequestData';

const HomePage = ({ pokedex, setPokedex }) => {
  const [getPokemons] = useRequestData(BASE_URL);
  console.log(getPokemons.results);

  const addPokedex = pokemon => {
    const newPokedex = [...pokedex, pokemon];
    setPokedex(newPokedex);
    console.log(pokedex);
  };

  const pokeCard = getPokemons.results.map(pokemon => {
    return (
      <div className="Poke Card">
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
            pokemon.url.split('/')[6]
          }.svg`}
          alt={pokemon.name}
        />
        <div>
          <h2>{pokemon.name}</h2>
          <div>
            <button onClick={addPokedex}> Adicionar </button>
            <button> Detalhes </button>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div>
      <div className="Header">
        <button>pokedex</button>
        Lista Pokemons
      </div>
      <div>{getPokemons && pokeCard}</div>
    </div>
  );
};

export { HomePage };
