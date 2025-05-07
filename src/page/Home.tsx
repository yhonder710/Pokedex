import { useQuery } from "@tanstack/react-query";
import { HomeTemplate } from "../components/template/HomeTemplate";
import { useApiPokemonsStore } from "../store/ApiPokemonsStore";

export function Home() {
  const { fetchPokemonsList, pokemosDetails } = useApiPokemonsStore()
  const { } = useQuery({ queryKey: ['api pokemons fecth'], queryFn: fetchPokemonsList })


  return (
    <HomeTemplate pokemosDetails={pokemosDetails} />
  )
}
