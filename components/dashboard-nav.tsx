"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { FileText, Briefcase, Settings, HelpCircle, LayoutTemplate, CreditCard, User } from "lucide-react"

const navItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="mr-2 h-4 w-4"
      >
        <rect width="7" height="9" x="3" y="3" rx="1"></rect>
        <rect width="7" height="5" x="14" y="3" rx="1"></rect>
        <rect width="7" height="9" x="14" y="12" rx="1"></rect>
        <rect width="7" height="5" x="3" y="16" rx="1"></rect>
      </svg>
    ),
  },
  {
    title: "Resumes",
    href: "/dashboard/resumes",
    icon: <FileText className="mr-2 h-4 w-4" />,
  },
  {
    title: "Portfolios",
    href: "/dashboard/portfolios",
    icon: <Briefcase className="mr-2 h-4 w-4" />,
  },
  {
    title: "Templates",
    href: "/dashboard/templates",
    icon: <LayoutTemplate className="mr-2 h-4 w-4" />,
  },
  {
    title: "Account",
    href: "/dashboard/account",
    icon: <User className="mr-2 h-4 w-4" />,
  },
  {
    title: "Billing",
    href: "/dashboard/billing",
    icon: <CreditCard className="mr-2 h-4 w-4" />,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: <Settings className="mr-2 h-4 w-4" />,
  },
  {
    title: "Help & Support",
    href: "/dashboard/help",
    icon: <HelpCircle className="mr-2 h-4 w-4" />,
  },
]

export function DashboardNav() {
  const pathname = usePathname()

  return (
    <nav className="grid items-start px-4 py-4 text-sm font-medium">
      {navItems.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className={cn(
            "flex items-center rounded-lg px-3 py-2 transition-all hover:bg-accent hover:text-accent-foreground",
            pathname === item.href ? "bg-accent text-accent-foreground" : "text-muted-foreground",
          )}
        >
          {item.icon}
          {item.title}
        </Link>
      ))}
    </nav>
  )
}
