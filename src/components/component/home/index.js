import React from 'react';

import GoogleMapsView from './googlemaps';
import DateMusicView from './datemusic';
import {SearchProvider} from '../../../context/search'
import ThemeContext from '../../../context/global';
import './home.css'
function HomePage() {
  return (
    <ThemeContext.Provider value="success">
      <SearchProvider>
        <DateMusicView />
        <GoogleMapsView />
      </SearchProvider>
    </ThemeContext.Provider>
  );
}

export default HomePage;
