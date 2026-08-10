'use client'

import { useState, type FormEvent } from 'react'
import { CheckCircle2, Loader2 } from 'lucide-react'
import { WhatsappIcon } from '@/components/whatsapp-icon'
import { site, whatsappLink } from '@/lib/site'

const goals = [
  'Aparecer no topo do Google',
  'Receber mais contatos no WhatsApp',
  'Melhorar meu Google Meu Negócio',
  'Conseguir mais avaliações',
  'Ainda não sei, quero orientação',
]

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('sending')

    const form = event.currentTarget
    const data = new FormData(form)
    const nome = String(data.get('nome') ?? '')
    const empresa = String(data.get('empresa') ?? '')
    const whatsapp = String(data.get('whatsapp') ?? '')
    const objetivo = String(data.get('objetivo') ?? '')

    const message =
      `Olá! Meu nome é ${nome}` +
      (empresa ? `, da empresa ${empresa}` : '') +
      `.\nMeu WhatsApp: ${whatsapp}` +
      `\nObjetivo: ${objetivo}` +
      `\nQuero atrair mais clientes com SEO.`

    const url = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`

    // Abre a conversa no WhatsApp com os dados preenchidos.
    window.open(url, '_blank', 'noopener,noreferrer')
    setStatus('sent')
  }

  return (
    <section id="contato" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
      <div className="grid items-center gap-12 rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-10 lg:grid-cols-2 lg:p-14">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Vamos conversar
          </p>
          <h2 className="mt-3 text-balance font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Descubra como sua empresa está hoje no Google
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            A análise inicial serve para entender a situação atual da sua empresa nas
            buscas e avaliar, com honestidade, se o SEO local faz sentido para o seu
            caso. Não prometemos milagres: fazemos um diagnóstico claro e você decide.
          </p>

          <ul className="mt-8 space-y-3 text-muted-foreground">
            <li className="flex items-center gap-3">
              <CheckCircle2 className="size-5 shrink-0 text-primary" />
              Entendemos onde sua empresa aparece hoje
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle2 className="size-5 shrink-0 text-primary" />
              Explicamos em linguagem simples, sem promessas vazias
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle2 className="size-5 shrink-0 text-primary" />
              Conversa rápida no WhatsApp, sem custo e sem compromisso
            </li>
          </ul>

          <a
            href={whatsappLink('Olá! Quero uma análise inicial da minha empresa no Google.')}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-colors hover:bg-primary/90"
          >
            <WhatsappIcon className="size-5" />
            Falar agora no WhatsApp
          </a>
        </div>

        {status === 'sent' ? (
          <div className="flex flex-col items-center justify-center rounded-2xl border border-primary/30 bg-primary/5 p-10 text-center">
            <CheckCircle2 className="size-12 text-primary" />
            <h3 className="mt-4 font-heading text-xl font-bold text-foreground">
              Tudo certo!
            </h3>
            <p className="mt-2 text-muted-foreground">
              Abrimos uma conversa no WhatsApp com seus dados. Se não abriu
              automaticamente, toque no botão abaixo.
            </p>
            <button
              type="button"
              onClick={() => setStatus('idle')}
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <WhatsappIcon className="size-4" />
              Enviar novamente
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="nome" className="text-sm font-medium text-foreground">
                Seu nome
              </label>
              <input
                id="nome"
                name="nome"
                type="text"
                required
                placeholder="Como podemos te chamar?"
                className="h-12 rounded-xl border border-input bg-background px-4 text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/30"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="empresa" className="text-sm font-medium text-foreground">
                Empresa
              </label>
              <input
                id="empresa"
                name="empresa"
                type="text"
                required
                placeholder="Nome do seu negócio"
                className="h-12 rounded-xl border border-input bg-background px-4 text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/30"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="whatsapp" className="text-sm font-medium text-foreground">
                WhatsApp
              </label>
              <input
                id="whatsapp"
                name="whatsapp"
                type="tel"
                required
                inputMode="tel"
                placeholder="(00) 00000-0000"
                className="h-12 rounded-xl border border-input bg-background px-4 text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/30"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="objetivo" className="text-sm font-medium text-foreground">
                Qual seu principal objetivo?
              </label>
              <select
                id="objetivo"
                name="objetivo"
                required
                defaultValue=""
                className="h-12 rounded-xl border border-input bg-background px-4 text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30"
              >
                <option value="" disabled>
                  Selecione uma opção
                </option>
                {goals.map((goal) => (
                  <option key={goal} value={goal}>
                    {goal}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="mt-2 inline-flex h-14 items-center justify-center gap-2 rounded-full bg-primary px-8 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 disabled:opacity-70"
            >
              {status === 'sending' ? (
                <Loader2 className="size-5 animate-spin" />
              ) : (
                <WhatsappIcon className="size-5" />
              )}
              Quero atrair mais clientes
            </button>
            <p className="text-center text-xs text-muted-foreground">
              Ao enviar, você abre uma conversa no WhatsApp com seus dados
              preenchidos.
            </p>
          </form>
        )}
      </div>
    </section>
  )
}
