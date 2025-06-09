import type React from "react"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { AuthProvider } from "@/components/auth-provider"
import { Analytics } from "@/components/analytics"
import { Suspense } from "react"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "ResumeAI - AI-Powered Resume & Portfolio Generator",
  description: "Create professional resumes and portfolios with AI assistance",
  keywords: ["resume", "portfolio", "AI", "generator", "career"],
  openGraph: {
    title: "ResumeAI - AI-Powered Resume & Portfolio Generator",
    description: "Create professional resumes and portfolios with AI assistance",
    url: "https://resumeai.vercel.app",
    siteName: "ResumeAI",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ResumeAI",
      },
    ],
    locale: "en_US",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <AuthProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <Suspense fallback={null}>
              {children}
              <Toaster />
              <Analytics />
            </Suspense>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
