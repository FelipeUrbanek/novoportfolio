import { useEffect, useState, useCallback, useMemo } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const Cta: React.FC = () => {
  const [ctaText, setCtaText] = useState<string>(
    "Seu site, sua identidade. Vamos criar algo exclusivo e memorável para destacar sua marca online."
  );

  const genAI = useMemo(() => {
    return new GoogleGenerativeAI("AIzaSyCN3ardnoRHO2AfIl0qxXzfvte2Bg_nLwA"); // Substitua pela sua chave API
  }, []);

  // Função para gerar o CTA com base no prompt fornecido
  const generateCTA = useCallback(async () => {
    const prompt =
      "gere um cta para website apenas uma frase unica, lembre que estamos implementando em um website so quero uma frase, não adicione [] ou perguntas tudo que tiver que escrever faça baseado no nicho de desenvolvimento de website"; // Escreva seu prompt aqui // Escreva seu prompt aqui
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
          setCtaText(text.trim());
        } else {
          setCtaText("Erro ao gerar CTA.");
        }
      } else {
        setCtaText("Erro ao gerar CTA.");
      }
    } catch (error) {
      console.error("Erro ao gerar CTA:", error);
      setCtaText("Erro ao gerar CTA.");
    }
  }, [genAI]);

  useEffect(() => {
    generateCTA(); // Chame a função apenas uma vez quando o componente é montado
  }, [generateCTA]); // Dependência vazia para garantir que execute apenas uma vez

  return (
    <section id="cta">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-10">
            <h3>Entre em contato!</h3>
            <span>{ctaText}</span>
          </div>
          <div className="col-lg-2">
            <a href="#" className="btn-white">
              Contato
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
