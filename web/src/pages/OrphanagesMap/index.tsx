import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import mapMarker from '../../assets/mark.svg';

import mapIcon from '../../Utils/mapIcon';
import api from '../../services/api';

import { Container, BottomButtom } from './styles';

interface Orphanage {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
}

const OrphanagesMap: React.FC = () => {
  const [orphanages, setOrphanages] = useState<Orphanage[]>([]);

  useEffect(() => {
    async function apiCall() {
      const response = await api.get('orphanages');
      setOrphanages(response.data);
    }
    apiCall();
  }, []);

  return (
    <Container>
      <aside>
        <header>
          <img src={mapMarker} alt="Happy" />
          <h2>Escolha um orfanato no mapa</h2>
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
        {orphanages.map(orphanage => {
          return (
            <Marker
              icon={mapIcon}
              position={[orphanage.latitude, orphanage.longitude]}
              key={orphanage.id}
            >
              <Popup closeButton={false} minWidth={240} maxHeight={240}>
                {orphanage.name}
                <Link to={`/orphanages/${orphanage.id}`}>
                  <FiArrowRight size={20} color="#ffffff" />
                </Link>
              </Popup>
            </Marker>
          );
        })}
      </Map>

      <BottomButtom>
        <Link to="/orphanage/create">
          <FiPlus size={32} color="#ffffff" />
        </Link>
      </BottomButtom>
    </Container>
  );
};

export default OrphanagesMap;
