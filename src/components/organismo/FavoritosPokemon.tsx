import { useState } from 'react'
import './css/favoritosPokemon.css'
import { NavFavoritos } from '../atomo/NavFavoritos'
import { PokemonsFavoritosStore } from '../../store/PokemonsFavoritosStore'
import { CardsFavorito } from '../molecula/CardsFavorito'

export function FavoritosPokemon() {

  const [boxFavoritos, setBoxFavoritos] = useState<boolean>(false)
  const classFavorito = boxFavoritos ? "favoritos on" : "favoritos"
  const handleClick = () => {
    setBoxFavoritos(!boxFavoritos)
  }
  const { favorites } = PokemonsFavoritosStore()

  return (
    <article className={classFavorito}>
      <div className='boxFavoritos'>
        <button className='botonAbrir' onClick={handleClick}>Favoritos</button>
        <NavFavoritos />
        <section className='boxPokemon'>
          {
            favorites.map(pokemonesFavoritos => {
              return (
                <CardsFavorito key={pokemonesFavoritos.id} pokemons={pokemonesFavoritos} />
              )
            })
          }
        </section>
      </div>
    </article>
  )
}
