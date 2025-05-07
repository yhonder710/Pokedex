import { Naybar } from '../organismo/Naybar'
import './css/template.css'
import { PokemonsList } from '../../intefaces/pageApi'

interface Props {
  pokemosDetails: PokemonsList[] | null
}

export function HomeTemplate({ pokemosDetails }: Props) {

  return (
    <main className='mainPokemons'>
      <Naybar />
      {
        pokemosDetails?.map(pokemons => {
          return (
            <img key={pokemons.id} src={pokemons.sprites.front_default} alt="" />
          )
        })
      }
    </main>
  )
}
