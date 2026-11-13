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
                                 <p>Conheça meus projetos e acompanhe minha evolução na programção.</p>

            </div>

            {carregando && <p>Carregando projetos...</p>}
            {erro && <p>{erro}</p>}

            <div className="github-grid">{repositorios.map((repo) => (
                <article classNAme="github-card" key={repo.id}>
                <h2>{repo.nome}</h2>

                <p className="</p>
                

            {repositorios.map((repo) =>
(
                <article key={repo.id}>
                    <h3>{repo.nome}</h3>

                    <p>
                        {repo.descricao || "Sem descrição disponível"}
                    </p>

                    <p>Linguagem:{repo.linguagem || "Não informada"}</p>

                    <p>{repo.estrelas}</p>

                    <a href={repo.link}
                       terget="_blank"
                       rel="noopenernoreferrer"
                    >
                        Ver repositório
                    </a>

                </article>
          ))}
        </section>
    );
}