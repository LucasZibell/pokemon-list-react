import { useState } from 'react';
import Modal from 'react-modal';
import { useQuery } from '@tanstack/react-query';
import styles from './styles.module.scss';

import modalStyle from './modalStyle';

import { getPokemon } from '../../services/pokemon';

import PokemonCard from '../../components/PokemonCard';
import PokemonDetails from '../../components/PokemonDetails';

function PokemonList() {
  const [isModalOpen, setModalStatus] = useState(false);
  const [pokemonId, setPokemonId] = useState();

  const { data: pokemon } = useQuery(['get-pokemon-list'], getPokemon, {
    select: ({ data }) => data.results
  });

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
          {pokemon?.map((poke) => (
            <PokemonCard
              key={poke.name}
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
