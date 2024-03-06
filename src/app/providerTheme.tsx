'use client'

import { ThemeProvider } from 'next-themes'
import { ReactNode } from 'react'

export type AppProps = {
  children: ReactNode
}
export function ProviderTheme({ children }: AppProps) {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>
}
