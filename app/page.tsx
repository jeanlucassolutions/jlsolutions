import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { HowItWorks } from '@/components/how-it-works'
import { Services } from '@/components/services'
import { WhySeo } from '@/components/why-seo'
import { Testimonials } from '@/components/testimonials'
import { Faq } from '@/components/faq'
import { ContactForm } from '@/components/contact-form'
import { SiteFooter } from '@/components/site-footer'
import { WhatsappFloat } from '@/components/whatsapp-float'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <HowItWorks />
        <Services />
        <WhySeo />
        <Testimonials />
        <Faq />
        <ContactForm />
      </main>
      <SiteFooter />
      <WhatsappFloat />
    </>
  )
}
