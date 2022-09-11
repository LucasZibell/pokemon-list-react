import Modal from 'react-modal';
import { useEffect, useState } from 'react';
import styles from './styles.module.scss';

import modalStyle from './modalStyle';

import { getPokemon } from '../../services/pokemon';

import PokemonCard from '../../components/PokemonCard';
import PokemonDetails from '../../components/PokemonDetails';

function PokemonList() {
  const [pokemon, setPokemon] = useState([]);
  const [isModalOpen, setModalStatus] = useState(false);
  const [pokemonId, setPokemonId] = useState();

  useEffect(() => {
    getPokemon().then(({ data }) => setPokemon(data.results));
  }, []);

  const handlePokemonSelection = (id) => {
    setModalStatus(true);
    setPokemonId(id);
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
      <Modal
        isOpen={isModalOpen}
        style={modalStyle}
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick>
        <PokemonDetails id={pokemonId} onCloseModal={closeModal} />
      </Modal>
    </>
  );
}

export default PokemonList;
