import { useState, useEffect } from "react";
import {
  FlatList,
  StyleSheet,
  View,
  Image,
  ActivityIndicator,
  SafeAreaView,
} from "react-native";
import PokemonItem from "./PokemonItem";
import { IPokemonData } from "../../interfaces/IPokemonData";
import { fetchPokemons } from "../../api/pokeApi";
import { FETCH_BUNDLE_SIZE } from "../../constants";

const ListTab = () => {
  const [data, setData] = useState<IPokemonData[]>([]);
  const [offset, setOffset] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMoreData, setHasMoreData] = useState(true);

  const prefetchImages = async (newData: IPokemonData[]) => {
    return await Promise.all(
      newData.map((item: IPokemonData) => Image.prefetch(item.imageUrl))
    ).catch((error) => {
      console.log("Prefetch pokemons images failed: " + error);
    });
  };

  const loadMoreData = async () => {
    setIsLoading(true);
    const newData = await fetchPokemons(FETCH_BUNDLE_SIZE, offset);
    await prefetchImages(newData);
    if (!newData.length) setHasMoreData(false);
    setOffset(offset + FETCH_BUNDLE_SIZE);
    setData((prev: IPokemonData[]) => [...prev, ...newData]);
    setIsLoading(false);
  };

  const renderItem = ({ item }: { item: IPokemonData }) => {
    return <PokemonItem item={item}></PokemonItem>;
  };

  const loadingIndicator = () => {
    return isLoading ? (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color="#aaa" />
      </View>
    ) : null;
  };

  useEffect(() => {
    loadMoreData();
  }, []);

  return (
    <SafeAreaView>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        initialNumToRender={3 * FETCH_BUNDLE_SIZE}
        onEndReached={!isLoading && hasMoreData ? loadMoreData : null}
        onEndReachedThreshold={5}
        numColumns={2}
        bounces={false}
        ListFooterComponent={loadingIndicator}
        style={styles.flatlist}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flatlist: {
    backgroundColor: "#f6f8fC",
    padding: 6,
  },
  loader: {
    marginVertical: 20,
    alignItems: "center",
  },
});

export default ListTab;
