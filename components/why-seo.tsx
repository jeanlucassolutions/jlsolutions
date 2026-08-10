import Image from 'next/image'
import { Check } from 'lucide-react'
import { whatsappLink } from '@/lib/site'

const benefits = [
  {
    title: 'Clientes que já querem comprar',
    description:
      'Quem pesquisa no Google já está procurando o seu serviço. É o momento perfeito para ser encontrado.',
  },
  {
    title: 'Presença 24 horas por dia',
    description:
      'Sua empresa continua aparecendo e atraindo contatos mesmo quando você está fora do horário comercial.',
  },
  {
    title: 'Mais barato que anúncios pagos',
    description:
      'O SEO constrói um resultado que continua trazendo clientes sem você pagar por cada clique.',
  },
  {
    title: 'Mais confiança na sua marca',
    description:
      'Aparecer bem posicionado e com boas avaliações passa credibilidade para quem ainda não te conhece.',
  },
]

export function WhySeo() {
  return (
    <section id="beneficios" className="border-y border-border bg-primary/5">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
        <div className="relative order-last lg:order-first">
          <div className="overflow-hidden rounded-3xl border border-border shadow-xl">
            <Image
              src="/images/local-business-owner.png"
              alt="Dono de uma empresa local satisfeito em seu estabelecimento"
              width={640}
              height={720}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Por que investir em SEO?
          </p>
          <h2 className="mt-3 text-balance font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Um investimento que trabalha por você todos os dias
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Estar no topo do Google não é sorte: é estratégia. Veja o que sua empresa
            ganha com um trabalho de SEO bem feito.
          </p>

          <ul className="mt-8 space-y-5">
            {benefits.map((benefit) => (
              <li key={benefit.title} className="flex gap-4">
                <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                  <Check className="size-4" />
                </span>
                <div>
                  <h3 className="font-heading font-bold text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="mt-1 leading-relaxed text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Quero esses resultados
          </a>
        </div>
      </div>
    </section>
  )
}
