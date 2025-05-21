import { PokemonsList } from "../../intefaces/pageApi";
import { TbPokeball } from "react-icons/tb";
import { Heart } from '../atomo/Heart';
import './css/cardsBusqueda.css'


interface Props {
  pokemons: PokemonsList | undefined
}

export function CardsBusqueda({ pokemons }: Props) {
  return (
    <article className='boxArticle'>
      <header className='boxHeader'>
        <span className='iconPoke'><TbPokeball className='pokebola' /> {pokemons?.id}</span>
        <Heart />
      </header>
      <img key={pokemons?.id} src={pokemons?.sprites.other?.dream_world.front_default} alt="img pokemon" />
      <footer>
        <h3>{pokemons?.name}</h3>
      </footer>
    </article>
  );
};
