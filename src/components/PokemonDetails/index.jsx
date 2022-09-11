import { useState, useEffect } from 'react';
import { getPokemonDetails } from '../../services/pokemon';

import createPokemon from './utils';

function PokemonDetails({ id, onCloseModal }) {
  const [pokemonInfo, setPokemonInfo] = useState({});

  useEffect(() => {
    getPokemonDetails(id).then(({ data }) => setPokemonInfo(createPokemon(data)));
  }, [id]);

  console.log(pokemonInfo);

  return (
    <>
      <span>{id}</span>
      <img src={pokemonInfo.image} alt="pokemon sprite" width="20px" />
      <button onClick={onCloseModal} type="button">
        Cerrar Modal
      </button>
    </>
  );
}

export default PokemonDetails;
