import { useEffect } from "react";
import { MailCheck } from "lucide-react";
import { config } from "@/config";
import { Footer, Wreath } from "@/components/ui";

export default function Obrigado() {
  useEffect(() => {
    // A conversão "Purchase" deve ser enviada pela própria plataforma de checkout
    // (integração com o Pixel/API de Conversões), que sabe o valor real da compra.
  }, []);
  return (
    <>
      <main className="bg-[radial-gradient(120%_90%_at_50%_0%,#2A6E53_0%,#1F5A43_45%,#143D2D_100%)] py-16 text-white md:py-24">
        <div className="container-x max-w-2xl text-center">
          <div className="mx-auto h-40 w-40"><Wreath /></div>
          <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">Pronto! Seus guias já estão no seu e-mail.</h1>
          <p className="mt-4 flex items-center justify-center gap-2 text-white/85"><MailCheck className="h-5 w-5" aria-hidden /> Não chegou? Confira o spam ou a aba Promoções.</p>
        </div>
      </main>
      <section className="py-14">
        <div className="container-x max-w-2xl">
          <h2 className="h-section text-center">Comece por aqui</h2>
          <ol className="mt-8 space-y-4">
            {[
              ["Escolha a sua ceia", "Abra a Ceia Leve Montada e vá à página 4: \"Qual ceia é a sua?\"."],
              ["Imprima a lista de compras", "As listas estão no fim do guia, uma para cada cardápio."],
              ["Marque na agenda: dia 23 é o Tempo 1", "É o dia das sobremesas geladas, das marinadas e das farofas."],
            ].map(([t, d], i) => (
              <li key={t} className="card flex gap-4">
                <span className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-berry font-serif text-xl text-white">{i + 1}</span>
                <div><h3 className="font-sans text-lg font-extrabold">{t}</h3><p className="text-muted">{d}</p></div>
              </li>
            ))}
          </ol>
          <p className="mt-8 text-center text-sm text-muted">Dúvidas? Escreva para <a className="underline" href={`mailto:${config.emailSuporte}`}>{config.emailSuporte}</a>.</p>
        </div>
      </section>
      <Footer />
    </>
  );
}
