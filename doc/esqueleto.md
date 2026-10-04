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
- **Cores:** paleta do Marathon: acid yellow-green `#C2FE0B` como destaque, violeta `#8463F2` como secundária, sobre preto `#080A0E` e texto off-white `#E8EDDF`; um destaque por seção. Tema claro/escuro alternável (toggle na Navbar); todas as cores ficam em `src/styles/_colors.scss`.
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
| 2026-10-01 | Elemento do canto inferior direito muda de formato | `PixelShape.tsx`: pixel art 5x7 que a cada ~4 s se dissolve no próximo formato (L, <, /, >, X, cursor oco); fica no L com movimento reduzido |
| 2026-10-01 | Formatos aleatórios de bloco faltando pixels | `PixelShape.tsx` passa a sortear a cada ~4 s um bloco 5x7 com retângulos recortados e pixels removidos (mín. 40% ligados, nunca igual ao anterior); a lista fixa de formatos (L, <, /, >, X) foi removida |
| 2026-10-01 | Navbar responsiva em telas pequenas | Até 800px a barra fica numa linha só (marca, toggle de tema e botão `[ Menu ]`); os links viram um painel em coluna sob a barra, fechado ao escolher um link, com Esc ou ao voltar a tela grande |
| 2026-10-01 | Seletor de idioma no menu | Select com Português (padrão), English, 中文, Español e Français; i18n própria em `src/i18n` (sem dependência), escolha salva no navegador, atualiza `<html lang>` e o título da aba; etiquetas decorativas continuam em inglês |
| 2026-10-01 | Remover a borda do select de idioma | Removido o anel de foco do navegador (`outline: none`) em `.lang-select` |
| 2026-10-01 | Lista do seletor de idioma no estilo do layout | O `<select>` nativo (popup não estilizável) virou um dropdown próprio e acessível (combobox/listbox, teclado completo, clique fora fecha), com itens em mono e destaque na cor do tema |
| 2026-10-01 | FluidGlass (React Bits) na navegação | Faixa 3D de vidro (modo `bar`) logo abaixo do hero, com os links das seções em 3D sobre uma cena de texto rolante com as ferramentas; carregada sob demanda em chunk separado (three.js, react-three-fiber, drei, maath ≈ 300 KB comprimidos); modelo `public/assets/3d/bar.glb` e fonte `public/assets/fonts/SpaceMono-Bold.ttf`; em ≤800px, com movimento reduzido ou sem WebGL aparece uma faixa estática em CSS; a navbar HTML continua sendo a navegação real |
| 2026-10-01 | FluidGlass 3D descartado; vidro sutil só na navbar; slider de ferramentas mantido | O canvas 3D só refratava a própria cena e não funcionava como esperado. Removidos `GlassNav`, `FluidGlass`, `bar.glb`, a fonte 3D e as dependências three/react-three-fiber/drei/maath. A navbar ganhou vidro líquido sutil em CSS (tinta, desfoque, brilho e reflexo lento; no topo continua na cor de destaque). O slider grande de ferramentas virou HTML/CSS (`ToolsMarquee.tsx`), duas linhas em sentidos opostos. Print guardado em `doc/capturas/` |
| 2026-10-01 | Glitch no título do Contato | Duas camadas (cor de destaque e magenta) com o mesmo texto, recortadas e deslocadas: rajada curta a cada ~4 s e contínuo no hover/foco; desligado com movimento reduzido. É o único título grande com glitch (o hero segue sem) |
| 2026-10-01 | Glitch do hover não é mais infinito | No hover/foco do título do Contato o glitch toca uma vez (~0,6 s) e termina limpo, mesmo com o mouse parado em cima; para repetir, sair e entrar de novo |
| 2026-10-01 | Modal de detalhes do projeto | "Ver projeto" abre um `<dialog>` com título, descrição, texto detalhado, função/ano, stack, destaques, links de demo/código (quando existirem) e galeria de imagens (placeholders até `images` ser preenchido); textos nos 5 idiomas em `messages.ts`; Esc, clique fora e `[ Fechar ]` fecham. O arrasto do slider só captura o mouse após 5 px, para o clique chegar ao botão. `ToolsStrip` passou a ser exportado para o build não falhar com as faixas comentadas |
| 2026-10-01 | Favicon cyberpunk/Marathon | Trocado o raio do Vite por um favicon SVG em pixel art: monograma "L" em amarelo-ácido sobre preto, com borda, listras de alerta na quina e um pixel magenta de glitch; `theme-color` `#080a0e` no `index.html` |
| 2026-10-01 | Favicon refeito em blocos arredondados | Novo `public/favicon.svg` inspirado no print enviado pelo usuário: seis blocos de cantos arredondados em duas colunas entrelaçadas, em amarelo-ácido sobre preto, com um bloco magenta; substitui o monograma "L" |
| 2026-10-01 | Favicon de hexágonos em cor única | `public/favicon.svg` redesenhado a partir da imagem enviada pelo usuário: sete hexágonos de cantos arredondados em colmeia, com duas mordidas nos encaixes, em uma cor só (acid `#C2FE0B`) e fundo transparente; é um redesenho aproximado, não a imagem original |

