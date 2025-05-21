import './css/cardPokemons.css'
import { PokemonsList } from "../../intefaces/pageApi";
import { TbPokeball } from "react-icons/tb";
import { Heart } from './Heart';




interface Props {
  pokemons: PokemonsList | undefined
}

export function CardPokemons({ pokemons }: Props) {
  return (
    <article className='cardPokemons'>
      <header className='cardInfor'>
        <span className='cardId'><TbPokeball className='pokebola' /> {pokemons?.id}</span>
        <Heart />
      </header>
      <img key={pokemons?.id} src={pokemons?.sprites.other?.dream_world.front_default} alt="img pokemon" />
      <footer>
        <h3>{pokemons?.name}</h3>
      </footer>
    </article>
  );
};
