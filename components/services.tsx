import { MapPin, Globe, FileText, Star, Search, BarChart3 } from 'lucide-react'

const services = [
  {
    icon: MapPin,
    title: 'Google Meu Negócio',
    description:
      'Otimização completa do seu perfil para aparecer no mapa e nas buscas locais da sua cidade e bairro.',
  },
  {
    icon: Search,
    title: 'SEO local',
    description:
      'Colocamos sua empresa entre os primeiros resultados quando alguém procura pelos seus serviços na região.',
  },
  {
    icon: Globe,
    title: 'Otimização de site',
    description:
      'Deixamos seu site rápido, organizado e preparado para o Google entender e recomendar o seu negócio.',
  },
  {
    icon: FileText,
    title: 'Conteúdo estratégico',
    description:
      'Criamos textos e páginas que respondem o que seus clientes procuram e atraem visitas qualificadas.',
  },
  {
    icon: Star,
    title: 'Gestão de avaliações',
    description:
      'Ajudamos você a conquistar mais avaliações positivas e a transmitir confiança para novos clientes.',
  },
  {
    icon: BarChart3,
    title: 'Relatórios claros',
    description:
      'Acompanhe em relatórios simples quantas pessoas encontram e entram em contato com sua empresa.',
  },
]

export function Services() {
  return (
    <section id="servicos" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">
          O que fazemos por você
        </p>
        <h2 className="mt-3 text-balance font-heading text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Principais serviços de SEO
        </h2>
        <p className="mt-4 text-pretty text-lg text-muted-foreground">
          Tudo o que sua empresa precisa para ser encontrada por quem já está
          procurando o que você oferece.
        </p>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.title}
            className="group rounded-2xl border border-border bg-card p-7 transition-colors hover:border-primary/40"
          >
            <span className="grid size-12 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <service.icon className="size-6" />
            </span>
            <h3 className="mt-5 font-heading text-lg font-bold text-foreground">
              {service.title}
            </h3>
            <p className="mt-2 leading-relaxed text-muted-foreground">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
