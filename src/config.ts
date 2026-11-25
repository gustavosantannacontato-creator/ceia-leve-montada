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
  checkout: "https://pay.kiwify.com.br/B1FMDdb",

  // Upsell (página /oferta-especial) e downsell (página /ultima-chance).
  // Botões de compra com 1 clique gerados no "Gerador de upsell" da Kiwify
  // (produto Ceia Leve Montada > Configurações > Página de obrigado e upsell).
  // O "kiwifyId" é o código que aparece em id="kiwify-upsell-XXXX".
  upsell: {
    preco: "37",
    kiwifyId: "zK0kIB2", // oferta "Janeiro Leve - Upsell" · ao recusar, vai para o downsell
    textoAceitar: "SIM, QUERO COMEÇAR JANEIRO LEVE",
    textoRecusar: "Não, obrigado. Prefiro descobrir por conta própria o que comer em janeiro.",
    urlDownsell: "https://gustavosantannacontato-creator.github.io/ceia-leve-montada/ultima-chance/",
  },
  downsell: {
    preco: "27",
    kiwifyId: "ml4Efus", // oferta "Janeiro Leve - Downsell" · ao recusar, vai para a área de membros
    textoAceitar: "QUERO O JANEIRO LEVE POR R$ 27",
    textoRecusar: "Não, obrigado. Pode seguir para o meu acesso.",
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
