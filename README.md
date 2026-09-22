<div align="center">

# PedidoFlow

### Pedidos simples. Operações organizadas.

Uma plataforma SaaS para pequenos negócios criarem uma vitrine digital, receberem pedidos e encaminharem o pedido pronto para o WhatsApp.

<p>
  <a href="https://github.com/pierrekhirro-eng/pedido-flow">
    <img src="https://img.shields.io/badge/status-in%20development-111827?style=for-the-badge" alt="Status: in development" />
  </a>
  <img src="https://img.shields.io/badge/Next.js-111827?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/TypeScript-111827?style=for-the-badge&logo=typescript&logoColor=3178C6" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Supabase-111827?style=for-the-badge&logo=supabase&logoColor=3FCF8E" alt="Supabase" />
</p>

<p>
  <a href="#-visão-do-produto">Produto</a> ·
  <a href="#-arquitetura">Arquitetura</a> ·
  <a href="#-stack">Stack</a> ·
  <a href="#-roadmap">Roadmap</a> ·
  <a href="#-desenvolvimento">Desenvolvimento</a>
</p>

</div>

---

## ✦ Visão do produto

O **PedidoFlow** nasceu de um problema simples: pequenos negócios recebem pedidos pelo WhatsApp, mas normalmente precisam organizar produtos, valores, clientes e pedidos manualmente.

A proposta é colocar uma camada organizada entre o cliente e o WhatsApp:

```text
Cliente
   │
   ▼
Vitrine pública
   │
   ▼
Produtos → Carrinho → Pedido
                         │
                         ▼
                    WhatsApp
                         │
                         ▼
                    Negócio
```

O objetivo do MVP é tornar esse fluxo rápido, claro e fácil de usar tanto no celular quanto no desktop.

---

## ◆ Experiência principal

### Para quem vende

- criar uma página pública para o negócio;
- cadastrar e organizar produtos;
- acompanhar pedidos em um painel;
- controlar informações básicas da loja;
- encaminhar pedidos para o WhatsApp.

### Para quem compra

- abrir um link da loja;
- navegar pelos produtos;
- adicionar itens ao carrinho;
- conferir o total;
- enviar o pedido com uma mensagem de WhatsApp já estruturada.

---

## ◇ Princípios do produto

**Mobile first**  
O fluxo principal precisa funcionar muito bem no celular.

**Poucos cliques**  
O cliente deve chegar ao pedido o mais rápido possível.

**Interface com personalidade**  
O PedidoFlow não deve parecer um template genérico de dashboard.

**Performance percebida**  
Skeletons, transições e carregamentos bem tratados fazem parte da experiência.

**Arquitetura preparada para crescer**  
Começamos com um MVP enxuto sem fechar portas para recursos futuros.

---

## ⚙ Stack

| Camada | Tecnologia |
|---|---|
| Framework | Next.js |
| Linguagem | TypeScript |
| UI | Tailwind CSS + componentes próprios |
| Animação | Anime.js |
| Backend / BaaS | Supabase |
| Banco | PostgreSQL |
| Autenticação | Supabase Auth |
| Validação | Zod |
| Formulários | React Hook Form |
| Ícones | Lucide React |
| Qualidade | TypeScript + ESLint + testes |

A regra é simples: **dependência nova só entra quando resolve um problema real do produto.**

---

## 🧱 Arquitetura

```text
app/
├── (marketing)/       # Landing e páginas institucionais
├── (auth)/            # Login e cadastro
├── dashboard/         # Área administrativa
│   ├── pedidos/
│   ├── produtos/
│   └── configuracoes/
├── loja/[slug]/       # Vitrine pública de cada negócio
└── api/orders/        # Fluxos de pedidos

components/
├── dashboard/
├── orders/
├── skeletons/
├── store/
└── ui/

lib/
├── supabase/
├── utils/
├── validations/
└── whatsapp/

hooks/
types/
tests/
styles/
```

A aplicação é organizada por responsabilidade para que a interface, regras de negócio e integrações possam evoluir sem transformar o projeto em um monólito difícil de manter.

