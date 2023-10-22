import { PropsWithChildren } from 'react'
import { Nunito } from 'next/font/google'
import type { Metadata } from 'next'
import Providers from '@/context'
import 'dotenv/config.js'
import './globals.css'

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
})

export const metadata: Metadata = {
  title: 'iWeather',
  description:
    'iWeather is a precise and intuitive weather forecast app to plan your day.',
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className={`${nunito.variable} font-nunito`}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
