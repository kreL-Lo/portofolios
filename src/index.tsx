import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '@fontsource/poppins';


import App from './App';
import { FancyLights } from './components/FancyLights/FancyLights';
import { LoadingScreen } from './components/LoadingSreen/LoadingScreen';


const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <>

      <FancyLights />
      <LoadingScreen />
      <div className='main-app-content'>
        <App />
      </div>

    </>
  );
}
