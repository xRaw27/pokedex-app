import React, { useState } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { capitalize } from "../helpers";
import { fetchPokemonDescription } from "../api/pokeApi";
import ImagePixelated from "./ImagePixelated";
import shadow from "../styles/shadow";
import PokemonTypes from "./PokemonTypes";
import PokemonAbilities from "./PokemonAbilities";
import PokemonStats from "./PokemonStats";
import type { PokemonData } from "../types/pokemon";

const PokemonView = (data: PokemonData) => {
  const [isLoading, setIsLoading] = useState(true);
  const [description, setDescription] = useState("");
  const [isFavorite, setIsFavorite] = useState(false);

  const onLoad = () => {
    setIsLoading(false);
  };

  const favortieOnPress = async () => {
    const newFavorite = isFavorite ? "" : data.id.toString();
    try {
      await AsyncStorage.setItem("@favorite_pokemon_id", newFavorite);
      if (newFavorite !== "") {
        await AsyncStorage.setItem(
          "@favorite_pokemon_data",
          JSON.stringify(data)
        );
      }
    } catch (e) {
      console.log(e);
    }
    setIsFavorite((prevState) => !prevState);
  };

  useFocusEffect(
    React.useCallback(() => {
      (async () => {
        try {
          const favoritePokemonId = await AsyncStorage.getItem(
            "@favorite_pokemon_id"
          );
          setIsFavorite(favoritePokemonId === data.id.toString());
        } catch (e) {
          console.log(e);
        }
        const s = await fetchPokemonDescription(data.id);
        setDescription(s);
      })();
    }, [data])
  );

  return (
    <View style={styles.background}>
      {isLoading || description === "" ? (
        <View style={styles.loader}>
          <ActivityIndicator size="large" />
        </View>
      ) : null}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={favortieOnPress}
          style={[styles.button, shadow.container]}
        >
          <MaterialCommunityIcons
            name={isFavorite ? "heart" : "heart-outline"}
            color={"#e91e63"}
            size={36}
          />
        </TouchableOpacity>
      </View>
      <ImagePixelated url={data.gifUrl} onLoad={onLoad} />
      <View style={[styles.container, shadow.container]}>
        <Text style={styles.idText}> #{data.id} </Text>
        <Text style={styles.nameText}> {capitalize(data.name)} </Text>
        <PokemonTypes types={data.types} />
        <Text style={styles.descriptionText}> {description} </Text>
        <View style={styles.columnContainer}>
          <View style={[styles.backgroundContainer, styles.abilitiesContainer]}>
            <Text style={styles.boldText}> Abilities</Text>
            <PokemonAbilities abilities={data.abilities} />
          </View>
          <View>
            <View
              style={[styles.backgroundContainer, styles.physicalStatContainer]}
            >
              <Text style={styles.boldText}>Weight</Text>
              <Text> {data.weight / 10} kg</Text>
            </View>
            <View
              style={[styles.backgroundContainer, styles.physicalStatContainer]}
            >
              <Text style={styles.boldText}>Height</Text>
              <Text> {data.height} cm</Text>
            </View>
          </View>
        </View>
        <PokemonStats stats={data.stats} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loader: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#f6f8fC",
    justifyContent: "center",
    zIndex: 200,
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
    paddingVertical: 10,
    width: "80%",
  },
  buttonContainer: {
    position: "absolute",
    alignSelf: "center",
    alignItems: "flex-end",
    top: 20,
    width: "80%",
    zIndex: 150,
  },
  button: {
    backgroundColor: "#fff",
    borderRadius: 100,
    paddingHorizontal: 7,
    paddingTop: 8.5,
    paddingBottom: 5.5,
  },
  idText: {
    color: "#",
    fontSize: 12,
  },
  nameText: {
    fontWeight: "bold",
    fontSize: 22,
  },
  descriptionText: {
    color: "#555",
    fontSize: 16,
    textAlign: "center",
    marginHorizontal: 20,
    marginBottom: 5,
  },
  boldText: {
    fontWeight: "bold",
    fontSize: 15,
  },
  columnContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  backgroundContainer: {
    backgroundColor: "#f6f8fC",
    borderRadius: 14,
  },
  abilitiesContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    margin: 6,
  },
  physicalStatContainer: {
    alignItems: "center",
    paddingHorizontal: 30,
    paddingVertical: 5,
    margin: 4,
  },
});

export default PokemonView;
