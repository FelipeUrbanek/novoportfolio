import useSVGInject from "../../../hooks/useSVGInject";
import background from "../../../assets/img/hero/background-hero2.svg";
import gradient from "../../../assets/img/elementos/gradient.svg";
import { Link } from "react-router-dom";

const Hero_Proposta = () => {
  useSVGInject();
  return (
    <section id="hero-proposta">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 container-proposta">
            <h6>Olá</h6>
            <h1>Bruna Maia</h1>
            <span>
              Lorem ipsum dolor sit amet consectetur. Faucibus imperdiet
              habitant morbi malesuada convallis gravida amet. Tincidunt
              praesent elit amet etiam elementum nulla vulputate faucibus donec.
              Accumsan tristique tellus posuere justo tristique ac. Vehicula
              elementum non urna gravida malesuada quam accumsan malesuada.
              Nulla ut risus netus lobortis.
            </span>
            <Link to="" className="btn-white">
              Contate -me
            </Link>
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

export default Hero_Proposta;