---

## 🗃 Modelo de domínio do MVP

```text
User
 │
 ▼
Store
 ├── Product
 └── Order
       └── OrderItem
```

Entidades iniciais previstas:

- `profiles`
- `stores`
- `products`
- `orders`
- `order_items`

O banco será protegido por políticas de acesso no Supabase, mantendo os dados de cada negócio isolados por conta/loja.

---

## ✨ Experiência de carregamento

Uma parte importante do PedidoFlow é a **performance percebida**.

Em vez de uma tela vazia com `Loading...`, o produto utilizará skeletons próximos do layout final:

```text
┌─────────────────────────────────────────┐
│  ░░░░░░░░        ░░░░░░░               │
│                                         │
│  ░░░░░░░░░░░░░░░░░░░░░                 │
│                                         │
│  ┌──────────────┐  ┌──────────────┐    │
│  │ ░░░░░░░░░░░  │  │ ░░░░░░░░░░░  │    │
│  │ ░░░░░░░░     │  │ ░░░░░░░░     │    │
│  │ ░░░░         │  │ ░░░░         │    │
│  └──────────────┘  └──────────────┘    │
└─────────────────────────────────────────┘
```

**Anime.js** será usado de forma seletiva para entrada de conteúdo, transições e microinterações; o CSS continua responsável pelos efeitos simples e contínuos.

---

## 🚧 Roadmap

### Fase 01 — Fundação

- [x] Estrutura inicial do projeto
- [x] Next.js + TypeScript
- [x] Configuração do Tailwind CSS
- [x] Dependências essenciais
- [x] Repositório Git/GitHub

### Fase 02 — Identidade e interface

- [ ] Design system
- [ ] Tokens visuais
- [ ] Landing page
- [ ] Componentes base
- [ ] Skeleton system
- [ ] Animações com Anime.js

### Fase 03 — Produto

- [ ] Cadastro e login
- [ ] Criação da loja
- [ ] Gerenciamento de produtos
- [ ] Vitrine pública
- [ ] Carrinho
- [ ] Geração da mensagem de WhatsApp

### Fase 04 — Operação

- [ ] Painel de pedidos
- [ ] Estados do pedido
- [ ] Histórico
- [ ] Configurações da loja
- [ ] Observabilidade e tratamento de erros

### Fase 05 — Monetização

- [ ] Plano gratuito
- [ ] Plano pago
- [ ] Limites por plano
- [ ] Assinatura e cobrança
- [ ] Métricas do produto

> O roadmap é intencionalmente incremental: primeiro validamos o fluxo central; depois adicionamos complexidade.

---

## 🔁 Fluxo de desenvolvimento

Cada etapa segue o mesmo ciclo:

```text
Planejar
   ↓
Implementar
   ↓
Testar
   ↓
Build
   ↓
Commit
   ↓
Push
```

Exemplos de commits:

```text
chore: initialize PedidoFlow
feat: add public store
feat: add product management
feat: add shopping cart
feat: add whatsapp order flow
fix: correct order total
style: refine dashboard layout
```

---

## 🛡 Segurança e configuração

Segredos e credenciais **não entram no repositório**.

Use o arquivo de exemplo:

```text
.env.example
```

Para desenvolvimento local, crie:

```text
.env.local
```

As variáveis de ambiente devem permanecer fora do Git, incluindo chaves do Supabase e futuras credenciais de serviços externos.

---

## ▶ Desenvolvimento local

```bash
npm install
npm run dev
```

Aplicação local:

```text
http://localhost:3000
```

Build de produção:

```bash
npm run build
```

---

## 📌 Status atual

O projeto está em **fase de fundação do MVP**.

Neste momento, a prioridade é construir uma base visual sólida e implementar o fluxo principal sem adicionar funcionalidades que ainda não foram validadas.

---

<div align="center">

### PedidoFlow

**Uma camada simples entre o cliente, o pedido e o WhatsApp.**

Construído incrementalmente com foco em produto, experiência e código sustentável.

</div>
