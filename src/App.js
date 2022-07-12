import './App.css';
import { Router } from './routes/router';
import styled from 'styled-components';

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

function App() {
  return (
    <MainContent className="App">
      <Router />
    </MainContent>
  );
}

export default App;
