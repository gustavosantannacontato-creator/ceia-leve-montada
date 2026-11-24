#!/usr/bin/env bash
# Publica o site no GitHub Pages: https://gustavosantannacontato-creator.github.io/ceia-leve-montada/
# Uso (Git Bash, dentro da pasta do site):  bash publicar.sh
set -e
REPO="https://github.com/gustavosantannacontato-creator/ceia-leve-montada.git"
export MSYS_NO_PATHCONV=1
BASE_PATH=/ceia-leve-montada/ npm run build
cd dist
cp index.html 404.html
touch .nojekyll
for p in oferta-especial ultima-chance obrigado; do mkdir -p "$p" && cp index.html "$p/index.html"; done
rm -rf .git
git init -q -b gh-pages
git add -A
git -c user.name="Gustavo" -c user.email="gustavosantannacontato-creator@users.noreply.github.com" commit -q -m "Publicação do site"
git push -q -f "$REPO" gh-pages
rm -rf .git
echo "Publicado. Pode levar 1 a 2 minutos para atualizar."
