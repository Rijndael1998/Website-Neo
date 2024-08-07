import Header from '@/components/app/header/_header'
import './globals.scss'
import style from "./layout.module.scss";
import type { Metadata } from 'next'
import Nav from '@/components/app/nav/_nav'
import Title from '@/components/app/header/title/_title'
import Footer from '@/components/app/footer/_footer'
import { defaultMetadata, url } from '@/content/Metadata'
import { headers } from 'next/headers'

export function generateMetadata(): Metadata {
  const headersList = headers();
  const metaBaseValue = headersList.get("x-forwarded-host") ?? headersList.get("host");

  return {
    ...defaultMetadata,
    metadataBase: metaBaseValue ? new URL(`https://${metaBaseValue}/`) : undefined,
  };
}

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
      <body>
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
