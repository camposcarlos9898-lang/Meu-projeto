import Cartao from "./componentes/Cartao";
import Secao from "./componentes/Secao";
import Contato from "./componentes/Contato";
import Tarefas from "./componentes/Tarefas";
import { projetos } from "./dados";
import Link from "next/link";

export default function home() {
  const nome = "Carlos Campos";

  return (
    <div>
      
      <h1><em><strong>Olá, sou {nome} !</strong></em></h1>

      <Secao titulo="Bem-vindo ao meu portfólio !">
        <p><strong>Aqui te mostro um pouco sobre mim.</strong></p>
      </Secao>

      <Secao titulo="Meus projetos">
              {projetos.map((p) => (
                <Cartao
                  id={p.id}
                  key={p.id}
                  titulo={p.titulo}
                  descricao={p.descricao}
                  tecnologias={p.tecnologias}
                />
              ))}
      </Secao>
      <br></br>
      <Contato />
      <br></br>
      <Tarefas />     
    </div>
  );  
}