import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Informativo from "./components/informativo/Informativo";
import Projetos from "./components/projetos/Projetos";
import Sobre from "./components/sobre/Sobre";
import Tecnologias from "./components/tecnologias/Tecnologias";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Tecnologias />
      <Projetos />
      <Informativo />
      <Sobre />
    </>
  );
}

export default App;
