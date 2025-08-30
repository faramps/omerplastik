"use client"

import * as React from "react"
const NextThemesProvider = dynamic(
    () => import("next-themes").then((mod) => mod.ThemeProvider),
    { ssr: false }
)
import dynamic from "next/dynamic"
import { ThemeProviderProps } from "next-themes"

export function ThemeProvider({ children, ...props }: React.PropsWithChildren<ThemeProviderProps>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
