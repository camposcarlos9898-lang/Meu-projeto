"use client";

import {useState} from "react";

export default function Tarefas() {
    const [tarefas, setTarefas] = useState([
        { id: 1, nome: "Estudar JavaScript", feita: false },
        { id: 2, nome: "Criar meu site", feita: false},
        { id: 3, nome: "Finalizar portfólio", feita: false}
    ]);

    function concluir(id) {
        setTarefas(
            tarefas.map((t) =>
                t.id === id ? { ...t, feita: ! t.feita } : t
        )
    );
}

const faltam = tarefas.filter((t) => !t.feita).length;

return (
    <section>
        <h2>Minhas tarefas</h2>
        <p>Faltam {tarefas.filter((t) => !t.feita).length} tarefas</p>

        {tarefas.map((t) => (
            <p key={t.id}>
                <input
                  type="checkbox"
                  checked={t.feita}
                  onChange={() => concluir(t.id)}
                />
                {t.nome}
            </p>
        ))}
    </section>
  );
}