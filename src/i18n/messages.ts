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
    items: [
      { title: 'Projeto Um', description: 'API REST com autenticação e painel.' },
      { title: 'Projeto Dois', description: 'App em tempo real com WebSockets.' },
      { title: 'Projeto Três', description: 'E-commerce full stack.' },
      { title: 'Projeto Quatro', description: 'Dashboard de métricas com gráficos.' },
      { title: 'Projeto Cinco', description: 'Automação de deploy com CI/CD.' },
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
    items: [
      { title: 'Project One', description: 'REST API with authentication and dashboard.' },
      { title: 'Project Two', description: 'Real-time app with WebSockets.' },
      { title: 'Project Three', description: 'Full stack e-commerce.' },
      { title: 'Project Four', description: 'Metrics dashboard with charts.' },
      { title: 'Project Five', description: 'Deploy automation with CI/CD.' },
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
    items: [
      { title: '项目一', description: '带身份验证和管理面板的 REST API。' },
      { title: '项目二', description: '使用 WebSockets 的实时应用。' },
      { title: '项目三', description: '全栈电商平台。' },
      { title: '项目四', description: '带图表的指标仪表盘。' },
      { title: '项目五', description: '使用 CI/CD 的自动化部署。' },
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
    items: [
      { title: 'Proyecto Uno', description: 'API REST con autenticación y panel.' },
      { title: 'Proyecto Dos', description: 'App en tiempo real con WebSockets.' },
      { title: 'Proyecto Tres', description: 'E-commerce full stack.' },
      { title: 'Proyecto Cuatro', description: 'Dashboard de métricas con gráficos.' },
      { title: 'Proyecto Cinco', description: 'Automatización de despliegue con CI/CD.' },
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
    items: [
      { title: 'Projet Un', description: 'API REST avec authentification et tableau de bord.' },
      { title: 'Projet Deux', description: 'Application en temps réel avec WebSockets.' },
      { title: 'Projet Trois', description: 'E-commerce full stack.' },
      { title: 'Projet Quatre', description: 'Tableau de bord de métriques avec graphiques.' },
      { title: 'Projet Cinq', description: 'Automatisation du déploiement avec CI/CD.' },
    ],
  },
  skills: { label: 'Compétences', heading: 'Stack', groups: { frontend: 'Frontend', backend: 'Backend', tools: 'Outils' } },
  experience: { label: 'Expérience', heading: 'Parcours', present: "aujourd'hui", role: 'Poste', company: 'Entreprise' },
  contact: { label: 'Contact', big: ['Parlons', 'ensemble'], email: 'E-mail', github: 'GitHub', linkedin: 'LinkedIn' },
  footer: '© {year} Lucas Luna // fin de la transmission',
}

export const messages: Record<Lang, Messages> = { pt, en, zh, es, fr }

export const isLang = (v: unknown): v is Lang => typeof v === 'string' && v in messages
