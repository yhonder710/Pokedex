import { PokemonsList } from "../../intefaces/pageApi";
import { useApiPokemonsStore } from "../../store/ApiPokemonsStore";
import { CardsBusqueda } from "./CardsBusqueda";
import './css/seccionBusqueda.css'

interface buscadorInterface {
  data: PokemonsList | undefined
}

export function SeccionBusqueda({ data }: buscadorInterface) {

  const { buscador } = useApiPokemonsStore()

  return (

    <div className="boxBusqueda">
      <h2 className="resultado">Resultado de busqueda: {buscador}</h2>
      <CardsBusqueda pokemons={data} />
    </div>
  );
};
