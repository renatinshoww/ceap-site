import { useState } from 'react'
import EventCard from '../../components/EventCard/EventCard'
import eventos from '../../data/eventos.json'
import styles from './Eventos.module.css'

function Eventos() {
  const [categoria, setCategoria] = useState('Todos')

  const categorias = [
    'Todos',
    ...new Set(eventos.map(evento => evento.categoria))
  ]

  const eventosFiltrados = categoria === 'Todos'
    ? eventos
    : eventos.filter(evento => evento.categoria === categoria)

  return (
    <section className={`container ${styles.pagina}`}>
      <div className={styles.cabecalho}>
        <h1>Eventos</h1>
        <p>
          Confira nossos próximos eventos e participe de momentos
          de aprendizado, união e solidariedade com o CEAP.
        </p>
      </div>

      <div className={styles.filtros} role="group" aria-label="Filtrar por categoria">
        {categorias.map(item => (
          <button
            key={item}
            type="button"
            aria-pressed={categoria === item}
            className={`${styles.filtro} ${categoria === item ? styles.ativo : ''}`}
            onClick={() => setCategoria(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <div className={styles.eventos}>
        {eventosFiltrados.map(evento => (
          <EventCard
            key={evento.id}
            titulo={evento.titulo}
            data={evento.data}
            local={evento.local}
            categoria={evento.categoria}
          />
        ))}
      </div>

      {eventosFiltrados.length === 0 && (
        <p>Nenhum evento encontrado.</p>
      )}
    </section>
  )
}

export default Eventos