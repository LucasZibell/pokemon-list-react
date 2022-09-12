const parsePokedexNumber = (id) => `#${id.toLocaleString('en-US', { minimumIntegerDigits: 3 })}`;

const createPokemon = (data) => {
  const image = data.sprites.other['official-artwork'].front_default;
  const pokemonName = data.name;
  const pokedexNumber = parsePokedexNumber(data.id);
  const types = data.types.map((type) => type.type.name);
  const stats = data.stats.map((stat) => ({
    statName: stat.stat.name,
    baseNumber: stat.base_stat
  }));
  return { image, pokedexNumber, pokemonName, types, stats };
};

export default createPokemon;
