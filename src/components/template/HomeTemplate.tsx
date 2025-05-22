import { useQuery } from '@tanstack/react-query'
import { ListPokemons } from '../molecula/ListPokemons'
import './css/template.css'
import { useApiPokemonsStore } from '../../store/ApiPokemonsStore'
import { FavoritosPokemon } from '../organismo/FavoritosPokemon'
import { SeccionBusqueda } from '../molecula/SeccionBusqueda'

export function HomeTemplate() {
  const { buscardorPokemons, buscador } = useApiPokemonsStore()
  const { data, isSuccess, isFetching, isError } = useQuery({ queryKey: ['buscador de pokemons', buscador], queryFn: () => buscardorPokemons(buscador.toLowerCase()) })

  return (
    <main className='mainPokemons'>
      <FavoritosPokemon />
      {isFetching ? <p className='message'>cargando...</p> : ''}
      {isError ? <p className='message'>No se a encontrado ese pokemon</p> : ''}
      {buscador.length > 0 && isSuccess ? <SeccionBusqueda data={data} /> : ''}
      <ListPokemons />
    </main>
  )
}
