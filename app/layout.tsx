import "./globals.css";
import Menu from "./componentes/Menu";
import Rodape from "./componentes/Rodape";

export const metadata = {
  title: "Meu portfólio",
  description: "Portfólio de Carlos Campos",
};

export default function RootLayout({ children,

}:{
  children: React.ReactNode;
}){
  return (
    <html lang="pt-BR">
      
      <body>
        <Menu />
        {children}
        <Rodape />
      </body>
    </html>
  );
}
