# Site de Apresentação e Venda de Desenvolvimento de Sites

Site institucional e comercial construído com **React + TypeScript + Tailwind CSS** (TanStack Start).
Todo o conteúdo comercial (textos, planos, produtos, projetos, FAQ e contatos) está **separado da interface**,
dentro da pasta `src/data`. Você consegue editar o site inteiro sem mexer nos componentes.

---

## Manual de edição

### 1. Estrutura do projeto

```
src/
  components/        Componentes de interface reutilizáveis
    sections/        Cada seção da página (Hero, Planos, FAQ, etc.)
    ui/              Componentes base (botão, modal, input...)
  data/              ✅ CONTEÚDO EDITÁVEL DO SITE
    siteConfig.ts    Marca, WhatsApp, redes sociais, textos do hero e rodapé
    products.ts      Soluções e níveis de complexidade
    plans.ts         Planos e tabela comparativa
    portfolio.ts     Projetos do portfólio
    faq.ts           Perguntas frequentes
    process.ts       Etapas do processo, diferenciais e tecnologias
    diagnostic.ts    Perguntas e lógica do diagnóstico
  hooks/             Hooks (ex.: animação de entrada por scroll)
  lib/               Funções utilitárias (ex.: geração do link do WhatsApp)
  routes/            Páginas do site (index.tsx é a home)
  styles.css         🎨 Sistema de design (cores, fontes, sombras, animações)
public/              Arquivos públicos (favicon, robots.txt, imagens)
```

**Regra de ouro:** conteúdo em `src/data`, aparência em `src/styles.css`, layout em `src/components`.

### 2. Como alterar o nome da marca

Arquivo: `src/data/siteConfig.ts` → campo `brand`.
Ele é usado na navbar, no rodapé, no título da página e no ícone da logo.

### 3. Como alterar o WhatsApp

Arquivo: `src/data/siteConfig.ts` → campo `whatsappNumber`.
Use o formato internacional, apenas números: `55` + DDD + número.
Exemplo: `"5541999998888"`.

> O número aparece em **um único lugar**. Todos os botões do site são gerados a partir dele.

### 4. Como alterar o Instagram

`src/data/siteConfig.ts` → `instagram`. Cole a URL completa. Deixe `""` para ocultar o link.

### 5. Como alterar o e-mail

`src/data/siteConfig.ts` → `email`.

### 6. Como alterar as cores

Arquivo: `src/styles.css`, bloco `:root`.
As cores usam o formato **oklch**. As principais são:

| Variável       | O que muda                       |
| -------------- | -------------------------------- |
| `--background` | Fundo do site                    |
| `--foreground` | Cor do texto                     |
| `--primary`    | Cor de destaque (botões, ícones) |
| `--surface`    | Fundo dos cards                  |
| `--border`     | Bordas                           |

Alterando `--primary` e `--primary-glow`, todos os botões, gradientes e destaques mudam juntos.

### 7. Como alterar textos

- Textos do topo (hero): `src/data/siteConfig.ts` → objeto `hero`.
- Textos do rodapé: `siteConfig.ts` → objeto `footer`.
- Títulos das seções: dentro de cada arquivo em `src/components/sections/`, na propriedade `title`.

### 8. Como adicionar um produto (solução)

Arquivo: `src/data/products.ts`. Copie um bloco e altere:

```ts
{
  id: "consultoria",
  title: "Consultoria digital",
  category: "Personalizado",
  shortDescription: "Análise e plano de ação para o seu site atual.",
  description: "Texto completo exibido no modal ao clicar em 'Quero saber mais'.",
  features: ["Diagnóstico", "Plano de melhorias", "Acompanhamento"],
  icon: "Sparkles",
  whatsappMessage: "Olá! Gostaria de saber mais sobre a Consultoria digital.",
}
```

