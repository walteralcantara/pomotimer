import React from 'react';
import ReactDOM from 'react-dom';

import './styles/global.css';

import { Header } from './components/Header';
import { PomotimerBox } from './components/PomotimerBox';
import { PomotimerNavTab } from './components/PomotimerNavTab';
import { Footer } from './components/Footer';

import { CountdownProvider } from '../src/context/CountdownContext';

ReactDOM.render(
  <React.StrictMode>
    <Header />

    <CountdownProvider>
      <div>
        <PomotimerNavTab />
        <PomotimerBox />
      </div>
    </CountdownProvider>

    <Footer />
  </React.StrictMode>,
  document.getElementById('root'),
);
