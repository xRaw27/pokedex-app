import { StyleSheet, Text, View } from "react-native";
import { capitalize } from "../helpers";

const PokemonAbilities = ({ abilities }: { abilities: string[] }) => (
  <View style={styles.container}>
    {abilities.map((ability) => (
      <View key={ability}>
        <Text style={styles.abilityText}> {capitalize(ability)} </Text>
      </View>
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 6,
  },
  abilityText: {
    textAlign: "center",
  },
});

export default PokemonAbilities;
