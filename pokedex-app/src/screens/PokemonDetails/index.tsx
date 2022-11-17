import React, { useState, Suspense } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import ImagePixelated from "../../components/ImagePixelated";
import PokemonView from "../../components/PokemonView";
import type { ListTabStackProps } from "../../types/navigation";
import type { PokemonData } from "../../types/pokemon";


const PokemonDetails = ({ route }: ListTabStackProps<"PokemonDetails">) => {
  // const [isLoading, setIsLoading] = useState(true);

  // const onLoad = () => {
  //   setIsLoading(false);
  // };

  // return (
  //   <View style={styles.background}>
  //     {isLoading ? <View style={styles.loader}><ActivityIndicator size="large"/></View> : null}
  //     <ImagePixelated url={data.gifUrl} onLoad={onLoad} />
  //     <View style={styles.container}>
  //       <Text> Id: {data.id} </Text>
  //       <Text> Name: {data.name} </Text>
  //       <Text> Types: {data.types} </Text>
  //       <Text> Abilities: {data.abilities} </Text>
  //       <Text> HP: {data.stats.hp} </Text>
  //       <Text> Attack: {data.stats.attack} </Text>
  //       <Text> Defense: {data.stats.defense} </Text>
  //       <Text> Special Attack: {data.stats.specialAttack} </Text>
  //       <Text> Special Defense: {data.stats.specialDefense} </Text>
  //       <Text> Speed: {data.stats.speed} </Text>
  //     </View>
  //   </View>
  // );
  return (<PokemonView {...route.params.data}/>)
};

// const styles = StyleSheet.create({
//   loader: {
//     position: "absolute",
//     backgroundColor: "#f6f8fC",
//     height: "100%",
//     width: "100%",
//     padding: 300,
//     zIndex: 100,
//   },
//   background: {
//     flex: 1,
//     backgroundColor: "#f6f8fC",
//     alignItems: "center",
//   },
//   container: {
//     backgroundColor: "#fff",
//     borderRadius: 12,
//     alignItems: "center",
//     marginTop: 20,
//     paddingVertical: 50,
//     width: "80%",
//   },
// });

export default PokemonDetails;
