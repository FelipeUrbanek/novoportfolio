import Cta from "./components/cta/Cta";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Informativo from "./components/informativo/Informativo";
import Projetos from "./components/projetos/Projetos";
import Sobre from "./components/sobre/Sobre";
import Solucoes from "./components/solucoes/Solucoes";
import Tecnologias from "./components/tecnologias/Tecnologias";
import Blog from "./components/blog/Blog";
import Profile from "./components/profile/Profile";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Tecnologias />
      <Projetos />
      <Informativo />
      <Sobre />
      <Solucoes />
      <Cta />
      <Blog />
      <Profile />
      <Footer />
    </>
  );
}

export default App;
