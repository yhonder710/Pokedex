import { create } from "zustand";
import { PokeAPI, PokemonsList, Result } from "../interfaces/pageApi";


interface ApiPokemons {
  pokemos: Result[]
  pokemosDetails: PokemonsList[]
  fetchPokemons: (pageParam: number) => Promise<PokeAPI>
  addPokemons: (newPokemons: PokemonsList[]) => void
  fetchPokemonsList: () => Promise<PokemonsList[]>
  fetchPokemonDetails: (pokemonUrl: string) => Promise<PokemonsList>

  buscador: string
  buscardorPokemons: (buscador: string) => Promise<PokemonsList>
  setBuscador: (newValue: string) => void
  resetBuscador: () => void
}

export const useApiPokemonsStore = create<ApiPokemons>((set, get) => ({
  pokemos: [],
  pokemosDetails: [],
  addPokemons: (newPokemons) => {
    set((state) => ({
      pokemosDetails: [...state.pokemosDetails, ...newPokemons]
    }))
  },

  fetchPokemons: async (pageParam): Promise<PokeAPI> => {
    const { fetchPokemonsList, addPokemons } = get()
    const limit = 13
    const offset = pageParam * limit
    const endpoint = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    const response = await fetch(endpoint)
    const data: Promise<PokeAPI> = await response.json()
    set({ pokemos: (await data).results })
    const pokemones = await fetchPokemonsList()
    addPokemons(pokemones)
    return data
  },
  fetchPokemonDetails: async (pokemonUrl): Promise<PokemonsList> => {
    const response = await fetch(pokemonUrl);
    const data: PokemonsList = await response.json();
    return data;
  },
  fetchPokemonsList: async () => {
    const pokemonsUrl = await Promise.all(
      get().pokemos.map(async (url) => {
        const pokemonUrl = url.url
        const pokemonsDetails = await get().fetchPokemonDetails(pokemonUrl)
        return pokemonsDetails
      })
    )

    return pokemonsUrl
  },

  buscador: "",
  setBuscador: (newValue) => set({ buscador: newValue }),
  resetBuscador: () => set({ buscador: '' }),
  buscardorPokemons: async (buscador): Promise<PokemonsList> => {
    const endpoint = `https://pokeapi.co/api/v2/pokemon/${buscador}`
    const response = await fetch(endpoint)
    const data: PokemonsList = await response.json()
    return data
  },
}))
