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
import { fetchPokemons } from "../../api/pokeApi";
import { FETCH_BUNDLE_SIZE } from "../../constants";
import type { PokemonData } from "../../types/pokemon";
import type { ListTabStackProps } from "../../types/navigation";

const PokemonList = ({ navigation }: ListTabStackProps<"PokemonList">) => {
  const [data, setData] = useState<PokemonData[]>([]);
  const [offset, setOffset] = useState<number>(0);
  const [hasMoreData, setHasMoreData] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const renderItem = ({ item }: { item: PokemonData }) => {
    return <PokemonItem item={item} navigation={navigation} />;
  };

  const prefetchImages = async (newData: PokemonData[]) => {
    return await Promise.all(
      newData.map((item: PokemonData) => Image.prefetch(item.imageUrl))
    ).catch((error) => {
      console.log("Prefetch pokemons images failed: " + error);
    });
  };

  const loadMoreData = async () => {
    if (isLoading || !hasMoreData) return;

    setIsLoading(true);
    const newData = await fetchPokemons(FETCH_BUNDLE_SIZE, offset);
    await prefetchImages(newData);

    if (newData.length === 0) {
      setHasMoreData(false);
    } else {
      setData((prev: PokemonData[]) => [...prev, ...newData]);
      setOffset(offset + FETCH_BUNDLE_SIZE);
    }

    setIsLoading(false);
  };

  const refreshData = async () => {
    setIsRefreshing(true);

    const newData = await fetchPokemons(FETCH_BUNDLE_SIZE, 0);
    await prefetchImages(newData);

    setData(newData);
    setOffset(FETCH_BUNDLE_SIZE);
    setHasMoreData(true);
    setIsRefreshing(false);
  };

  const loadingIndicator = () => {
    return isLoading && !isRefreshing ? (
      <View style={styles.loader}>
        <ActivityIndicator size="large"/>
      </View>
    ) : null;
  };

  useEffect(() => {
    loadMoreData();
  }, []);

  return (
    <SafeAreaView style={styles.background}>
      <FlatList
        data={data}
        keyExtractor={(item: PokemonData) => item.id.toString()}
        renderItem={renderItem}
        onEndReached={!isRefreshing ? loadMoreData : null}
        onEndReachedThreshold={6}
        onRefresh={refreshData}
        refreshing={isRefreshing}
        windowSize={7}
        numColumns={2}
        ListFooterComponent={loadingIndicator}
        style={styles.flatlist}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#f6f8fC",
  },
  flatlist: {
    padding: 6,
  },
  loader: {
    marginVertical: 30,
    alignItems: "center",
  },
});

export default PokemonList;
