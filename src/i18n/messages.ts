// Textos do site em cada idioma. O português é o padrão e define o formato (`Messages`):
// os outros idiomas precisam ter exatamente as mesmas chaves.

export type Lang = 'pt' | 'en' | 'zh' | 'es' | 'fr'

export const LANGS: { code: Lang; label: string; html: string }[] = [
  { code: 'pt', label: 'Português', html: 'pt-BR' },
  { code: 'en', label: 'English', html: 'en' },
  { code: 'zh', label: '中文', html: 'zh-CN' },
  { code: 'es', label: 'Español', html: 'es' },
  { code: 'fr', label: 'Français', html: 'fr' },
]

const pt = {
  meta: { title: 'Portfólio | Full Stack' },
  nav: { inicio: 'Início', sobre: 'Sobre', projetos: 'Projetos', habilidades: 'Habilidades', experiencia: 'Experiência', contato: 'Contato' },
  menu: { open: 'Menu', close: 'Fechar' },
  theme: { light: 'Claro', dark: 'Escuro', aria: 'Alternar tema claro/escuro' },
  language: { label: 'Idioma' },
  hero: { label: 'Olá, eu sou', subtitle: 'Desenvolvedor Full Stack', seeProjects: 'Ver projetos', contact: 'Contato' },
  about: {
    label: 'Sobre',
    hook: 'Desenvolvedor full stack, do banco de dados à interface',
    title: ['Construo da API', 'até a interface'],
    paragraphs: [
      'Escreva aqui um resumo curto sobre você: o que gosta de construir, as tecnologias com que trabalha e o tipo de problema que gosta de resolver.',
      'No segundo parágrafo, conte o que busca agora: o tipo de projeto, de time ou de desafio em que quer se envolver.',
    ],
    photo: '[ foto ]',
    photoAlt: 'Foto de Lucas Luna',
  },
  projects: {
    label: 'Projetos',
    heading: 'Trabalhos',
    prev: 'Projetos anteriores',
    next: 'Próximos projetos',
    slider: 'Slider de projetos',
    view: 'Ver projeto →',
    toolsLabel: 'Ferramentas',
    stackLabel: 'Stack',
    toolsAria: 'Ferramentas utilizadas nos projetos',
    modal: { close: 'Fechar', role: 'Função', year: 'Ano', stack: 'Stack', demo: 'Demo', code: 'Código', highlights: 'Destaques', gallery: 'Imagens', imagePlaceholder: '[ imagem ]', imageAlt: 'Imagem do projeto' },
    items: [
      {
        title: 'Projeto Um',
        description: 'API REST com autenticação e painel.',
        details: { role: "Desenvolvedor full stack", overview: "Plataforma com API REST e painel administrativo. Descreva aqui o problema que ela resolve, para quem foi feita e como o projeto nasceu.", highlights: ["Autenticação com tokens e controle de permissões", "Painel com métricas e filtros", "Documentação da API e testes automatizados"] },
      },
      {
        title: 'Projeto Dois',
        description: 'App em tempo real com WebSockets.',
        details: { role: "Desenvolvedor full stack", overview: "Aplicação em tempo real com comunicação bidirecional. Conte o contexto do projeto e as principais decisões técnicas.", highlights: ["Atualizações instantâneas com WebSockets", "Salas e presença de usuários", "Reconexão automática e tratamento de falhas"] },
      },
      {
        title: 'Projeto Três',
        description: 'E-commerce full stack.',
        details: { role: "Desenvolvedor full stack", overview: "Loja virtual completa, do catálogo ao pagamento. Explique os desafios e o que você aprendeu.", highlights: ["Catálogo, carrinho e checkout", "Pagamentos integrados com Stripe", "Painel de pedidos e estoque"] },
      },
      {
        title: 'Projeto Quatro',
        description: 'Dashboard de métricas com gráficos.',
        details: { role: "Desenvolvedor full stack", overview: "Painel de métricas com visualização de dados. Descreva as fontes de dados e o público.", highlights: ["Gráficos interativos e filtros por período", "Atualização periódica dos dados", "Empacotamento com Docker"] },
      },
      {
        title: 'Projeto Cinco',
        description: 'Automação de deploy com CI/CD.',
        details: { role: "Desenvolvedor full stack", overview: "Pipeline de integração e entrega contínuas. Explique o fluxo antes e depois da automação.", highlights: ["Build, testes e deploy automáticos a cada push", "Ambientes reproduzíveis com contêineres", "Notificação de falhas e rollback simples"] },
      },
    ],
  },
  skills: { label: 'Habilidades', heading: 'Stack', groups: { frontend: 'Frontend', backend: 'Backend', tools: 'Ferramentas' } },
  experience: { label: 'Experiência', heading: 'Trajetória', present: 'hoje', role: 'Cargo', company: 'Empresa' },
  contact: { label: 'Contato', big: ['Vamos', 'conversar'], email: 'E-mail', github: 'GitHub', linkedin: 'LinkedIn' },
  footer: '© {year} Lucas Luna // fim da transmissão',
}

