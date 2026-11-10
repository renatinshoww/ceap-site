#!/usr/bin/env bash
# Cria labels, milestones e issues do projeto CEAP no GitHub.
# Requisitos: GitHub CLI instalado e autenticado (gh auth login).
# Uso (no Git Bash, dentro da pasta do repositório):  bash criar-issues.sh

set -e

REPO=$(gh repo view --json nameWithOwner -q .nameWithOwner)
echo "Criando tarefas em: $REPO"

# ---------- Labels ----------
gh label create setup       --color 5319E7 --description "Configuração do projeto" --force
gh label create componente  --color 0E8A16 --description "Componente reutilizável"  --force
gh label create pagina      --color 1D76DB --description "Tela do site"             --force
gh label create "bom para iniciantes" --color 7057FF --description "Tarefa mais simples" --force

# ---------- Milestones ----------
for m in "1 - Setup" "2 - Componentes" "3 - Páginas"; do
  gh api "repos/$REPO/milestones" -f title="$m" >/dev/null 2>&1 || true
done

issue() {
  # $1 título | $2 labels | $3 milestone | $4 corpo
  gh issue create --title "$1" --label "$2" --milestone "$3" --body "$4"
}

# ================= 1 - SETUP =================
M="1 - Setup"

issue "Criar projeto React com Vite" "setup" "$M" \
"- [ ] \`npm create vite@latest\` com template React
- [ ] Instalar \`react-router-dom\`
- [ ] Criar as pastas: \`components\`, \`pages\`, \`data\`, \`styles\`, \`assets\`
- [ ] Remover arquivos de exemplo do Vite
- [ ] Confirmar que \`npm run dev\` funciona
- [ ] Commit na main (única tarefa permitida direto na main)"

issue "Aplicar a identidade visual (tokens.css e global.css)" "setup" "$M" \
"- [ ] Preencher o \`IDENTIDADE_VISUAL.md\`
- [ ] Criar \`src/styles/tokens.css\` com cores, fontes e espaçamentos
- [ ] Criar \`src/styles/global.css\` com reset e estilos base
- [ ] Importar as fontes
- [ ] Colocar a logo em \`src/assets\`"

issue "Configurar rotas e layout base" "setup" "$M" \
"- [ ] Rotas: \`/\` (Início), \`/eventos\`, \`/contato\`
- [ ] Layout com Navbar e Footer e \`<Outlet />\`
- [ ] Criar as 3 páginas vazias para o grupo começar a trabalhar"

# ================= 2 - COMPONENTES =================
M="2 - Componentes"

issue "Componente Button" "componente,bom para iniciantes" "$M" \
"- [ ] Variantes: primário, destaque e contorno
- [ ] Props: \`variant\`, \`onClick\`, \`href\`, \`children\`
- [ ] Estados hover e disabled"

issue "Componente Navbar (com menu mobile)" "componente" "$M" \
"- [ ] Logo e links para as 3 páginas
- [ ] Link da página atual destacado
- [ ] Menu hambúrguer no celular"

issue "Componente Footer" "componente,bom para iniciantes" "$M" \
"- [ ] Logo, links, contatos e redes sociais
- [ ] Copyright com o ano
- [ ] Responsivo"

issue "Componentes Container e SectionTitle" "componente,bom para iniciantes" "$M" \
"- [ ] \`Container\`: largura máxima e espaçamento lateral padrão
- [ ] \`SectionTitle\`: título com subtítulo opcional"

issue "Componentes Card e EventCard" "componente" "$M" \
"- [ ] \`Card\` genérico (imagem, título, texto)
- [ ] \`EventCard\`: data, título, local, categoria e botão"

issue "Componentes de formulário (Input, Textarea, Select)" "componente" "$M" \
"- [ ] Props: \`label\`, \`name\`, \`value\`, \`onChange\`, \`error\`
- [ ] Mensagem de erro visível abaixo do campo"

# ================= 3 - PÁGINAS =================
M="3 - Páginas"

issue "Página Início" "pagina" "$M" \
"- [ ] Destaque principal com botão
- [ ] Seção Sobre (missão, visão, valores)
- [ ] Números de impacto
- [ ] 3 eventos em destaque
- [ ] Chamada final
- [ ] Funciona bem no celular"

issue "Página Eventos" "pagina" "$M" \
"- [ ] Criar \`src/data/eventos.json\` com alguns eventos de exemplo
- [ ] Listar os eventos com \`EventCard\`
- [ ] Filtro por categoria
- [ ] Funciona bem no celular"

issue "Página Contato" "pagina" "$M" \
"- [ ] Formulário: nome, e-mail, assunto e mensagem
- [ ] Validação simples com mensagens de erro
- [ ] Informações de contato e redes sociais
- [ ] Funciona bem no celular"

echo "Pronto! Veja as issues em: https://github.com/$REPO/issues"
