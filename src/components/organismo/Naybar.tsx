import { BtnTema } from '../atomo/BtnTema'
import { BuscardorPokemons } from '../atomo/BuscardorPokemons'
import './css/naybar.css'

export function Naybar() {
  return (
    <nav className='naybarPokemons'>
      <h1 className='title'>Pokedex</h1>
      <BuscardorPokemons />
      <BtnTema />
    </nav>
  )
}
