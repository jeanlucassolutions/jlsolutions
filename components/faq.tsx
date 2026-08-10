'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'Preciso entender de SEO ou tecnologia?',
    answer:
      'Não. Nós cuidamos de toda a parte técnica e explicamos cada etapa em linguagem simples. Você só precisa nos contar sobre o seu negócio.',
  },
  {
    question: 'Em quanto tempo vejo resultados?',
    answer:
      'O SEO é um trabalho contínuo. Alguns ajustes trazem melhorias rápidas, mas os resultados mais consistentes costumam aparecer ao longo dos primeiros meses, crescendo com o tempo.',
  },
  {
    question: 'Serve para qualquer tipo de empresa local?',
    answer:
      'Sim. Atendemos comércios, clínicas, prestadores de serviço, restaurantes e diversos outros negócios que querem ser encontrados por clientes da sua região.',
  },
  {
    question: 'Qual a diferença entre SEO e anúncios pagos?',
    answer:
      'Nos anúncios você paga por cada clique e para de aparecer quando encerra a campanha. O SEO constrói uma presença que continua trazendo clientes de forma orgânica ao longo do tempo.',
  },
  {
    question: 'Como acompanho o que está sendo feito?',
    answer:
      'Você recebe relatórios simples e diretos, mostrando quantas pessoas encontram e entram em contato com a sua empresa, além de conversas frequentes com o nosso time.',
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="border-y border-border bg-muted/40">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Tire suas dúvidas
          </p>
          <h2 className="mt-3 text-balance font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Perguntas frequentes
          </h2>
        </div>

        <div className="mt-12 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
          {faqs.map((faq, index) => {
            const isOpen = open === index
            return (
              <div key={faq.question}>
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-muted/50"
                  >
                    <span className="font-heading font-semibold text-foreground">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`size-5 shrink-0 text-primary transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                </h3>
                <div
                  className={`grid transition-all duration-200 ease-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 leading-relaxed text-muted-foreground">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
