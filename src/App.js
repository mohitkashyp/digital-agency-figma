import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PokemonIndividual from "./components/PokemonIndividual";
import Home from "./components/Home";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TestimonialCard from "./components/Testimonial/TestimonialCard";
const theme = createTheme({
  palette: {
    primary: {
      main: "#016170",
    },
    secondary: {
      main: "#ebe2d9",
    },
  },
  typography: {
    fontFamily: '"Nunito Sans", sans-serif;',
    h1: {
      fontFamily: '"Lora", serif;',
      fontSize: " 60px",
      fontWeight: "700",
      lineHeight: "98px",
      letterSpacing: "0.02em",
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route index element={<Home />} />
            <Route path="/:id" element={<PokemonIndividual />} />
            <Route path="/test" element={<TestimonialCard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
