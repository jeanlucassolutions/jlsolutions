import { WhatsappIcon } from '@/components/whatsapp-icon'
import { whatsappLink } from '@/lib/site'

export function WhatsappFloat() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-4 font-semibold text-primary-foreground shadow-xl shadow-primary/30 transition-transform hover:scale-105"
    >
      <WhatsappIcon className="size-6" />
      <span className="hidden sm:inline">Fale conosco</span>
    </a>
  )
}
