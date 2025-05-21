import { PokemonsList } from "../../intefaces/pageApi";
import { CardPokemons } from "./CardPokemons";

interface Props {
  pokemosDetails: PokemonsList[]
}

export function MapPokemons({ pokemosDetails }: Props) {
  return (
    <>
      {
        pokemosDetails?.map(pokemons => {
          return (
            <CardPokemons key={pokemons.id} pokemons={pokemons} />
          )
        })
      }
    </>
  );
};

