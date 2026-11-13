import { buscarRepositorios } from "../lib/github";

export async function 
listarRepositorios() {
    const repositorios = await buscarRepositorios();

    return repositorios.map((repo) =>
({
        id: repo.id,
        nome: repo.name,
        descricao: repo.description,
        link: repo.html_url,
        linguagem: repo.language,
        estrelas: repo.stargazers_count,
        atualizado: repo.update_at 
    }));
}