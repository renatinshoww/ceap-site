import { Link } from 'react-router-dom'
import styles from './EventCard.module.css'

// data em ISO (AAAA-MM-DD); UTC evita mostrar o dia anterior no fuso do Brasil
const formatarData = (data) =>
  new Date(data).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric', timeZone: 'UTC' })

function EventCard({ data, titulo, local, categoria, link, textoBotao = 'Saiba mais' }) {
  return (
    <article className={styles.card}>
      <span className={styles.categoria}>{categoria}</span>
      <h3 className={styles.titulo}>{titulo}</h3>
      <p className={styles.info}>
        <time dateTime={data}>{formatarData(data)}</time>
      </p>
      <p className={styles.info}>{local}</p>
      {/* shortcut: Link estilizado no lugar do Button (#24), trocar quando ele estiver na main */}
      {link && (
        <Link to={link} className={styles.botao}>
          {textoBotao}
        </Link>
      )}
    </article>
  )
}

export default EventCard
