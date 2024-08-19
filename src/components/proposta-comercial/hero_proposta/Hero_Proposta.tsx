// src/components/proposta-comercial/hero_proposta/Hero_Proposta.tsx
import React from "react";
import useSVGInject from "../../../hooks/useSVGInject";
import background from "../../../assets/img/hero/background-hero2.svg";
import gradient from "../../../assets/img/elementos/gradient.svg";
import { Link } from "react-router-dom";

interface HeroPropostaProps {
  nome_cliente: string;
  descricao: string;
}

const Hero_Proposta: React.FC<HeroPropostaProps> = ({
  nome_cliente,
  descricao,
}) => {
  useSVGInject();

  return (
    <section id="hero-proposta">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 container-proposta">
            <h6>Olá</h6>
            <h1>{nome_cliente}</h1>
            <span>{descricao}</span>
            <Link to="" className="btn-white">
              Contate-me
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
