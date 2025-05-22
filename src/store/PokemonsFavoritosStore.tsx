import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { PokemonsList } from "../interfaces/pageApi";

interface Favoritos {
  favorites: PokemonsList[] | []
  favoriteCount: number
  addFavorites: (p: PokemonsList) => void
  removerFavoritos: (p: number) => void
  clearFavorite: () => void
}

export const PokemonsFavoritosStore = create(
  persist<Favoritos>(
    (set) => ({
      favorites: [],
      favoriteCount: 0,
      addFavorites: (p) => set((state) => ({
        favorites: [...state.favorites, p],
        favoriteCount: state.favoriteCount + 1
      })),
      removerFavoritos: (p) => set((state) => ({
        favorites: state.favorites.filter((pokemons) => pokemons.id !== p),
        favoriteCount: state.favoriteCount - 1
      }))
      ,
      clearFavorite: () => set(() => ({
        favorites: [],
        favoriteCount: 0
      }))

    }),
    {
      name: 'pokemons-favorite-storage',
      storage: createJSONStorage(() => localStorage),
    },
  )
)
