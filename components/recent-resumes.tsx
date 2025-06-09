"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileText, MoreHorizontal, Download, Edit, Trash2 } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Link from "next/link"

// Mock data - in a real app, this would come from an API
const mockResumes = [
  {
    id: "1",
    title: "Software Engineer Resume",
    template: "Professional",
    lastUpdated: "2023-06-01T12:00:00Z",
    thumbnail: "/placeholder.svg?height=100&width=200",
  },
  {
    id: "2",
    title: "Product Manager Resume",
    template: "Modern",
    lastUpdated: "2023-05-28T10:30:00Z",
    thumbnail: "/placeholder.svg?height=100&width=200",
  },
  {
    id: "3",
    title: "Marketing Specialist Resume",
    template: "Creative",
    lastUpdated: "2023-05-25T14:15:00Z",
    thumbnail: "/placeholder.svg?height=100&width=200",
  },
]

export function RecentResumes() {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })
  }

  if (mockResumes.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Recent Resumes</CardTitle>
          <CardDescription>You haven't created any resumes yet.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center py-8">
            <FileText className="h-12 w-12 text-muted-foreground mb-4" />
            <p className="text-sm text-muted-foreground mb-4">Get started by creating your first resume</p>
            <Button asChild>
              <Link href="/dashboard/resumes/new">Create Resume</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {mockResumes.map((resume) => (
        <Card key={resume.id} className="group hover:shadow-md transition-shadow">
          <CardHeader className="pb-3">
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <CardTitle className="text-base">{resume.title}</CardTitle>
                <CardDescription>
                  <Badge variant="secondary" className="text-xs">
                    {resume.template}
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
                    <Link href={`/dashboard/resumes/${resume.id}/edit`}>
                      <Edit className="mr-2 h-4 w-4" />
                      Edit
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF
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
                src={resume.thumbnail || "/placeholder.svg"}
                alt={`${resume.title} preview`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>Updated {formatDate(resume.lastUpdated)}</span>
              <Button asChild size="sm" variant="outline">
                <Link href={`/dashboard/resumes/${resume.id}`}>View</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