export type Messages = typeof pt

const en: Messages = {
  meta: { title: 'Portfolio | Full Stack' },
  nav: { inicio: 'Home', sobre: 'About', projetos: 'Projects', habilidades: 'Skills', experiencia: 'Experience', contato: 'Contact' },
  menu: { open: 'Menu', close: 'Close' },
  theme: { light: 'Light', dark: 'Dark', aria: 'Toggle light/dark theme' },
  language: { label: 'Language' },
  hero: { label: "Hello, I'm", subtitle: 'Full Stack Developer', seeProjects: 'See projects', contact: 'Contact' },
  about: {
    label: 'About',
    hook: 'Full stack developer, from the database to the interface',
    title: ['I build everything', 'from API to UI'],
    paragraphs: [
      'Write a short summary about yourself here: what you like to build, the technologies you work with and the kind of problem you enjoy solving.',
      'In the second paragraph, say what you are looking for now: the kind of project, team or challenge you want to get involved in.',
    ],
    photo: '[ photo ]',
    photoAlt: 'Photo of Lucas Luna',
  },
  projects: {
    label: 'Projects',
    heading: 'Work',
    prev: 'Previous projects',
    next: 'Next projects',
    slider: 'Projects slider',
    view: 'View project →',
    toolsLabel: 'Tools',
    stackLabel: 'Stack',
    toolsAria: 'Tools used in the projects',
    modal: { close: 'Close', role: 'Role', year: 'Year', stack: 'Stack', demo: 'Demo', code: 'Code', highlights: 'Highlights', gallery: 'Images', imagePlaceholder: '[ image ]', imageAlt: 'Project image' },
    items: [
      {
        title: 'Project One',
        description: 'REST API with authentication and dashboard.',
        details: { role: "Full stack developer", overview: "Platform with a REST API and an admin dashboard. Describe here the problem it solves, who it was built for and how the project started.", highlights: ["Token authentication and permission control", "Dashboard with metrics and filters", "API documentation and automated tests"] },
      },
      {
        title: 'Project Two',
        description: 'Real-time app with WebSockets.',
        details: { role: "Full stack developer", overview: "Real-time application with two-way communication. Describe the project context and the main technical decisions.", highlights: ["Instant updates with WebSockets", "Rooms and user presence", "Automatic reconnection and failure handling"] },
      },
      {
        title: 'Project Three',
        description: 'Full stack e-commerce.',
        details: { role: "Full stack developer", overview: "Complete online store, from catalog to payment. Explain the challenges and what you learned.", highlights: ["Catalog, cart and checkout", "Payments integrated with Stripe", "Order and stock dashboard"] },
      },
      {
        title: 'Project Four',
        description: 'Metrics dashboard with charts.',
        details: { role: "Full stack developer", overview: "Metrics dashboard with data visualization. Describe the data sources and the audience.", highlights: ["Interactive charts and date filters", "Periodic data refresh", "Packaged with Docker"] },
      },
      {
        title: 'Project Five',
        description: 'Deploy automation with CI/CD.',
        details: { role: "Full stack developer", overview: "Continuous integration and delivery pipeline. Explain the workflow before and after automation.", highlights: ["Automatic build, tests and deploy on every push", "Reproducible environments with containers", "Failure alerts and simple rollback"] },
      },
    ],
  },
  skills: { label: 'Skills', heading: 'Stack', groups: { frontend: 'Frontend', backend: 'Backend', tools: 'Tools' } },
  experience: { label: 'Experience', heading: 'Career', present: 'present', role: 'Role', company: 'Company' },
  contact: { label: 'Contact', big: ["Let's", 'talk'], email: 'E-mail', github: 'GitHub', linkedin: 'LinkedIn' },
  footer: '© {year} Lucas Luna // end of transmission',
}

