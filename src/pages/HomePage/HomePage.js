import React, { useState, useEffect } from 'react';
import { BASE_URL } from '../../constants/url';
import axios from 'axios';

const HomePage = () => {
  const [pokemons, setPokemons] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState(BASE_URL);
  const [nextPageUrl, setNextPageUrl] = useState();
  const [previousPageUrl, setPreviousPageUrl] = useState();

  // const goToNextPage = () => {
  //   setCurrentPageUrl(nextPageUrl);
  // };

  // const goToPreviousPage = () => {
  //   setCurrentPageUrl(previousPageUrl);
  // };

  useEffect(() => {
    axios
      .get(currentPageUrl)
      .then(response => {
        console.log(response.data);
        setNextPageUrl(response.data.next);
        setPreviousPageUrl(response.data.previous);
        setPokemons(response.data.results);
      })
      .catch(error => {
        console.log(error);
        alert('Ocorreu um erro, tente novamente');
      });
  }, [currentPageUrl]);

  console.log(pokemons);

  const pokeCard = pokemons.map(pokemon => {
    return (
      <div className="Poke Card">
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
            pokemon.url.split('/')[6]
          }.svg`}
          alt={pokemon.name}
        />
        {pokemon.url.split('/')[6]}
        <div>
          <h2>{pokemon.name}</h2>
          <div>
            <button onClick={'addPokedex'}> Adicionar </button>
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
      <div>{pokemons && pokeCard}</div>
    </div>
  );
};

export { HomePage };
