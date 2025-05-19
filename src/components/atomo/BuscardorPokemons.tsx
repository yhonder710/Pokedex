import React, { useState } from 'react';
import './css/buscadorPokemons.css'
import { FaSearch } from "react-icons/fa";
import { useApiPokemonsStore } from '../../store/ApiPokemonsStore';
import { IoIosCloseCircle } from "react-icons/io";



export function BuscardorPokemons() {
  const [input, setInput] = useState('')

  const { setBuscador, buscador, resetBuscador } = useApiPokemonsStore()
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.currentTarget;
    const inputValue = (target.elements.namedItem('pokemons') as HTMLInputElement)?.value;
    setBuscador(inputValue)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleReset = () => {
    setInput('')
    resetBuscador()
  };


  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name='pokemons' onChange={handleChange} value={input} placeholder="Busca tu pokemon favorito" />
      <button className='buscar'><FaSearch /></button>
      {buscador.length > 0 ? <button onClick={handleReset} className='close'><IoIosCloseCircle /></button> : ''}
    </form>
  );
};
