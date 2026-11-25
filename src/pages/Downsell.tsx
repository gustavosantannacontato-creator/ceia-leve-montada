import { config } from "@/config";
import { Footer } from "@/components/ui";
import { KiwifyUpsell } from "@/components/KiwifyUpsell";

export default function Downsell() {
  return (
    <>
      <main className="py-12 md:py-20">
        <div className="container-x grid max-w-4xl items-center gap-10 md:grid-cols-[.8fr_1.2fr]">
          <img src={`${import.meta.env.BASE_URL}capas/4-Upsell-Janeiro-Leve.png`} alt="Capa do guia Janeiro Leve" className="mx-auto w-56 rounded-lg shadow-book" />
          <div>
            <p className="eyebrow">Última chance</p>
            <h1 className="mt-2 text-4xl font-semibold leading-tight text-pine">Espera: e se ficar mais leve para o seu bolso?</h1>
            <p className="mt-4 text-lg text-muted">
              Dezembro pesa no orçamento, a gente sabe. Por isso, só agora, o Janeiro Leve completo sai por <b className="text-ink">R$ {config.downsell.preco}</b>. São os mesmos 21 dias, as mesmas 19 receitas e o mesmo Domingo de Preparo.
            </p>
            <div className="mt-8">
              <KiwifyUpsell id={config.downsell.kiwifyId} aceitar={config.downsell.textoAceitar} recusar={config.downsell.textoRecusar} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
