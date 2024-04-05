import Header from '@/components/app/header/_header'
import './globals.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Nav from '@/components/app/nav/_nav'
import Title from '@/components/app/header/title/_title'
import Footer from '@/components/app/footer/_footer'
import { defaultMetadata, url } from '@/content/Metadata'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  ...defaultMetadata,
  metadataBase: new URL(url),
};
console.log("after", metadata);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favico.png" />
      </head>
      <body className={inter.className}>
        <header>
          <Header>
            <Title text="Lukasz Baldyga" />
            <Nav />
          </Header>
        </header>
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
