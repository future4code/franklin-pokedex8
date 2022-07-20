import styled from 'styled-components';

export const Container = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
`;

export const Header = styled.ul`
  display: flex;
  justify-content: space-between;
  background-color: white;
   width: 100vw;
   `;

export const PokedexButton = styled.button`
  border: none;
  background-color: transparent;
  padding: 0;
  margin: 0 auto;
  &:hover {
    cursor: pointer;
  }
`;

export const ButtonHeader = styled.ul`
  display: flex;
  justify-content: space-evently;
  align-items: center;
  justify-content:center;
  width: 500px;
  margin: 2rem;
`;


export const PokeCard = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px auto;
  padding: 20px;
  border-radius: 5px;

  width: 570px;
  height: 130px;

  background-color: #93caa8;
  color: #fff;
`;

export const PokeImg = styled.img`
  height: 100px;
  margin-left: 15px;
  `;

export const DivButton = styled.div`
  display: flex;
  width: 30%;
  gap: 0.5rem;
  justify-content: space-between;
  `;

export const Btn = styled.button`
  background-color: #fff;
  color: #93caa8;
  font-weight: bold;
  border: none;
  border-radius: 18px;
  padding: 10px 20px;
  box-shadow: 1px 2px 4px 2px rgba(0, 0, 0, 0.15);
  margin: 10px 10px 10px 0;
  transition: .6s;

  &:hover {
    background-color: #006359;
    color: #fff;
  }
  `;

export const PokeList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.5rem;
  width: 100vw;
  height: 100vh;

  margin-top: 2rem;
`;

export const PokemonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  `;