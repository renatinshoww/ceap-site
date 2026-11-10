Guia de contribuição
Fluxo de trabalho
Escolha uma issue sem responsável e atribua a você.
Atualize a main: git checkout main && git pull.
Crie sua branch: git checkout -b feat/navbar.
Desenvolva e faça commits pequenos.
git push -u origin feat/navbar e abra um Pull Request para main.
Peça revisão a pelo menos 1 colega. Só faça merge após aprovação.
Use Closes #N na descrição do PR para fechar a issue automaticamente.

Nunca faça push direto na main.

Nome de branches
feat/... nova funcionalidade ou componente
fix/... correção
style/... ajustes visuais
docs/... documentação
Mensagens de commit

Formato: tipo: descrição curta

feat: adiciona componente Button
fix: corrige menu mobile
style: ajusta espaçamento do hero
Regras de código
Componentes em PascalCase, um por pasta: components/Button/Button.jsx + Button.module.css.
Use apenas variáveis de styles/tokens.css para cores, fontes e espaçamentos.
Componentes devem receber dados por props (nada de texto fixo que precise ser reaproveitado).
Teste no celular (DevTools) antes de abrir o PR.
Rode npm run lint antes de commitar.
Checklist do Pull Request
 Rodei o projeto e funciona sem erros no console
 Usei os tokens da identidade visual
 Está responsivo (mobile e desktop)
 Imagens têm alt, botões e links são acessíveis por teclado
 Linkei a issue (Closes #N)
Resolvendo conflitos
bash
git checkout main && git pull
git checkout sua-branch
git merge main
# resolva os conflitos, depois:
git add . && git commit

Em dúvida, peça ajuda no grupo antes de forçar qualquer coisa. Nunca use git push --force na main.
