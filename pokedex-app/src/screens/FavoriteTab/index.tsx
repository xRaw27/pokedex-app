import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import PokemonView from "../../components/PokemonView";
import type { PokemonData } from "../../types/pokemon";

const FavoriteTab = () => {
  const [pokemonData, setPokemonData] = useState<PokemonData | null>(null);
  const [isfavorite, setIsFavorite] = useState(true);

  useFocusEffect(
    React.useCallback(() => {
      (async () => {
        try {
          const favoritePokemonId = await AsyncStorage.getItem(
            "@favorite_pokemon_id"
          );

          if (favoritePokemonId !== "" && favoritePokemonId !== null) {
            setIsFavorite(true);
            const favoritePokemonData = await AsyncStorage.getItem(
              "@favorite_pokemon_data"
            );
            setPokemonData(
              favoritePokemonData !== null
                ? JSON.parse(favoritePokemonData)
                : null
            );
          } else {
            setIsFavorite(false);
          }
        } catch (e) {
          console.log(e);
        }
      })();

      return () => setPokemonData(null);
    }, [])
  );

  return !isfavorite ? (
    <View style={styles.container}>
      <Text style={styles.textLarge}>
        {"You don't have a favorite Pokémon yet :("}
      </Text>
      <Text style={styles.textSmall}>{"Go to the Pokédex and pick one!"}</Text>
    </View>
  ) : pokemonData !== null ? (
    <PokemonView {...pokemonData} />
  ) : null;
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#f6f8fC",
    alignItems: "center",
    justifyContent: "center",
  },
  textLarge: {
    fontSize: 20,
    margin: 10,
  },
  textSmall: {
    fontSize: 16,
  },
});

export default FavoriteTab;
