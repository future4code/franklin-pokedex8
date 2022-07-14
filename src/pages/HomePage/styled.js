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
  background-color: #006359;
  width: 100vw;
`;

export const ButtonHeader = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 500px;
  margin: 2rem;
`;

export const PokeList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  width: 100vw;
  height: 100vh;

  margin-top: 2rem;
`;

export const PokeCard = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 500px;
  height: 100px;
  background-color: #93caa8;
  padding: 10px;
  color: #fff;
`;

export const PokeImg = styled.img`
  height: 100px;
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

  &:hover {
    background-color: #006359;
    color: #fff;
  }
`;

export const PokedexButton = styled.button`
  background-color: #006359;
  color: #f25e3d;
  font-weight: bold;
  border: none;
  padding: 0;
  &:hover {
    scale: 1.01;
    cursor: pointer;
  }
`;
