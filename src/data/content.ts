import audioUrl from '../assets/audio/audio-cyberpunk.mp3'

// Dados sem texto traduzível. Os textos (títulos, descrições, rótulos) ficam em src/i18n/messages.ts.
export const sections = [
  { id: 'inicio' },
  { id: 'sobre' },
  { id: 'projetos' },
  { id: 'habilidades' },
  { id: 'experiencia' },
  { id: 'contato' },
] as const

export type Project = {
  tags: string[]
  year: string
  /** caminhos em /public (ex.: 'projects/projeto-1/01.jpg'); vazio = blocos placeholder no modal */
  images: string[]
  demo?: string
  repo?: string
}

// A ordem daqui corresponde a `projects.items` em messages.ts (título, descrição e detalhes do modal).
// São sistemas internos de um cliente do setor público: ficam sem nome real, sem demo e sem repositório.
export const projects: Project[] = [
  { tags: ['React', 'TypeScript', 'Ant Design', 'Zustand', 'Docker'], year: '2026', images: [] },
  { tags: ['React', 'TanStack Query', 'NestJS', 'TypeORM', 'Nginx'], year: '2026', images: [] },
  { tags: ['React', 'TypeScript', 'CKEditor', 'NestJS', 'TypeORM'], year: '2025–2026', images: [] },
  { tags: ['React', 'Ant Design', 'React Hook Form', 'Zod', 'TypeScript'], year: '2025–2026', images: [] },
  { tags: ['React', 'TanStack Query', 'ECharts', 'NestJS', 'Prisma'], year: '2024–2026', images: [] },
  { tags: ['React', 'Module Federation', 'Zustand', 'NestJS', 'Prisma'], year: '2024–2026', images: [] },
  { tags: ['PHP', 'Laravel', 'Livewire', 'Oracle'], year: '2022–2025', images: [] },
]

// Música de fundo (o Vite devolve a URL final, com hash e base)
export const AUDIO_SRC = audioUrl

// Ferramentas usadas nos projetos profissionais (alimenta o slider abaixo do hero).
// Lista própria, não derivada de `projects`: a faixa mostra o repertório inteiro,
// não só o stack dos projetos em destaque. Só o principal — linguagem, framework,
// libs centrais e infra. A ordem é visual (alterna nomes curtos e longos).
export const tools = [
  'TypeScript',
  'React',
  'NestJS',
  'Node.js',
  'Ant Design',
  'Zustand',
  'TanStack Query',
  'React Hook Form',
  'Zod',
  'TypeORM',
  'Prisma',
  'Vite',
  'SASS',
  'PHP',
  'Laravel',
  'Docker',
  'Nginx',
  'Linux',
  'Git',
]

// Os nomes dos grupos vêm de `skills.groups` em messages.ts
export const skills: Record<'frontend' | 'backend' | 'tools', string[]> = {
  frontend: ['React', 'TypeScript', 'Ant Design', 'Zustand', 'TanStack Query', 'React Hook Form', 'Zod', 'Vite', 'SASS'],
  backend: ['NestJS', 'Node.js', 'TypeORM', 'Prisma', 'MySQL', 'JWT', 'Swagger', 'PHP / Laravel'],
  tools: ['Git', 'Docker', 'Nginx', 'Linux', 'Jest', 'ESLint / Prettier', 'Husky / Commitlint'],
}

// `to: null` = até hoje (texto em messages.ts)
export const experience: { from: string; to: string | null }[] = [
  { from: '2024', to: null },
  { from: '2022', to: '2024' },
]

export const about = {
  // caminho em /public (ex.: 'about.jpg'); enquanto for null aparece um bloco placeholder
  image: 'about.webp' as string | null,
}
