"use client";

import * as React from "react";
import { CheckCircle2, Send, TriangleAlert } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

import {
  createRequest,
  RequestServiceError,
} from "@/lib/services/request-service";

import {
  requestSchema,
  type RequestFormData,
} from "@/lib/validations/request";

const categories = [
  {
    value: "design",
    label: "Design",
  },
  {
    value: "marketing",
    label: "Marketing",
  },
  {
    value: "technology",
    label: "Tecnologia",
  },
  {
    value: "maintenance",
    label: "Manutenção",
  },
  {
    value: "photography",
    label: "Fotografia",
  },
  {
    value: "other",
    label: "Outro",
  },
] as const;

const defaultValues: RequestFormData = {
  name: "",
  whatsapp: "",
  email: "",
  category: "",
  title: "",
  description: "",
  deadline: "",
};

export function RequestForm() {
  const [submitError, setSubmitError] = React.useState<string | null>(
    null,
  );

  const [submittedRequest, setSubmittedRequest] = React.useState<
    Awaited<ReturnType<typeof createRequest>> | null
  >(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<RequestFormData>({
    resolver: zodResolver(requestSchema),
    defaultValues,
    mode: "onBlur",
  });

  const onSubmit = async (data: RequestFormData) => {
    setSubmitError(null);

    try {
      const request = await createRequest(data);

      setSubmittedRequest(request);
      reset(defaultValues);
    } catch (error) {
      if (error instanceof RequestServiceError) {
        setSubmitError(error.message);
        return;
      }

      setSubmitError(
        "Não foi possível enviar sua solicitação. Tente novamente.",
      );
    }
  };

  const handleNewRequest = () => {
    setSubmittedRequest(null);
    setSubmitError(null);
    reset(defaultValues);
  };

  if (submittedRequest) {
    return (
      <Card className="mx-auto w-full max-w-2xl overflow-hidden">
        <div className="flex flex-col items-center p-8 text-center sm:p-10">
          <div className="flex size-16 items-center justify-center rounded-full bg-[var(--brand-500)]/10 text-[var(--brand-300)]">
            <CheckCircle2
              className="size-8"
              aria-hidden="true"
            />
          </div>

          <Badge
            variant="success"
            className="mt-5"
          >
            Solicitação recebida
          </Badge>

          <h2 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
            Tudo certo, {submittedRequest.name}.
          </h2>

          <p className="mt-3 max-w-lg text-sm leading-6 text-[var(--text-muted)]">
            Sua solicitação foi registrada e está pronta para
            entrar no fluxo de atendimento.
          </p>

          <div className="mt-8 w-full rounded-[var(--radius-lg)] border border-[var(--border-subtle)] bg-[var(--bg-surface-raised)] p-5 text-left">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-[var(--text-muted)]">
                  Solicitação
                </p>

                <h3 className="mt-2 truncate text-base font-semibold text-[var(--text-primary)]">
                  {submittedRequest.title}
                </h3>
              </div>

              <Badge variant="brand">
                Nova
              </Badge>
            </div>

            <p className="mt-4 text-sm leading-6 text-[var(--text-secondary)]">
              {submittedRequest.description}
            </p>

            <div className="mt-5 grid gap-4 border-t border-[var(--border-subtle)] pt-5 sm:grid-cols-2">
              <div>
                <p className="text-xs text-[var(--text-muted)]">
                  Categoria
                </p>

                <p className="mt-1 text-sm font-medium">
                  {submittedRequest.category}
                </p>
              </div>

              <div>
                <p className="text-xs text-[var(--text-muted)]">
                  Prazo
                </p>

                <p className="mt-1 text-sm font-medium">
                  {submittedRequest.deadline || "Não informado"}
                </p>
              </div>
            </div>
          </div>

          <Button
            variant="secondary"
            size="lg"
            className="mt-8"
            onClick={handleNewRequest}
          >
            Enviar outra solicitação
          </Button>
        </div>
      </Card>
    );
  }

  return (
    <Card className="mx-auto w-full max-w-2xl overflow-hidden">
      <div className="border-b border-[var(--border-subtle)] p-6 sm:p-8">
        <Badge variant="brand">
          Nova solicitação
        </Badge>

        <h1 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
          Conte o que você precisa.
        </h1>

        <p className="mt-3 max-w-xl text-sm leading-6 text-[var(--text-muted)]">
          Preencha os detalhes abaixo para que sua solicitação
          possa ser analisada.
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="space-y-6 p-6 sm:p-8"
      >
        {submitError ? (
          <div
            role="alert"
            className="flex items-start gap-3 rounded-[var(--radius-md)] border border-red-400/20 bg-red-400/10 p-4"
          >
            <TriangleAlert
              className="mt-0.5 size-5 shrink-0 text-red-400"
              aria-hidden="true"
            />

            <div>
              <p className="text-sm font-semibold text-red-300">
                Não foi possível enviar
              </p>

              <p className="mt-1 text-sm leading-5 text-red-300/80">
                {submitError}
              </p>
            </div>
          </div>
        ) : null}

        <div className="grid gap-6 sm:grid-cols-2">
          <Field
            label="Nome"
            htmlFor="name"
            required
          >
            <Input
              id="name"
              autoComplete="name"
              placeholder="Seu nome"
              {...register("name")}
              error={errors.name?.message}
            />
          </Field>

          <Field
            label="WhatsApp"
            htmlFor="whatsapp"
            required
          >
            <Input
              id="whatsapp"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              placeholder="(47) 99999-9999"
              {...register("whatsapp")}
              error={errors.whatsapp?.message}
            />
          </Field>
        </div>

        <Field
          label="E-mail"
          htmlFor="email"
          optional
        >
          <Input
            id="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder="voce@empresa.com"
            {...register("email")}
            error={errors.email?.message}
          />
        </Field>

        <Field
          label="Categoria"
          htmlFor="category"
          required
        >
          <Select
            id="category"
            defaultValue=""
            {...register("category")}
            error={errors.category?.message}
          >
            <option value="" disabled>
              Selecione uma categoria
            </option>

            {categories.map((category) => (
              <option
                key={category.value}
                value={category.value}
              >
                {category.label}
              </option>
            ))}
          </Select>
        </Field>

        <Field
          label="Título da solicitação"
          htmlFor="title"
          required
        >
          <Input
            id="title"
            placeholder="Ex.: Preciso criar uma identidade visual"
            {...register("title")}
            error={errors.title?.message}
          />
        </Field>

        <Field
          label="O que você precisa?"
          htmlFor="description"
          required
        >
          <Textarea
            id="description"
            rows={7}
            placeholder="Explique sua necessidade com o máximo de detalhes possível..."
            {...register("description")}
            error={errors.description?.message}
          />
        </Field>

        <Field
          label="Prazo desejado"
          htmlFor="deadline"
          optional
        >
          <Input
            id="deadline"
            placeholder="Ex.: Até sexta-feira"
            {...register("deadline")}
            error={errors.deadline?.message}
          />
        </Field>

        <div className="flex flex-col gap-4 border-t border-[var(--border-subtle)] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-sm text-xs leading-5 text-[var(--text-muted)]">
            Seus dados serão utilizados para analisar e dar
            continuidade à sua solicitação.
          </p>

          <Button
            type="submit"
            size="lg"
            isLoading={isSubmitting}
            className="sm:min-w-48"
          >
            <Send
              className="size-4"
              aria-hidden="true"
            />

            Enviar solicitação
          </Button>
        </div>
      </form>
    </Card>
  );
}