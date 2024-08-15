import Cta from "../components/cta/Cta";
import Profile from "../components/profile/Profile";
import Faq_Proposta from "../components/proposta-comercial/faq_proposta/Faq_Proposta";
import Hero_Proposta from "../components/proposta-comercial/hero_proposta/Hero_Proposta";
import Solucoes_Proposta from "../components/proposta-comercial/solucoes_proposta/Solucoes_Proposta";
import Tecnologias_Proposta from "../components/proposta-comercial/tecnologias_proposta/Tecnologias_Proposta";
import Sobre from "../components/sobre/Sobre";
import ScrollToTop from "../hooks/ScrollToTop";

const Proposta_comercial = () => {
  return (
    <>
      <ScrollToTop />
      <Hero_Proposta />
      <Tecnologias_Proposta />
      <Solucoes_Proposta />
      <Cta />
      <Profile />
      <Sobre />
      <Faq_Proposta />
    </>
  );
};

export default Proposta_comercial;
