import { z } from "zod";

export const requestSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Informe seu nome.")
    .max(120, "O nome deve ter no máximo 120 caracteres."),

  whatsapp: z
    .string()
    .trim()
    .min(10, "Informe um WhatsApp válido.")
    .max(20, "Informe um WhatsApp válido."),

  email: z
    .string()
    .trim()
    .email("Informe um e-mail válido.")
    .max(160, "O e-mail deve ter no máximo 160 caracteres.")
    .optional()
    .or(z.literal("")),

  category: z
    .string()
    .trim()
    .min(1, "Selecione uma categoria.")
    .max(80, "A categoria é muito longa."),

  title: z
    .string()
    .trim()
    .min(3, "Informe um título para sua solicitação.")
    .max(120, "O título deve ter no máximo 120 caracteres."),

  description: z
    .string()
    .trim()
    .min(10, "Descreva um pouco melhor o que você precisa.")
    .max(
      2000,
      "A descrição deve ter no máximo 2.000 caracteres.",
    ),

  deadline: z
    .string()
    .trim()
    .max(80, "O prazo informado é muito longo.")
    .optional()
    .or(z.literal("")),
});

export type RequestFormData = z.infer<typeof requestSchema>;