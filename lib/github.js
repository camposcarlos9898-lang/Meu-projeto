export async function
buscarRepositorios() {
    const resposta = await fetch(
        "https://api.github.com/users/camposcarlos9898-lang/repos?sort=update&per_page=100"
    );

    if (!resposta.ok) {
        throw new Error('GitHub respondeu com erro ${reposta.status}.');
    }

    return await resposta.json();
}
    
