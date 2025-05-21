import { useState, useEffect } from 'react';
import { PokemonsList } from '../interfaces/pageApi';
import { PokemonsFavoritosStore } from '../store/PokemonsFavoritosStore';

export function useFavoritos(pokemon: PokemonsList | undefined) {
  const { favorites, addFavorites, removerFavoritos } = PokemonsFavoritosStore()
  const [like, setLike] = useState<boolean>(false)

  const handleFavoriteClick = (pokemon: PokemonsList) => {
    const isFavorite = favorites.some((favorite) => favorite.id === pokemon.id)
    if (isFavorite) {
      removerFavoritos(pokemon.id)
    }
    else {
      addFavorites(pokemon)
    }
  }

  useEffect(() => {
    const isFavorite = favorites.some((favorite) => favorite.id === pokemon?.id);
    setLike(isFavorite)
  }, [favorites, pokemon]);

  return { like, handleFavoriteClick };
}
