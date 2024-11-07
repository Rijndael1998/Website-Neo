import Header from '@/components/app/header/_header'
import './globals.scss'
import style from "./layout.module.scss";
import type { Metadata } from 'next'
import Nav from '@/components/app/nav/_nav'
import Title from '@/components/app/header/title/_title'
import Footer from '@/components/app/footer/_footer'
import { defaultMetadata } from '@/content/Metadata'
import { headers } from 'next/headers'
import { Kanit, Noto_Sans, Noto_Serif } from 'next/font/google';
import { Container } from '@mui/material';
import FabNav from '@/components/app/nav/fabnav/_fabnav';
import DarkModeFix from '@/components/muiWrappers/darkModeFix/_darkModeFix';


const ns = Noto_Sans({
  subsets: ["latin"],
  variable: '--noto-sans'
});

const nss = Noto_Serif({
  subsets: ["latin"],
  variable: '--noto-serif'
});

const cn = Kanit({
  subsets: ["latin"],
  variable: "--main-body",
  weight: '400'
});

const fontClassStrings = [cn, ns, nss].reduce<string>((prev, font) => `${prev} ${font.variable}`, "");

export async function generateMetadata(): Promise<Metadata> {
  const headersList = headers();
  const metaBaseValue = (await headersList).get("x-forwarded-host") ?? (await headersList).get("host");

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
      <body className={`${style.body} ${fontClassStrings}`}>
        <header>
          <Header>
            <Title text="Lukasz Baldyga" />
            <Nav />
          </Header>
        </header>
        <DarkModeFix>
          <Container maxWidth="xl">
            {children}
          </Container>
        </DarkModeFix>
        <Footer />
        <FabNav />
      </body>
    </html>
  )
}
