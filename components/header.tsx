"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { ModeToggle } from "@/components/mode-toggle"
import { FileText, Briefcase, Sparkles, Menu, Palette, DollarSign, BookOpen } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useAuth } from "@/components/auth-provider"

export function Header() {
  const pathname = usePathname()
  const { user, isLoading } = useAuth()
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-all duration-200",
        isScrolled ? "bg-background/80 backdrop-blur-md border-b" : "bg-transparent",
      )}
    >
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <FileText className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl">ResumeAI</span>
          </Link>
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Features</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <ListItem
                      title="Resume Builder"
                      href="/features/resume-builder"
                      icon={<FileText className="h-4 w-4" />}
                    >
                      Create professional resumes with AI assistance
                    </ListItem>
                    <ListItem
                      title="Portfolio Creator"
                      href="/features/portfolio-creator"
                      icon={<Briefcase className="h-4 w-4" />}
                    >
                      Build stunning portfolio websites
                    </ListItem>
                    <ListItem
                      title="AI Content Generation"
                      href="/features/ai-content"
                      icon={<Sparkles className="h-4 w-4" />}
                    >
                      Generate professional content with AI
                    </ListItem>
                    <ListItem title="Templates" href="/templates" icon={<Palette className="h-4 w-4" />}>
                      Browse our collection of templates
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/pricing" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Pricing</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/blog" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Blog</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex items-center gap-4">
          <ModeToggle />
          <div className="hidden md:flex items-center gap-2">
            {!isLoading && !user ? (
              <>
                <Button variant="ghost" asChild>
                  <Link href="/login">Log in</Link>
                </Button>
                <Button asChild>
                  <Link href="/signup">Sign up</Link>
                </Button>
              </>
            ) : (
              <Button asChild>
                <Link href="/dashboard">Dashboard</Link>
              </Button>
            )}
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 pt-10">
                <Link href="/" className="flex items-center gap-2 font-bold text-lg">
                  <FileText className="h-5 w-5 text-primary" />
                  ResumeAI
                </Link>
                <div className="flex flex-col gap-4">
                  <Link
                    href="/features/resume-builder"
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <FileText className="h-4 w-4" />
                    Resume Builder
                  </Link>
                  <Link
                    href="/features/portfolio-creator"
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Briefcase className="h-4 w-4" />
                    Portfolio Creator
                  </Link>
                  <Link
                    href="/features/ai-content"
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Sparkles className="h-4 w-4" />
                    AI Content
                  </Link>
                  <Link
                    href="/templates"
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Palette className="h-4 w-4" />
                    Templates
                  </Link>
                  <Link
                    href="/pricing"
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <DollarSign className="h-4 w-4" />
                    Pricing
                  </Link>
                  <Link
                    href="/blog"
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <BookOpen className="h-4 w-4" />
                    Blog
                  </Link>
                </div>
                <div className="flex flex-col gap-2 mt-4">
                  {!isLoading && !user ? (
                    <>
                      <Button variant="outline" asChild className="w-full">
                        <Link href="/login">Log in</Link>
                      </Button>
                      <Button asChild className="w-full">
                        <Link href="/signup">Sign up</Link>
                      </Button>
                    </>
                  ) : (
                    <Button asChild className="w-full">
                      <Link href="/dashboard">Dashboard</Link>
                    </Button>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { icon?: React.ReactNode }
>(({ className, title, children, icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="flex items-center gap-2 text-sm font-medium leading-none">
            {icon}
            {title}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
