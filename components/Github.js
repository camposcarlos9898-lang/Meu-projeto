"use client";

import { useEffect, useState } from "react";

import { listarRepositorios } from "../services/github";

export default function Github() {
    const [repositorios, setRepositorios] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState("");

    useEffect(() => {
        async function carregarRepositorios() {
            try {
                const dados = await listarRepositorios();
                setRepositorios(dados);
            } catch (erro) {
                setErro(erro.message);
            } finally {
                setCarregando(false);
            }
        }

        carregarRepositorios();
    }, []);

    if (carregando) {
        return <p>Carregando repositórios...</p>;
    }

    if (erro) {
        return <p>{erro}</p>;
    }

    return (
        <section className="github-container">
            <div className="github-cabecalho">

                                 <h1>Meus projetos</h1>
                                 <p>Conheça meus projetos e acompanhe minha evolução na programação.</p>

            </div>

            {carregando && <p>Carregando projetos...</p>}
            {erro && <p>{erro}</p>}

            <div className="github-grid">{repositorios.map((repo) => (
                <article className="github-card" key={repo.id}>
                <h2>{repo.nome}</h2>

                <p className="github-descricao">
                    {repo.descricao || "Sem descrição disponível."}
                </p>

                <div className="github-info">
                    <span>{repo.linguagem || "Não informada"}</span>
                </div>

                <a href={repo.link}
                target="_blank"
                rel="noopener noreferrer"
                >
                    Ver repositório
                </a>
                </article>
            ))}
            </div>
        </section>
    );
}
                

          