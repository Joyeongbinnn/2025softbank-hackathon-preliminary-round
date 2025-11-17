// src/lib/LanguageContext.tsx
'use client'

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import type { Language } from './i18n'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('ko')
  const [isClient, setIsClient] = useState(false)

  // 클라이언트에서만 localStorage 접근
  useEffect(() => {
    setIsClient(true)
    const stored = localStorage.getItem('language') as Language | null
    if (stored && ['ko', 'en', 'ja'].includes(stored)) {
      setLanguageState(stored)
    } else {
      setLanguageState('ko')
    }
  }, [])

  const setLanguage = (lang: Language) => {
    if (['ko', 'en', 'ja'].includes(lang)) {
      setLanguageState(lang)
      localStorage.setItem('language', lang)
    }
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}
