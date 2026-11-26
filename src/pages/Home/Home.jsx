import { Link } from 'react-router-dom'
import Card from '../../components/Card/Card'
import EventCard from '../../components/EventCard/EventCard'
import logo from '../../assets/logo.svg'
import styles from './Home.module.css'

// TODO: textos e números abaixo são provisórios, confirmar com o CEAP antes da entrega.
const SOBRE = [
  {
    titulo: 'Missão',
    texto: 'Acolher quem precisa e promover o amor ao próximo por meio de ações solidárias e do estudo da doutrina espírita.',
  },
  {
    titulo: 'Visão',
    texto: 'Ser uma casa de referência em acolhimento, onde cada pessoa encontra apoio, esperança e um lugar para recomeçar.',
  },
  {
    titulo: 'Valores',
    texto: 'Caridade, respeito, fraternidade, humildade e compromisso com o bem de todos.',
  },
]

const NUMEROS = [
  { valor: '25+', rotulo: 'anos de história' },
  { valor: '1.200', rotulo: 'famílias atendidas' },
  { valor: '80', rotulo: 'voluntários ativos' },
  { valor: '40', rotulo: 'ações por ano' },
]

// Quando o JSON de eventos (data/eventos.json) existir, trocar por um import e pegar os 3 primeiros.
const EVENTOS_DESTAQUE = [
  {
    id: 1,
    data: '2026-12-06',
    titulo: 'Campanha de Natal Solidário',
    local: 'Sede do CEAP',
    categoria: 'Solidariedade',
  },
  {
    id: 2,
    data: '2026-12-13',
    titulo: 'Palestra: A força do perdão',
    local: 'Salão principal do CEAP',
    categoria: 'Palestra',
  },
  {
    id: 3,
    data: '2026-12-20',
    titulo: 'Bazar beneficente',
    local: 'Sede do CEAP',
    categoria: 'Bazar',
  },
]

function Home() {
  return (
    <>
      <section className={styles.hero} aria-labelledby="hero-titulo">
        <div className={`container ${styles.heroConteudo}`}>
          <div className={styles.heroTexto}>
            <h1 id="hero-titulo" className={styles.heroTitulo}>
              Amor ao próximo, em ação todos os dias
            </h1>
            <p className={styles.heroLead}>
              O CEAP é uma casa de acolhimento, estudo e solidariedade. Venha conhecer o nosso trabalho e fazer
              parte dele.
            </p>
            <div className={styles.acoes}>
              <Link to="/eventos" className={`${styles.botao} ${styles.botaoDestaque}`}>
                Ver eventos
              </Link>
              <Link to="/contato" className={`${styles.botao} ${styles.botaoContorno}`}>
                Fale conosco
              </Link>
            </div>
          </div>
          <img src={logo} alt="Logo do CEAP - Centro Espírita Amor ao Próximo" className={styles.heroLogo} />
        </div>
      </section>

      <section className={styles.secao} aria-labelledby="sobre-titulo">
        <div className="container">
          <h2 id="sobre-titulo" className={styles.secaoTitulo}>
            Sobre o CEAP
          </h2>
          <div className={styles.grade3}>
            {SOBRE.map((item) => (
              <Card key={item.titulo} titulo={item.titulo} texto={item.texto} />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.numeros} aria-labelledby="numeros-titulo">
        <div className="container">
          <h2 id="numeros-titulo" className={`${styles.secaoTitulo} ${styles.tituloInvertido}`}>
            Nosso impacto
          </h2>
          <dl className={styles.listaNumeros}>
            {NUMEROS.map((n) => (
              <div key={n.rotulo} className={styles.numero}>
                <dt className={styles.numeroRotulo}>{n.rotulo}</dt>
                <dd className={styles.numeroValor}>{n.valor}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className={`${styles.secao} ${styles.secaoAlt}`} aria-labelledby="eventos-titulo">
        <div className="container">
          <div className={styles.cabecalhoEventos}>
            <h2 id="eventos-titulo" className={styles.secaoTitulo}>
              Eventos em destaque
            </h2>
            <Link to="/eventos" className={styles.linkTodos}>
              Ver todos os eventos
            </Link>
          </div>
          <div className={styles.grade3}>
            {EVENTOS_DESTAQUE.map((evento) => (
              <EventCard
                key={evento.id}
                data={evento.data}
                titulo={evento.titulo}
                local={evento.local}
                categoria={evento.categoria}
                link="/eventos"
              />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.chamada} aria-labelledby="chamada-titulo">
        <div className={`container ${styles.chamadaConteudo}`}>
          <h2 id="chamada-titulo" className={styles.chamadaTitulo}>
            Venha fazer parte dessa corrente do bem
          </h2>
          <p className={styles.chamadaTexto}>
            Seja como voluntário, doador ou visitante, sua presença faz diferença. Entre em contato e saiba como
            ajudar.
          </p>
          <Link to="/contato" className={`${styles.botao} ${styles.botaoDestaque}`}>
            Quero participar
          </Link>
        </div>
      </section>
    </>
  )
}

export default Home