const zh: Messages = {
  meta: { title: '作品集 | 全栈开发' },
  nav: { inicio: '首页', sobre: '关于', projetos: '项目', habilidades: '技能', experiencia: '经历', contato: '联系' },
  menu: { open: '菜单', close: '关闭' },
  theme: { light: '浅色', dark: '深色', aria: '切换浅色/深色主题' },
  language: { label: '语言' },
  hero: { label: '你好，我是', subtitle: '全栈开发工程师', seeProjects: '查看项目', contact: '联系我' },
  about: {
    label: '关于',
    hook: '全栈开发工程师，从数据库到界面',
    title: ['我负责从 API', '到界面的一切'],
    paragraphs: [
      '在这里简要介绍你自己：你喜欢构建什么、使用哪些技术，以及喜欢解决哪类问题。',
      '第二段写下你现在的目标：想参与什么类型的项目、团队或挑战。',
    ],
    photo: '[ 照片 ]',
    photoAlt: '卢卡斯·卢纳的照片',
  },
  projects: {
    label: '项目',
    heading: '作品',
    prev: '上一个项目',
    next: '下一个项目',
    slider: '项目滑动展示',
    view: '查看项目 →',
    toolsLabel: '工具',
    stackLabel: '技术栈',
    toolsAria: '项目中使用的工具',
    modal: { close: '关闭', role: '职责', year: '年份', stack: '技术栈', demo: '演示', code: '代码', highlights: '亮点', gallery: '图片', imagePlaceholder: '[ 图片 ]', imageAlt: '项目图片' },
    items: [
      {
        title: '项目一',
        description: '带身份验证和管理面板的 REST API。',
        details: { role: "全栈开发工程师", overview: "带有 REST API 和管理面板的平台。请在这里说明它解决的问题、面向的用户以及项目的由来。", highlights: ["基于令牌的身份验证与权限控制", "带指标和筛选的管理面板", "API 文档与自动化测试"] },
      },
      {
        title: '项目二',
        description: '使用 WebSockets 的实时应用。',
        details: { role: "全栈开发工程师", overview: "支持双向通信的实时应用。请在这里介绍项目背景和主要技术决策。", highlights: ["使用 WebSockets 即时更新", "房间与用户在线状态", "自动重连与故障处理"] },
      },
      {
        title: '项目三',
        description: '全栈电商平台。',
        details: { role: "全栈开发工程师", overview: "从商品目录到支付的完整网上商店。请说明遇到的挑战和你的收获。", highlights: ["商品目录、购物车与结算", "集成 Stripe 支付", "订单与库存管理面板"] },
      },
      {
        title: '项目四',
        description: '带图表的指标仪表盘。',
        details: { role: "全栈开发工程师", overview: "带数据可视化的指标仪表盘。请说明数据来源和目标用户。", highlights: ["交互式图表与时间筛选", "定期刷新数据", "使用 Docker 打包"] },
      },
      {
        title: '项目五',
        description: '使用 CI/CD 的自动化部署。',
        details: { role: "全栈开发工程师", overview: "持续集成与持续交付流水线。请说明自动化前后的工作流程。", highlights: ["每次推送自动构建、测试和部署", "使用容器的可复现环境", "故障通知与简单回滚"] },
      },
    ],
  },
  skills: { label: '技能', heading: '技术栈', groups: { frontend: '前端', backend: '后端', tools: '工具' } },
  experience: { label: '经历', heading: '职业历程', present: '至今', role: '职位', company: '公司' },
  contact: { label: '联系', big: ['让我们', '聊聊'], email: '邮箱', github: 'GitHub', linkedin: 'LinkedIn' },
  footer: '© {year} Lucas Luna // 传输结束',
}

