import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useSVGInject from "../../../hooks/useSVGInject";
import gradientshort from "../../../assets/img/elementos/GradientShort.svg";
import selo from "../../../assets/img/elementos/selo.svg";
import propostaData from "../../../assets/json/Proposta_Comercial.json";

// Import all technology images
import react from "../../../assets/img/tecnologias/react.svg";
import typescript from "../../../assets/img/tecnologias/typescript.svg";
import nodejs from "../../../assets/img/tecnologias/nodejs.svg";
import graphql from "../../../assets/img/tecnologias/graphql.svg";
import jest from "../../../assets/img/tecnologias/jest.svg";
import docker from "../../../assets/img/tecnologias/docker.svg";
import wordpress from "../../../assets/img/tecnologias/wordpress.svg";
import html5 from "../../../assets/img/tecnologias/html5.svg";
import css3 from "../../../assets/img/tecnologias/css3.svg";
import sass from "../../../assets/img/tecnologias/sass.svg";
import javascript from "../../../assets/img/tecnologias/javascript.svg";
import nextjs from "../../../assets/img/tecnologias/nextjs.svg";

// Placeholder image for missing technologies
import missingImage from "../../../assets/img/tecnologias/missing-image.svg"; // Ensure you have a placeholder image

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
  itens: PropostaItem[]; // Atualizado para refletir a nova estrutura
  preco: string;
  precooriginal: string;
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

// Map technology names to their corresponding imported images
const techImageMap: { [key: string]: string } = {
  "react.svg": react,
  "typescript.svg": typescript,
  "nodejs.svg": nodejs,
  "graphql.svg": graphql,
  "jest.svg": jest,
  "docker.svg": docker,
  "missing-image.svg": missingImage,
  "wordpress.svg": wordpress,
  "html5.svg": html5,
  "css3.svg": css3,
  "sass.svg": sass,
  "javascript.svg": javascript,
  "nextjs.svg": nextjs,
};

const Tecnologias_Proposta: React.FC = () => {
  useSVGInject();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [tecnologias, setTecnologias] = useState<string[]>([]);

  useEffect(() => {
    const clienteData = propostaData.find(
      (cliente: Cliente) => cliente.id === parseInt(id!)
    );
    if (clienteData) {
      setTecnologias(clienteData.tecnologias);
    } else {
      navigate("/");
    }
  }, [id, navigate]);

  return (
    <section id="tecnologias-proposta">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h6>Essa é nossa</h6>
            <h2>Proposta Comercial</h2>
            <h3>
              Vamos Trabalhar com as seguintes tecnologias
              <strong>para ajudar a evoluir o seu projeto</strong>
            </h3>
          </div>
          <div className="col-lg-6">
            <div className="row container-tecnologias">
              {tecnologias.map((tec, index) => (
                <div key={index} className="col-lg-4 col-6">
                  <img
                    src={techImageMap[tec] || missingImage} // Use the mapped image or a placeholder if it doesn't exist
                    alt={`Tecnologia ${index + 1}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="row mt-2">
          <div className="container">
            <div className="col-lg-12 d-flex">
              <img
                src={selo}
                className="selotecnologias img-fluid svg-inject"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <img
        src={gradientshort}
        alt=""
        className="gradienttecnologias svg-inject"
      />
    </section>
  );
};

export default Tecnologias_Proposta;
