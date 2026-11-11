# Identidade visual - CEAP

Valores extraídos do logo oficial. Todos estão implementados em `src/styles/tokens.css`. Nos componentes, use sempre as variáveis e nunca os HEX direto.

## Logo

- Arquivo: `src/assets/logo.svg`. É uma versão **provisória** recriada a partir do logo. Substituir pelo arquivo oficial quando estiver disponível.
- Formato: círculo azul (parte de cima) e verde (parte de baixo), com "Ceap" em letra cursiva branca e "Centro Espírita Amor ao Próximo" abaixo.

## Cores

| Uso              | Nome            | HEX       | Token                     |
| ---------------- | --------------- | --------- | ------------------------- |
| Primária         | Azul CEAP       | `#336699` | `--cor-primaria`          |
| Primária escura  | Azul escuro     | `#264d73` | `--cor-primaria-escura`   |
| Secundária       | Verde CEAP      | `#35cb68` | `--cor-secundaria`        |
| Destaque / CTA   | Verde CEAP      | `#35cb68` | `--cor-destaque`          |
| Fundo            | Branco          | `#ffffff` | `--cor-fundo`             |
| Fundo alternado  | Cinza azulado   | `#f4f7fa` | `--cor-fundo-alt`         |
| Texto            | Quase preto     | `#1c1e1e` | `--cor-texto`             |
| Texto secundário | Cinza           | `#5a6470` | `--cor-texto-secundario`  |

**Contraste:** texto branco sobre o verde `#35cb68` **não** passa no teste de acessibilidade. Em botões verdes, use texto escuro (`--cor-texto-sobre-destaque`). Texto branco sobre o azul `#336699` pode.

## Tipografia

| Uso     | Fonte   | Pesos         |
| ------- | ------- | ------------- |
| Títulos | Poppins | 600, 700      |
| Corpo   | Nunito  | 400, 600, 700 |

As duas são carregadas do Google Fonts no `index.html`.

## Espaçamento e forma

- Escala de espaçamento: 4, 8, 16, 24, 32, 48, 64 px (`--espaco-1` a `--espaco-7`)
- Raio de borda: 8px (`--raio`), 16px (`--raio-lg`), pílula (`--raio-pilula`)
- Sombras: `--sombra` (leve) e `--sombra-lg` (destaque)
- Largura máxima do conteúdo: 1120px (`--largura-max`), usando a classe `.container`

## Tom de voz

Acolhedor, direto, esperançoso.
