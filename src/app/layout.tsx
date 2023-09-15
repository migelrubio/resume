import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Navigation } from '@/components/Navigation'
import { Container } from '@/components/Container'
import { Details } from '@/components/Details'
import { TagsList } from '@/components/TagsList'

 
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Miguel Rubio - Web Developer',
  description: 'Miguel Rubio - Web Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <Container className="mb-4">
          {/*<div className="grid grid-cols-12 gap-4 mt-4">
            <div className="col-span-3">
              <Details/>
            </div>
            <div className="col-span-7">
              {children}
            </div>
            <div className="col-span-2">
              <TagsList/>
            </div>
          </div>*/}
          <div className="flex gap-4 mt-4 flex-col lg:flex-row">
            <div className="">
              <div className="flex flex-col gap-4 sticky top-16">
                <Details/>
                <TagsList className="hidden lg:flex"/>
              </div>
            </div>
            <div className="flex-1">
              {children}
            </div>
          </div>
        </Container>
      </body>
    </html>
  )
}
