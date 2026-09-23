import type { RequestFormData } from "@/lib/validations/request";

/**
 * Dados recebidos pela camada de apresentação.
 *
 * Mantemos o tipo original do formulário porque ele representa
 * exatamente o que o usuário pode enviar.
 */
export type CreateRequestInput = RequestFormData;

/**
 * Dados normalizados que seguem para persistência.
 *
 * Aqui todos os campos opcionais do formulário já possuem
 * valores concretos.
 */
export interface NormalizedRequestInput {
  name: string;
  whatsapp: string;
  email: string;
  category: string;
  title: string;
  description: string;
  deadline: string;
}

/**
 * Status inicial de uma solicitação.
 *
 * Os demais estados serão adicionados quando implementarmos
 * o pipeline de atendimento.
 */
export type RequestStatus = "new";

/**
 * Representação de uma solicitação criada.
 *
 * Esta estrutura é independente da camada visual e da futura
 * implementação do banco de dados.
 */
export interface CreatedRequest {
  id: string;
  name: string;
  whatsapp: string;
  email: string;
  category: string;
  title: string;
  description: string;
  deadline: string;
  status: RequestStatus;
  createdAt: string;
}

/**
 * Erro específico da camada de serviço de solicitações.
 */
export class RequestServiceError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "RequestServiceError";
  }
}

/**
 * Normaliza os dados recebidos do formulário.
 *
 * Responsabilidades:
 * - remover espaços desnecessários;
 * - transformar opcionais em strings vazias;
 * - manter um contrato estável para as próximas camadas.
 */
function normalizeRequestInput(
  input: CreateRequestInput,
): NormalizedRequestInput {
  return {
    name: input.name.trim(),
    whatsapp: input.whatsapp.trim(),
    email: (input.email ?? "").trim(),
    category: input.category.trim(),
    title: input.title.trim(),
    description: input.description.trim(),
    deadline: (input.deadline ?? "").trim(),
  };
}

/**
 * Valida invariantes básicas do domínio.
 *
 * A validação principal do formulário continua sendo responsabilidade
 * do Zod. Aqui protegemos o service contra chamadas inválidas vindas
 * de outras partes da aplicação.
 */
function validateNormalizedRequest(
  input: NormalizedRequestInput,
): void {
  if (!input.name) {
    throw new RequestServiceError(
      "O nome do cliente é obrigatório.",
    );
  }

  if (!input.whatsapp) {
    throw new RequestServiceError(
      "O WhatsApp do cliente é obrigatório.",
    );
  }

  if (!input.category) {
    throw new RequestServiceError(
      "A categoria da solicitação é obrigatória.",
    );
  }

  if (!input.title) {
    throw new RequestServiceError(
      "O título da solicitação é obrigatório.",
    );
  }

  if (!input.description) {
    throw new RequestServiceError(
      "A descrição da solicitação é obrigatória.",
    );
  }
}

/**
 * Cria uma nova solicitação.
 *
 * IMPORTANTE:
 * Por enquanto esta implementação é somente local.
 * Quando o Repository + Supabase entrarem no projeto,
 * esta função passará a persistir os dados sem alterar
 * o contrato usado pelo formulário.
 */
export async function createRequest(
  input: CreateRequestInput,
): Promise<CreatedRequest> {
  const normalized = normalizeRequestInput(input);

  validateNormalizedRequest(normalized);

  return {
    id: crypto.randomUUID(),
    ...normalized,
    status: "new",
    createdAt: new Date().toISOString(),
  };
}