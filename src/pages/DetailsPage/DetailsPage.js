import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import ProgressBar from 'react-bootstrap/ProgressBar';
import { BASE_URL } from "../../constants/url";
import { useParams, useNavigate } from "react-router-dom";
import { goToBackPage } from "../../routes/coordinator";
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
  Card,
  CardStats,
} from "./styled";
import { ButtonDefault } from "../../components/ButtonDefault";
import { GlobalStateContext } from "../../context/global/GlobalStateContext";

const DetailsPage = () => {
  const [pokemonStats, setPokemonStats] = useState([]);
  const [pokemonType, setPokemonType] = useState([]);
  const [pokemonMoves, setPokemonMoves] = useState([]);
  const [pokemons, setPokemons] = useState([]);
  const [id, setId] = useState("");
  const { state, setters } = useContext(GlobalStateContext);
  const { pokedex } = state;
  const { setPokedex } = setters;
  const navigate = useNavigate();
  const params = useParams();
  // console.log(params)

  const getPokemon = () => {
    axios
      .get(`${BASE_URL}/${params.idOrName}`)
      .then((response) => {
        setPokemonStats(response.data.stats);
        // console.log(response.data.stats)
        setPokemonType(response.data.types);
        console.log(response.data.types)
        setPokemonMoves(response.data.moves);
        // console.log(response.data.moves)
        setId(response.data.id);
      })
      .catch((error) => {
        console.log(error);
      });
  };


  const cardColors = [
    {
      type:"bug",
      color:"green"
    },
    {
      type:"electric",
      color:"yellow"
    },
    {
      type:"fire",
      color:"red"
    },
    {
      type:"grass",
      color:"green"
    },
    {
      type:"normal",
      color:"lightgray"
    },
    {
      type:"rock",
      color:"brown"
    },
    {
      type:"dark",
      color:"brown"
    },
    {
      type:"fairy",
      color:"pink"
    },
    {
      type:"flying",
      color:"blue"
    },
    {
      type:"ground",
      color:"brown"
    },
    {
      type:"poison",
      color:"purple"
    },
    {
      type:"steel",
      color:"lightgray"
    },
    {
      type:"dragon",
      color:"cyan"
    },
    {
      type:"fighting",
      color:"darkred"
    },
    {
      type:"ghost",
      color:"cyan"
    },
    {
      type:"ice",
      color:"lightcyan"
    },
    {
      type:"psychic",
      color:"salmon"
    },
    {
      type:"water",
      color:"blue"
    }
  ]


  //  const cardColor1 = cardColors.find(poke => poke.type == type).color
  //  const cardColor2 = cardColors.find(poke => poke.type == type) != (null || undefined) ? cardColors.find(poke => poke.type == type).color : "gray"

  // background-color: linear-gradient(159deg, {cardColor1}, {cardColor2})


const pokemonInPokedex = pokedex.find(
    (pokemon) => pokemon.name === params.idOrName
  );

  const addToPokedex = (pokemonSelected) => {
    const index = pokemons.findIndex((i) => i.name === pokemonSelected.name);
    const newPokemonList = [...pokemons];
    newPokemonList.splice(index, 1);
    setPokemons(newPokemonList);
    const newPokedex = [...pokedex, pokemonSelected];
    setPokedex(newPokedex);
    goToBackPage()
  };

  const removeFromPokedex = (pokemonSelected) => {
    const index = pokedex.findIndex((i) => i.name === pokemonSelected.name);
    const newPokedex = [...pokedex];
    newPokedex.splice(index, 1);
    setPokedex(newPokedex);
    goToBackPage()
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
          <ProgressBar
             now={60}
          />
          </BackButtonDiv>
        </MainContainer>
        <DivButton>
        {pokemonInPokedex == undefined ? (
            <PokedexButtonAdd
              onClick={() =>
                addToPokedex({
                  name: params.idOrName,
                  url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`
                })
              }
            >
                  Adicionar na Pokedex
            </PokedexButtonAdd>
          ) : (
            <PokedexButtonDelete
              onClick={() => removeFromPokedex({ name: params.idOrName })}
            >

              Remover da Pokedex
            </PokedexButtonDelete>
          )}
        </DivButton>
        <Card>
          {pokemonType.map((pokemon) => {
            return (
              <div key={pokemon.type.name}>
                <p>
                  <strong>{pokemon.type.name} </strong>
                </p>
              </div>
            );
          })}
        </Card>
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
        <CardStats>
          <Title>STATS</Title>
          {pokemonStats.map((pokemon) => {
            return (
              <div key={pokemon.stat.name}>
                <p>
                  <strong>{pokemon.stat.name}: </strong>
                </p>
              </div>
            );
          })}
        </CardStats>
        <Card>
          <Title>MOVES</Title>
          {pokemonMoves.slice(0, 4).map((pokemon) => {
            return (
              <div key={pokemon.move.name}>
                <p>
                  <strong>{pokemon.move.name} </strong>
                </p>
              </div>
            );
          })}
        </Card>
      </PokeCard>
    </Container>
  );
};

export { DetailsPage };
