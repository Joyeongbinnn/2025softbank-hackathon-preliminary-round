// src/app/[[...slug]]/page.tsx
import '../../index.css'
import { ClientOnly } from './client'

export function generateStaticParams() {
  // SPA 한 장만 빌드 (루트 '/')
  return [{ slug: [''] }]
}

export default function Page() {
  return <ClientOnly />
}
