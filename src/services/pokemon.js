import api from '../config/api';

export const getPokemon = () => api.get('/pokemon');

export const getPokemonDetails = (id) => api.get(`/pokemon/${id}`);
