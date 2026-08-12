import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Manrope } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'JL SOLUTIONS | SEO Local e Google Empresas',
  description:
    'Ajudamos empresas locais a aparecerem no topo do Google e a atrair mais clientes todos os dias. Fale conosco no WhatsApp e receba um diagnóstico gratuito.',
  generator: 'v0.app',
  keywords: [
    'SEO local',
    'aparecer no Google',
    'Google Meu Negócio',
    'marketing para empresas locais',
    'mais clientes',
  ],
  openGraph: {
    title: 'JL SOLUTIONS | SEO Local e Google Empresas',
    description:
      'Coloque sua empresa no topo do Google e atraia mais clientes na sua região.',
    type: 'website',
    locale: 'pt_BR',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#1f7a5c',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${manrope.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
