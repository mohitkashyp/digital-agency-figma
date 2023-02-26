import CardWithTitle from "./CardWithTitle";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
import axios from "axios";
import { Header } from "./Header";
import Hero from "./Hero/Hero";
import Service from "./Service/Service";
import Stats from "./Stats/Stats";
import Work from "./Work/Work";

function PokemonAll() {
  
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=10").then((response) => {

      setPokemonData(response.data.results);
    });
  }, []);
  return (
    <div>
      <Header/>
      <Hero/>
      <Service/>
      <Stats/>
      <Work/>
    </div>
  );
}

export default PokemonAll;
