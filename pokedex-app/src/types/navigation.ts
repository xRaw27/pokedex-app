import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { PokemonData } from "./pokemon";

export type ListTabStackParamList = {
  PokemonList: undefined;
  PokemonDetails: {data: PokemonData};
};

export type ListTabStackProps<T extends keyof ListTabStackParamList> =
  NativeStackScreenProps<ListTabStackParamList, T>;
