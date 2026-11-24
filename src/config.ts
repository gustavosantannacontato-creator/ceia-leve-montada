// =====================================================================
//  CONFIGURAÇÃO DO SITE · troque aqui os links e preços.
//  Não precisa mexer em mais nada para colocar o site no ar.
// =====================================================================

export const config = {
  produto: "Ceia Leve Montada",
  preco: "19,90",
  // Texto de parcelamento exibido sob o preço (deixe "" para esconder).
  parcelamento: "ou parcelado no cartão",

  // Link do checkout do produto principal (Kiwify, Hotmart, Cakto, Eduzz...).
  // Os 3 order bumps são configurados DENTRO da plataforma de checkout.
  checkout: "https://SEU-CHECKOUT-AQUI",

  // Upsell (página /oferta-especial) e downsell (página /ultima-chance).
  // Se a sua plataforma oferece "compra com 1 clique", use o link que ela
  // gera para o botão de aceitar (ver LEIA-ME.md).
  upsell: {
    preco: "37",
    aceitar: "https://LINK-DE-1-CLIQUE-DO-UPSELL",
    recusar: "ultima-chance",
  },
  downsell: {
    preco: "27",
    aceitar: "https://LINK-DE-1-CLIQUE-DO-DOWNSELL",
    recusar: "obrigado",
  },

  // Data da ceia: o contador do topo mostra quantos dias faltam.
  dataCeia: "2026-12-24",

  // Garantia (dias).
  garantia: 7,

  // Meta Pixel: coloque o ID (só os números) para ativar. Vazio = desligado.
  pixelId: "",

  // Rodapé
  empresa: "Ceia Leve Montada",
  cnpj: "", // ex.: "00.000.000/0001-00"
  emailSuporte: "suporte@seudominio.com.br",
};
