"use client";

import {useState} from "react"
import { salvarMensagem } from "../../lib/mensagens";

export default function Contato() {
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [mensagem, setMensagem] = useState("")
    const [enviado, setEnviado] = useState(false)

    async function enviar(e) {
        e.preventDefault();
        console.log("CLIQUEI EM ENVIAR");

        if (nome && email.includes("@") && mensagem.trim()) {
          try {
            await salvarMensagem(nome, email, mensagem);
            console.log("Mensagem enviada ao Firebase!");

            setEnviado(true);
            setNome("");
            setEmail("");
            setMensagem("");
          } catch (erro) {
            console.error("Erro ao salvar:",erro);
            alert("Não foi possível enviar a mensagem.");
          }
        }
      }

          

    return (
        <section>
          <h2>Contato</h2>

          <form onSubmit={enviar}>
            <input
              type="text"
              placeholder="Seu nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />

            <br></br><br></br>

            <input
              type="email"
              placeholder="Seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <br></br><br></br>

            <textarea
              placeholder="Digite sua mensagem"
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              required
            />

            <br></br><br></br>

            <button type="submit">
              Enviar mensagem
            </button>
          </form>

          {enviado && <p>Obrigado pelo contato.</p>}
        </section>
    );
}
            