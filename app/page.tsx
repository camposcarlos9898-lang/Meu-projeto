import Cartao from "./componentes/Cartao";
import Secao from "./componentes/Secao";
import Contato from "./componentes/Contato";
import Hobbies from "./componentes/Hobbies";
import { projetos } from "./dados";
import Link from "next/link";
import BuscaCep from "./componentes/BuscaCep";

export default function home() {
  const nome = "Carlos Campos";

  return (
    <div>
      <img
        src="/foto2.jpg"
        alt="Minha foto"
        className="foto-perfil"
      />
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
       <Secao titulo="">
        <BuscaCep />
      </Secao> 
      <br></br>
      <Secao titulo="Hobbies">
        <Hobbies /> 
      </Secao>
      <br></br>
      <Contato />
      <br></br>
         
    </div>
  );  
}