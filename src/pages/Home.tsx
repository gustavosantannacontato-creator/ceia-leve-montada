import { Check, X, CalendarDays, Clock, ShoppingBasket, ChefHat, ShieldCheck, Sparkles, Utensils } from "lucide-react";
import { config } from "@/config";
import { CTA, SafeNote, Seals, TopBar, Wreath, FAQItem, Footer } from "@/components/ui";

const cardapios = [
  {
    n: 1, nome: "Ceia Tradicional", pessoas: 8, cor: "bg-berry", tom: "bg-berry-light",
    pratos: ["Salpicão de frango com maçã verde", "Lombo assado com laranja e alecrim", "Arroz de festa com castanhas", "Farofa natalina", "Torta gelada de limão", "Ponche leve de frutas"],
    ideal: "quem recebe a família inteira",
  },
  {
    n: 2, nome: "Ceia Econômica", pessoas: 8, cor: "bg-pine", tom: "bg-pine-light",
    pratos: ["Patê de frango com palitos crocantes", "Frango assado com limão e páprica", "Arroz com brócolis e alho dourado", "Salada de batata com maionese caseira", "Farofa de cenoura", "Banana assada com canela", "Chá gelado de hibisco"],
    ideal: "fartura gastando pouco",
  },
  {
    n: 3, nome: "Ceia a Dois (ou a Quatro)", pessoas: 4, cor: "bg-[#9A6B12]", tom: "bg-gold-light",
    pratos: ["Homus com chips de batata-doce", "Tilápia com crosta de castanha", "Purê de mandioquinha", "Salada verde com manga e nozes", "Panna cotta de coco", "Água aromatizada"],
    ideal: "casal ou família pequena",
  },
];

const inclui = [
  ["3 cardápios completos", "Tradicional e Econômica para 8 pessoas, e a Dois para 4. Da entrada à bebida."],
  ["24 receitas, uma por página", "Com rendimento, tempo, nível e selos de sem glúten, sem açúcar e sem lactose."],
  ["Cronograma dos 3 Tempos", "O que fazer no dia 23, na tarde do dia 24 e na hora de servir, com horários."],
  ["3 listas de compras", "Separadas por seção do mercado, prontas para imprimir."],
  ["Guia de trocas e rótulos", "Como substituir açúcar, trigo e leite, e onde o açúcar se esconde no rótulo."],
  ["Calculadora de quantidades", "Quanto comprar por pessoa, para não faltar nem sobrar demais."],
  ["5 clássicos repaginados", "Pão sem glúten, rabanada assada, biscoitinhos de amêndoa, mousse de cacau e maionese caseira."],
  ["Dia 25 e kit sobrevivência", "As sobras viram outros pratos, e respostas prontas para o \"é só um pedacinho\"."],
  ["Etiquetas para imprimir", "Para identificar os pratos na mesa e para os presentes."],
];

const paginas = [
  ["escolha", "Qual ceia é a sua?"],
  ["menu", "Menu de cada cardápio"],
  ["cronograma", "Cronograma dos 3 Tempos"],
  ["receita-lombo", "Receitas passo a passo"],
  ["receita-torta", "Sobremesas sem açúcar"],
  ["lista", "Listas de compras"],
];

