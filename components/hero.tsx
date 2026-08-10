import Image from 'next/image'
import { Star, TrendingUp, Check } from 'lucide-react'
import { WhatsappIcon } from '@/components/whatsapp-icon'
import { whatsappLink } from '@/lib/site'

const trustPoints = ['Foco na sua região', 'Sem fidelidade', 'Você entende cada passo']

export function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
        <div className="flex flex-col items-start">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
            <span className="size-2 rounded-full bg-primary" />
            Especialistas em SEO para empresas locais
          </span>

          <h1 className="mt-6 text-balance font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Apareça no Google quando alguém da sua região procura o que você faz
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Colocamos a sua empresa na frente de quem já está pesquisando pelo seu
            serviço perto de você. O resultado é simples: mais contatos no WhatsApp,
            mais ligações e mais clientes entrando na porta.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contato"
              className="inline-flex h-14 items-center justify-center rounded-full bg-primary px-8 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 hover:shadow-primary/30"
            >
              Quero atrair mais clientes
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-border bg-card px-8 text-base font-semibold text-foreground transition-colors hover:bg-muted"
            >
              <WhatsappIcon className="size-5 text-primary" />
              Falar no WhatsApp
            </a>
          </div>

          <p className="mt-5 text-sm text-muted-foreground">
            Diagnóstico gratuito e sem compromisso. Explicamos tudo em linguagem simples.
          </p>

          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
            {trustPoints.map((point) => (
              <li key={point} className="flex items-center gap-2 text-sm font-medium text-foreground">
                <Check className="size-4 shrink-0 text-primary" aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-2xl shadow-foreground/5">
            <Image
              src="/images/hero-google-local.png"
              alt="Celular mostrando uma empresa local em destaque nos resultados do Google"
              width={720}
              height={720}
              priority
              className="h-full w-full object-cover"
            />
          </div>

          <div className="absolute -left-4 bottom-8 hidden rounded-2xl border border-border bg-card p-4 shadow-xl sm:block">
            <div className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-full bg-primary/10 text-primary">
                <TrendingUp className="size-5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-foreground">Mais buscas locais</p>
                <p className="text-xs text-muted-foreground">Apareça na hora certa</p>
              </div>
            </div>
          </div>

          <div className="absolute -right-3 top-8 hidden rounded-2xl border border-border bg-card p-4 shadow-xl sm:block">
            <div className="flex items-center gap-1 text-accent">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-current" />
              ))}
            </div>
            <p className="mt-1 text-xs text-muted-foreground">Reputação que gera confiança</p>
          </div>
        </div>
      </div>
    </section>
  )
}
