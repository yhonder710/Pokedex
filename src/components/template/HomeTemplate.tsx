import { useQuery } from '@tanstack/react-query'
import { ListPokemons } from '../molecula/ListPokemons'
import { Naybar } from '../organismo/Naybar'
import './css/template.css'
import { useApiPokemonsStore } from '../../store/ApiPokemonsStore'



export function HomeTemplate() {
  const { buscardorPokemons, buscador } = useApiPokemonsStore()

  const { data } = useQuery({ queryKey: ['buscador de pokemons', buscador], queryFn: () => buscardorPokemons(buscador.toLowerCase()) })


  return (
    <main className='mainPokemons'>
      <Naybar />
      {buscador.length > 0 ? <img src={data?.sprites.other?.dream_world.front_default} alt="" /> : <ListPokemons />}
    </main>
  )
}
