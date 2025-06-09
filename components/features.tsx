"use client"

import React from "react"

import { motion } from "framer-motion"
import { FileText, Palette, Download, Globe, Moon, Sparkles, Smartphone, Shield } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Resume Templates",
      description: "Choose from dozens of professionally designed templates that are ATS-friendly and customizable.",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Portfolio Websites",
      description: "Create a personal portfolio website with custom domain support and responsive design.",
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "AI Content Generation",
      description: "Generate professional content for your resume and portfolio with our AI assistant.",
    },
    {
      icon: <Download className="h-6 w-6" />,
      title: "PDF Export",
      description: "Download your resume as a PDF file with perfect formatting for job applications.",
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "Customizable Themes",
      description: "Personalize your resume and portfolio with custom colors, fonts, and layouts.",
    },
    {
      icon: <Moon className="h-6 w-6" />,
      title: "Dark Mode",
      description: "Switch between light and dark mode for comfortable editing in any environment.",
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Mobile Friendly",
      description: "Edit your resume and portfolio on any device with our responsive interface.",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Privacy & Security",
      description: "Your data is encrypted and never shared with third parties without your consent.",
    },
  ]

  return (
    <section className="py-20 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">Powerful Features</h2>
          <p className="text-muted-foreground">
            Everything you need to create professional resumes and portfolios that get you noticed.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-lg border bg-card p-6 shadow-sm"
            >
              <div className="mb-4 rounded-full bg-primary/10 p-2 w-fit">
                {React.cloneElement(feature.icon, { className: "h-5 w-5 text-primary" })}
              </div>
              <h3 className="mb-2 text-lg font-medium">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
