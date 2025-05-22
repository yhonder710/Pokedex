import { TbPokeball } from "react-icons/tb";
import { PokemonsList } from "../../interfaces/pageApi";
import './css/carsFavorito.css'
import { Heart } from "../atomo/Heart";
import { useFavoritos } from "../../hooks/logicaFavoritos";
interface Props {
  pokemons: PokemonsList
}

export function CardsFavorito({ pokemons }: Props) {
  const { handleFavoriteClick, like } = useFavoritos(pokemons)

  return (
    <article className='boxFavorite'>
      <header className='header'>
        <span className='iconPoke'><TbPokeball className='pokebola' /> {pokemons?.id}</span>
        <Heart like={like} functionPokemons={() => handleFavoriteClick(pokemons)} />
      </header>
      <img key={pokemons?.id} src={pokemons?.sprites.other?.["official-artwork"].front_default} alt="img pokemon" />
      <footer>
        <span>{pokemons?.name}</span>
      </footer>
    </article>
  )
}
