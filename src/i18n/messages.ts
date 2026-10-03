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
        details: { role: 'Desenvolvedor front-end principal', overview: 'Nova versão de um sistema de gestão de frota do setor público, escrita do zero para substituir um sistema legado. Controla veículos e locadoras, requisições e autorizações de viagem, habilitação de motoristas, saída e retorno dos carros e os gastos mensais com combustível e despesas.', highlights: ['Cadastro de veículos e locadoras, com busca por CEP e validação de CNPJ', 'Fluxo de requerimento e autorização de transporte', 'Controle de tráfego com impressão e exportação de relatórios', 'Integração com o login único do portal e configuração de Docker'] },
      },
      {
        title: 'Registro de Produção Rural',
        description: 'Cadastro de lotes, produção e beneficiários de assentamentos.',
        details: { role: 'Desenvolvedor full stack', overview: 'Sistema de cadastro de campo de assentamentos rurais: lotes, produção e beneficiários. Atuei da API até a interface, criando módulos completos e cuidando do empacotamento e do deploy.', highlights: ['Módulos de produtos, safras, captação de água e produção geral', 'Gerenciamento de acessos e permissões', 'API em NestJS com Fastify e TypeORM', 'Deploy com Docker e Nginx'] },
      },
      {
        title: 'Compras Públicas',
        description: 'Plataforma de chamadas públicas de compra da agricultura familiar.',
        details: { role: 'Desenvolvedor front-end', overview: 'Plataforma que digitaliza as chamadas públicas de compra de alimentos da agricultura familiar, do cadastro do edital à geração das minutas e atas de sessão. Fui responsável pelo front-end de ponta a ponta.', highlights: ['Cadastro de editais em etapas, com campos dinâmicos e editor de texto rico', 'Edição, pré-visualização e download de minutas e atas', 'Gestão de cooperativas e filiados, com validação de CPF, CNPJ e RG', 'Autenticação completa e permissões por perfil e por unidade'] },
      },
      {
        title: 'Convênios e Parcerias',
        description: 'Acompanhamento de convênios e contratos com municípios.',
        details: { role: 'Desenvolvedor front-end principal', overview: 'Sistema que gerencia os convênios e parcerias de um órgão público com municípios: projetos, processos, fases de trabalho, aditamentos e títulos. Construí o front-end do zero.', highlights: ['Telas de gerenciamento e acompanhamento de projetos e processos', 'Cadastro de territórios e municípios, com upload e visualização de anexos', 'Relatórios gerenciais com filtros múltiplos e exportação', 'Controle de acesso por nível de usuário e proteção de rotas'] },
      },
      {
        title: 'Painel de Indicadores',
        description: 'Dashboards gerenciais das diretorias de um órgão público.',
        details: { role: 'Desenvolvedor full stack', overview: 'Painel gerencial com indicadores de licitações, contratos, assistência técnica rural, regularização fundiária e produção de campo, usado pelas diretorias para acompanhar metas.', highlights: ['Filtros por safra, lote e período nos dashboards', 'Gráficos interativos com ECharts', 'Autenticação e permissões de acesso', 'Conteinerização do front-end e do back-end com Docker'] },
      },
      {
        title: 'Portal e Login Único',
        description: 'Portal central com SSO para todos os sistemas da organização.',
        details: { role: 'Desenvolvedor full stack', overview: 'Portal central que concentra o login único (SSO) e dá acesso a todos os sistemas da organização, com um serviço de autenticação próprio.', highlights: ['Tela de login, cadastro, recuperação de senha e controle de tokens', 'Integração dos demais sistemas ao portal via Module Federation', 'Endpoint de validação de token no serviço de autenticação'] },
      },
      {
        title: 'Frota — Sistema Legado',
        description: 'Manutenção e evolução do sistema de frota anterior, em PHP.',
        details: { role: 'Desenvolvedor full stack', overview: 'Sistema legado de gestão de frota, onde comecei na empresa. Manter e evoluir esse sistema deu a base para a reescrita dele em uma stack moderna.', highlights: ['Listagem geral de veículos e cadastro de locadoras', 'Controle de tráfego: liberação de saída, retorno e finalização', 'Telas de combustível, despesas e resumo, com filtros e exportação'] },
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
        details: { role: 'Lead front-end developer', overview: 'New version of a public-sector fleet management system, written from scratch to replace a legacy one. It handles vehicles and rental companies, trip requests and authorizations, driver licensing, vehicle departure and return, and monthly fuel and expense costs.', highlights: ['Vehicle and rental company registration, with postcode lookup and tax ID validation', 'Transport request and authorization flow', 'Traffic control with report printing and export', 'Integration with the portal single sign-on and Docker setup'] },
      },
      {
        title: 'Rural Production Records',
        description: 'Records of plots, production and beneficiaries of settlements.',
        details: { role: 'Full stack developer', overview: 'Field record system for rural settlements: plots, production and beneficiaries. I worked from the API to the interface, building complete modules and handling packaging and deployment.', highlights: ['Products, harvests, water catchment and general production modules', 'Access and permission management', 'NestJS API with Fastify and TypeORM', 'Deployment with Docker and Nginx'] },
      },
      {
        title: 'Public Procurement',
        description: 'Platform for public food purchase calls from family farming.',
        details: { role: 'Front-end developer', overview: 'Platform that digitizes public calls for buying food from family farming, from registering the public notice to generating drafts and session minutes. I was responsible for the front-end end to end.', highlights: ['Step-by-step notice registration, with dynamic fields and a rich text editor', 'Editing, preview and download of drafts and minutes', 'Management of cooperatives and members, with document validation', 'Full authentication and permissions by role and by unit'] },
      },
      {
        title: 'Agreements and Partnerships',
        description: 'Tracking of agreements and contracts with municipalities.',
        details: { role: 'Lead front-end developer', overview: "System that manages a public agency's agreements and partnerships with municipalities: projects, processes, work phases, amendments and titles. I built the front-end from scratch.", highlights: ['Screens for managing and tracking projects and processes', 'Territory and municipality registration, with attachment upload and viewing', 'Management reports with multiple filters and export', 'Access control by user level and route protection'] },
      },
      {
        title: 'Indicators Dashboard',
        description: 'Management dashboards for the boards of a public agency.',
        details: { role: 'Full stack developer', overview: 'Management dashboard with indicators for tenders, contracts, rural technical assistance, land regularization and field production, used by the boards to track targets.', highlights: ['Filters by harvest, plot and period across the dashboards', 'Interactive charts with ECharts', 'Authentication and access permissions', 'Containerization of front-end and back-end with Docker'] },
      },
      {
        title: 'Portal and Single Sign-On',
        description: 'Central portal with SSO for every system in the organization.',
        details: { role: 'Full stack developer', overview: 'Central portal that holds the single sign-on (SSO) and gives access to every system in the organization, with its own authentication service.', highlights: ['Login, sign-up, password recovery and token handling', 'Integration of the other systems into the portal via Module Federation', 'Token validation endpoint in the authentication service'] },
      },
      {
        title: 'Fleet — Legacy System',
        description: 'Maintenance and evolution of the previous fleet system, in PHP.',
        details: { role: 'Full stack developer', overview: 'Legacy fleet management system, where I started at the company. Maintaining and evolving it laid the groundwork for rewriting it on a modern stack.', highlights: ['General vehicle listing and rental company registration', 'Traffic control: departure clearance, return and closing', 'Fuel, expense and summary screens, with filters and export'] },
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
        details: { role: '前端主要开发者', overview: '公共部门车队管理系统的新版本，从零开发以替代原有的遗留系统。涵盖车辆与租赁公司、出行申请与审批、驾驶员资质、车辆出入登记，以及每月的燃油与费用支出。', highlights: ['车辆与租赁公司登记，支持邮编查询和税号校验', '运输申请与审批流程', '通行管理，支持报表打印与导出', '对接门户单点登录，并完成 Docker 配置'] },
      },
      {
        title: '农业生产记录',
        description: '农村安置点的地块、产量与受益人登记。',
        details: { role: '全栈开发工程师', overview: '农村安置点的实地登记系统：地块、产量与受益人。我从 API 做到界面，构建了完整模块，并负责打包与部署。', highlights: ['产品、收成、集水与总体生产模块', '访问与权限管理', '基于 NestJS 与 Fastify、TypeORM 的 API', '使用 Docker 与 Nginx 部署'] },
      },
      {
        title: '公共采购',
        description: '家庭农业食品公开采购的招标平台。',
        details: { role: '前端开发工程师', overview: '将家庭农业食品公开采购流程数字化的平台，从招标公告登记到生成草案与会议纪要。我负责端到端的前端开发。', highlights: ['分步骤的招标公告登记，支持动态字段与富文本编辑器', '草案与纪要的编辑、预览和下载', '合作社与成员管理，含证件校验', '完整的身份验证，以及按角色和单位划分的权限'] },
      },
      {
        title: '协议与合作',
        description: '与市政单位之间协议和合同的跟踪管理。',
        details: { role: '前端主要开发者', overview: '管理公共机构与市政单位之间协议与合作的系统：项目、流程、工作阶段、补充协议与权属。前端由我从零构建。', highlights: ['项目与流程的管理和跟踪界面', '区域与市政单位登记，支持附件上传与查看', '管理报表，支持多条件筛选与导出', '按用户级别的访问控制与路由保护'] },
      },
      {
        title: '指标看板',
        description: '公共机构各部门的管理指标看板。',
        details: { role: '全栈开发工程师', overview: '汇总招标、合同、农村技术服务、土地确权与实地生产等指标的管理看板，供各部门跟踪目标完成情况。', highlights: ['按收成、地块和时间段筛选看板数据', '基于 ECharts 的交互式图表', '身份验证与访问权限', '使用 Docker 容器化前端与后端'] },
      },
      {
        title: '门户与单点登录',
        description: '面向组织全部系统的统一登录门户。',
        details: { role: '全栈开发工程师', overview: '承载单点登录（SSO）的中心门户，可访问组织的全部系统，并配有独立的认证服务。', highlights: ['登录、注册、密码找回与令牌管理', '通过 Module Federation 将其他系统接入门户', '认证服务中的令牌校验接口'] },
      },
      {
        title: '车队系统（遗留）',
        description: '对原有 PHP 车队系统的维护与演进。',
        details: { role: '全栈开发工程师', overview: '遗留的车队管理系统，也是我在公司工作的起点。维护和演进这套系统，为后来用现代技术栈重写它打下了基础。', highlights: ['车辆总览列表与租赁公司登记', '通行管理：放行、返回与结束', '燃油、费用与汇总页面，支持筛选与导出'] },
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
        details: { role: 'Desarrollador front-end principal', overview: 'Nueva versión de un sistema de gestión de flota del sector público, escrita desde cero para sustituir a un sistema legado. Controla vehículos y empresas de alquiler, solicitudes y autorizaciones de viaje, habilitación de conductores, salida y regreso de los coches y los gastos mensuales de combustible y otros conceptos.', highlights: ['Registro de vehículos y empresas de alquiler, con búsqueda por código postal y validación fiscal', 'Flujo de solicitud y autorización de transporte', 'Control de tráfico con impresión y exportación de informes', 'Integración con el inicio de sesión único del portal y configuración de Docker'] },
      },
      {
        title: 'Registro de Producción Rural',
        description: 'Registro de parcelas, producción y beneficiarios de asentamientos.',
        details: { role: 'Desarrollador full stack', overview: 'Sistema de registro de campo de asentamientos rurales: parcelas, producción y beneficiarios. Trabajé desde la API hasta la interfaz, creando módulos completos y ocupándome del empaquetado y el despliegue.', highlights: ['Módulos de productos, cosechas, captación de agua y producción general', 'Gestión de accesos y permisos', 'API en NestJS con Fastify y TypeORM', 'Despliegue con Docker y Nginx'] },
      },
      {
        title: 'Compras Públicas',
        description: 'Plataforma de licitaciones públicas de compra de la agricultura familiar.',
        details: { role: 'Desarrollador front-end', overview: 'Plataforma que digitaliza las licitaciones públicas de compra de alimentos de la agricultura familiar, desde el registro del pliego hasta la generación de borradores y actas de sesión. Fui responsable del front-end de punta a punta.', highlights: ['Registro de pliegos por etapas, con campos dinámicos y editor de texto enriquecido', 'Edición, vista previa y descarga de borradores y actas', 'Gestión de cooperativas y afiliados, con validación de documentos', 'Autenticación completa y permisos por perfil y por unidad'] },
      },
      {
        title: 'Convenios y Alianzas',
        description: 'Seguimiento de convenios y contratos con municipios.',
        details: { role: 'Desarrollador front-end principal', overview: 'Sistema que gestiona los convenios y las alianzas de un organismo público con los municipios: proyectos, procesos, fases de trabajo, adendas y títulos. Construí el front-end desde cero.', highlights: ['Pantallas de gestión y seguimiento de proyectos y procesos', 'Registro de territorios y municipios, con carga y visualización de adjuntos', 'Informes de gestión con filtros múltiples y exportación', 'Control de acceso por nivel de usuario y protección de rutas'] },
      },
      {
        title: 'Panel de Indicadores',
        description: 'Cuadros de mando de las direcciones de un organismo público.',
        details: { role: 'Desarrollador full stack', overview: 'Panel de gestión con indicadores de licitaciones, contratos, asistencia técnica rural, regularización de tierras y producción de campo, que las direcciones usan para hacer seguimiento de sus metas.', highlights: ['Filtros por cosecha, parcela y periodo en los cuadros de mando', 'Gráficos interactivos con ECharts', 'Autenticación y permisos de acceso', 'Contenerización del front-end y el back-end con Docker'] },
      },
      {
        title: 'Portal e Inicio de Sesión Único',
        description: 'Portal central con SSO para todos los sistemas de la organización.',
        details: { role: 'Desarrollador full stack', overview: 'Portal central que concentra el inicio de sesión único (SSO) y da acceso a todos los sistemas de la organización, con un servicio de autenticación propio.', highlights: ['Pantalla de inicio de sesión, registro, recuperación de contraseña y control de tokens', 'Integración de los demás sistemas al portal mediante Module Federation', 'Endpoint de validación de token en el servicio de autenticación'] },
      },
      {
        title: 'Flota — Sistema Legado',
        description: 'Mantenimiento y evolución del sistema de flota anterior, en PHP.',
        details: { role: 'Desarrollador full stack', overview: 'Sistema legado de gestión de flota, donde empecé en la empresa. Mantenerlo y hacerlo evolucionar sentó las bases para reescribirlo con un stack moderno.', highlights: ['Listado general de vehículos y registro de empresas de alquiler', 'Control de tráfico: autorización de salida, regreso y cierre', 'Pantallas de combustible, gastos y resumen, con filtros y exportación'] },
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
        details: { role: 'Développeur front-end principal', overview: "Nouvelle version d'un système de gestion de flotte du secteur public, écrite de zéro pour remplacer un système legacy. Elle gère les véhicules et les loueurs, les demandes et autorisations de trajet, l'habilitation des conducteurs, les sorties et retours des voitures ainsi que les dépenses mensuelles de carburant et de frais.", highlights: ['Enregistrement des véhicules et des loueurs, avec recherche par code postal et validation fiscale', "Parcours de demande et d'autorisation de transport", "Contrôle de la circulation avec impression et export de rapports", "Intégration à l'authentification unique du portail et configuration Docker"] },
      },
      {
        title: 'Registre de Production Rurale',
        description: 'Enregistrement des parcelles, de la production et des bénéficiaires.',
        details: { role: 'Développeur full stack', overview: "Système d'enregistrement de terrain pour des implantations rurales : parcelles, production et bénéficiaires. J'ai travaillé de l'API jusqu'à l'interface, en créant des modules complets et en prenant en charge le packaging et le déploiement.", highlights: ["Modules produits, récoltes, captage d'eau et production générale", 'Gestion des accès et des permissions', 'API en NestJS avec Fastify et TypeORM', 'Déploiement avec Docker et Nginx'] },
      },
      {
        title: 'Achats Publics',
        description: "Plateforme d'appels d'offres publics pour l'agriculture familiale.",
        details: { role: 'Développeur front-end', overview: "Plateforme qui numérise les appels d'offres publics d'achat de produits de l'agriculture familiale, de l'enregistrement de l'avis à la génération des projets d'acte et des procès-verbaux. J'ai été responsable du front-end de bout en bout.", highlights: ["Enregistrement des avis par étapes, avec champs dynamiques et éditeur de texte enrichi", "Édition, aperçu et téléchargement des projets d'acte et des procès-verbaux", 'Gestion des coopératives et de leurs membres, avec validation des documents', 'Authentification complète et permissions par profil et par unité'] },
      },
      {
        title: 'Conventions et Partenariats',
        description: 'Suivi des conventions et des contrats avec les communes.',
        details: { role: 'Développeur front-end principal', overview: "Système qui gère les conventions et les partenariats d'un organisme public avec les communes : projets, procédures, phases de travail, avenants et titres. J'ai construit le front-end de zéro.", highlights: ['Écrans de gestion et de suivi des projets et des procédures', 'Enregistrement des territoires et des communes, avec dépôt et consultation des pièces jointes', 'Rapports de gestion avec filtres multiples et export', "Contrôle d'accès par niveau d'utilisateur et protection des routes"] },
      },
      {
        title: 'Tableau de Bord',
        description: "Tableaux de bord de gestion des directions d'un organisme public.",
        details: { role: 'Développeur full stack', overview: "Tableau de bord de gestion avec les indicateurs des marchés publics, des contrats, de l'assistance technique rurale, de la régularisation foncière et de la production de terrain, utilisé par les directions pour suivre leurs objectifs.", highlights: ['Filtres par récolte, parcelle et période dans les tableaux de bord', 'Graphiques interactifs avec ECharts', "Authentification et permissions d'accès", 'Conteneurisation du front-end et du back-end avec Docker'] },
      },
      {
        title: 'Portail et Authentification Unique',
        description: "Portail central avec SSO pour tous les systèmes de l'organisation.",
        details: { role: 'Développeur full stack', overview: "Portail central qui regroupe l'authentification unique (SSO) et donne accès à tous les systèmes de l'organisation, avec son propre service d'authentification.", highlights: ['Écran de connexion, inscription, récupération de mot de passe et gestion des jetons', 'Intégration des autres systèmes au portail via Module Federation', "Endpoint de validation du jeton dans le service d'authentification"] },
      },
      {
        title: 'Flotte — Système Legacy',
        description: "Maintenance et évolution de l'ancien système de flotte, en PHP.",
        details: { role: 'Développeur full stack', overview: "Système legacy de gestion de flotte, par lequel j'ai commencé dans l'entreprise. Le maintenir et le faire évoluer a posé les bases de sa réécriture sur une stack moderne.", highlights: ['Liste générale des véhicules et enregistrement des loueurs', 'Contrôle de la circulation : autorisation de sortie, retour et clôture', 'Écrans carburant, dépenses et synthèse, avec filtres et export'] },
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
