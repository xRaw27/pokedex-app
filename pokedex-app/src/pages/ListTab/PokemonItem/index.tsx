import { View, Text, Image, StyleSheet } from "react-native";
import { IPokemonData } from "../../../interfaces/IPokemonData";
import { capitalize } from "../../../helpers";
import shadow from "../../../styles/shadow";
import pokemonTypes from "../../../styles/pokemonTypes";

const PokemonItem = ({ item }: { item: IPokemonData }) => {
  return (
    <View style={styles.card}>
      <View style={[styles.container, shadow.container]}>
        <Image style={styles.image} source={{ uri: item.imageUrl }}></Image>
        <Text style={styles.idText}> #{item.id} </Text>
        <Text style={styles.nameText}> {capitalize(item.name)} </Text>
        {item.types.map((type) => {
          return (
            <View style={[styles.typeContainer, pokemonTypes[type as keyof typeof pokemonTypes]]}>
              <Text style={styles.typeText}> {type} </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 8,
  },
  container: {
    backgroundColor: "#fff",
    borderRadius: 12,
    alignItems: "center",
    width: "100%",
    height: 145,
    marginTop: 30,
    marginBottom: 10,
    padding: 16,
    paddingTop: 40,
  },
  image: {
    position: "absolute",
    top: -50,
    width: 96,
    height: 96,
  },
  idText: {
    color: "#444",
    fontSize: 12,
  },
  nameText: {
    fontWeight: "bold",
    fontSize: 16,
  },
  typeContainer: {
    marginTop: 8,
    paddingHorizontal: 8,
    paddingTop: 1,
    paddingBottom: 2,
    borderRadius: 5,
  },
  typeText: {
    color: "#fff"
  }
});

export default PokemonItem;