const es: Messages = {
  meta: { title: 'Portafolio | Full Stack' },
  nav: { inicio: 'Inicio', sobre: 'Sobre mí', projetos: 'Proyectos', habilidades: 'Habilidades', experiencia: 'Experiencia', contato: 'Contacto' },
  menu: { open: 'Menú', close: 'Cerrar' },
  theme: { light: 'Claro', dark: 'Oscuro', aria: 'Cambiar tema claro/oscuro' },
  language: { label: 'Idioma' },
  hero: { label: 'Hola, soy', subtitle: 'Desarrollador Full Stack', seeProjects: 'Ver proyectos', contact: 'Contacto' },
  about: {
    label: 'Sobre mí',
    hook: 'Desarrollador full stack, de la base de datos a la interfaz',
    title: ['Construyo desde la API', 'hasta la interfaz'],
    paragraphs: [
      'Escribe aquí un resumen corto sobre ti: lo que te gusta construir, las tecnologías con las que trabajas y el tipo de problema que te gusta resolver.',
      'En el segundo párrafo cuenta lo que buscas ahora: el tipo de proyecto, equipo o desafío en el que quieres participar.',
    ],
    photo: '[ foto ]',
    photoAlt: 'Foto de Lucas Luna',
  },
  projects: {
    label: 'Proyectos',
    heading: 'Trabajos',
    prev: 'Proyectos anteriores',
    next: 'Siguientes proyectos',
    slider: 'Carrusel de proyectos',
    view: 'Ver proyecto →',
    toolsLabel: 'Herramientas',
    stackLabel: 'Stack',
    toolsAria: 'Herramientas utilizadas en los proyectos',
    modal: { close: 'Cerrar', role: 'Rol', year: 'Año', stack: 'Stack', demo: 'Demo', code: 'Código', highlights: 'Aspectos destacados', gallery: 'Imágenes', imagePlaceholder: '[ imagen ]', imageAlt: 'Imagen del proyecto' },
    items: [
      {
        title: 'Proyecto Uno',
        description: 'API REST con autenticación y panel.',
        details: { role: "Desarrollador full stack", overview: "Plataforma con API REST y panel de administración. Describe aquí el problema que resuelve, para quién se hizo y cómo nació el proyecto.", highlights: ["Autenticación con tokens y control de permisos", "Panel con métricas y filtros", "Documentación de la API y pruebas automatizadas"] },
      },
      {
        title: 'Proyecto Dos',
        description: 'App en tiempo real con WebSockets.',
        details: { role: "Desarrollador full stack", overview: "Aplicación en tiempo real con comunicación bidireccional. Cuenta el contexto del proyecto y las principales decisiones técnicas.", highlights: ["Actualizaciones instantáneas con WebSockets", "Salas y presencia de usuarios", "Reconexión automática y manejo de fallos"] },
      },
      {
        title: 'Proyecto Tres',
        description: 'E-commerce full stack.',
        details: { role: "Desarrollador full stack", overview: "Tienda en línea completa, del catálogo al pago. Explica los desafíos y lo que aprendiste.", highlights: ["Catálogo, carrito y checkout", "Pagos integrados con Stripe", "Panel de pedidos y stock"] },
      },
      {
        title: 'Proyecto Cuatro',
        description: 'Dashboard de métricas con gráficos.',
        details: { role: "Desarrollador full stack", overview: "Panel de métricas con visualización de datos. Describe las fuentes de datos y el público.", highlights: ["Gráficos interactivos y filtros por período", "Actualización periódica de los datos", "Empaquetado con Docker"] },
      },
      {
        title: 'Proyecto Cinco',
        description: 'Automatización de despliegue con CI/CD.',
        details: { role: "Desarrollador full stack", overview: "Pipeline de integración y entrega continuas. Explica el flujo antes y después de la automatización.", highlights: ["Build, pruebas y despliegue automáticos en cada push", "Entornos reproducibles con contenedores", "Aviso de fallos y rollback sencillo"] },
      },
    ],
  },
  skills: { label: 'Habilidades', heading: 'Stack', groups: { frontend: 'Frontend', backend: 'Backend', tools: 'Herramientas' } },
  experience: { label: 'Experiencia', heading: 'Trayectoria', present: 'hoy', role: 'Cargo', company: 'Empresa' },
  contact: { label: 'Contacto', big: ['Hablemos', 'juntos'], email: 'Correo', github: 'GitHub', linkedin: 'LinkedIn' },
  footer: '© {year} Lucas Luna // fin de la transmisión',
}

