import { Router } from './routes/router';
import styled from 'styled-components';
import { GlobalState } from './context/global/GlobalState';

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

function App() {
  return (
    <GlobalState>
      <MainContent>
        <Router />
      </MainContent>
    </GlobalState>
  );
}

export default App;
