"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, FileText, Briefcase, Sparkles } from "lucide-react"

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-background/80 py-24 md:py-32">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05]" />
      <div className="container relative z-10 px-4 md:px-6">
        <motion.div
          className="mx-auto flex max-w-5xl flex-col items-center text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={itemVariants}
            className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary"
          >
            Launch your career with AI-powered tools
          </motion.div>
          <motion.h1
            variants={itemVariants}
            className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Create stunning{" "}
            <span className="bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
              resumes & portfolios
            </span>{" "}
            in minutes
          </motion.h1>
          <motion.p variants={itemVariants} className="mb-10 max-w-2xl text-muted-foreground sm:text-xl">
            Leverage the power of AI to build professional resumes and eye-catching portfolios that stand out from the
            crowd. Get hired faster with ResumeAI.
          </motion.p>
          <motion.div variants={itemVariants} className="flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg" className="gap-2">
              <Link href="/signup">
                Get Started <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/templates">View Templates</Link>
            </Button>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="flex flex-col items-center">
              <div className="mb-4 rounded-full bg-primary/10 p-3">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-medium">Professional Resumes</h3>
              <p className="text-center text-sm text-muted-foreground">Choose from dozens of ATS-friendly templates</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-4 rounded-full bg-primary/10 p-3">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-medium">Dynamic Portfolios</h3>
              <p className="text-center text-sm text-muted-foreground">Showcase your work with customizable websites</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-4 rounded-full bg-primary/10 p-3">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-medium">AI-Powered Content</h3>
              <p className="text-center text-sm text-muted-foreground">
                Generate professional content with a single click
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
