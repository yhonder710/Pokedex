import './css/listPokemos.css'
import { useInfiniteQuery } from "@tanstack/react-query";
import { useApiPokemonsStore } from "../../store/ApiPokemonsStore";
import { MapPokemons } from "../atomo/mapPokemons";


export function ListPokemons() {
  const { fetchPokemons, pokemosDetails } = useApiPokemonsStore()


  const { fetchNextPage, isFetchingNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ['pokemons'],
    queryFn: ({ pageParam = 0 }) => fetchPokemons(pageParam),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length : undefined;
    },
    initialPageParam: 0,
    refetchOnWindowFocus: false,
  })

  return (
    <>
      <section className="listPokemons">
        <MapPokemons pokemosDetails={pokemosDetails} />
      </section>
      <button disabled={!hasNextPage || isFetchingNextPage} onClick={() => fetchNextPage()}>cargar mas</button >
    </>
  )
}
