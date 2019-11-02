import React, {useContext, useEffect} from 'react';

import {SearchContext} from '../../../context/search';
import useInput from '../../../hooks/useInput';
// import useInterval from '../../../hooks/useInterval';
import {Card, Alert} from 'react-bootstrap';

function PokemonView() {
  const [search] = useContext(SearchContext);
  const [pokemon, setPokemon] = useInput('');
  // useInterval(
  //   () => {
      // fetch('https://pokeapi.co/api/v2/pokemon/'+search.pokemon.toLowerCase()).then(res=> res.json())
      // .then(response => setPokemon(response))
      // .catch(()=>{
      //   setPokemon('Not Found');
      // });
  //   },
  //   search.reload ? 2000 : null,
  // );
  useEffect(() => {
    setPokemon('');
    if(search.pokemon){
      fetch('https://pokeapi.co/api/v2/pokemon/'+search.pokemon.toLowerCase()).then(res=> res.json())
        .then(response => setPokemon(response))
        .catch(()=>{
          setPokemon('Not Found');
        });
    }
  },[search, setPokemon]);
  return (
    <div>
      {pokemon.sprites && (
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={pokemon.sprites.front_default} />
          <Card.Body>
            <Card.Title>{pokemon.name}</Card.Title>
            <Card.Text>
              {`${pokemon.name} weight is ${pokemon.weight}`}
            </Card.Text>
          </Card.Body>
        </Card>
      )}
      {pokemon === "Not Found" && (
        <Alert variant='warning'>
          No Pokemon Found
        </Alert>
      )}
    </div>
  );
}

export default PokemonView;
