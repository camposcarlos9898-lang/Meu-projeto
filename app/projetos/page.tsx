import { projetos } from "../dados";
import Cartao from "../componentes/Cartao";

export const metadata = {
  title: "Meus projetos",
  description: "Conheça meus projetos",
};

export default function Projetos () {
    return (
        <main>
            <h1>Meus projetos</h1>
      
            {projetos.map((p) => (
                <Cartao
                id={p.id}
                key={p.id}
                titulo={p.titulo}
                descricao={p.descricao}
                tecnologias={p.tecnologias}
                />
            ))}
        </main>
    );
}