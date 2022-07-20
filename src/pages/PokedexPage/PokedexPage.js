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
import pokedexLogo from '../../assets/pokedexLogo.png'


const PokedexPage = () => {
  const navigate = useNavigate();
  const { state, setters } = useContext(GlobalStateContext);
  const { pokedex } = state;
  const { setPokedex } = setters;

  //function to remove pokemon from pokedex page
  const removeFromPokedex = pokemonSelected => {
    const index = pokedex.findIndex(i => i.name === pokemonSelected.name);
    const newPokedex = [...pokedex];
    newPokedex.splice(index, 1);
    setPokedex(newPokedex);
    console.log(pokedex);
  };

  // function to show pokemon added
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
          <img
            style={{height:"80px", margin: "20px"}}
            src={pokedexLogo}
          />
        </PokedexButton>
      </Header>
      <Btn onClick={() => goToBackPage(navigate)}>
        Voltar para lista de Pokemons
      </Btn>
      <PokeList>{pokedex && pokedexList}</PokeList>
    </Container>
  );
};

export { PokedexPage };
