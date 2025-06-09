"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Briefcase, MoreHorizontal, ExternalLink, Edit, Trash2 } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Link from "next/link"

// Mock data - in a real app, this would come from an API
const mockPortfolios = [
  {
    id: "1",
    title: "John Doe Portfolio",
    template: "Minimal",
    lastUpdated: "2023-06-02T09:00:00Z",
    url: "https://johndoe.portfolio.com",
    thumbnail: "/placeholder.svg?height=100&width=200",
    status: "published",
  },
]

export function RecentPortfolios() {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })
  }

  if (mockPortfolios.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Recent Portfolios</CardTitle>
          <CardDescription>You haven't created any portfolios yet.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center py-8">
            <Briefcase className="h-12 w-12 text-muted-foreground mb-4" />
            <p className="text-sm text-muted-foreground mb-4">Get started by creating your first portfolio</p>
            <Button asChild>
              <Link href="/dashboard/portfolios/new">Create Portfolio</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {mockPortfolios.map((portfolio) => (
        <Card key={portfolio.id} className="group hover:shadow-md transition-shadow">
          <CardHeader className="pb-3">
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <CardTitle className="text-base">{portfolio.title}</CardTitle>
                <CardDescription className="flex items-center gap-2">
                  <Badge variant="secondary" className="text-xs">
                    {portfolio.template}
                  </Badge>
                  <Badge variant={portfolio.status === "published" ? "default" : "outline"} className="text-xs">
                    {portfolio.status}
                  </Badge>
                </CardDescription>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <MoreHorizontal className="h-4 w-4" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem asChild>
                    <Link href={`/dashboard/portfolios/${portfolio.id}/edit`}>
                      <Edit className="mr-2 h-4 w-4" />
                      Edit
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a href={portfolio.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Live
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-destructive">
                    <Trash2 className="mr-2 h-4 w-4" />
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="aspect-[4/3] bg-muted rounded-md mb-3 overflow-hidden">
              <img
                src={portfolio.thumbnail || "/placeholder.svg"}
                alt={`${portfolio.title} preview`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>Updated {formatDate(portfolio.lastUpdated)}</span>
              <Button asChild size="sm" variant="outline">
                <Link href={`/dashboard/portfolios/${portfolio.id}`}>View</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
