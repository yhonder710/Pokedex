import { PokemonsFavoritosStore } from '../../store/PokemonsFavoritosStore'
import './css/navFavoritos.css'

export function NavFavoritos() {
  const { favoriteCount, clearFavorite } = PokemonsFavoritosStore()

  return (
    <nav className='nav'>
      Pokemones favoritos: {favoriteCount}
      <button onClick={clearFavorite}>Limpiar Favoritos</button>
    </nav>
  )
}
