# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Projeto

Portfólio pessoal (Vite + React 19 + TypeScript) publicado como site de usuário do GitHub Pages em https://luccasluna.github.io/ (repo `LuccasLuna/LuccasLuna.github.io`). Layout básico implementado com conteúdo placeholder; ele evolui a partir de [doc/esqueleto.md](doc/esqueleto.md), que descreve seções, wireframe e decisões em aberto. Ao implementar ou remover algo pedido pelo usuário, registre no Changelog desse documento. Antes de criar seções, componentes ou estilos novos, consulte [doc/ideias.md](doc/ideias.md) (direção visual: tipografia grande, cyberpunk + design do Marathon, interativo, sem poluição visual).

## Fonte de conteúdo

Os projetos em que o usuário já trabalhou ficam em `~/trabalho` (fora deste repo). Use-os como contexto para textos de projetos, experiência e skills (`content.ts` / `messages.ts`): stack, propósito e funcionalidades saem do código e dos `CLAUDE.md` de lá. Pastas: `auth` (portal + backend de autenticação), `caderneta`, `ccp`, `eppais`, `gerenciamento-atividades`, `sistrans`, `transporte-legado` (PHP legado); em geral cada uma tem um backend NestJS e um front React (prefixo `itesp.`). `linkedin/descricoes-linkedin.md` tem descrições já redigidas. Só leitura: não altere nada em `~/trabalho` e não exponha no site dados internos ou sensíveis desses sistemas (credenciais, URLs internas, dados de clientes).

## Arquitetura

Página única: `src/App.tsx` compõe `src/components/*` (Navbar, Hero, About, Projects, Skills, Experience, Contact, Footer). Textos e listas ficam em `src/data/content.ts`; `useActiveSection` (IntersectionObserver) marca a seção ativa na Navbar.

Estilos em SCSS (`src/styles/main.scss` faz `@use` dos parciais, um por área, com classes BEM). **Todas as cores vivem só em `src/styles/_colors.scss`**: não use hex em outros arquivos; para novas cores, adicione lá. As variáveis SCSS apontam para `var(--...)`; os valores dos temas escuro/claro ficam em `:root` e `:root[data-theme='light']` no mesmo arquivo, e `useTheme` troca `data-theme` (persistido em `localStorage`).

Textos do site ficam em `src/i18n/messages.ts` (pt é o padrão e define o tipo; en, zh, es e fr precisam das mesmas chaves). Os componentes leem `t` via `useLang()`. Para um novo idioma, adicione-o em `messages` e em `LANGS`. Etiquetas decorativas (`Labels.tsx`, `CornerMarks.tsx`) ficam em inglês, sem tradução.

A navbar tem efeito de vidro líquido sutil em CSS (`.navbar` em `src/styles/_navbar.scss`, cores `--glass-*` em `_colors.scss`); no topo da página fica na cor de destaque. O slider grande de ferramentas (`ToolsMarquee.tsx`) fica logo abaixo do hero.

Cada projeto em `content.ts` tem `year`, `images` (caminhos em `public/projects/`) e `demo`/`repo` opcionais; título, descrição e textos do modal vêm de `projects.items[i]` em `messages.ts`. O modal (`ProjectModal.tsx`) usa `<dialog>` nativo.

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
