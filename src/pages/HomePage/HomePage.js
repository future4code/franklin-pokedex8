import React, { useState, useEffect } from 'react';
import { BASE_URL } from '../../constants/url';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { goToDetailsPage, goToPokedexPage } from '../../routes/coordinator';

const HomePage = () => {
  const [pokemons, setPokemons] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState(BASE_URL);
  const [nextPageUrl, setNextPageUrl] = useState();
  const [previousPageUrl, setPreviousPageUrl] = useState();
  const navigate = useNavigate();

  const goToNextPage = () => {
    setCurrentPageUrl(nextPageUrl);
  };

  const goToPreviousPage = () => {
    setCurrentPageUrl(previousPageUrl);
  };

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



  const pokeCard = pokemons.map(pokemon => {
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
            <button onClick={() => goToPokedexPage(navigate)}> Adicionar </button>
            <button onClick={() => goToDetailsPage(navigate, pokemon.name)}> Detalhes </button>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div>
        {previousPageUrl && (
          <button onClick={goToPreviousPage}>Anterior</button>
        )}
        <button onClick={goToNextPage}>Proxima</button>
      </div>

      <div className="Header">
        <button>pokedex</button>
        Lista Pokemons
      </div>
      <div>{pokemons && pokeCard}</div>


    </div>
  );
};

export { HomePage };
