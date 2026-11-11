import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import styles from './Layout.module.css'

const LINKS = [
  { to: '/', label: 'Início' },
  { to: '/eventos', label: 'Eventos' },
  { to: '/contato', label: 'Contato' },
]

function Layout() {
  return (
    <div className={styles.layout}>
      <a href="#conteudo" className={styles.pular}>
        Pular para o conteúdo
      </a>
      <Navbar links={LINKS} />
      <main id="conteudo" className={styles.main}>
        <Outlet />
      </main>
      <Footer
        links={LINKS}
        nome="CEAP - Centro Espírita Amor ao Próximo"
        descricao="Acolhimento, solidariedade e amor ao próximo."
      />
    </div>
  )
}

export default Layout
