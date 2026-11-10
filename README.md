CEAP - Site institucional

Site da ONG CEAP, desenvolvido em grupo com React.

Escopo

3 telas:

Tela	Rota	Conteúdo
Início	/	Hero, sobre a ONG, números de impacto, eventos em destaque, chamada para ação
Eventos	/eventos	Lista de eventos (cards), filtro por categoria/data
Contato	/contato	Formulário com validação, informações de contato, redes sociais

Mais: componentes reutilizáveis, identidade visual do CEAP aplicada via design tokens, layout responsivo.

Stack
React + Vite
React Router
CSS Modules (ou CSS com variáveis) — decidir na tarefa #2
ESLint + Prettier
Como rodar
bash
git clone <URL-DO-REPOSITORIO>
cd ceap-site
npm install
npm run dev
Estrutura de pastas
src/
  assets/          # logo, imagens, fontes
  components/      # componentes reutilizáveis (Button, Card, Navbar...)
  pages/           # Home, Eventos, Contato
  data/            # dados mockados (eventos.json)
  styles/          # tokens.css (cores, fontes, espaçamentos) e global.css
  App.jsx
  main.jsx
Identidade visual

Todas as cores, fontes e espaçamentos ficam em src/styles/tokens.css. Nunca use cores ou fontes "soltas" nos componentes: use as variáveis. Detalhes em IDENTIDADE_VISUAL.md.

Como trabalhar

Leia o CONTRIBUTING.md. Resumo:

Pegue uma issue (atribua a você).
Crie uma branch: feat/nome-da-tarefa.
Faça commits pequenos.
Abra um Pull Request para main e peça revisão de um colega.

As tarefas estão em Issues e organizadas por milestone (Setup → Componentes → Páginas → Finalização).

Equipe
Nome	Responsabilidade
preencher	preencher
