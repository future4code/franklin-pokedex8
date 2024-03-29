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
  ButtonHeader,
  PokemonsContainer
} from './styled';
import pokedexLogo from '../../assets/pokedexLogo.png'
import { GlobalStateContext } from '../../context/global/GlobalStateContext';

const HomePage = () => {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonType, setPokemonType] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState(BASE_URL);
  const [nextPageUrl, setNextPageUrl] = useState();
  const [previousPageUrl, setPreviousPageUrl] = useState();
  const navigate = useNavigate();
  const { state, setters } = useContext(GlobalStateContext);
  const { pokedex } = state;
  const { setPokedex } = setters;

  // function to add Pokemon at Pokedex Page
  const addToPokedex = pokemonSelected => {
    const index = pokemons.findIndex(i => i.name === pokemonSelected.name);
    const newPokemonList = [...pokemons];
    newPokemonList.splice(index, 1);
    setPokemons(newPokemonList);
    const newPokedex = [...pokedex, pokemonSelected];
    setPokedex(newPokedex);
  };

  // function to go to next page
  const goToNextPage = () => {
    setCurrentPageUrl(nextPageUrl);
  };

  // function to go to previous page
  const goToPreviousPage = () => {
    setCurrentPageUrl(previousPageUrl);
  };

  useEffect(() => {
    axios
      .get(currentPageUrl)
      .then(response => {
        setNextPageUrl(response.data.next);
        setPreviousPageUrl(response.data.previous);
        setPokemons(response.data.results);
        setPokemonType(response.data.types);
      })
      .catch(error => {
        console.log(error);
      });
  }, [currentPageUrl]);

  const pokeCard = pokemons.map(pokemon => {
    const foundInPokedex = pokedex.find(
      element => element.name === pokemon.name
    );

    if (!foundInPokedex) {
      return (
        <PokeCard key={pokemon.name}>
          <PokeImg
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
              pokemon.url.split('/')[6]
            }.svg`}
            alt={pokemon.name}
          />
          <div>
            <h2 style={{textTransform: "capitalize"}}
            >#{pokemon.name}</h2>
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
    }
  });

  return (
    <Container>
      <Header>
        <PokedexButton onClick={() => goToPokedexPage(navigate)}>
          <img style={{height:"80px", margin: "20px"}}
          src={pokedexLogo} />
        </PokedexButton>
      </Header>

      <div style={{margin: "35px 0"}}>
        <h1 style={{textTransform: "uppercase", fontWeight: "bold", fontSize:"45px"}}>
          Escolha o Pokemon mais forte para adicionar na sua Pokedex !
        </h1>
        <h2> Qual Pokemon você está procurando? </h2>
      </div>

      <ButtonHeader>
        {previousPageUrl && <Btn onClick={goToPreviousPage}>Anterior</Btn>}
        <Btn onClick={goToNextPage}>Proxima</Btn>
      </ButtonHeader>
      <PokemonsContainer>
        <PokeList>{pokemons && pokeCard}</PokeList>
      </PokemonsContainer>
    </Container>
  );
};

export { HomePage };
