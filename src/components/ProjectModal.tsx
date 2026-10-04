import { useEffect, useRef } from 'react'
import { projects } from '../data/content'
import { useLang } from '../i18n/useLang'

type Props = { index: number | null; onClose: () => void }

// Modal de detalhes do projeto: <dialog> nativo (foco preso, fundo inerte, Esc fecha, foco volta ao botão de origem)
export default function ProjectModal({ index, onClose }: Props) {
  const { t } = useLang()
  const ref = useRef<HTMLDialogElement>(null)
  const open = index !== null

  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    if (open && !dialog.open) dialog.showModal()
    if (!open && dialog.open) dialog.close()
  }, [open])

  // trava a rolagem da página enquanto o modal está aberto
  useEffect(() => {
    if (!open) return
    document.documentElement.style.overflow = 'hidden'
    return () => {
      document.documentElement.style.overflow = ''
    }
  }, [open])

  const project = index !== null ? projects[index] : null
  const text = index !== null ? t.projects.items[index] : null
  const m = t.projects.modal

  return (
    <dialog
      ref={ref}
      className="modal"
      aria-labelledby="project-modal-title"
      onClose={onClose}
      // clique no fundo (fora do conteúdo) fecha
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      {project && text && index !== null && (
        <div className="modal__body">
          <div className="modal__bar">
            <span className="section__label">
              {String(index + 1).padStart(2, '0')} // {t.projects.label}
            </span>
            <button type="button" className="modal__close" onClick={onClose}>
              [ {m.close} ]
            </button>
          </div>

          <h3 className="modal__title" id="project-modal-title">
            {text.title}
          </h3>
          <p className="modal__lead">{text.description}</p>

          <div className="modal__cols">
            <div className="modal__info">
              <p>{text.details.overview}</p>

              <dl className="modal__facts">
                <div>
                  <dt>{m.role}</dt>
                  <dd>{text.details.role}</dd>
                </div>
                <div>
                  <dt>{m.year}</dt>
                  <dd>{project.year}</dd>
                </div>
              </dl>

              <h4 className="modal__sub">{m.stack}</h4>
              <ul className="card__tags">
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>

              <h4 className="modal__sub">{m.highlights}</h4>
              <p>{text.details.contribution}</p>

              {(project.demo || project.repo) && (
                <div className="modal__links">
                  {project.demo && (
                    <a className="btn btn--link" href={project.demo} target="_blank" rel="noreferrer">
                      <span className="btn__icon" aria-hidden>[↗]</span>
                      {m.demo}
                    </a>
                  )}
                  {project.repo && (
                    <a className="btn btn--ghost btn--link" href={project.repo} target="_blank" rel="noreferrer">
                      <span className="btn__icon" aria-hidden>[↗]</span>
                      {m.code}
                    </a>
                  )}
                </div>
              )}
            </div>

            <div className="modal__gallery" aria-label={m.gallery}>
              {project.images.length > 0
                ? project.images.map((src, i) => (
                    <img
                      key={src}
                      src={`${import.meta.env.BASE_URL}${src}`}
                      alt={`${m.imageAlt} ${i + 1}`}
                      loading="lazy"
                    />
                  ))
                : [1, 2, 3].map((n) => (
                    <div className="modal__placeholder" key={n} aria-hidden>
                      {m.imagePlaceholder} {n}
                    </div>
                  ))}
            </div>
          </div>
        </div>
      )}
    </dialog>
  )
}
