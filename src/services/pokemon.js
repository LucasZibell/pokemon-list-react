import api from '../config/api';

export const getPokemon = () => api.get('/pokemon?limit=24');

export const getPokemonDetails = (id) => api.get(`/pokemon/${id}`);
