import React from "react";
import { StyleSheet, Text, View } from "react-native";
import pokemonTypes from "../styles/pokemonTypes";

const PokemonTypes = ({ types }: { types: string[] }) => (
  <View style={styles.container}>
    {types.map((type) => (
      <View
        key={type}
        style={[
          styles.typeContainer,
          pokemonTypes[type as keyof typeof pokemonTypes],
        ]}
      >
        <Text style={styles.typeText}>{type}</Text>
      </View>
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  typeContainer: {
    alignItems: "center",
    marginVertical: 8,
    marginHorizontal: 5,
    paddingHorizontal: 12,
    paddingTop: 1,
    paddingBottom: 2,
    borderRadius: 5,
  },
  typeText: {
    fontSize: 16,
    color: "#fff",
  },
});

export default PokemonTypes;
