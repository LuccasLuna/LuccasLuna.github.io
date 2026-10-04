// Dica (tooltip) de um botão da navbar. Fica dentro do botão, que precisa da classe `tip-host`:
// aparece no hover e no foco do teclado (CSS em _navbar.scss). O botão a liga com aria-describedby.
export default function Tip({ id, children }: { id: string; children: string }) {
  return (
    <span id={id} role="tooltip" className="tip">
      {children}
    </span>
  )
}
