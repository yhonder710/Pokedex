import './css/cardPokemons.css'
import { PokemonsList } from "../../interfaces/pageApi";
import { TbPokeball } from "react-icons/tb";
import { Heart } from './Heart';
import { useFavoritos } from '../../hooks/logicaFavoritos';

interface Props {
  pokemons: PokemonsList
}

export function CardPokemons({ pokemons }: Props) {
  const { handleFavoriteClick, like } = useFavoritos(pokemons)


  return (
    <article className='cardPokemons'>
      <header className='cardInfor'>
        <span className='cardId'><TbPokeball className='pokebola' /> {pokemons?.id}</span>
        <Heart like={like} functionPokemons={() => handleFavoriteClick(pokemons)} />
      </header>
      <img key={pokemons?.id} src={pokemons?.sprites.other?.['official-artwork'].front_default} alt="img pokemon" />
      <footer>
        <span>{pokemons?.name}</span>
      </footer>
    </article>
  );
};
