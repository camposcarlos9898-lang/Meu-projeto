"use client";

import { useState, useEffect } from "react";

import {
  criarHobby,
  ouvirHobbies,
  alternarHobby,
  removerHobby
} from "../services/hobbies";

export default function Hobbies() {
    const [hobbies, setHobbies] =
useState([]);
    const [nome, setNome] = useState("");

    useEffect(() => {
      return ouvirHobbies(setHobbies);
    }, []);

    async function adicionar(e) {
      e.preventDefault();

      if (!nome.trim()) return;

      await criarHobby(nome);
      setNome("");      
    }
        
    

return (
    <section className="hobbies">
      <h1>Meus hobbies</h1>

      <form onSubmit={adicionar}>
        <input
          type="text"
          placeholder="Digite um hobby"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        
        <button type="submit">
           Adicionar  
        </button>
      </form> 

      <div className="lista-hobbies">

        {hobbies.map((hobby) => (
            <div key={hobby.id} className="hobby">

              <span className="nome-hobby">
                {hobby.nome}
              </span>

              <button
                onClick={() =>
                  alternarHobby(hobby.id,hobby.praticado)
                }
              >
                {hobby.praticado ? "Desmarcar" : "Praticado"}
              </button>

              <button
                onClick={() => removerHobby(hobby.id)}
              >
                Excluir
              </button>
                
            </div>
        ))}
      </div>
    </section>
  );
}