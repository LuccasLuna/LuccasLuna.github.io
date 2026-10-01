export type SpecColumn = { title: string; lines: string[] }

type Props = {
  serial?: string
  columns: SpecColumn[]
  notice?: string
  className?: string
}

// Etiqueta técnica decorativa (estilo container de carga): série de números, colunas de
// especificações e um aviso. Não carrega informação essencial, então fica oculta para leitores de tela.
export default function SpecLabel({ serial, columns, notice, className }: Props) {
  return (
    <div className={`spec${className ? ` ${className}` : ''}`} aria-hidden>
      {serial && <div className="spec__serial">{serial}</div>}
      <div className="spec__cols">
        {columns.map((col) => (
          <div className="spec__col" key={col.title}>
            <div className="spec__title">{col.title}</div>
            {col.lines.map((line, i) => (
              <div key={i}>{line}</div>
            ))}
          </div>
        ))}
      </div>
      {notice && <div className="spec__notice">{notice}</div>}
    </div>
  )
}
