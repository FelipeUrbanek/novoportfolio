import Blog from "../components/blog/Blog";
import Cta from "../components/cta/Cta";
import Hero from "../components/hero/Hero";
import Informativo from "../components/informativo/Informativo";
import Profile from "../components/profile/Profile";
import Projetos from "../components/projetos/Projetos";
import Sobre from "../components/sobre/Sobre";
import Solucoes from "../components/solucoes/Solucoes";
import Tecnologias from "../components/tecnologias/Tecnologias";
import ScrollToTop from "../hooks/ScrollToTop";

const Home = () => {
  return (
    <>
      <ScrollToTop />
      <Hero />
      <Tecnologias />
      <Projetos />
      <Informativo />
      <Sobre />
      <Solucoes />
      <Cta />
      <Blog />
      <Profile />
    </>
  );
};

export default Home;
