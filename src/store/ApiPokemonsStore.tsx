import { create } from "zustand";
import { PokeAPI, PokemonsList, Result } from "../intefaces/pageApi";

interface ApiPokemons {
  pokemos: Result[]
  pokemosDetails: PokemonsList[] | null
  fetchPokemons: () => void
  fetchPokemonsList: () => void
  fetchPokemonDetails: (pokemonUrl: string) => Promise<PokemonsList>
}

export const useApiPokemonsStore = create<ApiPokemons>((set, get) => ({
  pokemos: [],
  pokemosDetails: null,

  fetchPokemons: async (): Promise<PokeAPI> => {
    const enpoint = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=1"
    const response = await fetch(enpoint)
    const data: Promise<PokeAPI> = response.json()
    set({ pokemos: (await data).results })
    return data
  },

  fetchPokemonDetails: async (pokemonUrl): Promise<PokemonsList> => {
    const response = await fetch(pokemonUrl);
    const data: PokemonsList = await response.json();
    return data;
  },

  fetchPokemonsList: async (): Promise<PokemonsList[]> => {
    await get().fetchPokemons()

    const pokemonsUrl = await Promise.all(
      get().pokemos.map(async (url) => {
        const pokemonUrl = url.url
        const pokemonsDetails = await get().fetchPokemonDetails(pokemonUrl)
        return pokemonsDetails
      })
    )
    set({ pokemosDetails: pokemonsUrl })

    return pokemonsUrl
  }
}))
