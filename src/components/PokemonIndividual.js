import {  useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Header } from "./Header";
import axios from "axios";

function PokemonIndividual() {
  const { id } = useParams();
  const [individualPokemon, setIndividualPokemon] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  
  useEffect(() => {
        const fetch=async (id)=>{
            const result= await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
          console.log(id)
          setIndividualPokemon(result.data)
          setIsLoading(false)
        }
        fetch(id)
  },[id]);

  return isLoading ? (
    <>
    <Header/>
  <h1>Loading..</h1>
  </>
  ) : (
    <>
    <Header/>
      <li>{individualPokemon.name}</li>
      <img
        alt={individualPokemon.name}
        id={individualPokemon.id}
        src={individualPokemon.sprites.other.dream_world.front_default}
      /> 
       
    </>
  );

}

export default PokemonIndividual;
