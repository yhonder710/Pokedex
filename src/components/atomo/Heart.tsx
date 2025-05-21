import { useState } from 'react';
import './css/heart.css'
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";


export function Heart() {
  const [like, setLike] = useState<boolean>(false)

  const handleClick = () => {
    setLike(!like)
  }

  return (
    <button onClick={handleClick} className='btnFavoritos'>
      {like ? <FaHeart className='inconFavorito' /> : <FaRegHeart className='inconFavorito' />}
    </button>
  );
};
