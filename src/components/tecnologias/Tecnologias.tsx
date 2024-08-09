import tecimg from "../../assets/img/tecnologias/Img.svg";
import gradientshort from "../../assets/img/elementos/GradientShort.svg";
import selo from "../../assets/img/elementos/selo.svg";
import useSVGInject from "../../hooks/useSVGInject";

const Tecnologias = () => {
  useSVGInject();
  return (
    <section id="tecnologias">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h3>
              Trabalho com as melhores tecnologias do mercado.
              <strong>
                From next-gen startups to established enterprises.
              </strong>
            </h3>
            <span>
              Lorem ipsum dolor sit amet consectetur. Morbi viverra donec dictum
              tristique dignissim egestas magna tortor diam. Pellentesque libero
              faucibus lectus pellentesque porta commodo.
            </span>
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

export default Tecnologias;
