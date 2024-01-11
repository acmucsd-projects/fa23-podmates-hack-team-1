import './globals.css'
import { Inter } from 'next/font/google'
//import 'typeface-roboto';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Door Hinge',
  description: 'Roommate finding app for UCSD students',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
