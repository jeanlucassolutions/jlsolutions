import { Search, Wrench, LineChart } from 'lucide-react'

const steps = [
  {
    icon: Search,
    title: 'Diagnóstico gratuito',
    description:
      'Analisamos como sua empresa aparece hoje no Google e no Google Maps, e identificamos as melhores oportunidades para você ser encontrado.',
  },
  {
    icon: Wrench,
    title: 'Otimização e conteúdo',
    description:
      'Colocamos a mão na massa: ajustamos seu perfil, seu site e criamos conteúdo para você subir nas buscas da sua região.',
  },
  {
    icon: LineChart,
    title: 'Resultados e acompanhamento',
    description:
      'Você acompanha o crescimento em relatórios simples, sem termos técnicos, e nós seguimos melhorando mês a mês.',
  },
]

export function HowItWorks() {
  return (
    <section id="como-funciona" className="border-y border-border bg-muted/40">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Simples do começo ao fim
          </p>
          <h2 className="mt-3 text-balance font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Como funciona em 3 passos
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Você não precisa entender de tecnologia. Cuidamos de tudo e explicamos
            cada etapa de forma clara.
          </p>
        </div>

        <ol className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="relative flex flex-col rounded-2xl border border-border bg-card p-8"
            >
              <span className="font-heading text-sm font-bold text-primary">
                Passo {index + 1}
              </span>
              <span className="mt-4 grid size-12 place-items-center rounded-xl bg-primary/10 text-primary">
                <step.icon className="size-6" />
              </span>
              <h3 className="mt-5 font-heading text-xl font-bold text-foreground">
                {step.title}
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
