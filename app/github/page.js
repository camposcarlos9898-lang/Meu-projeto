import Image from "next/image";

export default function Github() {
    return (
        <section>
            <h1>Meu GitHub</h1>

            <image
              src="/foto.jpg"
              alt="Minha foto"
              width={200}
              height={200}
            />

            <h2>Meus repositórios</h2>

            <ul>
                <li>
                    <a href="https://github.com/camposcarlos9898-lang!"target="_blank">
                       Meu primeiro projeto
                    </a>
                </li>
                
                <li>
                    <a href="https://github.com/camposcarlos9898-lang!"target="_blank">
                       Meu portfólio                    
                    </a>
                </li>
                
            </ul>  
        </section>
    )
}