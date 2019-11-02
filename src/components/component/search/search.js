import React, {useContext,} from 'react';

import {SearchContext} from '../../../context/search';
import ThemeContext from '../../../context/global';
import useInput from '../../../hooks/useInput';
import {InputGroup, Button, FormControl } from 'react-bootstrap';
function SearchView() {
  const theme = useContext(ThemeContext);
  const [, searchDispatch] = useContext(SearchContext);
  const [pokemonName, setPokemonName] = useInput(''); 
  const searchInput = () => {
    searchDispatch({ type: 'POKEMON_VALUE', payload: pokemonName})
  }
  return (
    <InputGroup className="mb-3">
      <FormControl
        placeholder="Pokemon's name"
        aria-label="Pokemon's name"
        aria-describedby="basic-addon2"
        onChange={value => setPokemonName(value.target.value)}
      />
      <InputGroup.Append>
        <Button variant={theme} onClick={searchInput}>Button</Button>
      </InputGroup.Append>
    </InputGroup>
  );
}

export default SearchView;
