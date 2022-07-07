import React from 'react';

const DetailsPage = () => {
  return (
    <div>
        <div className='Header'>
          <button> Voltar </button>
          <h1>Nome Pokemon</h1>
          <div>
            <button> Adicionar na Pokedex</button>
            <button> Remover na Pokedex</button>
          </div>
        </div>
        <div>
            <img src='##DE FRENTE'/>
            <img src='##DE COSTAS'/>
            <div>
            <h2>STATS</h2>
              <p> HP</p>
              <p> ATK</p>
              <p> DEF</p>
              <p> SPECIAL-ATK</p>
              <p> SPECIAL-DEF</p>
              <p> SPEED</p>
            </div>
            <div>
              <p>##TIPO 1##</p>
              <p>##TIPO 2##</p>
            </div>
            <div>
              <h2>MOVES</h2>
              <p> ## MOVE NAME 1 ##</p>
              <p> ## MOVE NAME 2 ##</p>
              <p> ## MOVE NAME 3 ##</p>
            </div>
        </div>
    </div>
  );
};

export { DetailsPage };
