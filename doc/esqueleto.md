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
| 3 | Sobre | Apresentação pessoal | Gancho + título gigante em 2 linhas; texto mono em 2 parágrafos à esquerda e imagem grande à direita (até a borda) | `About.tsx` |
| 4 | Projetos | Mostrar trabalhos | Slider horizontal infinito e automático (roda do mouse e arraste manuais) + duas faixas de ferramentas rolando em sentidos opostos | `Projects.tsx` |
| 5 | Habilidades | Stack técnica | Grupos Frontend / Backend / Ferramentas | `Skills.tsx` |
| 6 | Experiência | Trajetória | Linha do tempo cargo/empresa/período | `Experience.tsx` |
| 7 | Contato | Chamada para ação | E-mail, GitHub, LinkedIn | `Contact.tsx` |
| 8 | Rodapé | Fechamento | Copyright | `Footer.tsx` |

Componentes ficariam em `src/components/`; dados (projetos, skills) em `src/data/`.

## Design

- **Tipografia:** títulos gigantes (`clamp(4rem, 14vw, 12rem)`) em Space Mono (substituta gratuita da KH Interference, fonte mono paga do Marathon; se for licenciada, trocar só `$font-display`), rótulos em JetBrains Mono, corpo em Inter.
- **Cores:** paleta do Marathon: acid yellow-green `#C2FE0B` como destaque, magenta `#EA027E` como secundária, sobre preto `#080A0E` e texto off-white `#E8EDDF`; um destaque por seção. Tema claro/escuro alternável (toggle na Navbar); todas as cores ficam em `src/styles/_colors.scss`.
- **Marathon:** blocos retos, linhas finas, rótulos mono em caixa alta (`01 // SOBRE`), contraste alto.
- **Cyberpunk contido:** grade e scanlines sutis só no fundo (atrás do conteúdo); letras grandes e títulos em branco sólido, sem textura nem glitch.
- **Interatividade:** menu com seção ativa (IntersectionObserver), cards com hover, efeitos de scroll com Motion (revelar ao entrar na tela, barra de progresso), `prefers-reduced-motion` respeitado.
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
| 2026-09-30 | Layout básico com todas as ideias | Seções implementadas em `src/components` com SCSS (ácido/magenta), conteúdo placeholder, só local (sem push) |
| 2026-09-30 | Usar a tipografia do Marathon nas letras grandes | KH Interference é paga e mono; usada a substituta gratuita Space Mono nos títulos |
| 2026-09-30 | Slider de projetos com ferramentas embaixo | Projetos viram slider (scroll-snap, botões ←/→); faixa "Ferramentas" com a união das tags de todos os projetos, em rolagem contínua |
| 2026-09-30 | Slider automático e segunda faixa de ferramentas | Projetos passam sozinhos (pausam no hover/toque), roda do mouse e arraste movem o slider; faixa duplicada em sentido oposto |
| 2026-09-30 | Paleta de cores do Marathon | `_colors.scss` com acid `#C2FE0B`, magenta `#EA027E`, fundo `#080A0E`; variáveis renomeadas para `$accent` e `$accent-alt` |
| 2026-09-30 | Remover efeito nas letras grandes | Removido o glitch (sombras ácido/magenta) do título do hero e do hover do contato |
| 2026-09-30 | Letras grandes e títulos brancos, sem textura | Títulos usam `$white`; scanlines movidas para atrás do conteúdo |
| 2026-09-30 | Efeitos de scroll com lib do React | Adicionada a lib Motion: revelar seções, parallax no hero e barra de progresso |
| 2026-09-30 | Efeito de letras aleatórias no nome | Só no nome do hero: letras trocam por caracteres aleatórios e se revelam da esquerda para a direita ao carregar e ao passar o mouse; desligado com movimento reduzido |
| 2026-09-30 | Trocar o hook caseiro por lib; letras nos caracteres e efeito mais lento | Efeito de letras aleatórias agora usa GSAP ScrambleTextPlugin (dependência `gsap`, gratuita) em `src/hooks/useScramble.ts`, com letras, números e símbolos, ~1,6 s |
| 2026-09-30 | Toggle de tema claro/escuro | Variáveis de cor viram `var(--...)` com `data-theme`; tema claro derivado (verde escuro como destaque); escolha persistida e sem flash no carregamento |
| 2026-09-30 | Navbar na cor principal do tema no topo | No topo da página a barra fica na cor de destaque (acid no escuro, verde escuro no claro) com texto na cor do fundo; ao rolar volta ao fundo escuro/translúcido |
| 2026-09-30 | Tirar opacidade do título ao rolar | O título do hero mantém só o parallax; não esmaece mais |
| 2026-09-30 | Tirar o parallax do título ao rolar | O título do hero fica parado ao rolar (sem descer nem esmaecer) |
| 2026-09-30 | Seção Sobre no layout da referência | Gancho, título gigante em 2 linhas, texto mono à esquerda e imagem à direita até a borda; foto ainda é placeholder (definir `about.image` em `src/data/content.ts`) |
| 2026-09-30 | Elementos decorativos de dev (container, CPU/memória, pacote) | Etiquetas técnicas estilo container de carga (`SpecLabel`, `Labels.tsx`): container Docker no fim do hero, CPU/memória/rede ao vivo entre Sobre e Projetos, cabeçalho de pacote antes do Contato; valores fictícios, baixo contraste, ocultas para leitores de tela |
| 2026-09-30 | Informações genéricas do git | Nova etiqueta `GitLabel` (branch, HEAD, tag, ahead/behind, último commit) entre Habilidades e Experiência; valores fictícios |
| 2026-10-01 | Etiqueta de CPU logo abaixo do hero | `ResourcesLabel` (CPU/memória/rede ao vivo) movida para logo depois do Hero, antes do Sobre |
| 2026-10-01 | Etiqueta Docker no lugar da de CPU | `DockerLabel` saiu do hero e foi para entre Sobre e Projetos, onde estava a de CPU |
| 2026-10-01 | Botões de contato no estilo da lista da referência | E-mail, GitHub e LinkedIn ganham marcador `[↗]` e faixa listrada diagonal à esquerda (`.btn--link`); botões do hero não mudam |
| 2026-10-01 | Elementos HUD nos cantos da página | `CornerMarks`: mira (topo esquerdo), xadrez (topo direito), faixa vertical com código de barras, ícones, número e texto (baixo esquerdo) e monograma "L" em pixel (baixo direito); fixos, só em telas ≥1280px, decorativos. Os originais do Marathon (logo X e texto do jogo) não foram copiados |
| 2026-10-01 | Mira do canto gira com a barra de progresso | A mira do canto superior esquerdo gira 2 voltas do topo ao fim da página, usando o mesmo valor suavizado da barra (`useScrollProgress`); parada com movimento reduzido |
| 2026-10-01 | Canto superior direito vira globo que gira ao rolar | O xadrez deu lugar a um globo em arame (`Globe.tsx`) cujos meridianos variam com o progresso do scroll, simulando 2 giros do topo ao fim da página; parado com movimento reduzido |

