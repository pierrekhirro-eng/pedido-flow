# Arquitetura do PedidoFlow

## Fluxo principal

Cliente -> Loja pública -> Produtos -> Carrinho -> Pedido -> WhatsApp

Proprietário -> Login -> Dashboard -> Produtos/Pedidos/Configurações

## Estrutura

```text
app/
├── (marketing)/
│   └── page.tsx
├── (auth)/
│   ├── login/page.tsx
│   └── cadastro/page.tsx
├── dashboard/
│   ├── page.tsx
│   ├── pedidos/page.tsx
│   ├── produtos/page.tsx
│   └── configuracoes/page.tsx
├── loja/
│   └── [slug]/page.tsx
├── api/
│   └── orders/route.ts
├── layout.tsx
├── loading.tsx
├── error.tsx
└── not-found.tsx

components/
├── ui/
├── dashboard/
├── store/
├── orders/
└── skeletons/

lib/
├── supabase/
├── validations/
├── whatsapp/
└── utils/

hooks/
types/
styles/
tests/
```

## Princípios

1. `app/` contém rotas e composição de páginas.
2. `components/` contém UI reutilizável separada por domínio.
3. `lib/` concentra integrações e regras auxiliares.
4. `types/` concentra tipos compartilhados.
5. `components/skeletons/` será usado para loading states com skeleton + Anime.js.
6. O WhatsApp inicialmente será uma URL gerada com mensagem pronta; integração oficial fica para uma fase posterior.
7. Pagamentos entram somente depois de validar o fluxo principal.
