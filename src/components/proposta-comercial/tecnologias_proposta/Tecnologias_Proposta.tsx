import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenNib,
  faCode,
  faRecordVinyl,
  faArrowDown,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons"; // Importando os ícones
import { IconDefinition } from "@fortawesome/fontawesome-svg-core"; // Importando o tipo correto
import useSVGInject from "../../../hooks/useSVGInject";
import gradient from "../../../assets/img/elementos/gradientsolucoes.svg";
import propostaData from "../../../assets/json/Proposta_Comercial.json"; // Importando os dados

// Definindo a interface para os itens da proposta comercial
interface PropostaItem {
  titulo: string;
  descricao: string;
  icone: string; // Nome do ícone do Font Awesome
}

// Definindo a interface para a proposta comercial
interface PropostaComercial {
  itens: PropostaItem[];
  preco: string;
  precooriginal: string; // Preço original
}

// Mapeamento dos ícones
const iconMap: { [key: string]: IconDefinition } = {
  penNib: faPenNib,
  code: faCode,
  recordVinyl: faRecordVinyl,
  arrowDown: faArrowDown,
  arrowUp: faArrowUp,
};

const Solucoes_Proposta: React.FC = () => {
  useSVGInject();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [proposta, setProposta] = useState<PropostaComercial | null>(null); // Usando a interface

  useEffect(() => {
    const clienteData = propostaData.find(
      (cliente) => cliente.id === parseInt(id!)
    );
    if (clienteData) {
      setProposta(clienteData.proposta_comercial);
    } else {
      navigate("/");
    }
  }, [id, navigate]);

  return (
    <div>
      <section id="solucoes" className="solucoes-proposta">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 container-solucoes-01">
              <h6>Detalhes</h6>
              <h2>Vamos utilizar a seguinte abordagem</h2>
            </div>
          </div>
          <div className="row">
            {proposta?.itens.map((item: PropostaItem, index: number) => (
              <div className="col-lg-4" key={index}>
                <div className="box-solucoes">
                  <FontAwesomeIcon
                    icon={iconMap[item.icone]}
                    className="mx-2"
                  />{" "}
                  {/* Usando o mapeamento */}
                  <h3>{item.titulo}</h3>
                  <span>{item.descricao}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="box-preco">
                <h4>Pelo investimento de apenas:</h4>
                <h3>
                  <s>{proposta?.precooriginal}</s>
                </h3>
                <h2>{proposta?.preco}</h2>
                <span>Com parcelamento facilitado</span>
              </div>
            </div>
          </div>
        </div>
        <img src={gradient} className="gradient-solucoes img-fluid" alt="" />
      </section>
    </div>
  );
};

export default Solucoes_Proposta;
