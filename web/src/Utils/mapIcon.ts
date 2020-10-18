import Leaflet from 'leaflet';

import mapMark from '../assets/mark.svg';

const mapIcon = Leaflet.icon({
  iconUrl: mapMark,
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [0, -60],
});

export default mapIcon;
