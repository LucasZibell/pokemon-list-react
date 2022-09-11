import Modal from 'react-modal';
import { useEffect, useState } from 'react';
import styles from './styles.module.scss';

import { getPokemon, getPokemonDetails } from '../../services/pokemon';

import PokemonCard from '../../components/PokemonCard';

function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [isModalOpen, setModalStatus] = useState(false);
  const [pokemonDetails, setPokemonDetails] = useState({});

  useEffect(() => {
    getPokemon().then(({ data }) => setPokemon(data.results));
  }, []);

  const handlePokemonSelection = (id) => {
    setModalStatus(true);
    console.log(id);
    setPokemonDetails(id);
    getPokemonDetails(id);
  };

  const closeModal = () => setModalStatus(false);

  return (
    <>
      <div className={styles.listContainer}>
        <h1 className={styles.pokemonTitle}>Listado de Pokemon</h1>
        <div className={styles.listGrid}>
          {pokemon.map((poke) => (
            <PokemonCard
              name={poke.name}
              pokemonUrl={poke.url}
              onPokemonSelection={handlePokemonSelection}
            />
          ))}
        </div>
      </div>
      <Modal isOpen={isModalOpen}>
        <span>{pokemonDetails}</span>
        <button onClick={closeModal} type="button">
          Cerrar Modal
        </button>
      </Modal>
    </>
  );
}

export default PokemonList;