O card aparece automaticamente. Para usar um ícone novo, adicione-o em `src/components/Icon.tsx`
(nomes disponíveis em https://lucide.dev/icons).

### 9. Como adicionar um plano

Arquivo: `src/data/plans.ts`:

```ts
{
  id: "premium",
  name: "PREMIUM",
  description: "Para projetos com necessidades avançadas.",
  price: "Sob consulta",
  priceLabel: "Escopo estendido",
  features: ["Recurso 1", "Recurso 2"],
  highlighted: false,
  badge: "",
  cta: "Solicitar orçamento",
  whatsappMessage: "Olá! Tenho interesse no plano PREMIUM.",
}
```

Depois, adicione a coluna na tabela comparativa incluindo `premium: true | false | "texto"`
em cada linha do array `comparison`, no mesmo arquivo.

### 10. Como adicionar um projeto ao portfólio

Arquivo: `src/data/portfolio.ts`:

```ts
{
  id: "padaria-central",
  title: "Site da Padaria Central",
  category: "Institucional",
  description: "Resumo curto exibido no card.",
  goal: "O que o cliente precisava.",
  solution: "O que foi feito.",
  image: "/images/padaria.jpg",
  technologies: ["React", "Tailwind CSS"],
  features: ["Cardápio", "WhatsApp", "Mapa"],
  url: "https://exemplo.com.br",
  demo: false,
}
```

`category` deve ser uma das opções: Institucional, Landing Page, E-commerce, Sistema, Personalizado.
Deixe `demo: true` enquanto for um exemplo demonstrativo.

### 11. Como adicionar uma pergunta ao FAQ

Arquivo: `src/data/faq.ts` → adicione `{ question: "...", answer: "..." }` ao array.

### 12. Como trocar imagens

1. Coloque o arquivo em `public/images/` (crie a pasta se não existir).
2. Referencie como `/images/nome-do-arquivo.jpg` no campo `image` do projeto.
3. Prefira arquivos leves (até ~300 KB) e formatos modernos (`.webp`).

### 13. Como alterar preços

Arquivo: `src/data/plans.ts` → campos `price` e `priceLabel`.
São textos livres: use `"A partir de R$ 1.500"` ou `"Sob consulta"`.

### 14. Como alterar links

- Links do menu e do rodapé: `siteConfig.nav`.
- Redes sociais: `siteConfig.instagram`, `siteConfig.github`, `siteConfig.email`.

### 15. Como alterar mensagens do WhatsApp

Cada botão tem sua própria mensagem:

- Hero: `siteConfig.hero.primaryCtaMessage`
- Soluções: campo `whatsappMessage` em `products.ts`
- Planos: campo `whatsappMessage` em `plans.ts`
- Diagnóstico: gerada automaticamente em `src/components/sections/Diagnostic.tsx`
- Mensagem padrão: `siteConfig.whatsappDefaultMessage`

### 16. Como instalar dependências

```bash
npm install
```

### 17. Como executar localmente

```bash
npm run dev
```

Acesse o endereço exibido no terminal (normalmente `http://localhost:8080`).

### 18. Como fazer o build

```bash
npm run build
```

### 19. Como enviar alterações para o GitHub

```bash
git add .
git commit -m "Atualiza textos do site"
git push
```

Na primeira vez:

```bash
git init
git remote add origin https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
git branch -M main
git push -u origin main
```

### 20. Como publicar

Conecte o repositório do GitHub a um serviço de hospedagem e configure:

- Comando de build: `npm run build`
- Comando de instalação: `npm install`

A cada `git push`, o site é atualizado automaticamente.

### 21. Solução de problemas comuns

| Problema                          | Solução                                                                     |
| --------------------------------- | --------------------------------------------------------------------------- |
| Botão do WhatsApp não abre        | Confira `whatsappNumber` em `siteConfig.ts` (só números, com 55 na frente)   |
| Imagem não aparece                | O arquivo precisa estar em `public/images/` e o caminho começar com `/`      |
| Erro ao rodar `npm run dev`       | Apague `node_modules` e rode `npm install` novamente                         |
| Cor não mudou                     | Verifique se o valor está em formato `oklch(...)` em `src/styles.css`        |
| Ícone não aparece                 | Importe o ícone em `src/components/Icon.tsx`                                 |
| Alteração não apareceu publicada  | Faça `git push` e aguarde o novo build da hospedagem                         |

---

## Segurança

- Nunca coloque senhas, tokens ou chaves privadas nos arquivos do projeto.
- Dados sensíveis devem ficar em variáveis de ambiente — veja `.env.example`.
- O arquivo `.env` está no `.gitignore` e não deve ser enviado ao GitHub.
