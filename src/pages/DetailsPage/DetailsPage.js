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
  BackButton
} from './styled';

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
    <PokeCard>
      <MainContainer>
        <PokemonBackground />
        <Name>{params.idOrName}</Name>
        <MainImg
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
          alt={params.idOrName}
        />
        <BackButton onClick={() => goToBackPage(navigate)}> Voltar </BackButton>
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
        <div className="Stats">
          <h2>STATS</h2>
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
        </div>
        <div className="Types">
          <h2>TIPOS</h2>
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
        </div>
        <div className="Moves">
          <h2>MOVES</h2>
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
        </div>
      </Description>
    </PokeCard>
  );
};

export { DetailsPage };
