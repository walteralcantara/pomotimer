import React from 'react';

import { Header } from './components/Header';
import { PomotimerBox } from './components/PomotimerBox';
import { PomotimerNavTab } from './components/PomotimerNavTab';
import { Footer } from './components/Footer';

import { CountdownProvider } from '../src/context/CountdownContext';

function App() {
  return (
    <>
      <Header />

      <CountdownProvider>
        <PomotimerNavTab />
        <PomotimerBox />
      </CountdownProvider>

      <Footer />
    </>
  );
}

export default App;
