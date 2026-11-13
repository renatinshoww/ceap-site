import styles from './Card.module.css'

function Card({ imagem, imagemAlt = '', titulo, texto }) {
  return (
    <article className={styles.card}>
      {imagem && <img src={imagem} alt={imagemAlt} className={styles.imagem} />}
      <div className={styles.corpo}>
        <h3 className={styles.titulo}>{titulo}</h3>
        {texto && <p className={styles.texto}>{texto}</p>}
      </div>
    </article>
  )
}

export default Card
