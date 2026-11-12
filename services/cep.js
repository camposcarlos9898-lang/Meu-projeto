 import { salvarCep } from "../lib/ceps"
 
 export async function buscaCep(cep) {
    const numero = cep.replace(/\D/g,"");
 
    if (numero.length !== 8) {
            throw new Error("Digite um CEP com 8 números.");
    }

    const resposta = await fetch(
           `https://viacep.com.br/ws/${cep}/json/`
    );

    if (!resposta.ok) {
        throw new Error("Erro ao consultar o CEP")
    }

    const dados = await resposta.json();

    if (dados.erro) {
        throw new Error("CEP não encontrado.");
    }

    await salvarCep(dados);

    return dados;

 }