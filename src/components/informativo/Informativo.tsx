import { useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Informativo = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Target all paragraphs within the section
    const paragraphs = document.querySelectorAll("#informativo p");

    paragraphs.forEach((paragraph) => {
      gsap.fromTo(
        paragraph,
        {
          opacity: 0,
          y: 50, // Start with a slight downward offset
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power1.out",
          scrollTrigger: {
            trigger: paragraph,
            start: "top 80%", // Start animation when paragraph is 80% from the top of the viewport
            end: "bottom 20%", // End animation when paragraph is 20% from the top of the viewport
            toggleActions: "play none none reverse", // Play on enter, reverse on leave
          },
        }
      );
    });
  }, []);

  return (
    <section id="informativo">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <p>Olá!</p>
            <p>Deixe-me apresentar seu próximo desenvolvedor</p>
            <p>Sou meticuloso com cada pixel</p>
            <p>Transformo designs em projetos impressionantes</p>
            <p>Em 2D e em 3D</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Informativo;
