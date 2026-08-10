import Link from 'next/link'
import Image from 'next/image'
import { Mail } from 'lucide-react'
import { WhatsappIcon } from '@/components/whatsapp-icon'
import { site, whatsappLink } from '@/lib/site'

const navItems = [
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Benefícios', href: '#beneficios' },
  { label: 'Dúvidas', href: '#faq' },
  { label: 'Contato', href: '#contato' },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="max-w-sm">
            <Image
              src="/images/jl-solutions-logo.png"
              alt={`Logo ${site.name}`}
              width={280}
              height={280}
              className="h-28 w-auto sm:h-32"
            />
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Ajudamos empresas locais a aparecerem no Google e a atrair mais
              clientes na sua região, com um trabalho de SEO claro e transparente.
            </p>
            <p className="mt-4 font-heading text-sm font-semibold text-foreground">
              Sua empresa no topo. Seu cliente até você.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-foreground">
              Navegação
            </h3>
            <ul className="mt-4 space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-foreground">
              Fale conosco
            </h3>
            <div className="mt-4 space-y-3">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
              >
                <WhatsappIcon className="size-5 text-primary" />
                Falar no WhatsApp
              </a>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
              >
                <Mail className="size-5 text-primary" />
                {site.email}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. Todos os direitos
            reservados.
          </p>
          <p>Feito para empresas locais que querem crescer.</p>
        </div>
      </div>
    </footer>
  )
}
