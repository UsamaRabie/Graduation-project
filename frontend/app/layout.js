"use client"
import { ReduxProvider } from './reduxToolkit/provider/provider'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from 'next-themes'
import Navbar from "./components/Navbar"
const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({children}) {
  return (
    <html lang="en">
      <head>
        <title>Platform</title>
        <meta name='description' content='Description' />
        <link rel="icon" href="images/icon.jpg"></link>
      </head>
      <body className={`${inter.className} bg-gray-200 dark:bg-gray-950`}>
        <ThemeProvider attribute='class'>
         <ReduxProvider>
          <Navbar/>
                  {children}
        </ReduxProvider>
        </ThemeProvider>
        </body>
    </html>
  )
}