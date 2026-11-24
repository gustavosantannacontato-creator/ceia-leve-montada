import { useEffect, useState, type ReactNode } from "react";
import { ChevronDown, Lock } from "lucide-react";
import { config } from "@/config";

/** Botão de compra. Dispara InitiateCheckout no Pixel (se ativo). */
export function CTA({ children, href = config.checkout, className = "", pulse = true }: { children: ReactNode; href?: string; className?: string; pulse?: boolean }) {
  const onClick = () => {
    // @ts-ignore
    if (window.fbq && href === config.checkout) window.fbq("track", "InitiateCheckout");
  };
  return (
    <a
      href={href}
      onClick={onClick}
      className={`group inline-flex w-full items-center justify-center gap-2 rounded-full bg-berry px-7 py-4 text-center text-base font-extrabold uppercase tracking-wide text-white shadow-lg shadow-berry/30 transition hover:bg-berry-dark focus:outline-none focus-visible:ring-4 focus-visible:ring-gold sm:w-auto sm:text-lg ${pulse ? "cta-pulse" : ""} ${className}`}
    >
      {children}
    </a>
  );
}

export function SafeNote({ dark = false }: { dark?: boolean }) {
  return (
    <p className={`mt-3 flex items-center justify-center gap-1.5 text-sm ${dark ? "text-white/75" : "text-muted"} sm:justify-start`}>
      <Lock className="h-4 w-4" aria-hidden /> PDF · acesso imediato no e-mail · garantia de {config.garantia} dias
    </p>
  );
}

export function Seals({ center = false }: { center?: boolean }) {
  return (
    <div className={`flex flex-wrap gap-2 ${center ? "justify-center" : ""}`}>
      <span className="seal bg-pine-light text-pine">Sem glúten</span>
      <span className="seal bg-berry-light text-berry">Sem açúcar adicionado</span>
      <span className="seal bg-gold-light text-[#7A5410]">Opções sem lactose</span>
    </div>
  );
}

/** Barra fixa do topo com os dias que faltam para a ceia. */
export function TopBar() {
  const [dias, setDias] = useState<number | null>(null);
  useEffect(() => {
    const alvo = new Date(config.dataCeia + "T00:00:00");
    const d = Math.ceil((alvo.getTime() - Date.now()) / 86400000);
    setDias(d);
  }, []);
  if (dias === null || dias < 0) return null;
  return (
    <div className="sticky top-0 z-50 bg-pine-dark px-4 py-2.5 text-center text-sm font-bold text-white">
      🎄 {dias === 0 ? "É hoje a ceia! Ainda dá tempo de baixar e usar." : <>Faltam <span className="text-gold-soft">{dias} {dias === 1 ? "dia" : "dias"}</span> para a ceia de Natal. Ainda dá tempo de usar o Método 3 Tempos.</>}
    </div>
  );
}

export function Wreath({ size = 300 }: { size?: number }) {
  const r = size * 0.36, c = size / 2;
  const leaves = Array.from({ length: 46 }, (_, i) => {
    const a = (i / 46) * Math.PI * 2, rr = r + ((i % 3) - 1) * size * 0.025;
    const x = c + rr * Math.cos(a), y = c + rr * Math.sin(a);
    const rot = (a * 180) / Math.PI + 90 + (i % 2 ? 35 : -35);
    return <ellipse key={i} cx={x} cy={y} rx={size * 0.06} ry={size * 0.022} fill={["#1F5A43", "#2E7356", "#3E8A66", "#1A4A37"][i % 4]} transform={`rotate(${rot} ${x} ${y})`} />;
  });
  const berries = Array.from({ length: 14 }, (_, i) => {
    const a = (i / 14) * Math.PI * 2 + 0.2;
    return <circle key={i} cx={c + (r + size * 0.03) * Math.cos(a)} cy={c + (r + size * 0.03) * Math.sin(a)} r={size * 0.018} fill="#B23A48" />;
  });
  return <svg viewBox={`0 0 ${size} ${size}`} width="100%" height="100%" aria-hidden>{leaves}{berries}</svg>;
}

export function FAQItem({ q, children }: { q: string; children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl border border-line bg-white">
      <button onClick={() => setOpen(!open)} aria-expanded={open} className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-bold text-ink sm:px-6">
        {q}
        <ChevronDown className={`h-5 w-5 flex-none text-pine transition-transform ${open ? "rotate-180" : ""}`} aria-hidden />
      </button>
      {open && <div className="px-5 pb-5 text-muted sm:px-6">{children}</div>}
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line bg-cream py-10 text-sm text-muted">
      <div className="container-x space-y-3 text-center">
        <p className="font-serif text-lg text-pine">{config.empresa}</p>
        <p className="mx-auto max-w-3xl">
          Este produto é um guia digital de receitas e organização. Não substitui a orientação de médico ou nutricionista.
          As receitas não têm açúcar adicionado, mas contêm carboidratos. Pessoas com diabetes devem ajustar as porções conforme orientação profissional.
          Celíacos: confira sempre os rótulos.
        </p>
        <p>
          {config.cnpj && <>CNPJ {config.cnpj} · </>}Suporte: <a className="underline" href={`mailto:${config.emailSuporte}`}>{config.emailSuporte}</a>
        </p>
        <p className="text-xs">Este site não faz parte do Facebook nem da Meta Platforms, Inc. e não é endossado por eles.</p>
        <p className="text-xs">© {new Date().getFullYear()} {config.empresa}. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
