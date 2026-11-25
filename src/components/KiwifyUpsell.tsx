import { useEffect } from "react";

/**
 * Botões de upsell/downsell de 1 clique da Kiwify.
 * Reproduz o HTML do "Gerador de upsell" e carrega o script oficial,
 * que transforma os botões em compra com 1 clique (usa os dados da compra
 * que a Kiwify envia na URL ao redirecionar para esta página).
 */
export function KiwifyUpsell({ id, aceitar, recusar, downsellUrl = "" }: { id: string; aceitar: string; recusar: string; downsellUrl?: string }) {
  useEffect(() => {
    document.querySelectorAll('script[data-kiwify-upsell]').forEach((s) => s.remove());
    const s = document.createElement("script");
    s.src = "https://snippets.kiwify.com/upsell-v2/upsell.min.js";
    s.async = true;
    s.setAttribute("data-kiwify-upsell", "1");
    document.body.appendChild(s);
    return () => { s.remove(); };
  }, [id]);

  return (
    <div
      id={`kiwify-upsell-${id}`}
      data-upsell-url=""
      data-downsell-url={downsellUrl}
      className="kiwify-upsell flex flex-col items-center gap-5"
      style={{ ["--kiwify-upsell-accept-bg" as string]: "#A8323E", ["--kiwify-upsell-accept-color" as string]: "#FFFFFF" }}
    >
      <button
        id={`kiwify-upsell-trigger-${id}`}
        className="cta-pulse w-full rounded-full bg-berry px-7 py-4 text-base font-extrabold uppercase tracking-wide text-white shadow-lg shadow-berry/30 transition hover:bg-berry-dark sm:text-lg"
      >
        {aceitar}
      </button>
      <div id={`kiwify-upsell-cancel-trigger-${id}`} className="cursor-pointer text-sm text-muted underline">
        {recusar}
      </div>
    </div>
  );
}
