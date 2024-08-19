import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import useSVGInject from "../../hooks/useSVGInject";
import background from "../../assets/img/hero/background-hero2.svg";
import gradient from "../../assets/img/elementos/gradient.svg";
import { useEffect, useState, useCallback, useMemo } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const Hero = () => {
  useSVGInject();

  const [additionalText, setAdditionalText] = useState<string>(
    "Dedicado a criar websites únicos e personalizados."
  );

  const genAI = useMemo(() => {
    return new GoogleGenerativeAI("AIzaSyCN3ardnoRHO2AfIl0qxXzfvte2Bg_nLwA"); // Substitua pela sua chave API
  }, []);

  // Função para gerar um texto adicional
  const generateAdditionalText = useCallback(async () => {
    const cachedText = localStorage.getItem("additionalText");
    const cachedTimestamp = localStorage.getItem("additionalTextTimestamp");

    // Verifica se há um texto adicional no cache e se não expirou
    if (
      cachedText &&
      cachedTimestamp &&
      Date.now() - parseInt(cachedTimestamp) < 24 * 60 * 60 * 1000 // 1 dia em milissegundos
    ) {
      setAdditionalText(cachedText);
      return;
    }

    const prompt = `Gere uma frase única e atraente em primeira pessoa que destaque os serviços de desenvolvimento front-end de Felipe Urbanek. A frase deve enfatizar a criação de websites personalizados que capturam a essência da marca do cliente. Garanta que a frase seja cativante e direta, com foco na venda dos serviços. Somente uma frase, sem caracteres especiais. ela precisa ter pelo menos 200 caracteres`;

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const response = await model.generateContent(prompt);

      // Log da resposta completa para verificar a estrutura
      console.log("Resposta da API:", response);

      // Acesse a resposta de acordo com a estrutura correta
      if (
        response &&
        response.response &&
        response.response.candidates &&
        response.response.candidates.length > 0
      ) {
        const text = response.response.candidates[0].content.parts[0].text; // Acesse o texto gerado

        // Verifique se o texto está definido antes de usá-lo
        if (text) {
          setAdditionalText(text.trim());
          localStorage.setItem("additionalText", text.trim());
          localStorage.setItem(
            "additionalTextTimestamp",
            Date.now().toString()
          );
        } else {
          setAdditionalText("Erro ao gerar descrição.");
        }
      } else {
        setAdditionalText("Erro ao gerar descrição.");
      }
    } catch (error) {
      console.error("Erro ao gerar descrição:", error);
      setAdditionalText("Erro ao gerar descrição.");
    }
  }, [genAI]);

  useEffect(() => {
    generateAdditionalText(); // Gera o texto adicional quando o componente é montado
  }, [generateAdditionalText]);

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
              {additionalText} {/* Exibe o texto gerado */}
            </span>
            <a href="#" className="btn-white">
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
