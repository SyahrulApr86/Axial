import { Inter } from 'next/font/google'

// Optimize font loading with subset and display settings
export const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
  adjustFontFallback: false,
})

// Font optimization for better performance
export const fontOptimizationClass = `${inter.variable} font-sans`