import React, { useState } from 'react';
import { GlobalStateContext } from './GlobalStateContext';

const GlobalState = ({ children }) => {
  const [pokedex, setPokedex] = useState([]);

  const state = { pokedex };
  const setters = { setPokedex };

  return (
    <>
      <GlobalStateContext.Provider value={{ state, setters }}>
        {children}
      </GlobalStateContext.Provider>
    </>
  );
};

export { GlobalState };
