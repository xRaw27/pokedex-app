import { IPokemon } from "../interfaces/IPokemon";
import { IPokemonData } from "../interfaces/IPokemonData";

export const fetchPokemonData = async (url: string): Promise<IPokemonData> => {
  const response = await fetch(url);
  const json = await response.json();
  const sprites = json.sprites.versions["generation-v"]["black-white"];

  return {
    id: json.id,
    name: json.name,
    url: url,
    imageUrl: sprites["front_default"],
    gifUrl: sprites["animated"]["front_default"],
    types: json.types.map((item: { type: { name: string } }) => item.type.name),
  };
};

export const fetchPokemons = async (
  limit: number,
  offset: number
): Promise<IPokemonData[]> => {
  const json = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  )
    .then((response) => response.json())
    .catch((error) => console.log("Fetch pokemons failed: " + error));

  if (!json) return [];

  const pokemonList = await Promise.all<IPokemonData>(
    json.results.map((item: IPokemon) => fetchPokemonData(item.url))
  ).catch((error) => {
    console.log("Fetch pokemons data failed: " + error);
    return [];
  });

  return pokemonList;
};
