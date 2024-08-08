import { useEffect } from "react";
import SVGInject from "@iconfu/svg-inject";

const useSVGInject = () => {
  useEffect(() => {
    const svgElements = document.querySelectorAll("img.svg-inject");
    SVGInject(svgElements);
  }, []);
};

export default useSVGInject;
