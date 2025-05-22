import { TbPokeball } from "react-icons/tb";
import { PokemonsList } from "../../interfaces/pageApi";
import './css/carsFavorito.css'
interface Props {
  pokemons: PokemonsList
}

export function CardsFavorito({ pokemons }: Props) {
  return (
    <article className='boxFavorite'>
      <header className='header'>
        <span className='iconPoke'><TbPokeball className='pokebola' /> {pokemons?.id}</span>
      </header>
      <img key={pokemons?.id} src={pokemons?.sprites.other?.dream_world.front_default} alt="img pokemon" />
      <footer>
        <h3>{pokemons?.name}</h3>
      </footer>
    </article>
  )
}
