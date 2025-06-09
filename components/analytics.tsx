"use client"

import { usePathname, useSearchParams } from "next/navigation"
import { useEffect } from "react"

export function Analytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // This is where you would typically initialize your analytics
    // For example, with Google Analytics:
    // if (typeof window.gtag === 'function') {
    //   window.gtag('config', 'GA-MEASUREMENT-ID', {
    //     page_path: pathname + searchParams.toString(),
    //   });
    // }

    console.log(`Page view: ${pathname}${searchParams.toString()}`)
  }, [pathname, searchParams])

  return null
}
