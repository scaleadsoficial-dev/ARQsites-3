# Studio André Lenza — Site

## Rodar localmente
npm install
npm run dev

## Build
npm run build   → gera o site estático em `dist/client` (index.html pré-renderizado)

## Publicar na Netlify
1. Envie esta pasta para um repositório no GitHub.
2. Na Netlify: Add new site → Import from Git → escolha o repositório.
3. Build command: `npm run build` · Publish directory: `dist/client` (já definido no netlify.toml).
4. Deploy.
