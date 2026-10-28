export default function Secao({ titulo, children }) {
    return (
        <section>
          <h2>{titulo}</h2>
          {children}
        </section>
    );
}