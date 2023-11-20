"use client"
import { ReduxProvider } from './reduxToolkit/provider/provider'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from 'next-themes'
const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({children}) {
  return (
    <html lang="en">
      <head>
        <title>Platform</title>
        <meta name='description' content='Description' />
      </head>
      <body className={`${inter.className} bg-gray-200 dark:bg-gray-950`}>
        <ThemeProvider attribute='class'>
         <ReduxProvider>
                  {children}
        </ReduxProvider>
        </ThemeProvider>
        </body>
    </html>
  )
}