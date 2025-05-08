import { useInfiniteQuery } from "@tanstack/react-query";
import { HomeTemplate } from "../components/template/HomeTemplate";
import { useApiPokemonsStore } from "../store/ApiPokemonsStore";




export function Home() {
  const { fetchPokemons, pokemosDetails } = useApiPokemonsStore()
  const { fetchNextPage, isFetching, } = useInfiniteQuery({
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
      <HomeTemplate pokemosDetails={pokemosDetails} isFetching={isFetching} />
      <button onClick={() => fetchNextPage()}>cargar mas</button>
    </>
  )
}
