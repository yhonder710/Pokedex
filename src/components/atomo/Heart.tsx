import './css/heart.css'
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";

interface Props {
  functionPokemons: () => void
  like: boolean
}

export function Heart({ functionPokemons, like }: Props) {

  const handleClick = () => {
    functionPokemons()
  }

  return (
    <button onClick={handleClick} className='btnFavoritos'>
      {like ? <FaHeart className='inconFavorito' /> : <FaRegHeart className='inconFavorito' />}
    </button>
  );
};
