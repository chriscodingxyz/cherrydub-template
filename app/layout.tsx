import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Montserrat, Silkscreen } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Toaster } from 'sonner'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900'
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900'
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['400', '500', '600', '700', '800', '900']
})

const silkscreen = Silkscreen({
  subsets: ['latin'],
  variable: '--font-silkscreen',
  weight: ['400', '700']
})

export const metadata: Metadata = {
  title: 'cherrydub 🍒',
  description: 'Web surfer'
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${silkscreen.variable}  ${montserrat.variable}  antialiased flex flex-col min-h-[100dvh] text-sm font-mono`}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <Toaster richColors />
          <Header />
          <div className='flex-grow'>{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
