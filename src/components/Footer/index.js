import React from 'react';

import styled from 'styled-components';

export const FooterBase = styled.footer`
  background: black;
  border-top: 2px solid primary;
  padding: 32px 16px;
  color: white;
  text-align: center;
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`
const a = styled.a`
  color:#fff;
`

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
