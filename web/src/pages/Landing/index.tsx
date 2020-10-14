import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';

import logo from '../../assets/logo.svg';

import { Container, Wrapper } from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <img src={logo} alt="Logo" />

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças</p>
        </main>

        <div>
          <strong>Penápolis</strong>
          <span>São Paulo</span>
        </div>
        <Link to="/Orphanage">
          <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
        </Link>
      </Wrapper>
    </Container>
  );
};

export default Main;
