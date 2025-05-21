import { useQuery } from '@tanstack/react-query'
import { ListPokemons } from '../molecula/ListPokemons'
import './css/template.css'
import { useApiPokemonsStore } from '../../store/ApiPokemonsStore'
import { FavoritosPokemon } from '../organismo/FavoritosPokemon'

import { SeccionBusqueda } from '../molecula/SeccionBusqueda'






export function HomeTemplate() {
  const { buscardorPokemons, buscador } = useApiPokemonsStore()

  const { } = useQuery({ queryKey: ['buscador de pokemons', buscador], queryFn: () => buscardorPokemons(buscador.toLowerCase()) })


  return (
    <main className='mainPokemons'>
      <FavoritosPokemon />
      {buscador.length > 0 ? <SeccionBusqueda data={data} /> : ''}
      <ListPokemons />
    </main>
  )
}
