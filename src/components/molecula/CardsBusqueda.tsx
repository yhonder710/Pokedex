import { TbPokeball } from "react-icons/tb";
import { Heart } from '../atomo/Heart';
import './css/cardsBusqueda.css'
import { useFavoritos } from "../../hooks/logicaFavoritos";
import { PokemonsList } from "../../interfaces/pageApi";


interface Props {
  pokemons: PokemonsList
}

export function CardsBusqueda({ pokemons }: Props) {
  const { handleFavoriteClick, like } = useFavoritos(pokemons)

  return (
    <article className='boxArticle'>
      <header className='boxHeader'>
        <span className='iconPoke'><TbPokeball className='pokebola' /> {pokemons?.id}</span>
        <Heart like={like} functionPokemons={() => handleFavoriteClick(pokemons)} />
      </header>
      <img key={pokemons?.id} src={pokemons?.sprites.other?.['official-artwork'].front_default} alt="img pokemon" />
      <footer>
        <h3>{pokemons?.name}</h3>
      </footer>
    </article>
  );
};
