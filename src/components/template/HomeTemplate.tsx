import { useQuery } from '@tanstack/react-query'
import { useApiPokemonsStore } from '../../store/ApiPokemonsStore'
import { Naybar } from '../organismo/Naybar'
import './css/template.css'

export function HomeTemplate() {
  const { fetchPokemonsList, pokemosDetails } = useApiPokemonsStore()


  const { } = useQuery({ queryKey: ['api pokemons fecth'], queryFn: fetchPokemonsList })

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
