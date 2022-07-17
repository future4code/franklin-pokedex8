import styled from 'styled-components';

export const Container = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
`;

export const PokeCard = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 50vw;
  min-width: 650px;
  height: 100vh;
`;

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 70vh;
  position: relative;
`;

export const PokemonBackground = styled.div`
  border-radius: 0 0 50% 50%;
  background-color: #93caa8;
  width: 700px;
  height: 400px;
`;

export const Name = styled.h1`
  position: absolute;
  color: #fff;
  top: 7%;
  text-transform: capitalize;
  font-size: 50px;
  margin: 0 auto;
`;

export const MainImg = styled.img`
  position: absolute;
  bottom: 0;
  width: 40%;
  min-width: 35%;
`;

export const DivButton = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 2rem;
`;

export const PokedexButtonAdd = styled.button`
  background-color: white;
  color: #006359;
  font-weight: bold;
  border: none;
  border-radius: 15px;
  padding: 10px 20px;
  box-shadow: 1px 2px 1px 1.5px rgba(0, 0, 0, 0.15);
  &:hover {
    background-color: #006359;
    color: #fff;
  }
`;

export const PokedexButtonDelete = styled.button`
  background-color: white;
  color: #f25e3d;
  font-weight: bold;
  border: none;
  border-radius: 15px;
  padding: 10px 20px;
  box-shadow: 1px 2px 1px 1.5px rgba(0, 0, 0, 0.15);
  &:hover {
    background-color: #f25e3d;
    color: #fff;
  }
`;

export const BackButtonDiv = styled.div`
  position: absolute;
  top: 10px;
  right: 0;
`;

export const Title = styled.h1`
  color: #f25e3d;
  text-align: center;
`;

export const CardStats = styled.div`
  background-color: #006359;
  border-radius: 15px;
  width: 100%;
  color: white;
  padding: 1rem;
  box-sizing: border-box;
`;

export const Card = styled.div`
  background-color: #006359;
  border-radius: 15px;
  width: 30%;
  color: white;
  padding: 1rem;
  box-sizing: border-box;
`;
