import { useQuery } from '@tanstack/react-query'
import { ListPokemons } from '../molecula/ListPokemons'
import './css/template.css'
import { useApiPokemonsStore } from '../../store/ApiPokemonsStore'
import { CardPokemons } from '../atomo/CardPokemons'



export function HomeTemplate() {
  const { buscardorPokemons, buscador } = useApiPokemonsStore()

  const { data } = useQuery({ queryKey: ['buscador de pokemons', buscador], queryFn: () => buscardorPokemons(buscador.toLowerCase()) })


  return (
    <main className='mainPokemons'>
      {buscador.length > 0 ? <CardPokemons pokemons={data} /> : <ListPokemons />}
    </main>
  )
}
