import { PokemonsFavoritosStore } from '../../store/PokemonsFavoritosStore'
import './css/navFavoritos.css'

export function NavFavoritos() {
  const { favoriteCount } = PokemonsFavoritosStore()
  return (
    <nav className='nav'>
      Pokemones favoritos: {favoriteCount}
    </nav>
  )
}
