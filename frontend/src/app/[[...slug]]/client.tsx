// src/app/[[...slug]]/client.tsx
'use client'

import dynamic from 'next/dynamic'

// 기존 Vite의 src/App.tsx 를 그대로 가져와서
// SSR 없이 클라이언트 전용으로 동작시키는 패턴
const App = dynamic(() => import('../../App'), { ssr: false })

export function ClientOnly() {
  return <App />
}
