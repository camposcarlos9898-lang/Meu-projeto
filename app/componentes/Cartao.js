"use client";
import { useState } from "react";
import Link from "next/link";

export default function Cartao({ 
    id,
    titulo, 
    descricao, 
    tecnologias
})  {
    const [curtidas, setCurtidas] = useState(0);
    const [mostrar, setMostrar] = useState(false);

    return (
        <section>
            <h2>{titulo}</h2>
            
            <button onClick={() => setMostrar(!mostrar)}> 
                {mostrar ? "Ver detalhes" : "Ocultar detalhes"}               
            </button>

            <button onClick={() => setCurtidas(curtidas + 1)}>
                Curtir {curtidas}
            </button>

            {mostrar && (
                <div>
                    <p>{descricao}</p>

                    <h3>Tecnologias utilizadas</h3>

                    <ul>
                
                       {tecnologias.map((t) => (
                         <li key={t}>{t}</li>
                      ))}
                    </ul>
                </div>
        )}
        </section>
    );
}
