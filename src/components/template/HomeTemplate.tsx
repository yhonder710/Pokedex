import { Naybar } from '../organismo/Naybar'
import './css/template.css'
import { PokemonsList } from '../../intefaces/pageApi'

interface Props {
  pokemosDetails: PokemonsList[] | null
  isFetching: boolean
}

export function HomeTemplate({ pokemosDetails, isFetching }: Props) {

  return (
    <main className='mainPokemons'>
      <Naybar />
      {
        isFetching
          ? <p>cargando</p>
          : pokemosDetails?.map(pokemons => {
            return (
              <img key={pokemons.id} src={pokemons.sprites.front_default} alt="" />
            )
          })
      }
    </main>
  )
}
