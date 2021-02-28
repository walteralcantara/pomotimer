import React from 'react';
import ReactDOM from 'react-dom';

import './styles/global.css';

import { Header } from './components/Header';
import { PomotimerBox } from './components/PomotimerBox';
import { PomotimerNavTab } from './components/PomotimerNavTab';
import { Footer } from './components/Footer';

ReactDOM.render(
  <React.StrictMode>
    <Header />

    <div>
      <PomotimerNavTab />
      <PomotimerBox />
    </div>

    <Footer />
  </React.StrictMode>,
  document.getElementById('root'),
);
