import { useInfiniteQuery } from "@tanstack/react-query";
import { useApiPokemonsStore } from "../../store/ApiPokemonsStore";


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
    < >
      <section>
        {
          pokemosDetails?.map(pokemons => {
            return (
              <img key={pokemons.id} src={pokemons.sprites.front_default} alt="img pokemon" />
            )
          })
        }
      </section>
      <button disabled={!hasNextPage || isFetchingNextPage} onClick={() => fetchNextPage()}>cargar mas</button >
    </>
  )
}
