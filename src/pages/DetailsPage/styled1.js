import styled from 'styled-components';

export const Container = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #292f4e;
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
`;

export const PokeCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50vw;
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
  background-color: #545971;
  width: 700px;
  height: 400px;
`;

export const Name = styled.h1`
  position: absolute;
  color: #f7b916;
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

export const Description = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50vw;
  color: white;
`;

export const DivButton = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

export const PokedexButtonAdd = styled.button`
  background-color: #f7b916;
  color: #292f4e;
  font-weight: bold;
  border: none;
  border-radius: 15px;
  padding: 10px 20px;
  box-shadow: 1px 2px 1px 1.5px rgba(0, 0, 0, 0.15);
  &:hover {
    background-color: #545971;
    color: #f7b916;
  }
`;

export const PokedexButtonDelete = styled.button`
  background-color: #f7b916;
  color: #292f4e;
  font-weight: bold;
  border: none;
  border-radius: 15px;
  padding: 10px 20px;
  box-shadow: 1px 2px 1px 1.5px rgba(0, 0, 0, 0.15);
  &:hover {
    background-color: #545971;
    color: #f7b916;
  }
`;

export const BackButtonDiv = styled.div`
  position: absolute;
  top: 10px;
  right: 0;
  
`;

export const Title = styled.h2`
  color: #f7b916;
`;

export const Card = styled.div`
  background-color: #545971;
  border-radius: 15px;
  width: 30%;
`;