| 2026-10-02 | `~/trabalho` como fonte de contexto; texto da seção Sobre | `CLAUDE.md` ganhou a seção "Fonte de conteúdo" apontando `~/trabalho` (projetos profissionais, só leitura, sem expor dados internos). O texto placeholder de `about.paragraphs` foi substituído nos 5 idiomas, com base na versão genérica de `~/trabalho/linkedin/descricoes-linkedin.md`: front-end React/TypeScript e full stack NestJS no setor público, reescrita de legado PHP/Laravel, Docker e Nginx — sem citar cliente nem nomes de sistemas |
| 2026-10-03 | Imagem da seção Sobre | Foto enviada em `src/assets/images` (HEIC de 5,5 MB, que navegadores não exibem) convertida para `public/about.webp` (1600×2133, 44 KB) e ligada em `about.image` no `content.ts`. O bloco 16/10 com `object-fit: cover` recorta a faixa central do retrato, deixando o rosto no terço superior esquerdo |
| 2026-10-03 | Ferramentas reais no slider | `tools` em `content.ts` deixou de ser derivado das tags mock de `projects` e virou uma lista própria, levantada dos `package.json`/`composer.json` dos projetos em `~/trabalho`. Mantido só o principal (19 itens): TypeScript, React, NestJS, Node.js, Ant Design, Zustand, TanStack Query, React Hook Form, Zod, TypeORM, Prisma, Vite, SASS, PHP, Laravel, Docker, Nginx, Linux e Git. Ficaram de fora bancos (MySQL, Oracle), libs pontuais (ECharts, CKEditor, i18next, Swagger, JWT, Fastify, Livewire, Jest) e a cauda longa de dependências. As tags dos projetos continuam placeholder |
| 2026-10-03 | Slider de ferramentas junto do hero | `ToolsMarquee` saiu de `App.tsx` e passou a ser renderizado dentro da `<section id="inicio">` em `Hero.tsx`, como último filho. O texto do hero foi envolvido em `.hero__content` (`flex: 1` + centralização vertical) e a `.hero` perdeu o `padding-bottom`, então o slider encosta na base da primeira tela e aparece sem rolagem. Como agora está dentro de uma `.section` (max-width 1200px + padding), `.marquee` ganhou a sangria `calc((100% - 100vw) / 2)` nas laterais, o mesmo truque de `.about__body`, para seguir ocupando a largura da janela |
| 2026-10-03 | Seção de Trabalhos com os projetos reais | Os 5 projetos placeholder deram lugar aos 7 projetos de `~/trabalho`, anonimizados: sem nome real do sistema nem do cliente (vira "um órgão público" / "setor público"). `content.ts` ganhou tags e anos reais (anos tirados do histórico git de cada repositório, não do LinkedIn); `messages.ts` ganhou título, descrição, função, visão geral e destaques de cada projeto nos 5 idiomas, a partir da Versão 1 de `descricoes-linkedin.md`. Ordem do mais recente ao mais antigo: Gestão de Frota (2026), Registro de Produção Rural (2026), Compras Públicas (2025–2026), Convênios e Parcerias (2025–2026), Painel de Indicadores (2024–2026), Portal e Login Único (2024–2026) e Frota — Sistema Legado (2022–2025). Sem `images`, `demo` ou `repo`: são sistemas internos e repositórios privados, então o modal cai nos placeholders de imagem e esconde os links |
| 2026-10-03 | Correção: slider travava os cliques em "Ver projeto" | Em `useAutoScroll`, o `pointerup` estava registrado só no slider: ao pressionar um card e soltar o botão fora dele (o limiar de arrasto só olha o eixo X, então sair pela vertical nunca virava arrasto), `pressed` ficava preso em `true`. O movimento seguinte do mouse, já sem botão pressionado, iniciava um arrasto fantasma com `setPointerCapture`, e a captura redirecionava o `click` para o slider — o `onClick` do botão nunca disparava. Correções: `pointerup`/`pointercancel` passaram para a `window` (mais `blur`); `pointermove` com `e.buttons === 0` desfaz o estado preso; `onUp` libera a captura explicitamente; `pressed` entrou no `holding`, para o carrossel ficar parado entre o pointerdown e o pointerup (se ele andasse, o alvo do clique mudaria); e `pointermove` passou a marcar `hovering`, porque o `pointerenter` não dispara quando o ponteiro já está sobre o slider ao montar o efeito ou ao fechar o modal |
| 2026-10-03 | Destaques viram texto corrido | A pedido do usuário, a lista de destaques de cada projeto deu lugar a um parágrafo em primeira pessoa contando o que ele fez ali. Em `messages.ts`, `details.highlights: string[]` virou `details.contribution: string`, reescrito nos 5 idiomas (35 textos). O `ProjectModal` passou a renderizar um `<p>` no lugar do `<ul>`, e a regra `.modal__list`, agora sem uso, saiu do `_modal.scss`. O rótulo da seção segue sendo "Destaques" |
| 2026-10-03 | Cor secundária trocada para violeta | A pedido do usuário, `--accent-alt` passou de magenta (`#EA027E` no escuro, `#C4006A` no claro) para violeta `#8463F2` nos dois temas, só em `_colors.scss`. Docs `esqueleto.md` e `ideias.md` atualizados; o violeta antes reservado (`$violet` `#3601FB`) segue sem uso |
| 2026-10-03 | Slider de ferramentas entre Contato e Footer | A pedido do usuário, o `ToolsMarquee` do hero também aparece no fim da página, entre a seção Contato e o Footer. Ganhou as props `accent` (`primary` por padrão, `alt` aqui) e `page` (solto fora de uma `.section`). Com `alt`, a linha de cima usa a cor secundária (violeta) via `.marquee--alt`, e a de baixo segue branca; com `page`, `.marquee--page` tira a sangria lateral e a borda de baixo (o footer já tem a dele) |
| 2026-10-03 | Menos espaço entre Contato e Footer | A pedido do usuário, `.contact` perdeu o `min-height: 100vh` herdado de `.section` (`min-height: auto`) e o `padding-bottom` passou de 48px para 64px. Como o conteúdo é curto, sobrava uma faixa vazia de quase uma tela entre os botões e o slider/footer |
| 2026-10-03 | Sentido invertido no slider do Contato | A pedido do usuário, o `ToolsMarquee` ganhou a prop `invert`, que troca o sentido das duas linhas (a de cima passa a correr para o outro lado, a de baixo para o mesmo do hero). Usada só no slider entre Contato e Footer |
| 2026-10-04 | Stack com as ferramentas reais | A pedido do usuário, `skills` em `content.ts` foi refeito a partir das dependências, `.env.example` e Dockerfiles dos projetos de `~/trabalho`. Saíram itens que não batiam com o trabalho: PostgreSQL (o banco é MySQL), Express (só existe por baixo do NestJS), GitHub Actions (nenhum projeto tem CI) e REST (genérico). Entraram NestJS, Ant Design, Zustand, TanStack Query, React Hook Form, Zod, TypeORM, Prisma, MySQL, JWT, Swagger, PHP / Laravel, Nginx, Jest, ESLint / Prettier e Husky / Commitlint. Os nomes dos grupos e as traduções não mudaram |
| 2026-10-04 | Ícone "+" nos botões do hero | A pedido do usuário (com prints de referência), os botões "Ver projetos" e "Contato" ganharam um ícone de "+" à direita, dentro de um quadrado desenhado só com os quatro cantos. No hover/foco o quadrado expande (de `inset: 8px` para `0`) e fica mais nítido (opacidade .55 → 1). Modificador `.btn--plus` em `_hero.scss`, ícone todo em CSS com `currentColor` (sem hex, acompanha a inversão de cores e os dois temas); `prefers-reduced-motion` desliga a transição. Os botões do Contato e do modal não mudaram |
| 2026-10-04 | Ajuste do ícone "+" dos botões do hero | A pedido do usuário: ícone alinhado verticalmente com o texto (`line-height: 1` no botão, `align-self: center` e `margin-block` calculado na caixa de 36px (`(0.8rem × 1.6 − 36px) / 2`), que mantém exatamente a altura que o botão tinha antes do ícone (14px + linha de 0.8rem × 1.6 + 14px + bordas)) e mais respiro entre o quadrado e o "+" (quadrado em repouso 24px, "+" de 10px; no hover o quadrado chega a 36px). `padding-right` do botão 14px → 18px |
| 2026-10-04 | Glitch refeito no estilo "monitor com defeito" (Marathon) | A pedido do usuário, com prints de vídeos promocionais do Marathon (macroblocos verdes e vermelhos, barras verticais, faixas e linhas finas), o `PixelGlitch` deixou de sortear sprites simétricos e passou a desenhar rajadas num canvas com grade grossa (12 px; 8 px em telas estreitas): barras verticais penduradas nas bordas da região, blocos de faixas empilhadas com pontas em degraus (borda serrilhada de macrobloco), linhas finas compridas e pixels soltos, em cor chapada (verde de destaque ou laranja `$orange`, com poucos pedaços brancos). Cada rajada tem de 4 a 8 quadros de 60–110 ms, sobe e desce de intensidade e às vezes repete logo em seguida; a cada 2,5–6 s. Texto, botões, navbar e marcas dos cantos são recortados da imagem (folga de 16 px). Continua pausando fora da tela/aba oculta e desligado com `prefers-reduced-motion`. As cores chegam ao canvas por custom properties em `.pixel-glitch` (`_pixel-glitch.scss`), sem hex fora de `_colors.scss`; o laranja, antes reservado, passou a ser usado |
| 2026-10-04 | Glitch só com as cores principais | A pedido do usuário, as rajadas do `PixelGlitch` passaram a usar apenas a cor de destaque (verde) e a secundária (violeta): barras em verde com poucos pedaços violeta, faixas em violeta com poucos pedaços verdes. Saíram o laranja `$orange` (volta a ficar reservado) e o branco. Custom properties renomeadas para `--glitch-primary` e `--glitch-secondary` em `_pixel-glitch.scss` |
| 2026-10-04 | Slider de ferramentas volta para baixo do hero | A pedido do usuário, o `ToolsMarquee` verde saiu de dentro do hero e voltou a ser um bloco solto no `<main>`, logo depois do `<Hero />` e antes do Sobre, como antes do commit `ec30bc4`. O hero volta a ocupar a tela inteira (sem `padding-bottom: 0`) com o texto centralizado em `.hero__content`. O modificador `marquee--page` ficou só com a remoção da sangria lateral; a remoção da borda de baixo virou `marquee--end` (prop `end`), usada só no slider violeta entre Contato e Footer |
| 2026-10-04 | Música de fundo e botão de som na navbar | A pedido do usuário. Novo `AudioToggle` (`[ ♪ Som ]` / `[ ♪ Mudo ]`, só o ícone em telas estreitas) na navbar, antes do botão de tema, e hook `useAudio`: toca em loop o arquivo `src/assets/audio/audio-cyberpunk.mp3`, fornecido pelo usuário (importado em `content.ts` como `AUDIO_SRC`; o Vite gera a URL com hash), em volume baixo (0,35). Como os navegadores bloqueiam som antes de interação, começa no primeiro clique, toque ou tecla; mutar/desmutar tem fade de 0,4 s (GSAP; sem fade com movimento reduzido), a escolha fica em `localStorage` (`audio-muted`) e quem já tinha mutado não ouve nada sozinho. Pausa com a aba oculta. Se o áudio não carregar, o botão não aparece. Textos `audio` nos 5 idiomas em `messages.ts`. O arquivo (~3 MB) está sem commit; a licença de uso é responsabilidade do usuário |
| 2026-10-04 | Áudio tenta iniciar ao abrir o site | A pedido do usuário, o `useAudio` chama `play()` assim que o site abre, em vez de esperar o primeiro gesto. Os navegadores (Chrome, Safari, Firefox) só deixam isso passar se o visitante já tiver interagido com o site antes, tiver liberado o som para ele ou, no Chrome, tiver bom histórico de uso do site; para a maioria dos visitantes novos o `play()` é recusado e o fallback de iniciar no primeiro clique/toque/tecla continua valendo. Não existe forma de contornar esse bloqueio com som |
| 2026-10-04 | Correção: clicar em "Som" iniciava e logo mutava a música | Quando o autoplay era recusado, o `pointerdown` no botão disparava o início por gesto e o `click` seguinte, vendo a música já tocando, a mutava. Correções no `useAudio`: o gesto que vem do `.audio-toggle` não inicia a música (o botão decide sozinho); e o estado do botão passou a ser `playing` (só verdadeiro com a música realmente tocando), então antes de tocar ele mostra "Mudo" e o clique toca; com ela tocando, o clique muta |
| 2026-10-04 | Botão de som vira o GIF de ondas, sem fundo | A pedido do usuário, o texto `[ ♪ Som ]` do botão foi trocado pelo GIF `icons8-audio-wave.gif` (50×50, 28 quadros de 40 ms, ondas pretas em fundo branco opaco), e o fundo foi removido. GIF não pode ser pausado nem ter fundo transparente com boa suavização, então dele saíram dois WebP com alfa (alfa = 255 − luminosidade; preto com transparência): `public/audio-wave.webp` (animado, mesmos 28 quadros) e `public/audio-wave-paused.webp` (quadro 0, estático), trocados conforme o áudio toca ou não. O botão mostra só a imagem (20 px); o antigo texto virou `title`. A cor das ondas vem de `filter: invert(1)` em `_navbar.scss` (brancas sobre navbar escura, pretas sobre clara), para os dois temas, a barra no topo e o hover. O GIF original ficou em `public/` como fonte e pode ser apagado. Atenção: o ícone parece ser do Icons8, cujo plano gratuito exige crédito/link no site |
| 2026-10-04 | Correção: botão de som desalinhado na navbar | O `.navbar__actions` alinha pela linha de base (`align-items: baseline`) e a linha de base de um botão com `<img>` é a borda de baixo da imagem, então o botão subia; além disso ele era ~4px mais alto (padding 4px 8px e ícone de 20 px). Agora `.audio-toggle` tem `align-self: center`, o mesmo `padding: 2px 10px` dos outros botões e o ícone com `1.28rem` (uma linha de texto do `.label`), ficando com a mesma altura de "Português" e "[ Escuro ]" |
