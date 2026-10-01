export const sections = [
  { id: 'inicio', label: 'Início' },
  { id: 'sobre', label: 'Sobre' },
  { id: 'projetos', label: 'Projetos' },
  { id: 'habilidades', label: 'Habilidades' },
  { id: 'experiencia', label: 'Experiência' },
  { id: 'contato', label: 'Contato' },
] as const

export type Project = { title: string; description: string; tags: string[]; href: string }

export const projects: Project[] = [
  { title: 'Projeto Um', description: 'API REST com autenticação e painel.', tags: ['Node', 'Postgres', 'React'], href: '#' },
  { title: 'Projeto Dois', description: 'App em tempo real com WebSockets.', tags: ['TypeScript', 'Express'], href: '#' },
  { title: 'Projeto Três', description: 'E-commerce full stack.', tags: ['Next.js', 'Prisma'], href: '#' },
]

export const skills: Record<string, string[]> = {
  Frontend: ['React', 'TypeScript', 'SCSS', 'Vite'],
  Backend: ['Node.js', 'Express', 'REST', 'PostgreSQL'],
  Ferramentas: ['Git', 'Docker', 'GitHub Actions', 'Linux'],
}

export const experience = [
  { period: '2024 — hoje', role: 'Cargo', company: 'Empresa' },
  { period: '2022 — 2024', role: 'Cargo', company: 'Empresa' },
]
