import styles from './Home.module.css'

function Home() {
  return (
    <section className={`container ${styles.pagina}`}>
      <h1>Bem-vindo ao CEAP</h1>
      <p>Em construção: hero, sobre a ONG, números de impacto e eventos em destaque.</p>
    </section>
  )
}

export default Home
