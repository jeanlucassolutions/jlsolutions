import { Search, MessageCircle, MapPin } from 'lucide-react'

const outcomes = [
  {
    icon: Search,
    title: 'Encontrado na hora da decisão',
    text: 'Quando alguém pesquisa pelo seu serviço na sua cidade, a sua empresa aparece entre as primeiras opções.',
  },
  {
    icon: MessageCircle,
    title: 'Mais contatos qualificados',
    text: 'Quem chega até você já estava procurando o que você oferece. São contatos com real intenção de comprar.',
  },
  {
    icon: MapPin,
    title: 'Referência na sua região',
    text: 'Aparecer bem no Google e no Maps passa credibilidade e faz a sua empresa ser lembrada primeiro.',
  },
]

export function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">
          O que muda na prática
        </p>
        <h2 className="mt-3 text-balance font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          O que acontece quando a sua empresa é encontrada
        </h2>
        <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
          Somos uma empresa nova e preferimos ser transparentes: em vez de inventar
          depoimentos, mostramos exatamente o tipo de mudança que o trabalho de SEO local
          busca gerar no seu dia a dia.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {outcomes.map((item) => (
          <div
            key={item.title}
            className="flex flex-col rounded-2xl border border-border bg-card p-7"
          >
            <span className="grid size-12 place-items-center rounded-xl bg-primary/10 text-primary">
              <item.icon className="size-6" aria-hidden="true" />
            </span>
            <h3 className="mt-5 font-heading text-lg font-bold text-foreground">
              {item.title}
            </h3>
            <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
