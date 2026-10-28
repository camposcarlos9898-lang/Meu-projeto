import Link from "next/link";

export default function Menu() {
    return (
        <header>
           <nav>

               <Link href="/">Meu portfólio</Link>

                <Link href="/">Início</Link>

                <Link href="/projetos">Projetos</Link>

                <Link href="/contato">Contato</Link>

                <Link href="/github">GitHub</Link>

           </nav>
        </header>
    );
}