export default function Home() {
  return (
    <>
      <TopBar />

      {/* HERO */}
      <header className="relative overflow-hidden bg-[radial-gradient(120%_90%_at_50%_0%,#2A6E53_0%,#1F5A43_45%,#143D2D_100%)] text-white">
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 opacity-20"><Wreath /></div>
        <div className="container-x grid items-center gap-10 py-12 md:grid-cols-[1.15fr_.85fr] md:py-20">
          <div className="text-center md:text-left">
            <p className="text-xs font-extrabold uppercase tracking-[0.3em] text-gold-soft">Guia digital · Natal 2026</p>
            <h1 className="mt-4 text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-[58px]">
              A ceia de Natal <em className="text-[#F2C6CC]">sem açúcar e sem glúten</em> que a família inteira come sem perceber a diferença
            </h1>
            <p className="mt-5 text-lg text-white/85 sm:text-xl">
              3 ceias completas e montadas, com lista de compras e cronograma do dia 24. Você escolhe a sua, compra e segue.
              <b className="text-gold-soft"> Nada de passar a noite comendo só salada.</b>
            </p>
            <div className="mt-6"><Seals /></div>
            <div className="mt-8">
              <CTA href="#oferta">Quero a minha ceia por R$ {config.preco}</CTA>
              <SafeNote dark />
            </div>
          </div>
          <div className="relative mx-auto w-64 sm:w-80 md:w-full md:max-w-sm">
            <img src={`${import.meta.env.BASE_URL}paginas/receita-lombo.png`} alt="Página de receita do guia" className="absolute -right-6 top-10 hidden w-3/4 rotate-6 rounded-lg shadow-book sm:block" loading="lazy" />
            <img src={`${import.meta.env.BASE_URL}capas/0-Ceia-Leve-Montada.png`} alt="Capa do guia Ceia Leve Montada" className="relative w-full -rotate-2 rounded-lg shadow-book" />
          </div>
        </div>
      </header>

      {/* DOR */}
      <section className="py-16 md:py-24">
        <div className="container-x max-w-3xl">
          <p className="eyebrow">Você conhece essa ceia?</p>
          <h2 className="h-section mt-3">A ceia do "só salada"</h2>
          <ul className="mt-8 space-y-4">
            {[
              "A mesa cheia de pratos que você não pode comer.",
              "O \"ah, é só um pedacinho de panetone!\" a noite inteira.",
              "A receita sem açúcar que deu errado justo na véspera.",
              "O dia 24 inteiro na cozinha, e a noite cansado demais para aproveitar.",
            ].map((t) => (
              <li key={t} className="flex gap-3 text-lg"><X className="mt-1 h-6 w-6 flex-none text-berry" aria-hidden />{t}</li>
            ))}
          </ul>
          <p className="mt-8 rounded-2xl bg-pine-light p-6 text-lg text-pine">
            Não é falta de força de vontade. <b>É falta de um cardápio pensado para quem não come açúcar nem glúten.</b> E é exatamente isso que este guia entrega.
          </p>
        </div>
      </section>

      {/* SOLUÇÃO / COMPARATIVO */}
      <section className="bg-white py-16 md:py-24">
        <div className="container-x">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">A diferença</p>
            <h2 className="h-section mt-3">Não é mais um livro de receitas. É a ceia inteira, já montada.</h2>
          </div>
          <div className="mx-auto mt-10 grid max-w-4xl gap-5 md:grid-cols-2">
            <div className="card bg-cream">
              <h3 className="text-xl font-semibold text-muted">Livro de receitas comum</h3>
              <ul className="mt-4 space-y-3 text-muted">
                {["Centenas de receitas soltas para você escolher", "Você monta o cardápio e torce para combinar", "A lista do mercado fica por sua conta", "No dia 24, tudo ao mesmo tempo no fogão"].map((t) => (
                  <li key={t} className="flex gap-2"><X className="mt-0.5 h-5 w-5 flex-none" aria-hidden />{t}</li>
                ))}
              </ul>
            </div>
            <div className="card border-pine ring-2 ring-pine">
              <h3 className="text-xl font-semibold text-pine">Ceia Leve Montada</h3>
              <ul className="mt-4 space-y-3">
                {["3 ceias completas, da entrada à bebida", "Pratos que já combinam entre si", "Lista de compras pronta para cada cardápio", "Método 3 Tempos: quase tudo pronto antes da noite"].map((t) => (
                  <li key={t} className="flex gap-2"><Check className="mt-0.5 h-5 w-5 flex-none text-pine" aria-hidden />{t}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* MÉTODO */}
      <section className="py-16 md:py-24">
        <div className="container-x">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">O método</p>
            <h2 className="h-section mt-3">O Método 3 Tempos</h2>
            <p className="mt-4 text-lg text-muted">Ninguém precisa passar a noite de Natal na beira do fogão. Cada receita do guia diz em qual tempo ela é feita.</p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              { n: 1, cor: "bg-pine", t: "Dia 23 · a véspera", d: "Sobremesas geladas, marinadas, farofas e saladas cremosas. Tudo o que melhora de um dia para o outro.", i: CalendarDays },
              { n: 2, cor: "bg-[#9A6B12]", t: "Dia 24 · à tarde", d: "Só o que precisa de forno e fogão: o assado e o arroz. As bebidas vão gelar.", i: Clock },
              { n: 3, cor: "bg-berry", t: "1 hora antes de servir", d: "Só finalizar: aquecer, colocar o crocante por cima e montar as travessas. E sentar à mesa.", i: Utensils },
            ].map((s) => (
              <div key={s.n} className="card">
                <div className={`flex h-14 w-14 items-center justify-center rounded-full ${s.cor} font-serif text-2xl text-white`}>{s.n}</div>
                <h3 className="mt-4 text-xl font-semibold text-pine">{s.t}</h3>
                <p className="mt-2 text-muted">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CARDÁPIOS */}
      <section className="bg-white py-16 md:py-24">
        <div className="container-x">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Os cardápios</p>
            <h2 className="h-section mt-3">Escolha a sua ceia</h2>
            <p className="mt-4 text-lg text-muted">As três são completas e sem açúcar e sem glúten. Muda o tamanho da mesa e o bolso.</p>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {cardapios.map((c) => (
              <article key={c.n} className="flex flex-col overflow-hidden rounded-2xl border border-line bg-cream">
                <div className={`${c.cor} px-6 py-5 text-white`}>
                  <p className="text-xs font-extrabold uppercase tracking-widest opacity-85">Cardápio {c.n} · {c.pessoas} pessoas</p>
                  <h3 className="mt-1 text-2xl font-semibold">{c.nome}</h3>
                </div>
                <ul className="flex-1 space-y-2.5 p-6">
                  {c.pratos.map((p) => <li key={p} className="flex gap-2"><ChefHat className="mt-0.5 h-5 w-5 flex-none text-gold" aria-hidden />{p}</li>)}
                </ul>
                <p className={`${c.tom} mx-6 mb-6 rounded-xl px-4 py-3 text-sm`}><b>Ideal para:</b> {c.ideal}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* POR DENTRO */}
      <section className="py-16 md:py-24">
        <div className="container-x">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Veja por dentro</p>
            <h2 className="h-section mt-3">46 páginas para ler no celular ou imprimir</h2>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3">
            {paginas.map(([f, t]) => (
              <figure key={f} className="text-center">
                <img src={`${import.meta.env.BASE_URL}paginas/${f}.png`} alt={t} loading="lazy" className="paper-shadow w-full rounded-lg border border-line" />
                <figcaption className="mt-3 text-sm font-bold text-pine">{t}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* O QUE VEM */}
      <section className="bg-white py-16 md:py-24">
        <div className="container-x">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow">Tudo o que você recebe</p>
            <h2 className="h-section mt-3">O guia completo, em PDF</h2>
          </div>
          <div className="mx-auto mt-10 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {inclui.map(([t, d]) => (
              <div key={t} className="card flex gap-3">
                <Check className="mt-1 h-6 w-6 flex-none rounded-full bg-pine p-1 text-white" aria-hidden />
                <div><h3 className="font-sans text-base font-extrabold text-ink">{t}</h3><p className="mt-1 text-sm text-muted">{d}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARA QUEM */}
      <section className="py-16 md:py-24">
        <div className="container-x grid max-w-5xl gap-6 md:grid-cols-2">
          <div className="card">
            <p className="eyebrow text-pine">É para você se</p>
            <ul className="mt-4 space-y-3">
              {["Tem diabetes ou pré-diabetes e quer uma ceia de verdade", "É celíaco ou tem intolerância ao glúten", "Está cuidando da alimentação e não quer \"jogar tudo para o alto\"", "Vai cozinhar para alguém da família com restrição"].map((t) => (
                <li key={t} className="flex gap-2"><Check className="mt-0.5 h-5 w-5 flex-none text-pine" aria-hidden />{t}</li>
              ))}
            </ul>
          </div>
          <div className="card">
            <p className="eyebrow">Não é para você se</p>
            <ul className="mt-4 space-y-3 text-muted">
              {["Procura uma dieta para emagrecer até o Natal", "Quer receitas que substituam tratamento médico", "Prefere comprar a ceia pronta"].map((t) => (
                <li key={t} className="flex gap-2"><X className="mt-0.5 h-5 w-5 flex-none text-berry" aria-hidden />{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* OFERTA */}
      <section id="oferta" className="scroll-mt-16 bg-[radial-gradient(120%_90%_at_50%_0%,#2A6E53_0%,#1F5A43_45%,#143D2D_100%)] py-16 text-white md:py-24">
        <div className="container-x grid max-w-5xl items-center gap-10 md:grid-cols-2">
          <img src={`${import.meta.env.BASE_URL}capas/0-Ceia-Leve-Montada.png`} alt="Capa do guia" className="mx-auto w-60 -rotate-2 rounded-lg shadow-book sm:w-72" loading="lazy" />
          <div className="rounded-3xl bg-cream p-7 text-ink sm:p-9">
            <p className="eyebrow">Acesso imediato</p>
            <h2 className="mt-2 font-serif text-3xl font-semibold text-pine">Ceia Leve Montada</h2>
            <ul className="mt-5 space-y-2 text-[15px]">
              {["3 ceias completas e 24 receitas", "Cronograma dos 3 Tempos", "3 listas de compras para imprimir", "Guia de trocas, rótulos e quantidades", "Extras: sobras do dia 25, kit sobrevivência e etiquetas"].map((t) => (
                <li key={t} className="flex gap-2"><Check className="mt-0.5 h-5 w-5 flex-none text-pine" aria-hidden />{t}</li>
              ))}
            </ul>
            <div className="mt-6 border-t border-line pt-6">
              <p className="text-sm text-muted">Tudo isso por</p>
              <p className="font-serif text-6xl font-semibold leading-none text-berry">R$ {config.preco}</p>
              {config.parcelamento && <p className="mt-1 text-sm text-muted">{config.parcelamento}</p>}
            </div>
            <div className="mt-6"><CTA className="sm:w-full">Quero a minha ceia</CTA></div>
            <p className="mt-3 text-center text-xs text-muted">Pagamento seguro · Pix ou cartão · PDF enviado no seu e-mail</p>
          </div>
        </div>
      </section>

      {/* GARANTIA */}
      <section className="py-16 md:py-20">
        <div className="container-x flex max-w-3xl flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
          <div className="flex h-28 w-28 flex-none items-center justify-center rounded-full bg-gold-light ring-4 ring-gold">
            <ShieldCheck className="h-14 w-14 text-[#7A5410]" aria-hidden />
          </div>
          <div>
            <h2 className="font-serif text-2xl font-semibold text-pine">Garantia de {config.garantia} dias</h2>
            <p className="mt-2 text-muted">Baixe, leia e escolha a sua ceia. Se achar que o guia não é para você, peça o reembolso em até {config.garantia} dias e devolvemos 100% do valor, sem perguntas.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 md:py-24">
        <div className="container-x max-w-3xl">
          <h2 className="h-section text-center">Perguntas frequentes</h2>
          <div className="mt-8 space-y-3">
            <FAQItem q="Como eu recebo o guia?">Assim que o pagamento é aprovado, o PDF chega no seu e-mail. No Pix, costuma ser na hora. Você pode ler no celular, no computador ou imprimir.</FAQItem>
            <FAQItem q="Serve para quem tem diabetes?">As receitas não têm açúcar adicionado: a doçura vem de frutas ou de adoçantes culinários. Mas elas têm carboidratos (arroz, farinhas, frutas), então ajuste as porções conforme a orientação do seu médico ou nutricionista.</FAQItem>
            <FAQItem q="Serve para celíacos?">Nenhuma receita leva ingrediente com glúten. Os ingredientes que podem ter contaminação na fábrica estão marcados, para você comprar só os que dizem "não contém glúten". O guia também traz cuidados com a contaminação cruzada na cozinha.</FAQItem>
            <FAQItem q="E quem tem intolerância à lactose?">Boa parte das receitas já é sem lactose. Nas que levam leite ou manteiga, a página mostra a troca para a versão sem lactose.</FAQItem>
            <FAQItem q="Os ingredientes são difíceis de achar?">Não. Quase tudo é de supermercado comum. O Cardápio Econômico foi pensado para fazer uma mesa farta gastando pouco.</FAQItem>
            <FAQItem q="Ainda dá tempo de usar neste Natal?">Sim. O acesso é imediato, e o Método 3 Tempos começa só no dia 23. Dá tempo de escolher a ceia, imprimir a lista e fazer as compras com calma.</FAQItem>
            <FAQItem q="É um livro físico?">Não. É um guia digital em PDF, com 46 páginas, enviado por e-mail.</FAQItem>
            <FAQItem q="E se eu não gostar?">Você tem {config.garantia} dias de garantia. É só pedir o reembolso pelo e-mail da compra e devolvemos 100% do valor.</FAQItem>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-16 text-center md:py-24">
        <div className="container-x max-w-2xl">
          <Sparkles className="mx-auto h-10 w-10 text-gold" aria-hidden />
          <h2 className="h-section mt-4">Este ano, a ceia também é sua.</h2>
          <p className="mt-4 text-lg text-muted">Escolha o seu cardápio hoje, faça as compras com calma e chegue na noite do dia 24 com quase tudo pronto.</p>
          <div className="mt-8 flex flex-col items-center"><CTA>Quero a minha ceia por R$ {config.preco}</CTA><SafeNote /></div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted">
            <span className="flex items-center gap-2"><ShoppingBasket className="h-5 w-5 text-pine" aria-hidden />Lista de compras pronta</span>
            <span className="flex items-center gap-2"><Clock className="h-5 w-5 text-pine" aria-hidden />Método 3 Tempos</span>
            <span className="flex items-center gap-2"><ShieldCheck className="h-5 w-5 text-pine" aria-hidden />Garantia de {config.garantia} dias</span>
          </div>
        </div>
      </section>

      <Footer />

      {/* Botão fixo no celular */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-cream/95 p-3 backdrop-blur md:hidden">
        <a href="#oferta" className="block rounded-full bg-berry py-3 text-center font-extrabold uppercase tracking-wide text-white">Quero a minha ceia · R$ {config.preco}</a>
      </div>
      <div className="h-20 md:hidden" aria-hidden />
    </>
  );
}
