/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { FiClock, FiInfo } from 'react-icons/fi';
import { Map, Marker, TileLayer } from 'react-leaflet';
import { useParams } from 'react-router-dom';

import Sidebar from '../../components/Sidebar';
import api from '../../services/api';
import mapIcon from '../../Utils/mapIcon';
import noImage from '../../assets/noImg.png';

import {
  Container,
  Details,
  Images,
  DetailsContent,
  MapContainer,
  OpenDetails,
  Hour,
  OpenOnWeekends,
} from './styles';

interface Orphanage {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  about: string;
  instructions: string;
  opening_hours: string;
  open_on_weekends: string;
  images: Array<{
    url: string;
  }>;
}

interface OrphanageParams {
  id: string;
}

const Orphanage: React.FC = () => {
  const params = useParams<OrphanageParams>();
  const [orphanage, setOrphanage] = useState<Orphanage>();
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    async function apiCall() {
      const response = await api.get(`/orphanages/${params.id}`);
      setOrphanage(response.data);
    }
    apiCall();
  }, [params.id]);

  if (!orphanage) {
    return <p>Carregando...</p>;
  }

  return (
    <Container>
      <Sidebar />
      <main>
        <Details>
          <img
            src={
              orphanage.images.length
                ? orphanage.images[activeImageIndex].url
                : noImage
            }
            alt={orphanage.name}
          />

          <Images>
            {orphanage.images.map((image, index) => {
              return (
                <button
                  key={image.url}
                  className={activeImageIndex === index ? 'active' : ''}
                  type="button"
                  onClick={() => {
                    setActiveImageIndex(index);
                  }}
                >
                  <img src={image.url} alt={orphanage.name} />
                </button>
              );
            })}
          </Images>

          <DetailsContent>
            <h1>{orphanage.name}</h1>
            <p>{orphanage.about}</p>

            <MapContainer>
              <Map
                center={[orphanage.latitude, orphanage.longitude]}
                zoom={16}
                style={{ width: '100%', height: 280 }}
                dragging={false}
                touchZoom={false}
                zoomControl={false}
                scrollWheelZoom={false}
                doubleClickZoom={false}
              >
                <TileLayer
                  url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />
                <Marker
                  interactive={false}
                  icon={mapIcon}
                  position={[orphanage.latitude, orphanage.longitude]}
                />
              </Map>

              <footer>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://www.google.com/maps/dir/?api=1&destination=${orphanage.latitude},${orphanage.longitude}`}
                >
                  Ver rotas no Google Maps
                </a>
              </footer>
            </MapContainer>

            <hr />

            <h2>Instruções para visita</h2>
            <p>{orphanage.instructions}</p>

            <OpenDetails>
              <Hour>
                <FiClock size={32} color="#15B6D6" />
                {orphanage.opening_hours}
              </Hour>

              {orphanage.open_on_weekends ? (
                <OpenOnWeekends openOnWeekends>
                  <FiInfo size={32} color="#39CC83" />
                  Atendemos aos
                  <br />
                  finais de semana
                </OpenOnWeekends>
              ) : (
                <OpenOnWeekends openOnWeekends={false}>
                  <FiInfo size={32} color="#ff669d" />
                  Não atendemos aos
                  <br />
                  finais de semana
                </OpenOnWeekends>
              )}
            </OpenDetails>

            <button type="button">
              <FaWhatsapp size={20} color="#FFF" />
              Entrar em contato
            </button>
          </DetailsContent>
        </Details>
      </main>
    </Container>
  );
};

export default Orphanage;
