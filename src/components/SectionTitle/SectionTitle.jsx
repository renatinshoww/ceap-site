import styles from './SectionTitle.module.css'

function SectionTitle({ titulo, subtitulo }) {
  return (
    <div className={styles.cabecalho}>
      <h2 className={styles.titulo}>{titulo}</h2>
      {subtitulo && <p className={styles.subtitulo}>{subtitulo}</p>}
    </div>
  )
}

export default SectionTitle
