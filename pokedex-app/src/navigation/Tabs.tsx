import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ListTab from "../pages/ListTab";
import FavoriteTab from "../pages/FavoriteTab";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Pokédex" component={ListTab} />
      <Tab.Screen name="Favorite Pokémon" component={FavoriteTab} />
    </Tab.Navigator>
  );
};

export default Tabs;
