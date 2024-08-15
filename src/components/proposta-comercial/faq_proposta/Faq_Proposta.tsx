import backgroundimagem from "../../../assets/img/informativo/background.png";

const Faq_Proposta = () => {
  return (
    <section
      id="faq"
      style={{
        backgroundImage: `url(${backgroundimagem})`,
        backgroundSize: "cover", // Ajusta o tamanho da imagem para cobrir toda a seção
        backgroundPosition: "center", // Centraliza a imagem
        backgroundRepeat: "no-repeat", // Impede a repetição da imagem
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h6>Duvidas</h6>
            <h2>Tudo que precisa saber!</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="box-faq">
              <h3>Como funciona o pagamento?</h3>
              <span>
                Lorem ipsum dolor sit amet consectetur. Ultrices scelerisque
                enim viverra sem feugiat adipiscing. Cras augue libero diam
                rutrum vel
              </span>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="box-faq">
              <h3>Posso parcelar?</h3>
              <span>
                Lorem ipsum dolor sit amet consectetur. Ultrices scelerisque
                enim viverra sem feugiat adipiscing. Cras augue libero diam
                rutrum vel
              </span>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="box-faq">
              <h3>Como ficou a manutenção?</h3>
              <span>
                Lorem ipsum dolor sit amet consectetur. Ultrices scelerisque
                enim viverra sem feugiat adipiscing. Cras augue libero diam
                rutrum vel
              </span>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="box-faq">
              <h3>Qual o prazo?</h3>
              <span>
                Lorem ipsum dolor sit amet consectetur. Ultrices scelerisque
                enim viverra sem feugiat adipiscing. Cras augue libero diam
                rutrum vel
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq_Proposta;
