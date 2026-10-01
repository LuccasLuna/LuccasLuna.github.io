# Ideias

Anotações do usuário sobre a direção do portfólio. Consultar antes de criar seções ou componentes novos.

## Anotação original

eu quero criar um portfolio com um design iterativo, bastante letras grandes(busque na internet, ideias de referencia de sites com letras grandes), com  referencias cyberpunk(gênero, não jogo) e referencia ao design do jogo marathon. Alem disso, o site deve ser intuitivo, e apesar de referencias cyberpunk não ser muito poluido visualmente a ponto do usuário ficar confuso com as informações na tela

## Resumo por tópico

- **Interatividade:** design interativo (o texto original diz "iterativo").
- **Tipografia:** muitas letras grandes. Referências pesquisadas abaixo.
- **Estética:** referências ao gênero cyberpunk (não ao jogo) e ao design do jogo Marathon.
- **Usabilidade:** site intuitivo.
- **Restrição:** apesar do cyberpunk, não pode ficar poluído visualmente a ponto de confundir o usuário com as informações na tela. Clareza vem antes do efeito.

## Referências pesquisadas

**Cyberpunk:** Lukasz Macon (Awwwards 2021), Jesse Zhou (ramen shop em Three.js), templates [afom12](https://github.com/afom12/Cyberpunk-Portfolio), [shinchan1907](https://github.com/shinchan1907/cyberpunk-portfolio), [TricksyPixel](https://github.com/TricksyPixel/cyberpunk-portfolio), [Awwwards "cyberpunk"](https://www.awwwards.com/inspiration_search/cyberpunk/).

**Letras grandes:** Christian Kaisermann (ruído, tipografia enorme, microinterações), Jacek Hirsz (verde vibrante sobre escuro), Maxim Aginsky (outlines e hovers), Patrick David (texto riscado), Bruno Simon (interatividade 3D). Evitar o excesso do estilo maximalista de Creative Giants.

**Marathon:** estilo "Graphic Realism" (alto contraste, formas brutalistas; influências: Wipeout, Ghost in the Shell, The Designers Republic). Fontes KH Interference (mono, paga, [khtype.com](https://khtype.com/); usamos Space Mono como substituta gratuita) e Shapiro Wide 65; paleta amarelo-ácido sobre preto. [Creative Bloq](https://www.creativebloq.com/3d/video-game-design/bungies-art-director-explains-marathons-controversial-art-style), [Fonts In Use](https://fontsinuse.com/uses/67879/marathon-2026-video-game-1). Crítica a evitar: [UI com fontes e enfeites competindo](https://josephkerrdesign.com/bungies-overdesigned-uis-what-marathon-gets-wrong/).

**Paleta em uso (Marathon):** accent `#C2FE0B`, fundo `#080A0E`, texto `#E8EDDF`, magenta `#EA027E`; reservadas violeta `#3601FB`, ciano `#01FFFF`, laranja `#FF5500`. Valores de um [tema de fã](https://github.com/Samat220/omarchy-marathon-theme), não de fonte oficial.

## Libs de efeitos de scroll (React)

- **Motion** (ex-Framer Motion, ~32KB): adotada. Revelar ao entrar na tela, parallax leve e barra de progresso.
- **GSAP + ScrollTrigger** (~48KB, grátis): alternativa para timelines, pin e scrub ao estilo Awwwards. Já instalado para o ScrambleTextPlugin (efeito de letras aleatórias no nome).
- **Lenis**: scroll suave com inércia; pode ser somado a Motion ou GSAP no futuro.
- react-scroll-parallax (só parallax) e AOS (animações de entrada prontas, mais antiga): descartadas.
Fontes: [LogRocket](https://blog.logrocket.com/best-react-animation-libraries/), [annnimate](https://annnimate.com/compare/react-animation-libraries).

**Tema claro:** derivado por nós (não é do Marathon): fundo `#F4F5EE`, texto `#14171C`, destaque verde escuro `#4D6B00` (o acid não tem contraste sobre claro), magenta `#C4006A`.

**Layout da seção Sobre:** inspirado no site do Marathon: linha de gancho em mono, título gigante em 2 linhas, texto mono caixa alta à esquerda e imagem grande à direita encostando na borda da tela.

**Etiquetas técnicas:** elementos decorativos em mono, estilo etiqueta de container de carga, com dados de dev (Docker, CPU/memória, pacote de rede). Manter em baixo contraste para não poluir.

**Links estilo Marathon:** marcador `[↗]` antes do texto e faixa vertical de listras diagonais na cor de destaque na borda esquerda (aplicado aos botões do Contato).

**Marcas nos cantos:** mira, xadrez, faixa vertical com código de barras/ícones/texto e logo em pixel, fixos nos cantos da janela. Usar marca e texto próprios, não os do jogo.

