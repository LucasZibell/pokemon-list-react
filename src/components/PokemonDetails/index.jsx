import { useQuery } from '@tanstack/react-query';

import { getPokemonDetails } from '../../services/pokemon';

import createPokemon from './utils';
import styles from './styles.module.scss';

function PokemonDetails({ id }) {
  const { isLoading, data } = useQuery(['get-pokemon-details'], () => getPokemonDetails(id), {
    select: (response) => createPokemon(response.data)
  });

  return (
    <div>
      {isLoading ? (
        'Loading...'
      ) : (
        <div className={styles.detailsContainer}>
          <span>{data.pokedexNumber}</span>
          <img src={data.image} alt="pokemon sprite" width="100px" />
          <span>{data.pokemonName}</span>
          {data.types.map((type) => (
            <span className={`${styles.typeContainer} ${styles[type]}`}>{type}</span>
          ))}
          {data.stats.map((stat) => (
            <span>{`${stat.statName}: ${stat.baseNumber}`}</span>
          ))}
        </div>
      )}
    </div>
  );
}

export default PokemonDetails;
