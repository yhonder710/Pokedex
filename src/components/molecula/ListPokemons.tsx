import './css/listPokemos.css'
import { useInfiniteQuery } from "@tanstack/react-query";
import { useApiPokemonsStore } from "../../store/ApiPokemonsStore";
import { MapPokemons } from "../atomo/mapPokemons";
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import { BounceLoader } from "react-spinners";

export function ListPokemons() {
  const { fetchPokemons, pokemosDetails } = useApiPokemonsStore()

  const { fetchNextPage } = useInfiniteQuery({
    queryKey: ['pokemons'],
    queryFn: ({ pageParam = 0 }) => fetchPokemons(pageParam),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length : undefined;
    },
    initialPageParam: 0,
    refetchOnWindowFocus: false,
  })

  const { ref, inView } = useInView()

  useEffect(() => {
    if (inView) {
      fetchNextPage()
    }
  }, [inView])


  return (
    <div className='containerListPokemons'>
      <section className="listPokemons">
        <MapPokemons pokemosDetails={pokemosDetails} />
      </section>
      <BounceLoader size={60} color='#5E39B1' ref={ref} />
    </div>
  )
}
