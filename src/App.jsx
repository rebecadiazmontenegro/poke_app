import { BrowserRouter } from "react-router-dom";
import { PokemonProvider } from "./context/PokemonContext";

import Header from "./components/Header";
import Main from "./components/Main";


function App() {
  return (
    <PokemonProvider>
      <BrowserRouter>
        <Header />
        <Main />
      </BrowserRouter>
    </PokemonProvider>
  );
}

export default App;
