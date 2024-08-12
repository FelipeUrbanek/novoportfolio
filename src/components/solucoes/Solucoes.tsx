import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenNib } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faRecordVinyl } from "@fortawesome/free-solid-svg-icons";
import useSVGInject from "../../hooks/useSVGInject";
import gradient from "../../assets/img/elementos/gradientsolucoes.svg";

const Solucoes = () => {
  useSVGInject();
  return (
    <div>
      <section id="solucoes">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 container-solucoes-01">
              <h6>Minhas Skills</h6>
              <h2>Eu posso ajudar você com...</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="box-solucoes">
                <FontAwesomeIcon icon={faPenNib} className="mx-2" />
                <h3>Design</h3>
                <span>
                  Lorem ipsum dolor sit amet consectetur. Sit nec quam id
                  quisque feugiat faucibus penatibus. Dolor aliquet fringilla
                  non duis pulvinar nec maecenas. Velit iaculis ornare
                  suspendisse.
                </span>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="box-solucoes">
                <FontAwesomeIcon icon={faCode} className="mx-2" />
                <h3>Codigo</h3>
                <span>
                  Lorem ipsum dolor sit amet consectetur. Sit nec quam id
                  quisque feugiat faucibus penatibus. Dolor aliquet fringilla
                  non duis pulvinar nec maecenas. Velit iaculis ornare
                  suspendisse.
                </span>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="box-solucoes">
                <FontAwesomeIcon icon={faRecordVinyl} className="mx-2" />
                <h3>Experiencia</h3>
                <span>
                  Lorem ipsum dolor sit amet consectetur. Sit nec quam id
                  quisque feugiat faucibus penatibus. Dolor aliquet fringilla
                  non duis pulvinar nec maecenas. Velit iaculis ornare
                  suspendisse.
                </span>
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

export default Solucoes;
