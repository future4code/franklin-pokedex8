import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
  background-color: white;
  color: #93caa8;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  box-shadow: 1px 2px 4px 2px rgba(0, 0, 0, 0.15);
  transition: .6s;

  &:hover {
    background-color: #006359;
    color: #fff;
  }
`;

const ButtonDefault = props => {
  return <Btn onClick={props.onClick}>{props.name}</Btn>;
};

export { ButtonDefault };
