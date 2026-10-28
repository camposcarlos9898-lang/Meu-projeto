import "./globals.css";
import Menu from "../dados";
import Rodape from "./componentes/Cartao";

export const metadata = {
  title: "Meus projetos",
  description: "Conheça meus projetos",
};

export default function Projetos () {
    return(
      
      {projetos.map((p) => (
        <Cartao
          id={p.id}
          key={p.id}
          titulo={p.titulo}
          descricao={p.descricao}
          tecnologias={p.tecnologias}
        />