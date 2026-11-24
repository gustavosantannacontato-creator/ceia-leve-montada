import { Check, AlertTriangle, ShieldCheck } from "lucide-react";
import { config } from "@/config";
import { CTA, Footer } from "@/components/ui";

const itens = [
  ["3 cardápios semanais prontos", "Café, almoço, lanche e jantar de cada dia."],
  ["O Domingo de Preparo", "Em cerca de 2 horas no domingo, a semana inteira fica pronta."],
  ["19 receitas do dia a dia", "Muffins de ovo, strogonoff leve, escondidinho de mandioquinha, sopa de abóbora e mais."],
  ["O prato montado", "Como comer bem em casa, no restaurante ou na marmita, sem contar calorias."],
  ["Listas para imprimir", "Despensa do mês (uma vez) e feira da semana (toda semana)."],
  ["Acompanhamento de 21 dias", "Para marcar os hábitos e ver a semana melhorar."],
];

export default function Upsell() {
  return (
    <>
      <div className="bg-gold-light px-4 py-3 text-center text-sm font-bold text-[#7A5410]">
        <AlertTriangle className="mr-1 inline h-4 w-4 align-[-2px]" aria-hidden /> Seu pedido foi aprovado. Não feche esta página: tem uma oferta que só aparece agora.
      </div>
      <main className="py-12 md:py-20">
        <div className="container-x grid max-w-5xl items-center gap-10 md:grid-cols-[.8fr_1.2fr]">
          <img src={`${import.meta.env.BASE_URL}capas/4-Upsell-Janeiro-Leve.png`} alt="Capa do guia Janeiro Leve" className="mx-auto w-60 rounded-lg shadow-book sm:w-72" />
          <div>
            <p className="eyebrow">Oferta única</p>
            <h1 className="mt-2 text-4xl font-semibold leading-tight text-pine sm:text-5xl">Dezembro está resolvido. E janeiro?</h1>
            <p className="mt-4 text-lg text-muted">
              Leve o <b className="text-ink">Janeiro Leve</b>: 21 dias de comida de verdade depois das festas, sem açúcar e sem glúten, com o cardápio já pensado. É só seguir.
            </p>
          </div>
        </div>

        <div className="container-x mt-12 max-w-3xl space-y-4 text-lg">
          <p>Todo ano é igual: as festas acabam e vem a vontade de "compensar" com dieta radical, jejum e sopa de repolho. Dura uma semana e termina em pizza.</p>
          <p>O Janeiro Leve faz o contrário. São 21 dias de comida gostosa e possível, com o mesmo jeito organizado do guia que você acabou de comprar.</p>
        </div>

        <div className="container-x mt-10 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {itens.map(([t, d]) => (
            <div key={t} className="card flex gap-3">
              <Check className="mt-1 h-6 w-6 flex-none rounded-full bg-pine p-1 text-white" aria-hidden />
              <div><h2 className="font-sans text-base font-extrabold">{t}</h2><p className="mt-1 text-sm text-muted">{d}</p></div>
            </div>
          ))}
        </div>

        <div className="container-x mt-10 max-w-3xl">
          <p className="rounded-2xl border border-line bg-white p-5 text-sm text-muted">
            <b className="text-ink">Aviso honesto:</b> não é dieta e não promete perda de peso. É organização e comida de verdade. Se você tem alguma condição de saúde, mostre o plano ao seu médico ou nutricionista.
          </p>
        </div>

        <div className="container-x mt-10 max-w-xl text-center">
          <p className="text-muted">Só nesta página, sem precisar digitar o cartão de novo</p>
          <p className="mt-1 font-serif text-6xl font-semibold text-berry">R$ {config.upsell.preco}</p>
          <div className="mt-6"><CTA href={config.upsell.aceitar} className="sm:w-full">Sim, quero começar Janeiro Leve</CTA></div>
          <p className="mt-4 flex items-center justify-center gap-2 text-sm text-muted"><ShieldCheck className="h-4 w-4" aria-hidden /> {config.garantia} dias de garantia: se não gostar, devolvemos 100% do valor.</p>
          <a href={config.upsell.recusar} className="mt-6 inline-block text-sm text-muted underline">Não, obrigado. Prefiro descobrir por conta própria o que comer em janeiro.</a>
        </div>
      </main>
      <Footer />
    </>
  );
}
