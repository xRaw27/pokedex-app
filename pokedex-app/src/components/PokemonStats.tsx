import { StyleSheet, Text, View } from "react-native";
import type { PokemonData } from "../types/pokemon";

const PokemonStats = ({ stats }: { stats: PokemonData["stats"] }) => (
  <View style={styles.container}>
    <View style={[styles.statContainer, styles.hp]}>
      <Text style={styles.boldText}>Hp</Text>
      <Text style={styles.statText}>{stats.hp}</Text>
    </View>
    <View style={[styles.statContainer, styles.attack]}>
      <Text style={styles.boldText}>Atk</Text>
      <Text style={styles.statText}>{stats.attack}</Text>
    </View>
    <View style={[styles.statContainer, styles.defense]}>
      <Text style={styles.boldText}>Def</Text>
      <Text style={styles.statText}>{stats.defense}</Text>
    </View>
    <View style={[styles.statContainer, styles.speed]}>
      <Text style={styles.boldText}>Spd</Text>
      <Text style={styles.statText}>{stats.speed}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 5,
  },
  statContainer: {
    alignItems: "center",
    width: 40,
    paddingVertical: 5,
    marginHorizontal: 3,
    borderRadius: 10,
  },
  hp: {
    backgroundColor: "#C64649",
  },
  attack: {
    backgroundColor: "#F2AA47",
  },
  defense: {
    backgroundColor: "#3A8EE1",
  },
  speed: {
    backgroundColor: "#95AEC3",
  },
  boldText: {
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 2,
  },
  statText: {
    color: "#fff",
    fontSize: 15,
  },
});

export default PokemonStats;
