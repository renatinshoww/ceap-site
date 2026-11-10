#!/usr/bin/env bash
# Apaga TODAS as issues (abertas e fechadas) do repositório atual,
# além das labels e do milestone que não são mais usados.
# Uso (no Git Bash, dentro da pasta do repositório):  bash excluir-issues.sh

set -e

REPO=$(gh repo view --json nameWithOwner -q .nameWithOwner)
echo "Repositório: $REPO"
echo
echo "Issues que serão apagadas:"
gh issue list --state all --limit 200
echo

read -r -p "Digite SIM para apagar todas as issues acima: " RESP
if [ "$RESP" != "SIM" ]; then
  echo "Cancelado. Nada foi apagado."
  exit 0
fi

# ---------- Issues ----------
for n in $(gh issue list --state all --limit 200 --json number -q '.[].number'); do
  gh issue delete "$n" --yes
done

# ---------- Labels que não são mais usadas ----------
for l in estilo docs deploy; do
  gh label delete "$l" --yes 2>/dev/null || true
done

# ---------- Milestone que não é mais usado ----------
ID=$(gh api "repos/$REPO/milestones?state=all" -q '.[] | select(.title=="4 - Finalização") | .number')
if [ -n "$ID" ]; then
  gh api -X DELETE "repos/$REPO/milestones/$ID" >/dev/null
fi

echo
echo "Pronto! Agora rode:  bash criar-issues.sh"
