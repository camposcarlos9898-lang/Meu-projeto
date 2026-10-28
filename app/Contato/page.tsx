import Contato from "../componentes/Contato";

export const metadata = {
    title: "Contato",
    description: "Entre em contato comigo."
};

export default function PaginaContato()
{
    return (
        <main>
            <h1>Entre em contato</h1>
            <Contato />
        </main>
    );
}