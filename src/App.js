import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PokemonAll from "./components/PokemonAll";
import PokemonIndividual from "./components/PokemonIndividual";

function App() {
  
  return (
    
    <BrowserRouter>
      <Routes>
        <Route>
          <Route index element={<PokemonAll />} />
          <Route path='/:id'  element={<PokemonIndividual />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
