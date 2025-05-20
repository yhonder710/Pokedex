import './css/cardPokemons.css'
import { PokemonsList } from "../../intefaces/pageApi";

interface Props {
  pokemons: PokemonsList
}

export function CardPokemons({ pokemons }: Props) {
  return (
    <article>
      <img key={pokemons.id} src={pokemons.sprites.front_default} alt="img pokemon" />
    </article>
  );
};
