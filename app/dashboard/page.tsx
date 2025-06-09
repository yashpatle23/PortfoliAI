"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/components/auth-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RecentResumes } from "@/components/recent-resumes"
import { RecentPortfolios } from "@/components/recent-portfolios"
import { DashboardStats } from "@/components/dashboard-stats"
import { FileText, Briefcase, Plus } from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  const { user, isLoading } = useAuth()
  const router = useRouter()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted && !isLoading && !user) {
      router.push("/login")
    }
  }, [user, isLoading, router, mounted])

  if (!mounted || isLoading || !user) {
    return (
      <div className="flex h-[calc(100vh-4rem)] items-center justify-center">
        <div className="flex flex-col items-center gap-2">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
          <p className="text-sm text-muted-foreground">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Welcome back, {user.name}!</h2>
        <p className="text-muted-foreground">Here&apos;s an overview of your resumes and portfolios.</p>
      </div>

      <DashboardStats />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              Create Resume
            </CardTitle>
            <CardDescription>Build a professional resume with our templates</CardDescription>
          </CardHeader>
          <CardContent className="pb-2">
            <p className="text-sm text-muted-foreground">Choose from multiple templates and customize to your needs</p>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full">
              <Link href="/dashboard/resumes/new">
                <Plus className="mr-2 h-4 w-4" />
                New Resume
              </Link>
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2">
              <Briefcase className="h-5 w-5 text-primary" />
              Create Portfolio
            </CardTitle>
            <CardDescription>Build a stunning portfolio website</CardDescription>
          </CardHeader>
          <CardContent className="pb-2">
            <p className="text-sm text-muted-foreground">Showcase your work with a customizable portfolio site</p>
          </CardContent>
          <CardFooter>
            <Button asChild className="w-full">
              <Link href="/dashboard/portfolios/new">
                <Plus className="mr-2 h-4 w-4" />
                New Portfolio
              </Link>
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 text-primary"
              >
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
              Templates
            </CardTitle>
            <CardDescription>Browse our collection of templates</CardDescription>
          </CardHeader>
          <CardContent className="pb-2">
            <p className="text-sm text-muted-foreground">Find the perfect template for your resume or portfolio</p>
          </CardContent>
          <CardFooter>
            <Button asChild variant="outline" className="w-full">
              <Link href="/templates">Browse Templates</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>

      <Tabs defaultValue="resumes" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="resumes">Recent Resumes</TabsTrigger>
          <TabsTrigger value="portfolios">Recent Portfolios</TabsTrigger>
        </TabsList>
        <TabsContent value="resumes" className="mt-6">
          <RecentResumes />
        </TabsContent>
        <TabsContent value="portfolios" className="mt-6">
          <RecentPortfolios />
        </TabsContent>
      </Tabs>
    </div>
  )
}
