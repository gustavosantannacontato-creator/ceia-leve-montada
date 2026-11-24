import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-6 text-center">
      <h1 className="text-4xl font-semibold text-pine">Página não encontrada</h1>
      <Link to="/" className="font-bold text-berry underline">Voltar para o início</Link>
    </main>
  );
}
