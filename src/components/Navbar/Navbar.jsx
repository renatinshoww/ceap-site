import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import styles from './Navbar.module.css'

function Navbar({ links }) {
  const [aberto, setAberto] = useState(false)
  const fechar = () => setAberto(false)

  return (
    <header className={styles.header}>
      <nav className={`container ${styles.nav}`} aria-label="Principal">
        <Link to="/" className={styles.marca} onClick={fechar}>
          <img src={logo} alt="" width="48" height="48" />
          <span>CEAP</span>
        </Link>

        <button
          type="button"
          className={styles.toggle}
          aria-expanded={aberto}
          aria-controls="menu-principal"
          onClick={() => setAberto((v) => !v)}
        >
          <span className="sr-only">{aberto ? 'Fechar menu' : 'Abrir menu'}</span>
          <span className={styles.barra} aria-hidden="true" />
          <span className={styles.barra} aria-hidden="true" />
          <span className={styles.barra} aria-hidden="true" />
        </button>

        <ul id="menu-principal" className={`${styles.lista} ${aberto ? styles.aberto : ''}`}>
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                onClick={fechar}
                className={({ isActive }) => `${styles.link} ${isActive ? styles.ativo : ''}`}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
