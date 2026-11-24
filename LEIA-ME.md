# Site · Ceia Leve Montada

O projeto usa o mesmo formato do Lovable: React + Vite + TypeScript + Tailwind.

## Páginas

| Endereço | Página |
|---|---|
| `/` | Página de vendas |
| `/oferta-especial` | Upsell (Janeiro Leve, R$ 37) |
| `/ultima-chance` | Downsell (Janeiro Leve, R$ 27) |
| `/obrigado` | Página de obrigado |

## 1. Antes de publicar: preencha `src/config.ts`

Esse é o único arquivo que você precisa editar:
- `checkout`: o link do checkout do produto principal
- `upsell.aceitar` e `downsell.aceitar`: os links de compra com 1 clique da sua plataforma
- `pixelId`: o ID do Meta Pixel (opcional)
- `emailSuporte` e `cnpj`: aparecem no rodapé

Na plataforma de checkout, configure:
- **Depois da compra:** redirecionar para `https://SEU-SITE/oferta-especial`
- **"Não" do upsell:** já leva para `/ultima-chance` (está no config)
- **"Não" do downsell:** já leva para `/obrigado`

> Kiwify, Hotmart e outras têm um "upsell de 1 clique" próprio: algumas geram um link, outras um código (script) para colar na página. Se a sua gerar um script, peça no Lovable: "cole este script na página /oferta-especial no lugar do botão de aceitar".

## 2. Colocar no Lovable (com GitHub)

1. No Lovable, crie um projeto novo (pode ser em branco).
2. Em **GitHub → Connect to GitHub**, crie o repositório do projeto.
3. Clone esse repositório no computador, apague o conteúdo dele (menos a pasta `.git`) e copie para lá **todos os arquivos desta pasta**, menos `node_modules`, `dist` e `_shots`. O arquivo `site-lovable.zip` já vem sem essas pastas.
4. Faça commit e push. O Lovable sincroniza sozinho e o site aparece no editor.
5. A partir daí, você pode pedir alterações no chat do Lovable normalmente.

## 3. Publicar sem o Lovable (alternativa)

- **Netlify:** arraste a pasta `dist` (gerada por `npm run build`) em app.netlify.com/drop. O arquivo `public/_redirects` já está configurado para as rotas funcionarem.
- **Vercel:** importe a pasta. O `vercel.json` já está configurado.

## 4. Rodar no computador

```
npm install
npm run dev
```

O site abre em http://localhost:8080

## Imagens

- `public/capas/`: capas dos 5 produtos (geradas a partir dos PDFs)
- `public/paginas/`: páginas internas do guia, usadas em "Veja por dentro"

## O que ainda falta

- **Depoimentos:** não coloquei nenhum, porque inventar depoimento é proibido (CDC e regras da Meta) e derruba a conta de anúncios. Quando tiver depoimentos reais de clientes, peça no Lovable para incluir uma seção antes da oferta.
- **Termos de uso e política de privacidade:** são exigidos por plataformas e pela LGPD. Gere os seus e peça para linkar no rodapé.
