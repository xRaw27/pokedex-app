import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PokemonList from "../screens/PokemonList";
import PokemonDetails from "../screens/PokemonDetails";
import { ListTabStackParamList } from "../types/navigation";
import { capitalize } from "../helpers";
import type { ListTabStackProps } from "../types/navigation";

const ListTabStack = createNativeStackNavigator<ListTabStackParamList>();

const ListTabStackNavigator = () => {
  return (
    <ListTabStack.Navigator screenOptions={{ headerTitleAlign: "center" }}>
      <ListTabStack.Screen
        name="PokemonList"
        component={PokemonList}
        options={{ title: "Pokédex" }}
      />
      <ListTabStack.Screen
        name="PokemonDetails"
        component={PokemonDetails}
        options={({ route } : ListTabStackProps<"PokemonDetails">) => ({ title: capitalize(route.params.data.name) })}
      />
    </ListTabStack.Navigator>
  );
};

export default ListTabStackNavigator;
