import React from 'react';
import './css/buscadorPokemons.css'
import { FaSearch } from "react-icons/fa";
import { useApiPokemonsStore } from '../../store/ApiPokemonsStore';


export function BuscardorPokemons() {
  const { setBuscador } = useApiPokemonsStore()
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const target = e.currentTarget;
    const inputValue = (target.elements.namedItem('pokemons') as HTMLInputElement)?.value;

    setBuscador(inputValue)
  }


  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name='pokemons' placeholder="Busca tu pokemon favorito" />
      <button><FaSearch /></button>
    </form>
  );
};
