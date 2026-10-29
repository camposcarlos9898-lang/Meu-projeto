"use client";

import {useState} from "react"

export default function Contato() {
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [enviado, setEnviado] = useState(false)

    function enviar(e) {
        e.preventDefault();

        if (nome && email.includes("@")) {setEnviado(true);}
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

            <button type="submit">Enviar</button>
          </form>

          {enviado && <p>Obrigado pelo contato.</p>}
        </section>
    );
}
            