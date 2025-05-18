import { ListPokemons } from '../molecula/ListPokemons'
import { Naybar } from '../organismo/Naybar'
import './css/template.css'



export function HomeTemplate() {

  return (
    <main className='mainPokemons'>
      <Naybar />
      <ListPokemons />
    </main>
  )
}
