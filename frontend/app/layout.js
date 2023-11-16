"use client"
import { ReduxProvider } from './reduxToolkit/provider/provider'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from 'next-themes'
const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute='class'>
         <ReduxProvider>
                  {children}
        </ReduxProvider>
        </ThemeProvider>
        </body>
    </html>
  )
}