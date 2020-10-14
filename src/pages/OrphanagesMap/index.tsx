import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';
import mapMarker from '../../assets/mark.svg';

import 'leaflet/dist/leaflet.css';

import { Container, BottomButtom } from './styles';

const OrphanagesMap: React.FC = () => {
  return (
    <Container>
      <aside>
        <header>
          <img src={mapMarker} alt="Happy" />
          <h2>Escolha uma orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>
        <footer>
          <strong>Penápolis</strong>
          <span>São Paulo</span>
        </footer>
      </aside>
      <Map
        center={[-21.4259204, -50.0778362]}
        zoom={14}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />
      </Map>

      <BottomButtom>
        <Link to="/">
          <FiPlus size={32} color="#ffffff" />
        </Link>
      </BottomButtom>
    </Container>
  );
};

export default OrphanagesMap;
