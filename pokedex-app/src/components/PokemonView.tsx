import { useState } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import ImagePixelated from "./ImagePixelated";
import shadow from "../styles/shadow";
import type { PokemonData } from "../types/pokemon";

const PokemonView = (data: PokemonData) => {
  const [isLoading, setIsLoading] = useState(true);

  const onLoad = () => {
    setIsLoading(false);
  };

  return (
    <View style={styles.background}>
      {isLoading ? (
        <View style={styles.loader}>
          <ActivityIndicator size="large" />
        </View>
      ) : null}
      <ImagePixelated url={data.gifUrl} onLoad={onLoad} />
      <View style={[styles.container, shadow.container]}>
        <Text> Id: {data.id} </Text>
        <Text> Name: {data.name} </Text>
        <Text> Types: {data.types} </Text>
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
    paddingVertical: 50,
    width: "90%",
  },
});

export default PokemonView;
