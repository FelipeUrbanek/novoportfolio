import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";
import plusimbol from "../../assets/img/elementos/plusimbol.svg";
import imgplace from "../../assets/img/projetos/imgplace.png";
import useSVGInject from "../../hooks/useSVGInject";

const Projetos = () => {
  useSVGInject();

  const options = {
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 8000,
    pauseOnHover: true,
    pauseOnFocus: true,
    pauseOnDrag: true,
    responsive: {
      0: {
        items: 2,
        pauseOnHover: true,
      },
      600: {
        items: 4,
      },
      1000: {
        items: 7,
      },
    },
  };

  return (
    <section id="projetos">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h3>Confira alguns dos meus projetos recentes:</h3>
          </div>
          <div className="col-lg-6">
            <span>
              Cada um destes projetos foi desenvolvido com foco na excelência e
              em atender às necessidades específicas dos meus clientes.
            </span>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <OwlCarousel className="owl-theme coluna-projetos" {...options}>
              <div className="item">
                <div className="box-projetos">
                  <img src={imgplace} alt="" />
                  <div className="textosprojetos">
                    <h4>Site 01</h4>
                    <img src={plusimbol} alt="" className="svg-inject" />
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="box-projetos">
                  <img src={imgplace} alt="" />
                  <div className="textosprojetos">
                    <h4>Site 02</h4>
                    <img src={plusimbol} alt="" className="svg-inject" />
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="box-projetos">
                  <img src={imgplace} alt="" />
                  <div className="textosprojetos">
                    <h4>Site 03</h4>
                    <img src={plusimbol} alt="" className="svg-inject" />
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="box-projetos">
                  <img src={imgplace} alt="" />
                  <div className="textosprojetos">
                    <h4>Site 04</h4>
                    <img src={plusimbol} alt="" className="svg-inject" />
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="box-projetos">
                  <img src={imgplace} alt="" />
                  <div className="textosprojetos">
                    <h4>Site 05</h4>
                    <img src={plusimbol} alt="" className="svg-inject" />
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projetos;
