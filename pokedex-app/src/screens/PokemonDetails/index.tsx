import PokemonView from "../../components/PokemonView";
import type { ListTabStackProps } from "../../types/navigation";

const PokemonDetails = ({ route }: ListTabStackProps<"PokemonDetails">) => {
  return <PokemonView {...route.params.data} />;
};

export default PokemonDetails;
