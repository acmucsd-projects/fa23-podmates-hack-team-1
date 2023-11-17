import './globals.css'
import { Inter } from 'next/font/google'
import 'typeface-roboto';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Door Hinge',
  description: 'Roommate finding app for UCSD students',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
