import React from 'react';
import * as C from './styles'; //C se refere a container, como se tivesse importando o container de styles

const Header = () => {
  return (
    <C.Container>
      <C.Header>
        <C.Title>Controle Financeiro</C.Title>
      </C.Header>
    </C.Container>
  );
};

export default Header;
