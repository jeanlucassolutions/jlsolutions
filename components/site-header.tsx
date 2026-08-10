import Link from 'next/link'
import Image from 'next/image'
import { WhatsappIcon } from '@/components/whatsapp-icon'
import { site, whatsappLink } from '@/lib/site'

const navItems = [
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Benefícios', href: '#beneficios' },
  { label: 'Dúvidas', href: '#faq' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-4 px-4 sm:h-24 sm:px-6">
        <Link href="#topo" className="flex items-center" aria-label={`${site.name} - início`}>
          <Image
            src="/images/jl-solutions-logo.png"
            alt={`Logo ${site.name}`}
            width={220}
            height={220}
            priority
            className="h-16 w-auto sm:h-20"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Navegação principal">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center justify-center gap-2 rounded-full bg-primary px-4 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <WhatsappIcon className="size-4" />
            <span className="hidden sm:inline">Falar no WhatsApp</span>
            <span className="sm:hidden">WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  )
}
