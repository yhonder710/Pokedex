import { useState } from 'react'
import './css/favoritosPokemon.css'

export function FavoritosPokemon() {

  const [boxFavoritos, setBoxFavoritos] = useState<boolean>(false)
  const classFavorito = boxFavoritos ? "favoritos on" : "favoritos"
  const handleClick = () => {
    setBoxFavoritos(!boxFavoritos)
  }

  return (
    <article className={classFavorito}>
      <div className='boxFavoritos'>
        <button className='botonAbrir botonColor ' onClick={handleClick}>Abrir</button>
        <h3>Favoritos</h3>
        <p>hola</p>
      </div>
    </article>
  )
}
