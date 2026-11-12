"use client";

import { useState } from "react";
import { buscaCep } from "../../services/cep";

export default function BuscaCep() {
    const [cep, setCep] = useState("");
    const [endereco, setEndereco] = useState("");
    const [erro, setErro] = useState("");

    async function buscar(e) {
        e.preventDefault();
        setErro("");
        setEndereco(null);

        if (cep.length !== 8) {
            setErro("Digite um CEP com 8 números.");
            return;
        }

        try {
            const dados = await buscaCep(cep);
            setEndereco(dados);

        } catch (erro) {
            setErro(erro.message);
        }
    }

    return (
        <div>
            <h2>Consulte seu CEP</h2>
            <p>Digite seu CEP para encontrar seu endereço</p>

            <form onSubmit={buscar}>
                <input
                  value={cep}
                  onChange={(e) => setCep(e.target.value)}
                  placeholder="Digite seu CEP"
                  maxLength={8}
                />

                <button type="submit">Buscar</button>
            </form>

            {erro && <p>{erro}</p>}

            {endereco && (
                <div>
                    <p>Rua: {endereco.logradouro}</p>

                    <p>Bairro: {endereco.bairro}</p>

                    <p>Cidade: {endereco.localidade}</p>

                    <p>Estado: {endereco.uf}</p>

                </div>
            )}
        </div>
    );
}