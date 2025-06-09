"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Briefcase, Download, Eye } from "lucide-react"

export function DashboardStats() {
  // Mock data - in a real app, this would come from an API
  const stats = [
    {
      title: "Total Resumes",
      value: "3",
      icon: <FileText className="h-4 w-4 text-muted-foreground" />,
      change: "+2 from last month",
    },
    {
      title: "Total Portfolios",
      value: "1",
      icon: <Briefcase className="h-4 w-4 text-muted-foreground" />,
      change: "+1 from last month",
    },
    {
      title: "Downloads",
      value: "12",
      icon: <Download className="h-4 w-4 text-muted-foreground" />,
      change: "+5 from last month",
    },
    {
      title: "Portfolio Views",
      value: "48",
      icon: <Eye className="h-4 w-4 text-muted-foreground" />,
      change: "+18 from last month",
    },
  ]

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            {stat.icon}
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground">{stat.change}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
