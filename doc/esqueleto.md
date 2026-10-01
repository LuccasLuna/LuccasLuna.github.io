# Esqueleto do protótipo: Portfólio

> Documento vivo. Parte deste esqueleto; peça o que adicionar ou remover e o resultado fica registrado no [Changelog](#changelog).
> Nada aqui está implementado ainda: a página publicada continua em branco.

## Visão geral

- **Objetivo:** apresentar projetos e habilidades de um desenvolvedor full stack e gerar contato.
- **Público:** recrutadores, empresas e clientes.
- **Tom:** profissional, direto, a definir.
- **Formato:** página única (SPA) com navegação por âncoras.
- **Stack:** Vite + React + TypeScript, publicado no GitHub Pages (https://luccasluna.github.io/).

## Wireframe

```
+--------------------------------------------------+
| [Logo/Nome]     Sobre Projetos Skills Contato    |  Navbar
+--------------------------------------------------+
|                                                  |
|   Olá, eu sou [Nome]                             |  Hero
|   Desenvolvedor Full Stack                       |
|   [Ver projetos]  [Contato]                      |
|                                                  |
+--------------------------------------------------+
|  Sobre                                           |
|  [foto]  Texto curto sobre mim                   |  Sobre
+--------------------------------------------------+
|  Projetos                                        |
|  +--------+  +--------+  +--------+              |  Projetos
|  | thumb  |  | thumb  |  | thumb  |              |
|  | título |  | título |  | título |              |
|  | tags   |  | tags   |  | tags   |              |
|  +--------+  +--------+  +--------+              |
+--------------------------------------------------+
|  Habilidades                                     |
|  Frontend: [..] [..]   Backend: [..] [..]        |  Habilidades
|  Ferramentas: [..] [..]                          |
+--------------------------------------------------+
|  Experiência                                     |
|  2024 - hoje | Cargo @ Empresa                   |  Experiência
|  2022 - 2024 | Cargo @ Empresa                   |
+--------------------------------------------------+
|  Contato                                         |
|  [E-mail] [GitHub] [LinkedIn]                    |  Contato
+--------------------------------------------------+
|  © Ano Nome                                      |  Rodapé
+--------------------------------------------------+
```

## Seções

| # | Seção | Propósito | Conteúdo (placeholder) | Componente |
|---|-------|-----------|------------------------|------------|
| 1 | Navbar | Navegação entre seções | Nome + links de âncora | `Navbar.tsx` |
| 2 | Hero | Primeira impressão | Nome, cargo, frase de efeito, 2 botões | `Hero.tsx` |
| 3 | Sobre | Apresentação pessoal | Foto, parágrafo curto | `About.tsx` |
| 4 | Projetos | Mostrar trabalhos | Cards: título, descrição, tags, links demo/código | `Projects.tsx` |
| 5 | Habilidades | Stack técnica | Grupos Frontend / Backend / Ferramentas | `Skills.tsx` |
| 6 | Experiência | Trajetória | Linha do tempo cargo/empresa/período | `Experience.tsx` |
| 7 | Contato | Chamada para ação | E-mail, GitHub, LinkedIn | `Contact.tsx` |
| 8 | Rodapé | Fechamento | Copyright | `Footer.tsx` |

Componentes ficariam em `src/components/`; dados (projetos, skills) em `src/data/`.

## Design

- **Tipografia:** títulos gigantes (`clamp(4rem, 14vw, 12rem)`) em Anton (substituta gratuita da KH Interference do Marathon), rótulos em JetBrains Mono, corpo em Inter.
- **Cores:** ciano `#00f0ff` e magenta `#ff2bd6` sobre fundo escuro; um destaque por seção. Todas as cores ficam em `src/styles/_colors.scss`.
- **Marathon:** blocos retos, linhas finas, rótulos mono em caixa alta (`01 // SOBRE`), contraste alto.
- **Cyberpunk contido:** grade e scanlines sutis; glitch só no hero e em hovers.
- **Interatividade:** menu com seção ativa (IntersectionObserver), cards com hover, `prefers-reduced-motion` respeitado.
- [ ] Animações extras / transições entre seções
- [ ] Idioma (pt-BR, en, ambos)

## Decisões em aberto

- [ ] Quais seções ficam e quais saem
- [ ] Nome e foto a usar
- [ ] Lista real de projetos
- [ ] Domínio próprio ou `luccasluna.github.io`
- [ ] Formulário de contato ou só links

## Changelog

| Data | Pedido | Resultado |
|------|--------|-----------|
| 2026-09-30 | Criação do esqueleto | Versão inicial deste documento |
| 2026-09-30 | Layout básico com todas as ideias | Seções implementadas em `src/components` com SCSS (ciano/magenta), conteúdo placeholder, só local (sem push) |
