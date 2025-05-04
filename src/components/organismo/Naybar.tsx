import './css/naybar.css'

export function Naybar() {
  return (
    <nav className='naybarPokemons'>
      <h1>Pokedex</h1>
      <input type="text" placeholder="Busca tu pokemon favorito" />
      <button>modo oscuro</button>
    </nav>
  )
}
