import { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { capitalize } from "../helpers";
import ImagePixelated from "./ImagePixelated";
import shadow from "../styles/shadow";
import PokemonTypes from "./PokemonTypes";
import type { PokemonData } from "../types/pokemon";

import { fetchPokemonDescription } from "../api/pokeApi";

const PokemonView = (data: PokemonData) => {
  const [isLoading, setIsLoading] = useState(true);
  const [description, setDescription] = useState("");

  const onLoad = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    fetchPokemonDescription(data.id).then((s) => {
      setDescription(s);
    });
  }, []);

  return (
    <View style={styles.background}>
      {isLoading || description === "" ? (
        <View style={styles.loader}>
          <ActivityIndicator size="large" />
        </View>
      ) : null}
      <ImagePixelated url={data.gifUrl} onLoad={onLoad} />
      <View style={[styles.container, shadow.container]}>
        <Text style={styles.idText}> #{data.id} </Text>
        <Text style={styles.nameText}> {capitalize(data.name)} </Text>
        <PokemonTypes types={data.types} />
        <Text> {description} </Text>
        <Text> Abilities: {data.abilities} </Text>
        <Text> HP: {data.stats.hp} </Text>
        <Text> Attack: {data.stats.attack} </Text>
        <Text> Defense: {data.stats.defense} </Text>
        <Text> Special Attack: {data.stats.specialAttack} </Text>
        <Text> Special Defense: {data.stats.specialDefense} </Text>
        <Text> Speed: {data.stats.speed} </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loader: {
    position: "absolute",
    backgroundColor: "#f6f8fC",
    height: "100%",
    width: "100%",
    justifyContent: "center",
    zIndex: 100,
  },
  background: {
    flex: 1,
    backgroundColor: "#f6f8fC",
    alignItems: "center",
  },
  container: {
    backgroundColor: "#fff",
    borderRadius: 30,
    alignItems: "center",
    marginTop: 10,
    paddingVertical: 20,
    width: "90%",
  },
  idText: {
    color: "#444",
    fontSize: 12,
  },
  nameText: {
    fontWeight: "bold",
    fontSize: 22,
  },
  typeContainer: {
    flexDirection: "row",
    marginTop: 8,
    paddingHorizontal: 8,
    paddingTop: 1,
    paddingBottom: 2,
    borderRadius: 5,
  },
  typeText: {
    color: "#fff",
  },
});

export default PokemonView;
