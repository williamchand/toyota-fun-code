import React from 'react';

import PokemonView from './pokemon';
import SearchView from './search';
import {SearchProvider} from '../../../context/search'
import ThemeContext from '../../../context/global';

function SearchPage() {
  return (
    <ThemeContext.Provider value="success">
      <SearchProvider>
        <SearchView />
        <PokemonView />
      </SearchProvider>
    </ThemeContext.Provider>
  );
}

export default SearchPage;
