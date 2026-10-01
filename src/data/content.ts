// Dados sem texto traduzível. Os textos (títulos, descrições, rótulos) ficam em src/i18n/messages.ts.
export const sections = [
  { id: 'inicio' },
  { id: 'sobre' },
  { id: 'projetos' },
  { id: 'habilidades' },
  { id: 'experiencia' },
  { id: 'contato' },
] as const

export type Project = { tags: string[]; href: string }

// A ordem daqui corresponde a `projects.items` em messages.ts (título e descrição)
export const projects: Project[] = [
  { tags: ['Node', 'Postgres', 'React'], href: '#' },
  { tags: ['TypeScript', 'Express'], href: '#' },
  { tags: ['Next.js', 'Prisma', 'Stripe'], href: '#' },
  { tags: ['React', 'Vite', 'Docker'], href: '#' },
  { tags: ['GitHub Actions', 'Docker', 'Linux'], href: '#' },
]

// Todas as ferramentas usadas nos projetos, sem repetição (alimenta a faixa abaixo do slider)
export const tools = [...new Set(projects.flatMap((p) => p.tags))]

// Os nomes dos grupos vêm de `skills.groups` em messages.ts
export const skills: Record<'frontend' | 'backend' | 'tools', string[]> = {
  frontend: ['React', 'TypeScript', 'SCSS', 'Vite'],
  backend: ['Node.js', 'Express', 'REST', 'PostgreSQL'],
  tools: ['Git', 'Docker', 'GitHub Actions', 'Linux'],
}

// `to: null` = até hoje (texto em messages.ts)
export const experience: { from: string; to: string | null }[] = [
  { from: '2024', to: null },
  { from: '2022', to: '2024' },
]

export const about = {
  // caminho em /public (ex.: 'about.jpg'); enquanto for null aparece um bloco placeholder
  image: null as string | null,
}
