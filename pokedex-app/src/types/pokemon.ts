export type Pokemon = {
  name: string;
  url: string;
};

export type PokemonData = {
  id: number;
  name: string;
  url: string;
  imageUrl: string;
  gifUrl: string;
  types: string[];
  abilities: string[];
  height: number
  weight: number
  stats: {
    hp: number;
    attack: number; 
    defense: number;
    specialAttack: number;
    specialDefense: number;
    speed: number;
  };
};
