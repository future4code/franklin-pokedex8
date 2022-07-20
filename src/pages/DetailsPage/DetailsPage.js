import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import ProgressBar from "react-bootstrap/ProgressBar";
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
  Card,
  CardStats,
  CardMoves,
  CardType,
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

  // function to get Pokemon's list
  const getPokemon = () => {
    axios
      .get(`${BASE_URL}/${params.idOrName}`)
      .then((response) => {
        setPokemonStats(response.data.stats);
        // console.log(response.data.stats)
        setPokemonType(response.data.types);
        // console.log(response.data.types);
        setPokemonMoves(response.data.moves);
        // console.log(response.data.moves)
        setId(response.data.id);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // function to search pokemon at Pokedex
  const pokemonInPokedex = pokedex.find(
    (pokemon) => pokemon.name === params.idOrName
  );

  // function to add Pokemon at PokedexPage
  const addToPokedex = (pokemonSelected) => {
    const index = pokemons.findIndex((i) => i.name === pokemonSelected.name);
    const newPokemonList = [...pokemons];
    newPokemonList.splice(index, 1);
    setPokemons(newPokemonList);
    const newPokedex = [...pokedex, pokemonSelected];
    setPokedex(newPokedex);
    goToBackPage();
  };

  // function to remove Pokemon from Pokedex
  const removeFromPokedex = (pokemonSelected) => {
    const index = pokedex.findIndex((i) => i.name === pokemonSelected.name);
    const newPokedex = [...pokedex];
    newPokedex.splice(index, 1);
    setPokedex(newPokedex);
    goToBackPage();
  };


  useEffect(getPokemon, []);

  return (
    <Container>
      <PokeCard>
        <MainContainer>
          <PokemonBackground />
          <Name>#{params.idOrName}</Name>
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
          {/* // That is the logic to change button if we find Pokemon at Pokedex Page */}
          {pokemonInPokedex == undefined ? (
            <PokedexButtonAdd
              onClick={() =>
                addToPokedex({
                  name: params.idOrName,
                  url: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`,
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
        <CardType>
          {pokemonType.map((pokemon) => {
            return <div key={pokemon.type.name}>{pokemon.type.name}</div>;
          })}
        </CardType>
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
          {pokemonStats.map((pokemon) => {
            return (
              <div
                key={pokemon.stat.name}
                style={{
                  display: "flex",
                  gap: "20px",
                  justifyContent: "flex-end",
                }}
              >
                <strong>{pokemon.stat.name}: </strong>
                <ProgressBar
                  style={{ width: "80%", height: "25px" }}
                  now={pokemon.base_stat}
                  variant="warning"
                />
                <p>{pokemon.base_stat}</p>
              </div>
            );
          })}
        </CardStats>
        <h1 style={{fontWeight: "bold"}}>
          Suas Habilidades
        </h1>
        <CardMoves>
          {pokemonMoves.slice(0, 4).map((pokemon) => {
            return (
              <div key={pokemon.move.name} style={{padding: "10px 0 0", margin: "0", textTransform: "uppercase"}}>
                <p>
                  <strong>{pokemon.move.name} </strong>
                </p>
              </div>
            );
          })}
        </CardMoves>
      </PokeCard>
    </Container>
  );
};

export { DetailsPage };
