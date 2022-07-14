import React, { useState, useEffect, useContext } from 'react';
import { BASE_URL } from '../../constants/url';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { goToDetailsPage, goToPokedexPage } from '../../routes/coordinator';
import {
  PokeCard,
  PokeList,
  PokeImg,
  DivButton,
  Btn,
  PokedexButton,
  Container,
  Header,
  ButtonHeader
} from './styled';
import { GlobalStateContext } from '../../context/global/GlobalStateContext';

const HomePage = () => {
  const [pokemons, setPokemons] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState(BASE_URL);
  const [nextPageUrl, setNextPageUrl] = useState();
  const [previousPageUrl, setPreviousPageUrl] = useState();
  const navigate = useNavigate();
  const { state, setters } = useContext(GlobalStateContext);
  const { pokedex } = state;
  const { setPokedex } = setters;

  const addToPokedex = pokemonSelected => {
    const newPokedex = [...pokedex, pokemonSelected];
    setPokedex(newPokedex);
    console.log(pokedex);
  };

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
      <PokeCard key={pokemon.name}>
        <PokeImg
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
            pokemon.url.split('/')[6]
          }.svg`}
          alt={pokemon.name}
        />
        <div>
          <h2>{pokemon.name}</h2>
          <DivButton>
            <Btn
              onClick={() =>
                addToPokedex({
                  name: pokemon.name,
                  url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
                    pokemon.url.split('/')[6]
                  }.svg`
                })
              }
            >
              Adicionar
            </Btn>
            <Btn onClick={() => goToDetailsPage(navigate, pokemon.name)}>
              Detalhes
            </Btn>
          </DivButton>
        </div>
      </PokeCard>
    );
  });

  return (
    <Container>
      <Header>
        <PokedexButton onClick={() => goToPokedexPage(navigate)}>
          <h1>pokedex</h1>
        </PokedexButton>
      </Header>
      <ButtonHeader>
        {previousPageUrl && <Btn onClick={goToPreviousPage}>Anterior</Btn>}
        <Btn onClick={goToNextPage}>Proxima</Btn>
      </ButtonHeader>

      <PokeList>{pokemons && pokeCard}</PokeList>
    </Container>
  );
};

export { HomePage };
