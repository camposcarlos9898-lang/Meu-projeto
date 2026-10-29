import { projetos } from "../../dados";

export default async function PaginaProjeto (params) {
    const { id } = await params;
    const projeto = projetos.find((p) => String(p.id) === id);

    if (!projeto) {
        return <p>Projeto não encontrado.</p>;
    }

    return (
        <section>
            <h1>{projeto.titulo}</h1>

            <p>{projeto.descricao}</p>

            <h2>Tecnologias utilizadas</h2>

            <ul>
                {projeto.tecnologias.map((t) =>
                (
                    <li key={t}>{t}</li>
                ))}
            </ul>

            <a hef="/projetos">Voltar aos projetos</a>
        </section>
    );
}