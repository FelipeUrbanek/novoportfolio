import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenNib } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faRecordVinyl } from "@fortawesome/free-solid-svg-icons";
import useSVGInject from "../../../hooks/useSVGInject";
import gradient from "../../../assets/img/elementos/gradientsolucoes.svg";

const Solucoes_Proposta = () => {
  useSVGInject();
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
            <div className="col-lg-4">
              <div className="box-solucoes">
                <FontAwesomeIcon icon={faPenNib} className="mx-2" />
                <h3>Design Sob Medida</h3>
                <span>
                  Crio sites do zero, garantindo que cada detalhe esteja
                  alinhado com a identidade da sua marca.
                </span>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="box-solucoes">
                <FontAwesomeIcon icon={faCode} className="mx-2" />
                <h3>Código Limpo e Eficiente</h3>
                <span>
                  Desenvolvo com foco em performance, resultando em sites
                  rápidos e otimizados.
                </span>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="box-solucoes">
                <FontAwesomeIcon icon={faRecordVinyl} className="mx-2" />
                <h3>Criatividade Livre</h3>
                <span>
                  Sem limitações, cada projeto recebe o tratamento especial que
                  merece para se destacar.
                </span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="box-preco">
                <h4>Pelo investimento de apenas:</h4>
                <h3>
                  <s>R$ 1.500,00</s>
                </h3>
                <h2>R$ 1.200,00</h2>
                <span>Com parcelamento facilitado</span>
              </div>
            </div>
          </div>
        </div>
        <img
          src={gradient}
          className="gradient-solucoes img-fluid"
          alt=""
          srcSet=""
        />
      </section>
    </div>
  );
};

export default Solucoes_Proposta;
