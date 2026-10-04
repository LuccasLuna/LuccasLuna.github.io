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
  audio: { on: 'Som', off: 'Mudo', aria: 'Ligar/desligar a música' },
  language: { label: 'Idioma' },
  hero: { label: 'Olá, eu sou', subtitle: 'Desenvolvedor Full Stack', seeProjects: 'Ver projetos', contact: 'Contato' },
  about: {
    label: 'Sobre',
    hook: 'Desenvolvedor full stack, do banco de dados à interface',
    title: ['Da API', 'até a interface'],
    paragraphs: [
      'Desenvolvo sistemas web para o setor público, com foco em front-end com React e TypeScript e atuação full stack com NestJS. Fui o principal desenvolvedor front-end de sistemas de gestão de frota, de convênios com municípios e de compras públicas da agricultura familiar, construindo as telas do zero: da autenticação e do controle de acesso aos relatórios e à geração de documentos.',
      'Comecei mantendo um sistema legado em PHP/Laravel e ajudei a reescrevê-lo em uma stack moderna. No dia a dia também cuido de containerização e deploy com Docker e Nginx. Busco projetos em que eu possa ir da API à interface, com atenção à qualidade do código e à experiência de quem usa.',
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
        title: 'Gestão de Frota',
        description: 'Controle de veículos, viagens e tráfego para um órgão público.',
        details: { role: 'Desenvolvedor front-end principal', overview: 'Nova versão de um sistema de gestão de frota do setor público, escrita do zero para substituir um sistema legado. Controla veículos e locadoras, requisições e autorizações de viagem, habilitação de motoristas, saída e retorno dos carros e os gastos mensais com combustível e despesas.', contribution: 'Fui o principal desenvolvedor do front-end. Construí o cadastro de veículos e locadoras, com busca por CEP e validação de CNPJ, e montei o fluxo de requerimento e autorização de transporte de ponta a ponta. Também desenvolvi o controle de saída e retorno dos veículos, com impressão e exportação de relatórios, integrei o sistema ao login único do portal e configurei o Docker para desenvolvimento e produção.' },
      },
      {
        title: 'Registro de Produção Rural',
        description: 'Cadastro de lotes, produção e beneficiários de assentamentos.',
        details: { role: 'Desenvolvedor full stack', overview: 'Sistema de cadastro de campo de assentamentos rurais: lotes, produção e beneficiários. Atuei da API até a interface, criando módulos completos e cuidando do empacotamento e do deploy.', contribution: 'Trabalhei como full stack, criando módulos completos da API até a tela: produtos, safras, captação de água e produção geral, além do gerenciamento de acessos. No servidor, escrevi os endpoints em NestJS com Fastify e TypeORM; no front, as telas em React. Também configurei o deploy com Docker e Nginx.' },
      },
      {
        title: 'Compras Públicas',
        description: 'Plataforma de chamadas públicas de compra da agricultura familiar.',
        details: { role: 'Desenvolvedor front-end', overview: 'Plataforma que digitaliza as chamadas públicas de compra de alimentos da agricultura familiar, do cadastro do edital à geração das minutas e atas de sessão. Fui responsável pelo front-end de ponta a ponta.', contribution: 'Fui responsável pelo front-end de ponta a ponta. Criei o cadastro de editais em etapas, com campos dinâmicos e editor de texto rico, e as telas de edição, pré-visualização e download de minutas e atas. Desenvolvi a gestão de cooperativas e filiados, com validação de documentos, e implementei a autenticação completa — cadastro, login, recuperação de senha e refresh token — junto com as permissões por perfil e por unidade.' },
      },
      {
        title: 'Convênios e Parcerias',
        description: 'Acompanhamento de convênios e contratos com municípios.',
        details: { role: 'Desenvolvedor front-end principal', overview: 'Sistema que gerencia os convênios e parcerias de um órgão público com municípios: projetos, processos, fases de trabalho, aditamentos e títulos. Construí o front-end do zero.', contribution: 'Fui o principal desenvolvedor do front-end e construí as telas do zero. Fiz o gerenciamento e o acompanhamento de projetos e processos, o cadastro de territórios, municípios e localizações e o upload e a visualização de anexos. Criei também os relatórios gerenciais, com filtros múltiplos e exportação, e implementei o login, o controle de acesso por nível de usuário e a proteção de rotas.' },
      },
      {
        title: 'Painel de Indicadores',
        description: 'Dashboards gerenciais das diretorias de um órgão público.',
        details: { role: 'Desenvolvedor full stack', overview: 'Painel gerencial com indicadores de licitações, contratos, assistência técnica rural, regularização fundiária e produção de campo, usado pelas diretorias para acompanhar metas.', contribution: 'Atuei nos dois lados do painel. Criei os filtros por safra, lote e período que alimentam os dashboards e montei os gráficos interativos com ECharts. Implementei a autenticação e as permissões de acesso, e conteinerizei o front-end e o back-end com Docker.' },
      },
      {
        title: 'Portal e Login Único',
        description: 'Portal central com SSO para todos os sistemas da organização.',
        details: { role: 'Desenvolvedor full stack', overview: 'Portal central que concentra o login único (SSO) e dá acesso a todos os sistemas da organização, com um serviço de autenticação próprio.', contribution: 'Implementei a nova tela de login, o cadastro e a recuperação de senha, além do controle de tokens. Integrei os demais sistemas ao portal usando Module Federation e, no serviço de autenticação, criei o endpoint de validação do token.' },
      },
      {
        title: 'Frota — Sistema Legado',
        description: 'Manutenção e evolução do sistema de frota anterior, em PHP.',
        details: { role: 'Desenvolvedor full stack', overview: 'Sistema legado de gestão de frota, onde comecei na empresa. Manter e evoluir esse sistema deu a base para a reescrita dele em uma stack moderna.', contribution: 'Foi onde comecei na empresa. Desenvolvi a listagem geral de veículos e o cadastro de locadoras, criei o controle de tráfego — liberação de saída, retorno e finalização — e fiz as telas de combustível, despesas e resumo, com filtros, impressão e exportação para planilha. Manter esse sistema foi o que me deu base para participar da reescrita dele em uma stack moderna.' },
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
  audio: { on: 'Sound', off: 'Muted', aria: 'Turn the music on/off' },
  language: { label: 'Language' },
  hero: { label: "Hello, I'm", subtitle: 'Full Stack Developer', seeProjects: 'See projects', contact: 'Contact' },
  about: {
    label: 'About',
    hook: 'Full stack developer, from the database to the interface',
    title: ['I build everything', 'from API to UI'],
    paragraphs: [
      'I build web systems for the public sector, focused on front-end with React and TypeScript and working full stack with NestJS. I was the lead front-end developer on fleet management, municipal agreements and public procurement systems for family farming, building the screens from scratch: from authentication and access control to reports and document generation.',
      'I started by maintaining a legacy PHP/Laravel system and helped rewrite it on a modern stack. Day to day I also handle containerization and deployment with Docker and Nginx. I am looking for projects where I can go from the API to the interface, with attention to code quality and to the experience of the people who use it.',
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
        title: 'Fleet Management',
        description: 'Vehicle, trip and traffic control for a public agency.',
        details: { role: 'Lead front-end developer', overview: 'New version of a public-sector fleet management system, written from scratch to replace a legacy one. It handles vehicles and rental companies, trip requests and authorizations, driver licensing, vehicle departure and return, and monthly fuel and expense costs.', contribution: 'I was the lead front-end developer. I built the vehicle and rental company registration, with postcode lookup and tax ID validation, and put together the transport request and authorization flow end to end. I also developed the vehicle departure and return control, with report printing and export, integrated the system with the portal single sign-on and set up Docker for development and production.' },
      },
      {
        title: 'Rural Production Records',
        description: 'Records of plots, production and beneficiaries of settlements.',
        details: { role: 'Full stack developer', overview: 'Field record system for rural settlements: plots, production and beneficiaries. I worked from the API to the interface, building complete modules and handling packaging and deployment.', contribution: 'I worked as a full stack developer, building complete modules from the API to the screen: products, harvests, water catchment and general production, plus access management. On the server I wrote the endpoints in NestJS with Fastify and TypeORM; on the front, the screens in React. I also set up the deployment with Docker and Nginx.' },
      },
      {
        title: 'Public Procurement',
        description: 'Platform for public food purchase calls from family farming.',
        details: { role: 'Front-end developer', overview: 'Platform that digitizes public calls for buying food from family farming, from registering the public notice to generating drafts and session minutes. I was responsible for the front-end end to end.', contribution: 'I was responsible for the front-end end to end. I created the step-by-step notice registration, with dynamic fields and a rich text editor, and the screens for editing, previewing and downloading drafts and minutes. I developed the management of cooperatives and their members, with document validation, and implemented the full authentication — sign-up, login, password recovery and refresh token — along with permissions by role and by unit.' },
      },
      {
        title: 'Agreements and Partnerships',
        description: 'Tracking of agreements and contracts with municipalities.',
        details: { role: 'Lead front-end developer', overview: "System that manages a public agency's agreements and partnerships with municipalities: projects, processes, work phases, amendments and titles. I built the front-end from scratch.", contribution: 'I was the lead front-end developer and built the screens from scratch. I handled the management and tracking of projects and processes, the registration of territories, municipalities and locations, and the upload and viewing of attachments. I also created the management reports, with multiple filters and export, and implemented the login, the access control by user level and the route protection.' },
      },
      {
        title: 'Indicators Dashboard',
        description: 'Management dashboards for the boards of a public agency.',
        details: { role: 'Full stack developer', overview: 'Management dashboard with indicators for tenders, contracts, rural technical assistance, land regularization and field production, used by the boards to track targets.', contribution: 'I worked on both sides of the dashboard. I created the filters by harvest, plot and period that feed the dashboards and built the interactive charts with ECharts. I implemented the authentication and the access permissions, and containerized the front-end and the back-end with Docker.' },
      },
      {
        title: 'Portal and Single Sign-On',
        description: 'Central portal with SSO for every system in the organization.',
        details: { role: 'Full stack developer', overview: 'Central portal that holds the single sign-on (SSO) and gives access to every system in the organization, with its own authentication service.', contribution: 'I implemented the new login screen, the sign-up and the password recovery, as well as the token handling. I integrated the other systems into the portal using Module Federation and, in the authentication service, created the token validation endpoint.' },
      },
      {
        title: 'Fleet — Legacy System',
        description: 'Maintenance and evolution of the previous fleet system, in PHP.',
        details: { role: 'Full stack developer', overview: 'Legacy fleet management system, where I started at the company. Maintaining and evolving it laid the groundwork for rewriting it on a modern stack.', contribution: 'This is where I started at the company. I developed the general vehicle listing and the rental company registration, created the traffic control — departure clearance, return and closing — and built the fuel, expense and summary screens, with filters, printing and spreadsheet export. Maintaining this system is what gave me the grounding to take part in rewriting it on a modern stack.' },
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
  audio: { on: '声音', off: '静音', aria: '开启/关闭音乐' },
  language: { label: '语言' },
  hero: { label: '你好，我是', subtitle: '全栈开发工程师', seeProjects: '查看项目', contact: '联系我' },
  about: {
    label: '关于',
    hook: '全栈开发工程师，从数据库到界面',
    title: ['我负责从 API', '到界面的一切'],
    paragraphs: [
      '我为公共部门开发网页系统，专注于使用 React 和 TypeScript 的前端开发，并使用 NestJS 进行全栈开发。我曾是车队管理、市政协议管理以及家庭农业公共采购系统的主要前端开发者，从零构建界面：从身份验证和权限控制，到报表和文档生成。',
      '我从维护 PHP/Laravel 遗留系统起步，并参与用现代技术栈重写它。日常工作中，我也负责使用 Docker 和 Nginx 的容器化与部署。我希望参与能让我从 API 做到界面的项目，同时关注代码质量和用户体验。',
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
        title: '车队管理',
        description: '面向公共部门的车辆、出行与通行管理系统。',
        details: { role: '前端主要开发者', overview: '公共部门车队管理系统的新版本，从零开发以替代原有的遗留系统。涵盖车辆与租赁公司、出行申请与审批、驾驶员资质、车辆出入登记，以及每月的燃油与费用支出。', contribution: '我是前端的主要开发者。我构建了车辆与租赁公司的登记功能，支持邮编查询和税号校验，并完整搭建了运输申请与审批流程。我还开发了车辆出入登记，支持报表打印与导出，将系统接入门户的单点登录，并完成了开发与生产环境的 Docker 配置。' },
      },
      {
        title: '农业生产记录',
        description: '农村安置点的地块、产量与受益人登记。',
        details: { role: '全栈开发工程师', overview: '农村安置点的实地登记系统：地块、产量与受益人。我从 API 做到界面，构建了完整模块，并负责打包与部署。', contribution: '我以全栈身份参与，从 API 到界面构建了完整模块：产品、收成、集水与总体生产，以及访问管理。服务端我用 NestJS 搭配 Fastify 和 TypeORM 编写接口，前端则用 React 实现页面。我还配置了基于 Docker 与 Nginx 的部署。' },
      },
      {
        title: '公共采购',
        description: '家庭农业食品公开采购的招标平台。',
        details: { role: '前端开发工程师', overview: '将家庭农业食品公开采购流程数字化的平台，从招标公告登记到生成草案与会议纪要。我负责端到端的前端开发。', contribution: '我负责端到端的前端开发。我实现了分步骤的招标公告登记，支持动态字段与富文本编辑器，以及草案和纪要的编辑、预览与下载页面。我开发了合作社及其成员的管理功能，包含证件校验，并实现了完整的身份验证——注册、登录、密码找回与令牌刷新——以及按角色和单位划分的权限。' },
      },
      {
        title: '协议与合作',
        description: '与市政单位之间协议和合同的跟踪管理。',
        details: { role: '前端主要开发者', overview: '管理公共机构与市政单位之间协议与合作的系统：项目、流程、工作阶段、补充协议与权属。前端由我从零构建。', contribution: '我是前端的主要开发者，从零构建了所有页面。我负责项目与流程的管理和跟踪、区域与市政单位及地点的登记，以及附件的上传与查看。我还开发了管理报表，支持多条件筛选与导出，并实现了登录、按用户级别的访问控制与路由保护。' },
      },
      {
        title: '指标看板',
        description: '公共机构各部门的管理指标看板。',
        details: { role: '全栈开发工程师', overview: '汇总招标、合同、农村技术服务、土地确权与实地生产等指标的管理看板，供各部门跟踪目标完成情况。', contribution: '看板的前后端我都参与了。我实现了按收成、地块和时间段筛选看板数据的功能，并用 ECharts 搭建了交互式图表。我完成了身份验证与访问权限，并用 Docker 将前端和后端容器化。' },
      },
      {
        title: '门户与单点登录',
        description: '面向组织全部系统的统一登录门户。',
        details: { role: '全栈开发工程师', overview: '承载单点登录（SSO）的中心门户，可访问组织的全部系统，并配有独立的认证服务。', contribution: '我实现了新的登录页面、注册与密码找回功能，以及令牌管理。我通过 Module Federation 将其他系统接入门户，并在认证服务中实现了令牌校验接口。' },
      },
      {
        title: '车队系统（遗留）',
        description: '对原有 PHP 车队系统的维护与演进。',
        details: { role: '全栈开发工程师', overview: '遗留的车队管理系统，也是我在公司工作的起点。维护和演进这套系统，为后来用现代技术栈重写它打下了基础。', contribution: '这是我在公司工作的起点。我开发了车辆总览列表与租赁公司登记，实现了通行管理——放行、返回与结束——并完成了燃油、费用与汇总页面，支持筛选、打印和导出到表格。维护这套系统，为我后来参与用现代技术栈重写它打下了基础。' },
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
  audio: { on: 'Sonido', off: 'Silencio', aria: 'Activar/desactivar la música' },
  language: { label: 'Idioma' },
  hero: { label: 'Hola, soy', subtitle: 'Desarrollador Full Stack', seeProjects: 'Ver proyectos', contact: 'Contacto' },
  about: {
    label: 'Sobre mí',
    hook: 'Desarrollador full stack, de la base de datos a la interfaz',
    title: ['Construyo desde la API', 'hasta la interfaz'],
    paragraphs: [
      'Desarrollo sistemas web para el sector público, con foco en el front-end con React y TypeScript y trabajo full stack con NestJS. Fui el principal desarrollador front-end de sistemas de gestión de flota, de convenios con municipios y de compras públicas de la agricultura familiar, construyendo las pantallas desde cero: de la autenticación y el control de acceso a los informes y la generación de documentos.',
      'Empecé manteniendo un sistema legado en PHP/Laravel y ayudé a reescribirlo con un stack moderno. En el día a día también me ocupo de la contenerización y el despliegue con Docker y Nginx. Busco proyectos en los que pueda ir de la API a la interfaz, cuidando la calidad del código y la experiencia de quien lo usa.',
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
        title: 'Gestión de Flota',
        description: 'Control de vehículos, viajes y tráfico para un organismo público.',
        details: { role: 'Desarrollador front-end principal', overview: 'Nueva versión de un sistema de gestión de flota del sector público, escrita desde cero para sustituir a un sistema legado. Controla vehículos y empresas de alquiler, solicitudes y autorizaciones de viaje, habilitación de conductores, salida y regreso de los coches y los gastos mensuales de combustible y otros conceptos.', contribution: 'Fui el principal desarrollador del front-end. Construí el registro de vehículos y empresas de alquiler, con búsqueda por código postal y validación fiscal, y armé el flujo de solicitud y autorización de transporte de punta a punta. También desarrollé el control de salida y regreso de los vehículos, con impresión y exportación de informes, integré el sistema al inicio de sesión único del portal y configuré Docker para desarrollo y producción.' },
      },
      {
        title: 'Registro de Producción Rural',
        description: 'Registro de parcelas, producción y beneficiarios de asentamientos.',
        details: { role: 'Desarrollador full stack', overview: 'Sistema de registro de campo de asentamientos rurales: parcelas, producción y beneficiarios. Trabajé desde la API hasta la interfaz, creando módulos completos y ocupándome del empaquetado y el despliegue.', contribution: 'Trabajé como full stack, creando módulos completos desde la API hasta la pantalla: productos, cosechas, captación de agua y producción general, además de la gestión de accesos. En el servidor escribí los endpoints en NestJS con Fastify y TypeORM; en el front, las pantallas en React. También configuré el despliegue con Docker y Nginx.' },
      },
      {
        title: 'Compras Públicas',
        description: 'Plataforma de licitaciones públicas de compra de la agricultura familiar.',
        details: { role: 'Desarrollador front-end', overview: 'Plataforma que digitaliza las licitaciones públicas de compra de alimentos de la agricultura familiar, desde el registro del pliego hasta la generación de borradores y actas de sesión. Fui responsable del front-end de punta a punta.', contribution: 'Fui responsable del front-end de punta a punta. Creé el registro de pliegos por etapas, con campos dinámicos y editor de texto enriquecido, y las pantallas de edición, vista previa y descarga de borradores y actas. Desarrollé la gestión de cooperativas y afiliados, con validación de documentos, e implementé la autenticación completa — registro, inicio de sesión, recuperación de contraseña y refresh token — junto con los permisos por perfil y por unidad.' },
      },
      {
        title: 'Convenios y Alianzas',
        description: 'Seguimiento de convenios y contratos con municipios.',
        details: { role: 'Desarrollador front-end principal', overview: 'Sistema que gestiona los convenios y las alianzas de un organismo público con los municipios: proyectos, procesos, fases de trabajo, adendas y títulos. Construí el front-end desde cero.', contribution: 'Fui el principal desarrollador del front-end y construí las pantallas desde cero. Me ocupé de la gestión y el seguimiento de proyectos y procesos, del registro de territorios, municipios y ubicaciones y de la carga y visualización de adjuntos. También creé los informes de gestión, con filtros múltiples y exportación, e implementé el inicio de sesión, el control de acceso por nivel de usuario y la protección de rutas.' },
      },
      {
        title: 'Panel de Indicadores',
        description: 'Cuadros de mando de las direcciones de un organismo público.',
        details: { role: 'Desarrollador full stack', overview: 'Panel de gestión con indicadores de licitaciones, contratos, asistencia técnica rural, regularización de tierras y producción de campo, que las direcciones usan para hacer seguimiento de sus metas.', contribution: 'Trabajé en ambos lados del panel. Creé los filtros por cosecha, parcela y periodo que alimentan los cuadros de mando y armé los gráficos interactivos con ECharts. Implementé la autenticación y los permisos de acceso, y contenericé el front-end y el back-end con Docker.' },
      },
      {
        title: 'Portal e Inicio de Sesión Único',
        description: 'Portal central con SSO para todos los sistemas de la organización.',
        details: { role: 'Desarrollador full stack', overview: 'Portal central que concentra el inicio de sesión único (SSO) y da acceso a todos los sistemas de la organización, con un servicio de autenticación propio.', contribution: 'Implementé la nueva pantalla de inicio de sesión, el registro y la recuperación de contraseña, además del control de tokens. Integré los demás sistemas al portal usando Module Federation y, en el servicio de autenticación, creé el endpoint de validación del token.' },
      },
      {
        title: 'Flota — Sistema Legado',
        description: 'Mantenimiento y evolución del sistema de flota anterior, en PHP.',
        details: { role: 'Desarrollador full stack', overview: 'Sistema legado de gestión de flota, donde empecé en la empresa. Mantenerlo y hacerlo evolucionar sentó las bases para reescribirlo con un stack moderno.', contribution: 'Fue donde empecé en la empresa. Desarrollé el listado general de vehículos y el registro de empresas de alquiler, creé el control de tráfico — autorización de salida, regreso y cierre — e hice las pantallas de combustible, gastos y resumen, con filtros, impresión y exportación a hoja de cálculo. Mantener este sistema fue lo que me dio la base para participar en su reescritura con un stack moderno.' },
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
  audio: { on: 'Son', off: 'Muet', aria: 'Activer/couper la musique' },
  language: { label: 'Langue' },
  hero: { label: 'Bonjour, je suis', subtitle: 'Développeur Full Stack', seeProjects: 'Voir les projets', contact: 'Contact' },
  about: {
    label: 'À propos',
    hook: "Développeur full stack, de la base de données à l'interface",
    title: ["Je construis de l'API", "jusqu'à l'interface"],
    paragraphs: [
      "Je développe des systèmes web pour le secteur public, avec une spécialité front-end en React et TypeScript et une pratique full stack avec NestJS. J'ai été le principal développeur front-end de systèmes de gestion de flotte, de conventions avec les communes et d'achats publics de l'agriculture familiale, en construisant les écrans de zéro : de l'authentification et du contrôle d'accès aux rapports et à la génération de documents.",
      "J'ai commencé en maintenant un système legacy en PHP/Laravel et j'ai aidé à le réécrire sur une stack moderne. Au quotidien, je m'occupe aussi de la conteneurisation et du déploiement avec Docker et Nginx. Je recherche des projets où je peux aller de l'API à l'interface, avec le souci de la qualité du code et de l'expérience des utilisateurs.",
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
        title: 'Gestion de Flotte',
        description: "Gestion des véhicules, des trajets et de la circulation pour un organisme public.",
        details: { role: 'Développeur front-end principal', overview: "Nouvelle version d'un système de gestion de flotte du secteur public, écrite de zéro pour remplacer un système legacy. Elle gère les véhicules et les loueurs, les demandes et autorisations de trajet, l'habilitation des conducteurs, les sorties et retours des voitures ainsi que les dépenses mensuelles de carburant et de frais.", contribution: 'J\'ai été le principal développeur du front-end. J\'ai construit l\'enregistrement des véhicules et des loueurs, avec recherche par code postal et validation fiscale, et monté le parcours de demande et d\'autorisation de transport de bout en bout. J\'ai aussi développé le contrôle des sorties et retours des véhicules, avec impression et export de rapports, intégré le système à l\'authentification unique du portail et configuré Docker pour le développement et la production.' },
      },
      {
        title: 'Registre de Production Rurale',
        description: 'Enregistrement des parcelles, de la production et des bénéficiaires.',
        details: { role: 'Développeur full stack', overview: "Système d'enregistrement de terrain pour des implantations rurales : parcelles, production et bénéficiaires. J'ai travaillé de l'API jusqu'à l'interface, en créant des modules complets et en prenant en charge le packaging et le déploiement.", contribution: 'J\'ai travaillé en full stack, en créant des modules complets de l\'API jusqu\'à l\'écran : produits, récoltes, captage d\'eau et production générale, ainsi que la gestion des accès. Côté serveur, j\'ai écrit les endpoints en NestJS avec Fastify et TypeORM ; côté front, les écrans en React. J\'ai également configuré le déploiement avec Docker et Nginx.' },
      },
      {
        title: 'Achats Publics',
        description: "Plateforme d'appels d'offres publics pour l'agriculture familiale.",
        details: { role: 'Développeur front-end', overview: "Plateforme qui numérise les appels d'offres publics d'achat de produits de l'agriculture familiale, de l'enregistrement de l'avis à la génération des projets d'acte et des procès-verbaux. J'ai été responsable du front-end de bout en bout.", contribution: 'J\'ai été responsable du front-end de bout en bout. J\'ai créé l\'enregistrement des avis par étapes, avec champs dynamiques et éditeur de texte enrichi, ainsi que les écrans d\'édition, d\'aperçu et de téléchargement des projets d\'acte et des procès-verbaux. J\'ai développé la gestion des coopératives et de leurs membres, avec validation des documents, et mis en place l\'authentification complète — inscription, connexion, récupération de mot de passe et refresh token — avec les permissions par profil et par unité.' },
      },
      {
        title: 'Conventions et Partenariats',
        description: 'Suivi des conventions et des contrats avec les communes.',
        details: { role: 'Développeur front-end principal', overview: "Système qui gère les conventions et les partenariats d'un organisme public avec les communes : projets, procédures, phases de travail, avenants et titres. J'ai construit le front-end de zéro.", contribution: 'J\'ai été le principal développeur du front-end et j\'ai construit les écrans de zéro. Je me suis occupé de la gestion et du suivi des projets et des procédures, de l\'enregistrement des territoires, des communes et des localisations, ainsi que du dépôt et de la consultation des pièces jointes. J\'ai aussi créé les rapports de gestion, avec filtres multiples et export, et mis en place la connexion, le contrôle d\'accès par niveau d\'utilisateur et la protection des routes.' },
      },
      {
        title: 'Tableau de Bord',
        description: "Tableaux de bord de gestion des directions d'un organisme public.",
        details: { role: 'Développeur full stack', overview: "Tableau de bord de gestion avec les indicateurs des marchés publics, des contrats, de l'assistance technique rurale, de la régularisation foncière et de la production de terrain, utilisé par les directions pour suivre leurs objectifs.", contribution: 'J\'ai travaillé des deux côtés du tableau de bord. J\'ai créé les filtres par récolte, parcelle et période qui alimentent les tableaux de bord et monté les graphiques interactifs avec ECharts. J\'ai mis en place l\'authentification et les permissions d\'accès, et conteneurisé le front-end et le back-end avec Docker.' },
      },
      {
        title: 'Portail et Authentification Unique',
        description: "Portail central avec SSO pour tous les systèmes de l'organisation.",
        details: { role: 'Développeur full stack', overview: "Portail central qui regroupe l'authentification unique (SSO) et donne accès à tous les systèmes de l'organisation, avec son propre service d'authentification.", contribution: 'J\'ai mis en place le nouvel écran de connexion, l\'inscription et la récupération de mot de passe, ainsi que la gestion des jetons. J\'ai intégré les autres systèmes au portail via Module Federation et, dans le service d\'authentification, créé l\'endpoint de validation du jeton.' },
      },
      {
        title: 'Flotte — Système Legacy',
        description: "Maintenance et évolution de l'ancien système de flotte, en PHP.",
        details: { role: 'Développeur full stack', overview: "Système legacy de gestion de flotte, par lequel j'ai commencé dans l'entreprise. Le maintenir et le faire évoluer a posé les bases de sa réécriture sur une stack moderne.", contribution: 'C\'est là que j\'ai commencé dans l\'entreprise. J\'ai développé la liste générale des véhicules et l\'enregistrement des loueurs, créé le contrôle de la circulation — autorisation de sortie, retour et clôture — et réalisé les écrans carburant, dépenses et synthèse, avec filtres, impression et export vers un tableur. Maintenir ce système m\'a donné les bases pour participer à sa réécriture sur une stack moderne.' },
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