const fr: Messages = {
  meta: { title: 'Portfolio | Full Stack' },
  nav: { inicio: 'Accueil', sobre: 'À propos', projetos: 'Projets', habilidades: 'Compétences', experiencia: 'Expérience', contato: 'Contact' },
  menu: { open: 'Menu', close: 'Fermer' },
  theme: { light: 'Clair', dark: 'Sombre', aria: 'Basculer entre thème clair et sombre' },
  language: { label: 'Langue' },
  hero: { label: 'Bonjour, je suis', subtitle: 'Développeur Full Stack', seeProjects: 'Voir les projets', contact: 'Contact' },
  about: {
    label: 'À propos',
    hook: "Développeur full stack, de la base de données à l'interface",
    title: ["Je construis de l'API", "jusqu'à l'interface"],
    paragraphs: [
      "Écrivez ici un court résumé sur vous : ce que vous aimez construire, les technologies que vous utilisez et le type de problème que vous aimez résoudre.",
      "Dans le deuxième paragraphe, dites ce que vous recherchez maintenant : le type de projet, d'équipe ou de défi qui vous intéresse.",
    ],
    photo: '[ photo ]',
    photoAlt: 'Photo de Lucas Luna',
  },
  projects: {
    label: 'Projets',
    heading: 'Réalisations',
    prev: 'Projets précédents',
    next: 'Projets suivants',
    slider: 'Carrousel de projets',
    view: 'Voir le projet →',
    toolsLabel: 'Outils',
    stackLabel: 'Stack',
    toolsAria: 'Outils utilisés dans les projets',
    modal: { close: 'Fermer', role: 'Rôle', year: 'Année', stack: 'Stack', demo: 'Démo', code: 'Code', highlights: 'Points forts', gallery: 'Images', imagePlaceholder: '[ image ]', imageAlt: 'Image du projet' },
    items: [
      {
        title: 'Projet Un',
        description: 'API REST avec authentification et tableau de bord.',
        details: { role: "Développeur full stack", overview: "Plateforme avec une API REST et un tableau de bord d'administration. Décrivez ici le problème qu'elle résout, pour qui elle a été conçue et comment le projet est né.", highlights: ["Authentification par jetons et contrôle des permissions", "Tableau de bord avec métriques et filtres", "Documentation de l'API et tests automatisés"] },
      },
      {
        title: 'Projet Deux',
        description: 'Application en temps réel avec WebSockets.',
        details: { role: "Développeur full stack", overview: "Application en temps réel avec communication bidirectionnelle. Racontez le contexte du projet et les principales décisions techniques.", highlights: ["Mises à jour instantanées avec WebSockets", "Salons et présence des utilisateurs", "Reconnexion automatique et gestion des pannes"] },
      },
      {
        title: 'Projet Trois',
        description: 'E-commerce full stack.',
        details: { role: "Développeur full stack", overview: "Boutique en ligne complète, du catalogue au paiement. Expliquez les défis et ce que vous avez appris.", highlights: ["Catalogue, panier et paiement", "Paiements intégrés avec Stripe", "Tableau de bord des commandes et du stock"] },
      },
      {
        title: 'Projet Quatre',
        description: 'Tableau de bord de métriques avec graphiques.',
        details: { role: "Développeur full stack", overview: "Tableau de bord de métriques avec visualisation de données. Décrivez les sources de données et le public.", highlights: ["Graphiques interactifs et filtres par période", "Actualisation périodique des données", "Empaquetage avec Docker"] },
      },
      {
        title: 'Projet Cinq',
        description: 'Automatisation du déploiement avec CI/CD.',
        details: { role: "Développeur full stack", overview: "Pipeline d'intégration et de livraison continues. Expliquez le flux avant et après l'automatisation.", highlights: ["Build, tests et déploiement automatiques à chaque push", "Environnements reproductibles avec des conteneurs", "Alertes en cas d'échec et rollback simple"] },
      },
    ],
  },
  skills: { label: 'Compétences', heading: 'Stack', groups: { frontend: 'Frontend', backend: 'Backend', tools: 'Outils' } },
  experience: { label: 'Expérience', heading: 'Parcours', present: "aujourd'hui", role: 'Poste', company: 'Entreprise' },
  contact: { label: 'Contact', big: ['Parlons', 'ensemble'], email: 'E-mail', github: 'GitHub', linkedin: 'LinkedIn' },
  footer: '© {year} Lucas Luna // fin de la transmission',
}

export const messages: Record<Lang, Messages> = { pt, en, zh, es, fr }

export const isLang = (v: unknown): v is Lang => typeof v === 'string' && v in messages
