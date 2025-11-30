import { BrowserRouter } from "react-router-dom";
import { PokemonProvider } from "./context/PokemonContext";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <PokemonProvider>
      <BrowserRouter>
        <Header />
        <Main />
      </BrowserRouter>
      <Footer />
    </PokemonProvider>
  );
}

export default App;
