import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ListTabStackNavigator from "./ListTabStackNavigator";
import FavoriteTab from "../screens/FavoriteTab";
import MapTab from "../screens/MapTab";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerTitleAlign: "center" }}>
      <Tab.Screen
        name="ListTabStackNavigator"
        component={ListTabStackNavigator}
        options={{
          headerShown: false,
          tabBarActiveTintColor: "#3c63bd",
          title: "Pokédex",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="pokeball" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="FavoriteTab"
        component={FavoriteTab}
        options={{
          title: "Favorite Pokémon",
          tabBarActiveTintColor: "#e91e63",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="heart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="MapTab"
        component={MapTab}
        options={{
          title: "Map",
          tabBarActiveTintColor: "#34A852",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="pokemon-go"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
