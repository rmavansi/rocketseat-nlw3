import React from 'react';
import { Link } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi';
import mapMark from '../../assets/mark.svg';

import history from '../../services/history';

import { Container } from './styles';

const Sidebar: React.FC = () => {
  return (
    <Container>
      <aside>
        <Link to="/orphanage">
          <img src={mapMark} alt="Happy" />
        </Link>
        <footer>
          <button type="button" onClick={history.back}>
            <FiArrowLeft size={24} color="#ffffff" />
          </button>
        </footer>
      </aside>
    </Container>
  );
};

export default Sidebar;
