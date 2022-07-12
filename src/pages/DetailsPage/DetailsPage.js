import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../constants/url';
import { useParams, useNavigate } from 'react-router-dom';
import { goToBackPage } from '../../routes/coordinator';
import {
  PokeCard,
  MainContainer,
  PokemonBackground,
  Name,
  MainImg,
  Description,
  DivButton,
  PokedexButtonAdd,
  PokedexButtonDelete,
  BackButtonDiv,
  Container,
  Title,
  Card
} from './styled';
import { ButtonDefault } from '../../components/ButtonDefault';

const DetailsPage = () => {
  const [pokemonStats, setPokemonStats] = useState([]);
  const [pokemonType, setPokemonType] = useState([]);
  const [pokemonMoves, setPokemonMoves] = useState([]);
  const [id, setId] = useState('');

  const navigate = useNavigate();
  const params = useParams();
  // console.log(params)

  const getPokemon = () => {
    axios
      .get(`${BASE_URL}/${params.idOrName}`)
      .then(response => {
        setPokemonStats(response.data.stats);
        // console.log(response.data.stats)
        setPokemonType(response.data.types);
        // console.log(response.data.types)
        setPokemonMoves(response.data.moves);
        // console.log(response.data.moves)
        setId(response.data.id);
      })
      .catch(error => {
        console.log(error);
        console.log('Ocorreu um erro, tente novamente');
      });
  };

  useEffect(getPokemon, []);

  return (
    <Container>
      <PokeCard>
        <MainContainer>
          <PokemonBackground />
          <Name>{params.idOrName}</Name>
          <MainImg
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
            alt={params.idOrName}
          />
          <BackButtonDiv>
            <ButtonDefault
              onClick={() => goToBackPage(navigate)}
              name="Voltar"
            />
          </BackButtonDiv>
        </MainContainer>
        <DivButton>
          <PokedexButtonAdd> Adicionar na Pokedex</PokedexButtonAdd>
          <PokedexButtonDelete> Remover na Pokedex</PokedexButtonDelete>
        </DivButton>
        <div>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
            alt="pokemon front"
          />
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id}.png`}
            alt="pokemon back"
          />
        </div>
        <Description>
          <Card>
            <Title>STATS</Title>
            {pokemonStats.map(pokemon => {
              return (
                <div key={pokemon.stat.name}>
                  <p>
                    <strong>{pokemon.stat.name}: </strong>
                    {pokemon.base_stat}
                  </p>
                </div>
              );
            })}
          </Card>
          <Card>
            <Title>TIPOS</Title>
            {pokemonType.map(pokemon => {
              return (
                <div key={pokemon.type.name}>
                  <p>
                    <strong>{pokemon.type.name}: </strong>
                    {pokemon.type.name}
                  </p>
                </div>
              );
            })}
          </Card>
          <Card>
            <Title>MOVES</Title>
            {pokemonMoves.slice(0, 5).map(pokemon => {
              return (
                <div key={pokemon.move.name}>
                  <p>
                    <strong>{pokemon.move.name}: </strong>
                    {pokemon.move.name}
                  </p>
                </div>
              );
            })}
          </Card>
        </Description>
      </PokeCard>
    </Container>
  );
};

export { DetailsPage };
