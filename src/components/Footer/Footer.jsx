import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

const ANO = new Date().getFullYear()

function Footer({ links, nome, descricao }) {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.conteudo}`}>
        <div>
          <p className={styles.nome}>{nome}</p>
          <p className={styles.descricao}>{descricao}</p>
        </div>

        <nav aria-label="Rodapé">
          <ul className={styles.lista}>
            {links.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className={styles.link}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className={styles.faixa}>
        <p className="container">
          © {ANO} {nome}. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}

export default Footer
