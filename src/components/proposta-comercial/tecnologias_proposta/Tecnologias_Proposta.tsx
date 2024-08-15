import tecimg from "../../../assets/img/tecnologias/Img.svg";
import gradientshort from "../../../assets/img/elementos/GradientShort.svg";
import selo from "../../../assets/img/elementos/selo.svg";
import useSVGInject from "../../../hooks/useSVGInject";

const Tecnologias_Proposta = () => {
  useSVGInject();
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
              <div className="col-lg-4 col-6">
                <img src={tecimg} alt="" />
              </div>
              <div className="col-lg-4 col-6">
                <img src={tecimg} alt="" />
              </div>
              <div className="col-lg-4 col-6">
                <img src={tecimg} alt="" />
              </div>
              <div className="col-lg-4 col-6">
                <img src={tecimg} alt="" />
              </div>
              <div className="col-lg-4 col-6">
                <img src={tecimg} alt="" />
              </div>
              <div className="col-lg-4 col-6">
                <img src={tecimg} alt="" />
              </div>
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
