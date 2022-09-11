import { useMemo } from 'react';
import styles from './styles.module.scss';
import pokeballIcon from '../../assets/pokeball_icon.png';

function PokemonCard({ name, pokemonUrl, onPokemonSelection }) {
  const id = useMemo(() => {
    if (!pokemonUrl) return null;
    return pokemonUrl.split('pokemon/').pop();
  }, [pokemonUrl]);

  const handleOnClick = () => onPokemonSelection(id);

  return (
    <button className={styles.cardContainer} onClick={handleOnClick} type="button">
      <img className={styles.pokeBallLogo} src={pokeballIcon} alt="poke ball logo" />
      <span className={styles.pokemonName}>{name}</span>
    </button>
  );
}

export default PokemonCard;
