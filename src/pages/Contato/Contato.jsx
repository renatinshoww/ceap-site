import { useRef, useState } from 'react'
import Button from '/src/components/Button/Button'
import Card from '/src/components/Card/Card'
import styles from './Contato.module.css'

const INFO_CONTATO = {
  nome: 'CEAP - Centro Espírita Amor ao Próximo',
  telefone: '(32) 8844-7145',
  telefoneLink: '+553288447145',
}

const REDES_SOCIAIS = [
  { nome: 'Facebook', url: 'https://www.facebook.com/ceapjf/' },
  { nome: 'Instagram', url: 'https://www.instagram.com/ceamoraoproximojf' },
]

const CAMPOS_VAZIOS = { nome: '', email: '', assunto: '', mensagem: '' }
const ORDEM_CAMPOS = ['nome', 'email', 'assunto', 'mensagem']
const REGEX_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const VALIDADORES = {
  nome: (v) => {
    if (!v.trim()) return 'Informe seu nome.'
    if (v.trim().length < 2) return 'O nome precisa ter pelo menos 2 letras.'
    return ''
  },
  email: (v) => {
    if (!v.trim()) return 'Informe seu e-mail.'
    if (!REGEX_EMAIL.test(v.trim())) return 'Digite um e-mail válido, como nome@exemplo.com.'
    return ''
  },
  assunto: (v) => {
    if (!v.trim()) return 'Informe o assunto da mensagem.'
    if (v.trim().length < 3) return 'O assunto precisa ter pelo menos 3 letras.'
    return ''
  },
  mensagem: (v) => {
    if (!v.trim()) return 'Escreva sua mensagem.'
    if (v.trim().length < 10) return 'A mensagem precisa ter pelo menos 10 caracteres.'
    return ''
  },
}

function Contato() {
  const [valores, setValores] = useState(CAMPOS_VAZIOS)
  const [erros, setErros] = useState({})
  const [enviando, setEnviando] = useState(false)
  const [enviado, setEnviado] = useState(false)
  const [erroEnvio, setErroEnvio] = useState('')
  const refs = useRef({})

  const validarCampo = (campo, valor) => {
    setErros((atual) => ({ ...atual, [campo]: VALIDADORES[campo](valor) }))
  }

  const aoDigitar = (e) => {
    const { name, value } = e.target
    setValores((atual) => ({ ...atual, [name]: value }))
    setEnviado(false)
    if (erros[name]) validarCampo(name, value)
  }

  const aoSair = (e) => {
    const { name, value } = e.target
    validarCampo(name, value)
  }

  const aoEnviar = async (e) => {
    e.preventDefault()
    setErroEnvio('')

    const novosErros = {}
    ORDEM_CAMPOS.forEach((campo) => {
      novosErros[campo] = VALIDADORES[campo](valores[campo])
    })
    setErros(novosErros)

    const primeiroComErro = ORDEM_CAMPOS.find((campo) => novosErros[campo])
    if (primeiroComErro) {
      refs.current[primeiroComErro]?.focus()
      return
    }

    setEnviando(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 800))
      setValores(CAMPOS_VAZIOS)
      setErros({})
      setEnviado(true)
    } catch {
      setErroEnvio('Não foi possível enviar sua mensagem. Tente novamente em instantes.')
    } finally {
      setEnviando(false)
    }
  }
  const propsCampo = (campo) => ({
    id: campo,
    name: campo,
    value: valores[campo],
    onChange: aoDigitar,
    onBlur: aoSair,
    ref: (el) => (refs.current[campo] = el),
    className: `${styles.campo} ${erros[campo] ? styles.campoErro : ''}`,
    'aria-invalid': erros[campo] ? 'true' : 'false',
    'aria-describedby': erros[campo] ? `${campo}-erro` : undefined,
    disabled: enviando,
  })

  const mensagemErro = (campo) =>
    erros[campo] ? (
      <p id={`${campo}-erro`} className={styles.erro}>
        {erros[campo]}
      </p>
    ) : null

  return (
    <div className="container">
      <section className={styles.pagina}>
        <header className={styles.cabecalho}>
          <h1>Contato</h1>
          <p className={styles.intro}>
            Tem uma dúvida, sugestão ou quer saber mais sobre nossas atividades? Envie uma
            mensagem e responderemos o mais breve possível.
          </p>
        </header>

        <div className={styles.grade}>
          <form className={styles.formulario} onSubmit={aoEnviar} noValidate>
            <div className={styles.grupo}>
              <label htmlFor="nome">Nome</label>
              <input type="text" autoComplete="name" {...propsCampo('nome')} />
              {mensagemErro('nome')}
            </div>

            <div className={styles.grupo}>
              <label htmlFor="email">E-mail</label>
              <input type="email" autoComplete="email" inputMode="email" {...propsCampo('email')} />
              {mensagemErro('email')}
            </div>

            <div className={styles.grupo}>
              <label htmlFor="assunto">Assunto</label>
              <input type="text" {...propsCampo('assunto')} />
              {mensagemErro('assunto')}
            </div>

            <div className={styles.grupo}>
              <label htmlFor="mensagem">Mensagem</label>
              <textarea rows="6" {...propsCampo('mensagem')} />
              {mensagemErro('mensagem')}
            </div>

            <div className={styles.acoes}>
              <Button type="submit" variant="highlight" disabled={enviando}>
                {enviando ? 'Enviando...' : 'Enviar mensagem'}
              </Button>
            </div>
            <div role="status" aria-live="polite">
              {enviado && (
                <p className={styles.sucesso}>
                  Mensagem enviada! Obrigado por entrar em contato.
                </p>
              )}
            </div>
            {erroEnvio && (
              <p className={styles.erro} role="alert">
                {erroEnvio}
              </p>
            )}
          </form>

          <aside className={styles.info} aria-label="Informações de contato">
            <Card
              titulo={INFO_CONTATO.nome}
              texto={
                <a href={`tel:${INFO_CONTATO.telefoneLink}`}>{INFO_CONTATO.telefone}</a>
              }
            />
            <Card
              titulo="Redes sociais"
              texto={
                <span className={styles.redes}>
                  {REDES_SOCIAIS.map((rede) => (
                    <a key={rede.nome} href={rede.url} target="_blank" rel="noopener noreferrer">
                      {rede.nome}
                      <span className="sr-only"> (abre em nova aba)</span>
                    </a>
                  ))}
                </span>
              }
            />
          </aside>
        </div>
      </section>
    </div>
  )
}

export default Contato
