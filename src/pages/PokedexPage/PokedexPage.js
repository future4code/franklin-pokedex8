import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { GlobalStateContext } from '../../context/global/GlobalStateContext';
import { goToBackPage, goToDetailsPage } from '../../routes/coordinator';
import {
  PokeCard,
  PokeList,
  PokeImg,
  DivButton,
  Btn,
  PokedexButton,
  Container,
  Header
} from './styled';

const PokedexPage = () => {
  const navigate = useNavigate();
  const { state, setters } = useContext(GlobalStateContext);
  const { pokedex } = state;
  const { setPokedex } = setters;

  const removeFromPokedex = pokemonSelected => {
    const index = pokedex.findIndex(i => i.name === pokemonSelected.name);
    const newPokedex = [...pokedex];
    newPokedex.splice(index, 1);
    setPokedex(newPokedex);
    console.log(pokedex);
  };

  const pokedexList = pokedex.map(pokemon => {
    return (
      <PokeCard key={pokemon.name}>
        <PokeImg src={pokemon.url} alt={pokemon.name} />
        <div>
          <h2>{pokemon.name}</h2>
          <DivButton>
            <Btn onClick={() => removeFromPokedex(pokemon)}>Remover</Btn>
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
        <PokedexButton>
          <h1>pokedex</h1>
        </PokedexButton>
      </Header>

      <PokeList>{pokedex && pokedexList}</PokeList>
    </Container>
  );
};

export { PokedexPage };
