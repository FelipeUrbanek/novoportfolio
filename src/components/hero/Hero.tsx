import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import useSVGInject from "../../hooks/useSVGInject";
import background from "../../assets/img/hero/background-hero2.svg";

import gradient from "../../assets/img/elementos/gradient.svg";
const Hero = () => {
  useSVGInject();
  /* Retorno da função */

  return (
    <section id="hero">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h6>Olá, meu nome é </h6>
            <h1>Felipe Urbanek</h1>
            <div className="v-mobile">
              <h3>Desenvolvedor Front-end</h3>
              <h4>
                São José dos Pinhais - PR / Curitiba - PR{" "}
                <FontAwesomeIcon icon={faLocationDot} className="mx-2" />
              </h4>
            </div>
            <span>
              Dedicado a criar websites únicos e personalizados. Acredito que
              cada projeto é especial e merece um design que reflete a
              verdadeira essência da sua marca. Meu trabalho é desenvolver
              soluções que sejam não apenas bonitas, mas também funcionais e
              autênticas.
            </span>
            <a href="" className="btn-white">
              Contate-me
            </a>
          </div>
          <div className="offset-lg-1 col-lg-5 v-desktop">
            <h6>Eu sou</h6>
            <h3>Desenvolvedor Front-end</h3>
            <h4>
              São José dos Pinhais - PR / Curitiba - PR{" "}
              <FontAwesomeIcon icon={faLocationDot} className="mx-2" />
            </h4>
          </div>
        </div>
      </div>

      <img
        src={background}
        className="svg-inject"
        id="background-hero"
        alt=""
      />

      <img src={gradient} className="svg-inject" id="gradient-hero" alt="" />
    </section>
  );
};

export default Hero;
