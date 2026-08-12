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
    'Gestão de Google Empresas e SEO Local para empresas que querem aumentar sua visibilidade no Google, atrair mais clientes e fortalecer sua presença digital.',
  keywords: [
     'SEO local',
  'Google Empresas',
  'Google Business Profile',
  'gestão de Google Empresas',
  'otimização Google Maps',
  'SEO para empresas locais',
  'marketing local',
  'atrair mais clientes',
  ],
  openGraph: {
    title: 'JL SOLUTIONS | SEO Local e Google Empresas',
    description:
      'Estratégias de SEO Local e gestão de Google Empresas para aumentar a visibilidade da sua empresa no Google e atrair mais clientes.',
    type: 'website',
    locale: 'pt_BR',
  },
  icons: {
  icon: '/jl-favicon-512.png',
  apple: '/jl-favicon-512.png',
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
