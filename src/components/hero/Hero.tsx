import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import useSVGInject from "../../hooks/useSVGInject";

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
              Lorem ipsum dolor sit amet consectetur. Morbi viverra donec dictum
              tristique dignissim egestas magna tortor diam. Pellentesque libero
              faucibus lectus pellentesque porta commodo.
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
        src="/src/assets/img/hero/background-hero.svg"
        className="svg-inject"
        id="background-hero"
        alt=""
      />
    </section>
  );
};

export default Hero;
