import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Cta from "../components/cta/Cta";
import Profile from "../components/profile/Profile";
import Faq_Proposta from "../components/proposta-comercial/faq_proposta/Faq_Proposta";
import Hero_Proposta from "../components/proposta-comercial/hero_proposta/Hero_Proposta";
import Solucoes_Proposta from "../components/proposta-comercial/solucoes_proposta/Solucoes_Proposta";
import Tecnologias_Proposta from "../components/proposta-comercial/tecnologias_proposta/Tecnologias_Proposta";
import Sobre from "../components/sobre/Sobre";
import ScrollToTop from "../hooks/ScrollToTop";
import propostaData from "../assets/json/Proposta_Comercial.json";

// Definindo as interfaces conforme necessário
interface Projeto {
  titulo: string;
  detalhes: string;
}

interface PropostaItem {
  titulo: string;
  descricao: string;
  icone: string;
}

interface PropostaComercial {
  itens: PropostaItem[]; // Array de itens
  preco: string; // Preço atual
  precooriginal: string; // Preço original
}

interface Contato {
  telefone: string;
  email: string;
  localizacao: string;
}

interface Cliente {
  id: number;
  nome_cliente: string;
  projetos: Projeto[];
  proposta_comercial: PropostaComercial; // Agora corresponde à nova estrutura
  contato: Contato;
  tecnologias: string[];
}

const Proposta_comercial: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [cliente, setCliente] = useState<Cliente | null>(null);

  useEffect(() => {
    const clienteData = propostaData.find(
      (cliente: Cliente) => cliente.id === parseInt(id!)
    );
    if (!clienteData) {
      navigate("/"); // Redireciona para a página inicial se o cliente não for encontrado
    } else {
      setCliente(clienteData);
    }
  }, [id, navigate]);

  if (!cliente) {
    return null; // Evita renderizar qualquer coisa até que o redirecionamento aconteça
  }

  return (
    <>
      <ScrollToTop />
      <Hero_Proposta
        nome_cliente={cliente.nome_cliente}
        descricao={cliente.projetos[0]?.detalhes || ""}
      />
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
