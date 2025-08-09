"use client"

import * as React from "react"
import { Moon, Sun } from 'lucide-react'
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { setTheme, theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  // When mounted on client, now we can show the UI
  React.useEffect(() => setMounted(true), [])

  if (!mounted) {
    // Render a placeholder button to avoid layout shift
    return <Button variant="ghost" size="icon" disabled={true} />
  }

  const isDark = resolvedTheme === 'dark'

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle theme"
      suppressHydrationWarning
      className="text-black dark:text-white"
    >
      {isDark ? (
        <Moon className="h-[1.2rem] w-[1.2rem] text-white" />
      ) : (
        <Sun className="h-[1.2rem] w-[1.2rem] text-black" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
