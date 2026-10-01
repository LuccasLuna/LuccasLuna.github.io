# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Projeto

Portfólio pessoal (Vite + React 19 + TypeScript) publicado como site de usuário do GitHub Pages em https://luccasluna.github.io/ (repo `LuccasLuna/LuccasLuna.github.io`). Layout básico implementado com conteúdo placeholder; ele evolui a partir de [doc/esqueleto.md](doc/esqueleto.md), que descreve seções, wireframe e decisões em aberto. Ao implementar ou remover algo pedido pelo usuário, registre no Changelog desse documento. Antes de criar seções, componentes ou estilos novos, consulte [doc/ideias.md](doc/ideias.md) (direção visual: tipografia grande, cyberpunk + design do Marathon, interativo, sem poluição visual).

## Arquitetura

Página única: `src/App.tsx` compõe `src/components/*` (Navbar, Hero, About, Projects, Skills, Experience, Contact, Footer). Textos e listas ficam em `src/data/content.ts`; `useActiveSection` (IntersectionObserver) marca a seção ativa na Navbar.

Estilos em SCSS (`src/styles/main.scss` faz `@use` dos parciais, um por área, com classes BEM). **Todas as cores vivem só em `src/styles/_colors.scss`**: não use hex em outros arquivos; para novas cores, adicione lá.

## Comandos

- `npm run dev`: servidor de desenvolvimento
- `npm run build`: `tsc -b && vite build` (saída em `dist/`)
- `npm run lint`: Oxlint (config em `.oxlintrc.json`; não é ESLint)
- `npm run preview`: serve o build local

Não há testes configurados.

## Deploy

Push na `main` dispara [.github/workflows/deploy.yml](.github/workflows/deploy.yml), que roda `npm ci && npm run build` e publica `dist/` via `actions/deploy-pages`. O Pages está configurado com fonte "GitHub Actions" (não branch). O `base` do Vite é `/` porque é site de usuário; se o projeto virar um repo comum, ajuste `base` em `vite.config.ts`.

## Notas

- Idioma do projeto e da documentação: português (pt-BR).
- Não comitar nem fazer push sem o usuário pedir: cada push na `main` publica o site.
