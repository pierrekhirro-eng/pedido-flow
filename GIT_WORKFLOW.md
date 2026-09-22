# Git Workflow — PedidoFlow

## Regra

Nenhuma etapa importante termina sem commit.

## Fluxo

```bash
git status
git add .
git commit -m "tipo: descricao"
git status
```

## Tipos sugeridos

- `chore`: configuração/estrutura
- `feat`: funcionalidade nova
- `fix`: correção
- `refactor`: reorganização sem mudança de comportamento
- `test`: testes
- `docs`: documentação
- `style`: ajustes visuais/formatação

## Checkpoint padrão

1. Implementar uma unidade pequena.
2. Rodar verificação/testes disponíveis.
3. Corrigir erros.
4. Fazer commit.
5. Só então começar a próxima unidade.
