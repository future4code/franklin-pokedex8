import styled from 'styled-components';

export const Container = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #292f4e;
  margin: 0;
  padding: 0;
`;

export const Header = styled.ul`
  display: flex;
  justify-content: space-between;
  background: #545971;
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
  gap: 2rem;
  width: 100vw;
  height: 100vh;
  background: #292f4e;
  margin-top: 2rem;
`;

export const PokeCard = styled.li`
  display: flex;
  align-content: space-between;
  justify-content: space-between;
  width: 500px;
  height: 100px;
  background-color: #545971;
  padding: 10px;
  color: #fff;
  border-radius: 15px;
`;

export const PokeImg = styled.img`
  height: 100px;
`;

export const DivButton = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  justify-content: space-between;
`;

export const Btn = styled.button`
  background-color: #f7b916;
  color: #292f4e;
  font-weight: bold;
  border: none;
  border-radius: 18px;
  padding: 10px 20px;
  &:hover {
    background-color: #dea515;
  }
`;

export const PokedexButton = styled.button`
  background-color: #545971;
  color: #f7b916;
  font-weight: bold;
  border: none;
  padding: 0;
  &:hover {
    scale: 1.01;
    cursor: pointer;
  }
`;
