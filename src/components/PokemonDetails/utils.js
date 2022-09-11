const createPokemon = (data) => {
  const image = data.sprites.other['official-artwork'].front_default;

  return { image };
};

export default createPokemon;
