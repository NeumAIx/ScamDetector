import './globals.css'
import { Inter } from 'next/font/google'
import { Sidebar } from '@/components/Sidebar'
import { Header } from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="flex h-screen overflow-hidden bg-black">
          <Sidebar />
          <div className="flex-1 overflow-auto">
            <Header />
            <main>{children}</main>
          </div>
        </div>
      </body>
    </html>
  )
}

