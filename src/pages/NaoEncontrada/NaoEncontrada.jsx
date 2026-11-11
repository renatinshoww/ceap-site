import { Link } from 'react-router-dom'
import styles from './NaoEncontrada.module.css'

function NaoEncontrada() {
  return (
    <section className={`container ${styles.pagina}`}>
      <h1>Página não encontrada</h1>
      <p>O endereço que você acessou não existe.</p>
      <Link to="/">Voltar para o início</Link>
    </section>
  )
}

export default NaoEncontrada
