import { useState } from 'react';

import Input from '../../components/Input/Input';
import Select from '../../components/Select/Select';
import Textarea from '../../components/Textarea/Textarea';
import Button from '../../components/Button/Button';

import styles from './Contato.module.css';

function Contato() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    assunto: 'Quero ser voluntário',
    mensagem: ''
  });

  const [errors, setErrors] = useState({});

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const newErrors = {};

    if (!formData.nome.trim()) {
      newErrors.nome = 'Informe seu nome.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Informe seu e-mail.';
    }

    if (!formData.assunto.trim()) {
      newErrors.assunto = 'Selecione um assunto.';
    }

    if (!formData.mensagem.trim()) {
      newErrors.mensagem = 'Digite uma mensagem.';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    console.log(formData);

    alert('Mensagem enviada com sucesso!');
  }

  return (
    <section className={`container ${styles.pagina}`}>
      <div className={styles.formularioContainer}>
        <h1>Contato</h1>

        <h2 className={styles.tituloFormulario}>
          Envie sua mensagem
        </h2>

        <p>
          Tem alguma dúvida, sugestão ou deseja participar das
          atividades do CEAP? Entre em contato conosco.
        </p>

        <form
          className={styles.formulario}
          onSubmit={handleSubmit}
        >
          <Input
            label="Nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            placeholder="Seu nome completo"
            error={errors.nome}
          />

          <Input
            label="E-mail"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="voce@email.com"
            error={errors.email}
          />

          <Select
            label="Assunto"
            name="assunto"
            value={formData.assunto}
            onChange={handleChange}
            options={[
              'Quero ser voluntário',
              'Quero apoiar o CEAP',
              'Dúvidas sobre eventos',
              'Outro assunto'
            ]}
            error={errors.assunto}
          />

          <Textarea
            label="Mensagem"
            name="mensagem"
            value={formData.mensagem}
            onChange={handleChange}
            placeholder="Escreva aqui sua mensagem"
            error={errors.mensagem}
          />

          <Button
              type="submit"
              variant="contact"
            >
              Enviar mensagem
          </Button>
        </form>
      </div>
    </section>
  );
}

export default Contato;