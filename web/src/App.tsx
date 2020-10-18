import React from 'react';
import { Router } from 'react-router-dom';

import Routes from './routes';
import history from './services/history';

import GlobalStyles from './styles/global';
import 'leaflet/dist/leaflet.css';

const App: React.FC = () => {
  return (
    <Router history={history}>
      <Routes />
      <GlobalStyles />
    </Router>
  );
};

export default App;
